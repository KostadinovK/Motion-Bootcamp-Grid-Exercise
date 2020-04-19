import React from 'react';

import './Header.css';

function Header() {
    return(
        <header className="site-header">
        <div className="logo">
            <span>Grid</span>
        </div>
        <nav>
            <ul>
                <li><a href="/">Register</a></li>
                <li><a href="/">Login</a></li>
                <li><a href="/">Logout</a></li>
                <li><a href="/">Add Department</a></li>
                <li><a href="/">Add Employee</a></li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;