import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Brajpal Singh</div>

      <ul className={styles.links}>
        <li><button onClick={() => scrollToSection('home')}>Home</button></li>
        <li><button onClick={() => scrollToSection('about')}>About</button></li>
        <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
        <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
      </ul>

      <div
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <div style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
        <div style={{ opacity: isOpen ? 0 : 1 }} />
        <div style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
      </div>

      {isOpen && (
        <div className={styles.mobileNav}>
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
