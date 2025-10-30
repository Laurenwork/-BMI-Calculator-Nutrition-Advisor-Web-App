import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.brand}>Kalkulator BMI & Nutrisi</span>
        <nav className={styles.links} aria-label="Kontak">
          <a className={styles.link} href="https://www.linkedin.com/in/laurensius-alessandro/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className={styles.icon} /> LinkedIn
          </a>
          <a className={styles.link} href="https://instagram.com/laurenaldr" target="_blank" rel="noreferrer" aria-label="Instagram">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className={styles.icon} /> @laurenaldr
          </a>
          <a className={styles.link} href="mailto:laurenalsdr@gmail.com" aria-label="Email">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className={styles.icon} /> laurenalsdr@gmail.com
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
