// src/App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Hero from './components/Hero/Hero.js';
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js';
import Contact from './components/Contact/Contact.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
