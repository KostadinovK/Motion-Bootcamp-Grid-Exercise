import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../../shared/styles/forms.css';

import { UserContext } from '../App/App';

import userService from '../../services/userService';

function Register() {

    const history = useHistory();
    let {isLoggedIn} = useContext(UserContext);

    let [form, setForm] = useState({username: '', pass: '', rePass: ''});
    let [error, setError] = useState(null);

    if(isLoggedIn){
        history.push('/');
        return null;
    }

    const onInputChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;

        setForm((form) => {
            return { ...form, [name]: value } ;
        });
    };

    const register = async (e) => {
        e.preventDefault();

        const {username, pass, rePass} = form;
        
        if(username.length < 3){
            setError('Username length must be atleast 3 symbols!');
            return;
        }

        if(pass !== rePass){
            setError('Passwords must match!');
            return;
        }

        if(pass.length < 3){
            setError('Password length must be atleast 3 symbols!');
            return;
        }

        let data = await userService.register(username, pass);

        if(data.error){
            setError(data.error);
            return;
        }
        
        history.push('/login');
    };

    return (

        <form className="register-form" onSubmit={(e) => register(e)}>
            <h2>Register</h2>
            {error ? <p className='error'>{error}</p> : null}
            <p className="username">
                <label htmlFor="username"><i className="fas fa-user"></i></label>
                <input type="text" name="username" id='username' placeholder="Username" onChange={(e) => onInputChange(e)}/>
            </p>
            <p className="password">
                <label htmlFor="pass"><i className="fas fa-key"></i></label>
                <input type="password" name="password" id='pass' placeholder="Password" onChange={(e) => onInputChange(e)}/>
            </p>
            <p className="confirm-password">
                <label htmlFor="rePass"><i className="fas fa-key"></i></label>
                <input type="password" name="confirmPassword" id='rePass' placeholder="Confirm Password" onChange={(e) => onInputChange(e)}/>
            </p>
            <input className='submitButton' type="submit" value="Register" />
        </form>
    );
}

export default Register;