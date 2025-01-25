import React, { useState } from "react";
import "./../style/hero.css";
import deviceImage from "../../assets/home-page.png"; 
import idcLogo from "../../assets/idc-logo-White.png";
import gartnerLogo from "../../assets/gartner-logo-white-.png";
import forresterLogo from "../../assets/forrester_logo_white.png";
import { useNavigate } from "react-router-dom";
import TabSection from './tab-section';
import Content from './content';
import PlatformsSupported from './platform-support';
import SignUpSection from './signup-section';
import Footer from './footer';

const HeroSection = () => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      navigate("/signup", { state: { email } });
    }
  };

  return (
    <div>
   <section className="hero-section">
      <div className="hero-text">
        <h1>Turn your devices into kiosks in a few minutes with Hexnode UEM</h1>
        <div className="input-container">
          <input
            type="email"
            placeholder="Your Work Email"
            className="email-input"
            value={email}
            onChange={handleEmailChange}
          />
          <button className="cta-button" onClick={handleSubmit}>GET STARTED NOW!</button>
        </div>
        {error && <p className="error-message">{error}</p>} 

      </div>
      <div className="hero-image">
        <img src={deviceImage} alt="Devices" />
      </div>
    </section>
     <div class="recognition-section">
     <div class="recognition-card">
       <img src={idcLogo} alt="IDC Logo" class="recognition-logo" />
       <p>
         Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.
       </p>
     </div>
     <div class="recognition-card">
       <img src={gartnerLogo} alt="Gartner Logo" class="recognition-logo" />
       <p>
         Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022.
       </p>
     </div>
     <div class="recognition-card">
       <img src={forresterLogo} alt="Forrester Logo" class="recognition-logo" />
       <p>
         Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.
       </p>
     </div>
   </div>
   <TabSection />
      <Content />
      <PlatformsSupported />
      <SignUpSection />
      <Footer />
   </div>
  );
};

export default HeroSection;
