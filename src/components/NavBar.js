import React from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={`${process.env.PUBLIC_URL}/Trakor.svg`} alt="Trakor Logo" className="brand-logo" />
            </div>
            <div className="navbar-links">
                <a href="#product">Product</a>
                <a href="#solutions">Solutions</a>
                <a href="#documentation">Documentation</a>
                <a href="#pricing">Pricing</a>
                <a href="#login">Log In</a>
                <button className="navbar-button">Request more info</button>
            </div>
        </nav>
    );
};

export default NavBar;
