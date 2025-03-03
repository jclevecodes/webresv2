import React from 'react';
import useInView from '../../hooks/useInView';
import './Hero.css';

const Hero = () => {
  const ref = useInView();
  return (
    <section id="home" className="hero fade-up" ref={ref}>
      <div className="hero-content">
        <h1>Joshua Cleveland</h1>
        <p>Coding the future one line at a time.</p>
      </div>
    </section>
  );
};

export default Hero;
