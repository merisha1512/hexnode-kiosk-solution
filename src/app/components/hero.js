// src/components/Hero.js
import React from 'react';
import './../style/hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Welcome to Hexnode Kiosk Solution</h1>
      <p>Your all-in-one solution for device management and kiosk modes.</p>
      <button className="cta-button">Get Started</button>
    </section>
  );
};

export default Hero;
