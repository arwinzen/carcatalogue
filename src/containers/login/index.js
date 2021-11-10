import React from 'react';
import classes from './login.module.css';
import {Link} from 'react-router-dom';

class Login extends React.Component {
    render(){
        return(
            <div className={classes.login_holder}>
                <h1>Login</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>
                    <Link to="dashboard">Login</Link>
                </button>
            </div>
        );
    }
}

export default Login;