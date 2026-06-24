import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
return ( <footer className={styles.footer}> <div className={styles.container}> <h2 className={styles.logo}>
Thanks for Visiting</h2>


    <p className={styles.tagline}>
      Full Stack Developer | React.js | Node.js | MongoDB
    </p>

    <div className={styles.socials}>
      <a
        href="https://github.com/bp1363"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/brajpal-singh-2098a8157/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>

      <a href="mailto:brajpal1363@gmail.com">
        Email
      </a>
    </div>

    <div className={styles.divider}></div>

    <p className={styles.copy}>
      © 2026 Braj Pal Singh. All Rights Reserved.
    </p>
  </div>
</footer>


);
};

export default Footer;
