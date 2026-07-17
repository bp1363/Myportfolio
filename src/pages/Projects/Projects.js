import React from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React and CSS Modules to showcase my skills and projects.',
    link: 'https://yourportfolio.com',
  },
  {
    title: 'Digital Kabadiwala',
    description: 'A responsive React-based web app that connects users with local Kabadiwalas for streamlined household waste pickup and resale Designed an interactive dashboard for waste collectors to track earnings, performance, and daily pickups.Ensured a seamless experience with full responsiveness and cross-browser compatibility.',
    link: 'https://yourecommerce.com',
  },
  {
    title: 'Airline Reservation System',
    description: 'Designed and developed an end-to-end airline reservation system to handle flight booking, customer management, and ticket reservations. Implemented a user-friendly graphical user interface (GUI) using Java Swing for efficient navigation and booking processes.',
    link: 'https://yourblog.com',
  },
];

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2>My Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
