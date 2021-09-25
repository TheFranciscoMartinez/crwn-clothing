import React from "react";
import './login.style.scss'

import SignIn from "../../components/sign-in/sign-in.comp";
import SignUp from "../../components/sing-up/sign-up.comp";

const LoginPage = () => (
    <div className='login-page' >
        <SignIn />
        <SignUp />
    </div>
);
export default LoginPage;