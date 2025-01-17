// src/components/Header.js
import React from 'react';
import './../style/header.css';

const Header = () => {
    return (
        <header className="header">
          <div className="logo">hexnode</div>
          <button className="trial-button">14 DAY FREE TRIAL</button>
        </header>
      );
};

export default Header;
