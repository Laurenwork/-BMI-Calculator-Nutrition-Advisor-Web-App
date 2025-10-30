import React, { useEffect, useRef } from "react";
import { BMIResult } from "../../types";
import styles from "./ResultsDisplay.module.css";

interface ResultsDisplayProps {
  result: BMIResult | null;
  isVisible: boolean;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  result,
  isVisible,
}) => {
  const resultsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isVisible && resultsRef.current) {
      resultsRef.current.focus();
    }
  }, [isVisible]);

  if (!result) return null;

  return (
    <section
      className={`${styles.resultsSection} ${isVisible ? styles.show : ""}`}
      id="results"
      role="status"
      tabIndex={-1}
      ref={resultsRef}
    >
      <div className={styles.resultsCard}>
        <h2 id="results-title">Hasil BMI Anda</h2>
        <div className={styles.bmiValue} aria-live="polite">
          {result.bmi}
        </div>
        <div className={styles.category}>
          <span className={styles.icon}>{result.icon}</span>
          <span>{result.category}</span>
        </div>
        <div className={styles.idealWeight}>
          Rentang Berat Ideal: {result.idealWeightRange.min} -{" "}
          {result.idealWeightRange.max} kg
        </div>
        <div className={styles.recommendation}>
          <strong>Rekomendasi Olahraga:</strong> {result.recommendation}
        </div>
      </div>
    </section>
  );
};

export default ResultsDisplay;
