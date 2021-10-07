import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <>
            <div className="header">
                <h1>Building a Car Showroom</h1>
                <h4>Picking up the best cars around the world.</h4>
                <h2>Budget: 80 Million</h2>
            </div>
            
            <nav className="nav-bar">
                <a href="/Home">Home</a>
                <a href="/moreCars">More Cars</a>
                <a href="/about">About</a>
                <a href="/ContactUs">Contact Us</a>
            </nav>
        </>
    );
};

export default Header;