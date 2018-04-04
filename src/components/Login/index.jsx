import React from 'react';
import './style.css';

function Login() {
    return(
        <div className="login-form">
            <div className="login-form__header">
                <div className="login-form__title">
                    Task Hero
                </div>
            </div>
            <div className="login-form__footer">
                <button onClick={loginViaTrello}></button>
            </div>
        </div>
    );
}

function loginViaTrello() {

}

export default Login;