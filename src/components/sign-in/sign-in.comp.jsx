import React, { Component } from "react";
import './sign-in.style.scss'
import FormInput from "./form-input/form-input.comp";
import CustomButton from "../custom-button/custom-button.comp";
import {signInWithGoogle} from '../../firebase/firebase.utils.js'

class SignIn extends Component { 
    constructor(props){
        super(props)

            this.state = { 
                email: '',
                password:''
            };      
    }

    handleSubmit = event => { 
        event.preventDefault();

        this.setState({email:'', password:''});
    };

    handleChange = event =>{  
        const {value, name} = event.target;

        this.setState({[name]: value});
    };


    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput
                    name='email'
                    type='email' 
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label='email'
                     required /> 

                    <FormInput
                    name='password'
                    type='password' 
                    value={this.state.password}
                    label='password'
                    handleChange={this.handleChange} required />
                
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                        </CustomButton>
                    </div>

                </form>
            </div>
        ); 
    }
}
export default SignIn;