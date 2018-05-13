import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class Login extends Component {
    constructor() {
        super();
    }

    render() {
        return (
          <form onSubmit={this.login}>
              <TextField id='email' type='email' placeholder='email'/>
              <TextField id='password' type='password' placeholder='password'/>
              <button>Sign Up!</button>
              <input type='submit' value='Sign In'/>
          </form>
        );
    }

    login = () => {
        email = document.getElementById('email').value;
        password = document.getElementById('password').value;
    }

}