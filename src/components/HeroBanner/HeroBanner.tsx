import React from "react";
import styles from "./HeroBanner.module.css";

const HeroBanner: React.FC = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.titleMain}>Kalkulator BMI</span>
          <span className={styles.titleSub}>Olahraga & Nutrisi</span>
        </h1>
        <p className={styles.subtitle}>
          Hitung BMI Anda, dapatkan rekomendasi olahraga, dan pelajari cara mencapai berat badan ideal dengan nutrisi yang tepat!
        </p>
        <div className={styles.ctaButtons}>
          <button
            className={styles.ctaPrimary}
            onClick={() => {
              const element = document.getElementById("calculator");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className={styles.buttonIcon}>🧮</span>
            Mulai Hitung BMI
          </button>
          <button
            className={styles.ctaSecondary}
            onClick={() => {
              const element = document.getElementById("info");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className={styles.buttonIcon}>📚</span>
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
      <div className={styles.visual}>
        <div className={styles.floatingIcon} style={{ animationDelay: "0s" }}>🏃‍♂️</div>
        <div className={styles.floatingIcon} style={{ animationDelay: "1s" }}>💪</div>
        <div className={styles.floatingIcon} style={{ animationDelay: "2s" }}>🏋️‍♀️</div>
        <div className={styles.floatingIcon} style={{ animationDelay: "3s" }}>🍎</div>
        <div className={styles.floatingIcon} style={{ animationDelay: "4s" }}>⚖️</div>
      </div>
    </header>
  );
};

export default HeroBanner;
