// src/components/Hero.jsx
import React from 'react';
import useInView from '../../hooks/useInView';
import './Hero.css';
import profilePic from '../../images/profilev2.png';

const Hero = () => {
  const ref = useInView();

  return (
    <section id="home" className="hero fade-up" ref={ref}>
      <div className="hero-container">
        <div className="hero-text">
          <h1>Hello, I'm</h1>
          <h1>Joshua Cleveland</h1>
          <p>Coding the future one line at a time.</p>
        </div>
        <div className="hero-image">
          <img src={profilePic} alt="Professional Headshot" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
