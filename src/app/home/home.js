// src/components/Home.js
import React from 'react';
import './home.css';
import demoImg from './../../assets/girl_demo.png'

const Home = () => {
  return (
    <div >
      <div className="header">
      <nav className="navbar ">
        <div className="logo">hexnode</div>
        <ul className="nav-links">
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#customers">Customers</a></li>
          <li><a href="#partners">Partners</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        {/* <div className="nav-actions">
          <a href="#demo">Demo</a>
          <a href="#contact-sales">Contact Sales</a>
          <span>+1-833-439-6633</span>
        </div> */}
      </nav>
      </div>
      <div className="hero-section">
      <div className="hero-content">
        <div className="text-content">
          <h1>The Standard for Unified Endpoint Management</h1>
          <p>Manage devices of varying form factors and operating systems with one solution</p>
          <div className="cta-buttons">
            <button className="try-button">TRY FOR FREE</button>
            <button className="demo-button">REQUEST DEMO</button>
          </div>
        </div>
        <div className="image-content">
          <img
            src={demoImg}
            alt="Hero Section"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
