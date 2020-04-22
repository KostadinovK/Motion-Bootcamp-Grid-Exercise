import React, { useContext, useState } from 'react';
import {useHistory} from 'react-router-dom';

import '../../shared/styles/forms.css';

import {UserContext} from '../App/App';
import userService from '../../services/userService';

function Login() {

    const history = useHistory();
    let {isLoggedIn} = useContext(UserContext);

    let [form, setForm] = useState({username: '', pass: ''});
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

    const validate = (username, pass) => {
        if(username.length < 3){
            return 'Username length must be atleast 3 symbols!';
        }

        if(pass.length < 3){
           return 'Password length must be atleast 3 symbols!';
        }

        return null;
    }

    const login = async (e) => {
        e.preventDefault();

        const {username, pass} = form;
        
        const error = validate(username, pass);

        if(error){
            setError(error);
            return;
        }
        
        let data = await userService.login(username, pass);
        
        if(data.error){
            setError(data.error);
            return;
        }
     
        history.push('/');
        //add cookie change context variable
    };

    return (

        <form className="login-form" onSubmit={(e) => login(e)}>
            <h2>Login</h2>
            {error ? <p className='error'>{error}</p> : null}
            <p className="username">
                <label htmlFor="username"><i className="fas fa-user"></i></label>
                <input type="text" name="username" id="username" placeholder="Username" onChange={(e) => onInputChange(e)} />
            </p>
            <p>
                <label htmlFor="pass"><i className="fas fa-key"></i></label>
                <input type="password" name="password" id="pass" placeholder="Password" onChange={(e) => onInputChange(e)} />
            </p>
            <input className='submitButton' type="submit" value="Login" />
        </form>
    );
}

export default Login;