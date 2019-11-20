import React from 'react';
import './Navbar.css';

function Navbar(){
    return(
        <div className='Navbar-container'>
            <div className='container Navbar'>
                {/* Logo */}
                <div className='Navbar-logo'>
                    <p><i className="fab fa-phoenix-squadron"></i>Fenix</p>
                </div>

                {/* Menu */}
                <nav className='Navbar-menu'>
                    <ul>
                        <li><a href='/'>services</a></li>
                        <li><a href='/'>portfolio</a></li>
                        <li><a href='/'>about</a></li>
                        <li><a href='/'>team</a></li>
                        <li><a href='/'>contact</a></li>
                    </ul>
                </nav>
            </div>    
        </div>
    )
}

export default Navbar;