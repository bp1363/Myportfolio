import React from 'react';
import styles from './Home.module.css';
import profilePic from '../../assets/bp.png';
import resumePDF from '../../assets/Brajpal.pdf'; // ✅ PDF import

const Home = () => {
  return (
    <section className={styles.home} aria-label="Home section">
      <div className={styles.content}>

        {/* Profile Picture */}
        <div className={styles.profilePicContainer}>
          <img
            src={profilePic}
            alt="Braj Pal Singh"
            className={styles.profilePic}
          />
        </div>

        {/* Intro Heading */}
        <h1>Hello, I'm <span>Braj Pal Singh</span></h1>

        {/* Description */}
        <p>
          I'm a <strong>Full Stack Developer</strong> passionate about building scalable web applications.
          I work with modern technologies like <strong>React.js</strong> for the frontend and <strong>Node.js</strong> for the backend.
        </p>

        {/* Resume Download */}
        <div className={styles.ctaContainer}>
          <a href={resumePDF} className={styles.cta} download>
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className={styles.socialLinks}>
          <p>Connect with me on:</p>
          <a
            href="https://www.linkedin.com/in/brajpal-singh-2098a8157/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/bp1363"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="GitHub Profile"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
