import React from 'react';

import '../../shared/styles/forms.css';

function Login() {
    return (

        <form className="login-form">
            <h2>Login</h2>
            <p className="username">
                <label htmlFor="username"><i class="fas fa-user"></i></label>
                <input type="text" name="username" id="username" placeholder="Username" />
            </p>
            <p>
                <label htmlFor="pass"><i class="fas fa-key"></i></label>
                <input type="password" name="password" id="pass" placeholder="Password" />
            </p>
            <input className='submitButton' type="submit" value="Login" />
        </form>
    );
}

export default Login;