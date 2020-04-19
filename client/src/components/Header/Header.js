import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import Navigation from '../Navigation/Navigation';

function Header() {
    return(
        <header className="site-header">
        <div>
            <Link to='/' className="logo">Grid</Link>
        </div>
        <Navigation/>
    </header>
    );
}

export default Header;