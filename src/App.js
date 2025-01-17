// src/App.js
import React from 'react';
import Header from './app/components/header';
import Hero from './app/components/hero';
import Features from './app/components/features';
import Footer from './app/components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
