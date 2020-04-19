import React from 'react';

import '../../shared/styles/forms.css';

function Register() {
    return (

        <form className="register-form">
            <h2>Register</h2>
            <p className="username">
                <label for="username"><i class="fas fa-user"></i></label>
                <input type="text" name="username" placeholder="Username" />
            </p>
            <p className="password">
                <label for="password"><i class="fas fa-key"></i></label>
                <input type="password" name="password" placeholder="Password" />
            </p>
            <p className="confirm-password">
                <label for="confirmPassword"><i class="fas fa-key"></i></label>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" />
            </p>
            <input className='submitButton' type="submit" value="Register" />
        </form>
    );
}

export default Register;