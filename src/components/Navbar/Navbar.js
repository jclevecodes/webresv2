import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-header">
      <nav className="navbar">
        <div className="logo">JC</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
