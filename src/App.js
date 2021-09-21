import React from 'react';
import { Component } from "react";
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.comp';
import shopPage from './pages/shop/shop.comp';
import Header from './components/header/header.comp';
import loginPage from '../src/pages/login page/login.comp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
  

class App extends Component {
  constructor(){
    super()

    this.state = { 
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){ 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> { 
      if (userAuth){  
        const userRef = await createUserProfileDocument(userAuth); 

          userRef.onSnapshot(snapshot =>{
            this.setState(
                {
                  currentUser:{
                    id: snapshot.id,
                    ...snapshot.data()
                }
            }
            );
            console.log(this.state);
          });
      }
      this.setState({currentUser: userAuth});
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render() { 
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={shopPage}/>
            <Route path='/signin' component={loginPage}/>
          </Switch>
      </div>
    );
  }
 }   
export default App;
