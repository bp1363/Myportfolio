import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import profilePic from "../../assets/bp.png";
import resumePDF from "../../assets/Brajpal.pdf";

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "React.js Developer",
  "Node.js Developer",
];

const Home = () => {
  const [displayedRole, setDisplayedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    if (!deleting && charIndex <= currentRole.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayedRole(currentRole.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex > currentRole.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex >= 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayedRole(currentRole.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 45);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section id="home" className={styles.home} aria-label="Home section">
      {/* Background particles */}
      <div className={styles.bgOrb1} aria-hidden="true" />
      <div className={styles.bgOrb2} aria-hidden="true" />

      <div className={styles.container}>
        {/* LEFT — Profile */}
        <div className={styles.photoSide}>
          <div className={styles.glowRing} aria-hidden="true" />
          <div className={styles.profileWrapper}>
            <img
              src={profilePic}
              alt="Braj Pal Singh"
              className={styles.profilePic}
            />
          </div>

          {/* Status badge */}
          <div className={styles.statusBadge}>
            <span className={styles.statusDot} />
            Open to Work
            Full Stack • Frontend • Backend
          </div>
        </div>

        {/* RIGHT — Content */}
        <div className={styles.contentSide}>
          <p className={styles.greeting}>FULL STACK DEVELOPER</p>

          <h1 className={styles.name}>
            Braj Pal <span className={styles.nameAccent}>Singh</span>
          </h1>

          <div className={styles.roleRow}>
            <span className={styles.roleText}>{displayedRole}</span>
            <span className={styles.cursor} aria-hidden="true">
              |
            </span>
          </div>

          <p className={styles.bio}>
            Full Stack Developer with 1.5+ years of experience building
            responsive web applications using React.js, Node.js, Express.js, and
            MongoDB. Experienced in frontend development, REST API integration,
            and AI/LLM-based projects. Passionate about delivering scalable
            solutions and exceptional user experiences.
          </p>

          {/* CTAs */}
          <div className={styles.actions}>
            <a href={resumePDF} className={styles.btnPrimary} download>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com/in/brajpal-singh-2098a8157/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnGhost}
              aria-label="LinkedIn Profile"
            >
              Let's Connect
            </a>
          </div>

          {/* Social icons */}
          <div className={styles.socials}>
            <a
              href="https://www.linkedin.com/in/brajpal-singh-2098a8157/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/bp1363"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <h3>1.5+ Years</h3>
              <p>Years Experience</p>
            </div>

            <div className={styles.statCard}>
              <h3>10+</h3>
              <p>Projects</p>
            </div>

            <div className={styles.statCard}>
              <h3>React • Node</h3>
              <p>Core Expertise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
