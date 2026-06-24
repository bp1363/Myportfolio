import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import resumePDF from "../../assets/Brajpal.pdf";
import logo from "../../assets/logo.png";
const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  /* ── Shrink navbar on scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close mobile menu on resize to desktop ── */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── Close on Escape ── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const offset = 80;
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      setActive(id);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          className={styles.logo}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Go to Home"
        >
          <img src={logo} alt="Braj Pal Singh Logo" />
        </button>

        {/* Desktop links */}
        <ul className={styles.links} role="list">
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id}>
              <button
                className={`${styles.navBtn} ${
                  active === id ? styles.navBtnActive : ""
                }`}
                onClick={() => scrollToSection(id)}
                aria-current={active === id ? "page" : undefined}
              >
                {label}
                <span className={styles.underline} aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>

        {/* Hire me CTA — desktop only */}
        <a href={resumePDF} download className={styles.hireCta}>
          Resume
        </a>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${
            isOpen ? styles.hamburgerOpen : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ""}`}
        aria-hidden={!isOpen}
      >
        <ul role="list" className={styles.mobileLinks}>
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id}>
              <button
                className={`${styles.mobileNavBtn} ${
                  active === id ? styles.mobileNavBtnActive : ""
                }`}
                onClick={() => scrollToSection(id)}
                tabIndex={isOpen ? 0 : -1}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href={resumePDF}
          download
          className={styles.mobileHireCta}
          tabIndex={isOpen ? 0 : -1}
        >
          Resume
        </a>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
