import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

import {UserContext} from '../App/App';

function Navigation() {

    const { isLoggedIn } = useContext(UserContext);
    
    return(
        <nav>
        <ul>
            {!isLoggedIn ? (<li><Link to='/register'>Register</Link></li>) : ''}
            {!isLoggedIn ? (<li><Link to='/login'>Login</Link></li>) : ''}
            {isLoggedIn ? (<li><Link to='/logout'>Logout</Link></li>) : ''}
            {isLoggedIn ? (<li><Link to='/department'>Add Department</Link></li>) : ''}
            {isLoggedIn ? (<li><Link to='/employee'>Add Employee</Link></li>) : ''}
        </ul>
        </nav>
    );
}

export default Navigation;