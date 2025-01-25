// src/components/Footer.js
import React from 'react';
import './../style/footer.css';

const Footer = () => {
  return (    
      <footer className="footer">
        <div className="footer-content">
          <p>
            <a href="#">Terms of Use</a> - <a href="#">Privacy</a> - <a href="#">Cookies</a>
          </p>
          <p>Copyright © 2024 Mitsogo Inc. All Rights Reserved.</p>
        </div>
      </footer>
  );
};

export default Footer;
