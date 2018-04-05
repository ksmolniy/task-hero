import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import './style.css';

class Login extends Component {
    constructor(props){
        super(props); 

        let hash = props.location.hash;
        let baseUrl = 'http://localhost:3000/';
        let nameApp = 'Task Hero';
        
        this.trelloUrl = `https://trello.com/1/authorize?expiration=1day&name=${nameApp}&scope=read&response_type=token&key=b4228bf7a7fae3dd244e6f74e8fb9816&return_url=${baseUrl}auth/`;
        this.logined = false;

        this.token = hash ? hash.split('=')[1] : "";

        if (this.token) {
            this.saveTokenToLocalStorage();
        }
    }
    
    saveTokenToLocalStorage() {
        localStorage.setItem('token',this.token);
    }

    render() {

        if (this.token) {
            return <Redirect to="/config" />
        }

        return (

            <div className="login-form">
                <div className="login-form__header">
                    <div className="login-form__title">
                        Project Undefined
                    </div>
                </div>
                <div className="login-form__body">
                    <a href={this.trelloUrl} > Login via Trello </a>
                </div>
            </div>
        );
    }
}



export default Login;