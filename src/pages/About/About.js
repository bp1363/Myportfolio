import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2>About Me</h2>
        <p>
          I'm a Frontend Developer with a passion for building modern, responsive, and accessible websites using React.js.
          I love turning ideas into real-world applications with clean and efficient code.
        </p>

        <h3>Skills</h3>
        <div className={styles.skillGroups}>
          <div className={styles.skillGroup}>
            <h4>Languages</h4>
            <ul>
              <li>Java</li>
              <li>JavaScript</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className={styles.skillGroup}>
            <h4>Web Development (Intermediate)</h4>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>

          <div className={styles.skillGroup}>
            <h4>Developer Tools</h4>
            <ul>
              <li>VS Code</li>
              <li>Visual Studio</li>
              <li>Eclipse</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>

          <div className={styles.skillGroup}>
            <h4>Frameworks</h4>
            <ul>
              <li>React.js</li>
              <li>Spring Boot</li>
              <li>Hibernate</li>
            </ul>
          </div>

      
        </div>
      </div>
    </section>
  );
};

export default About;
