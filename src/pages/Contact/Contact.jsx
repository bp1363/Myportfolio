import React from 'react';
import styles from './Contact.module.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

const Contact = () => {
return ( <section className={styles.contact} id="contact"> <div className={styles.container}> <div className={styles.sectionHeader}> <span className={styles.badge}>Get In Touch</span>

      <h2>Let's Work Together</h2>

      <p>
        I'm currently open to Full Stack, Frontend, and Backend
        Developer opportunities. Feel free to reach out if you'd
        like to discuss a project, collaboration, or job opportunity.
      </p>
    </div>

    <div className={styles.contactGrid}>
      <a
        href="mailto:yourmail@gmail.com"
        className={styles.contactCard}
      >
        <FaEnvelope />
        <h3>Email</h3>
        <span>brajpal1363@gmail.com</span>
      </a>

      <a
        href="tel:+91XXXXXXXXXX"
        className={styles.contactCard}
      >
        <FaPhone />
        <h3>Phone</h3>
        <span>+91 7017237368</span>
      </a>

      <a
        href="https://www.linkedin.com/in/brajpal-singh-2098a8157/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactCard}
      >
        <FaLinkedin />
        <h3>LinkedIn</h3>
        <span>Connect with me</span>
      </a>

      <a
        href="https://github.com/bp1363"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactCard}
      >
        <FaGithub />
        <h3>GitHub</h3>
        <span>View Projects</span>
      </a>
    </div>

    
  </div>
</section>


);
};

export default Contact;
