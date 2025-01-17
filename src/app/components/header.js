// src/components/Header.js
import React from 'react';
import './../style/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Hexnode Kiosk</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
