import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>About Me</span>
          <h2>Building Modern Web Experiences</h2>
        </div>

        <div className={styles.aboutContent}>
          <p>
            I'm a Full Stack Developer with 1.5+ years of experience building
            responsive web applications and scalable backend solutions using
            React.js, Node.js, Express.js, and MongoDB.
          </p>

          <p>
            My experience spans frontend development, REST API integration,
            authentication systems, payment gateway integration, and AI/LLM-based
            projects. I enjoy solving real-world problems through clean code,
            intuitive user experiences, and efficient system design.
          </p>

          <p>
            Currently, I am focused on growing as a Full Stack Developer while
            continuously improving my skills in modern JavaScript ecosystems,
            cloud deployment, and scalable application architecture.
          </p>
        </div>

        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <h3>Frontend</h3>
            <div className={styles.skills}>
              <span>React.js</span>
              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Tailwind CSS</span>
              <span>Responsive Design</span>
            </div>
          </div>

          <div className={styles.skillCard}>
            <h3>Backend</h3>
            <div className={styles.skills}>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST APIs</span>
              <span>JWT Auth</span>
              <span>Firebase</span>
            </div>
          </div>

          <div className={styles.skillCard}>
            <h3>Database</h3>
            <div className={styles.skills}>
              <span>MongoDB</span>
              <span>Mongoose</span>
              <span>MySQL</span>
              <span>SQL</span>
            </div>
          </div>

          <div className={styles.skillCard}>
            <h3>Tools & Cloud</h3>
            <div className={styles.skills}>
              <span>Git</span>
              <span>GitHub</span>
              <span>Postman</span>
              <span>AWS EC2</span>
              <span>Vercel</span>
              <span>Render</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;