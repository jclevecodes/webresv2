import React from 'react';
import useInView from '../../hooks/useInView';
import './Projects.css';

const Projects = () => {
  const ref = useInView();
  return (
    <section id="projects" className="projects-section fade-left" ref={ref}>
      <div className="container">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card big">
            <h3>Project 1</h3>
            <p>Details</p>
          </div>

          <div className="project-card">
            <h3>Project 2</h3>
            <p>Details</p>
          </div>

          <div className="project-card">
            <h3>Project 3</h3>
            <p>Details</p>
          </div>

          <div className="project-card big">
            <h3>Featured Project 2</h3>
            <p>Details</p>
          </div>

          <div className="project-card">
            <h3>Project 4</h3>
            <p>Details</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
