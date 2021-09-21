import React from 'react';
import { Component } from "react";

import FormInput from '../sign-in/form-input/form-input.comp'
import CustomButton from '../custom-button/custom-button.comp'
import {auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import firebase from 'firebase/compat/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




import './sign-up.style.scss'


class SignUp extends Component { 
    constructor(props){
        super(props)

        this.state = { 
            displayName: '',
            email:'',
            password:'',
            confirmedPassword: ''
        };
    }

    handleSubmit = async event => { 
        event.preventDefault();
        
        const{displayName, email, password, confirmedPassword} = this.state;

        if(password!== confirmedPassword){
          alert('passwords dont match');
          return;
        }

        try{
            const {user} = await createUserWithEmailAndPassword(auth, email, password);
            createUserProfileDocument(user, {displayName}); 

            this.setState = ({ 
                displayName: '',
                email:'',
                password:'',
                confirmedPassword: ''
                });            

        } catch(error){ 
            console.error(error);
        } 
    }; 

    handleChange = event =>{
        const {name, value}= event.target; 

        this.setState({[name]: value});

    };

    render(){
        const{displayName, email, password, confirmedPassword} = this.state;

        return(
            <div className='sign-up'>
            <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            
            <form className="sign-up-form" onSubmit={this.handleSubmit}>

            <FormInput
                type='text'
                name='displayName'
                value={displayName}
                onChange={this.handleChange}
                label="Display Name"
                required
                />
                <FormInput
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                label="email"
                required
                />
                <FormInput
                type='password'
                name='password'
                value={password}
                onChange={this.handleChange}
                label="password"
                required
                />
                <FormInput
                type='password'
                name='confirmedPassword'
                value={confirmedPassword}
                onChange={this.handleChange}
                label="confirmed password"
                required
                />

                <div>
                    <CustomButton type='submit'> SIGN UP</CustomButton>
                </div>
            </form>
        </div>
        );
    }
}
export default SignUp;