// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './app/home/home';
import Header from './app/components/header';
import Footer from './app/components/footer';
import SignUpSection from './app/components/signup-section';
import PlatformsSupported from './app/components/platform-support';
import TabSection from './app/components/tab-section';
import Hero from './app/components/hero';
import Content from './app/components/content';
import SignUpForm from './app/components/signup/signupForm';

function App() {
  const location = useLocation(); // Get current URL location

  return (
    <div className="App">
      {/* Conditionally render headers based on the current route */}
      {location.pathname === '/home' ? <Home /> : <Header />}

      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<SignUpForm />} />
        {/* <Route path="/home" element={<Home />} /> */}
        {/* Add other routes as needed */}
      </Routes>

      {/* Other sections */}
    </div>
  );
}

export default App;