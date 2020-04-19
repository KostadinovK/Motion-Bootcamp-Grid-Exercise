import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

function Navigation() {
    return(
        <nav>
        <ul>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/logout'>Logout</Link></li>
            <li><Link to='/department'>Add Department</Link></li>
            <li><Link to='/employee'>Add Employee</Link></li>
        </ul>
        </nav>
    );
}

export default Navigation;