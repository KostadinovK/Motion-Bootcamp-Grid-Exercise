import React from 'react';

import './Header.css';

import Navigation from '../Navigation/Navigation';

function Header() {
    return(
        <header className="site-header">
        <div className="logo">
            <span>Grid</span>
        </div>
        <Navigation/>
    </header>
    );
}

export default Header;