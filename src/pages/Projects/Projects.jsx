import React from "react";
import styles from "./Projects.module.css";

const projects = [
{
title: "ScreenX – AI-Powered HR Dashboard",
description:
"Developed a modern HR Dashboard for AI-powered resume screening and candidate management. Implemented recruitment analytics, candidate tracking, filtering, pagination, and interactive visualizations to streamline hiring workflows.",
tech: [
"React",
"TypeScript",
"Tailwind CSS",
"Vite",
"React Router",
"Recharts",
],
demo: "#",
github: "https://github.com/bp1363/ScreenX",
featured: true,
},
{
title: "Hotel Booking Platform",
description:
"Built a full-stack hotel booking application with authentication, room management, booking workflows, and secure payment gateway integration using Razorpay.",
tech: [
"React",
"Node.js",
"Express.js",
"MongoDB",
"JWT",
"Razorpay",
],
demo: "https://hotel-rbs-five.vercel.app/",
github: "https://github.com/bp1363/HotelRBS",
},
{
title: "Digital Kabadiwala",
description:
"Developed a waste collection platform connecting users with local collectors, featuring pickup scheduling, collector dashboards, earnings tracking, and responsive interfaces.",
tech: [
"React",
"Node.js",
"MongoDB",
"REST APIs",
],
demo: "https://kabadiwala-main.vercel.app/",
github: "https://github.com/bp1363/kabadibala-frontend",
},
];

const Projects = () => {
return ( <section className={styles.projects} id="projects"> <div className={styles.container}> <div className={styles.sectionHeader}> <span className={styles.badge}>Featured Work</span>

      <h2>Featured Projects</h2>

      <p>
        A selection of projects demonstrating my experience in frontend,
        backend, and full stack development.
      </p>
    </div>

    <div className={styles.projectGrid}>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`${styles.projectCard} ${
            project.featured ? styles.featuredCard : ""
          }`}
        >
          {project.featured && (
            <div className={styles.featuredBadge}>
              Featured Project
            </div>
          )}

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <div className={styles.techStack}>
            {project.tech.map((tech, idx) => (
              <span key={idx} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.links}>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


);
};

export default Projects;
