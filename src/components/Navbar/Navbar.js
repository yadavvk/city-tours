import React from 'react';
import logo from '../../logo.png';
import './Navbar.scss'; 

const Navbar = () => {
    return(
        <nav className="navbar">
            <img src={logo} alt="City Tours" />
            <ul className="nav-links">
                <li>
                    <a href="#" class="nav-link">Home</a>
                </li>
                <li>
                    <a href="#" class="nav-link">About</a>
                </li>
                <li>
                    <a href="#" class="nav-link">Tours</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;