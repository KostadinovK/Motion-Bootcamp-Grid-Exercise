import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import '../../shared/styles/forms.css';

import { UserContext } from '../App/App';

function Register() {

    const history = useHistory();
    let {isLoggedIn} = useContext(UserContext);

    if(isLoggedIn){
        history.push('/');
        return null;
    }

    return (

        <form className="register-form">
            <h2>Register</h2>
            <p className="username">
                <label htmlFor="username"><i class="fas fa-user"></i></label>
                <input type="text" name="username" id='username' placeholder="Username" />
            </p>
            <p className="password">
                <label htmlFor="pass"><i class="fas fa-key"></i></label>
                <input type="password" name="password" id='pass' placeholder="Password" />
            </p>
            <p className="confirm-password">
                <label htmlFor="rePass"><i class="fas fa-key"></i></label>
                <input type="password" name="confirmPassword" id='rePass' placeholder="Confirm Password" />
            </p>
            <input className='submitButton' type="submit" value="Register" />
        </form>
    );
}

export default Register;