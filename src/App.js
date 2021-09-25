import React from 'react';
import { Component } from "react";
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.comp';
import shopPage from './pages/shop/shop.comp';
import Header from './components/header/header.comp';
import loginPage from '../src/pages/login page/login.comp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from "react-redux";
import { setCurrentUser } from './redux/user/user.actions';  




class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount(){ 
    const {setCurrentUser} = this.props;


    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> { 
      if (userAuth){  
        const userRef = await createUserProfileDocument(userAuth); 

          userRef.onSnapshot(snapshot =>{
            setCurrentUser(
                {
                  currentUser:{
                    id: snapshot.id,
                    ...snapshot.data()
                }
            });
          });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render() { 
    return (
      <div>
        <Header />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={shopPage}/>
            <Route path='/signin' component={loginPage}/>
          </Switch>
      </div>
    );
  }
 }   

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps) (App);
