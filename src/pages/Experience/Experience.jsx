import React from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section className={styles.experience} id="experience">
      {" "}
      <div className={styles.container}>
        {" "}
        <div className={styles.sectionHeader}>
          {" "}
          <span className={styles.badge}>Experience</span>{" "}
          <h2>Professional Journey</h2>{" "}
          <p>
            My experience spans Full Stack Development, Frontend Engineering,
            and AI/LLM-based projects.{" "}
          </p>{" "}
        </div>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>

            <div className={styles.timelineContent}>
              <span className={styles.date}>Dec 2025 – May 2026</span>

              <h3>Analyst – AI/LLM Practice</h3>

              <h4>Innodata India Pvt. Ltd.</h4>

              <p>Evaluated AI/LLM model responses</p>
              <p>Performed quality assurance reviews</p>
              <p>Worked on large-scale annotation projects</p>
              <p>Improved output accuracy through guideline-based validation</p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>

            <div className={styles.timelineContent}>
              <span className={styles.date}>Freelance Project</span>

              <h3>Full Stack Developer</h3>

              <h4>ScreenX – AI Powered HR Dashboard</h4>

              <p>Built HR analytics dashboard</p>
              <p> Resume screening management</p>
              <p> Candidate tracking & filtering</p>
              <p>React + TypeScript + Tailwind CSS</p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>

            <div className={styles.timelineContent}>
              <span className={styles.date}>Internship</span>

              <h3>Frontend Developer Intern</h3>

              <h4>React.js Development</h4>

              <p>
                Built responsive user interfaces using React.js, integrated REST
                APIs, optimized application performance, and collaborated with
                development teams to deliver production-ready web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
