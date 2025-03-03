import React from 'react';
import useInView from '../../hooks/useInView';

const About = () => {
  const ref = useInView();
  return (
    <section id="about" className="about-section fade-right" ref={ref}>
      <div className="container">
        <h2>About Me</h2>
      </div>
    </section>
  );
};

export default About;