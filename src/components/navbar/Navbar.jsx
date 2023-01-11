import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='port__navbar'>
        <div className='port__navbar-links'>
            <div className='port__navbar-links_logo'>
                <p>SaulDesign</p>
            </div>
            <div className='port__navbar-links_container'>
                <p><a href="#home">Home</a></p>
                <p><a href="#about">About&nbsp;Me</a></p>
                <p><a href="#contact">Contact</a></p>
            </div>
        </div>
    </div>
  )
}

export default Navbar