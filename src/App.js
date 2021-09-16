import React from 'react';
import { Component } from "react";
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.comp';
import shopPage from './pages/shop/shop.comp';
import Header from './components/header/header.comp';
import loginPage from '../src/pages/login page/login.comp';
import { auth } from './firebase/firebase.utils';
  


class App extends Component {
  constructor(){
    super()

    this.state = { 
      currentUser: ''
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){ 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=> { 
      this.setState({currentUser: user}); 

      console.log(user);
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
