import React from "react";
import { NutritionResult } from "../../types";
import styles from "./NutritionResults.module.css";

interface NutritionResultsProps {
  result: NutritionResult | null;
  isVisible: boolean;
}

const NutritionResults: React.FC<NutritionResultsProps> = ({
  result,
  isVisible,
}) => {
  if (!result || !isVisible) return null;

  return (
    <section
      className={`${styles.results} ${styles.show}`}
      aria-labelledby="nutrition-results-title"
    >
      <div className={styles.card}>
        <h2 id="nutrition-results-title" className={styles.title}>
          Hasil Nutrisi Harian
        </h2>

        <div className={styles.metricsGrid}>
          <div className={styles.metricBox}>
            <div className={styles.metricLabel}>BMR</div>
            <div className={styles.metricValue}>{result.bmr} kcal</div>
          </div>
          <div className={styles.metricBox}>
            <div className={styles.metricLabel}>TDEE</div>
            <div className={styles.metricValue}>{result.tdee} kcal</div>
          </div>
          <div className={styles.metricBox}>
            <div className={styles.metricLabel}>Kalori Maintenance</div>
            <div className={styles.metricValue}>
              {result.calories.maintenance} kcal
            </div>
          </div>
          <div className={styles.metricBox}>
            <div className={styles.metricLabel}>Kalori Defisit</div>
            <div className={styles.metricValue}>
              {result.calories.deficit} kcal
            </div>
          </div>
          <div className={styles.metricBox}>
            <div className={styles.metricLabel}>Kalori Surplus</div>
            <div className={styles.metricValue}>
              {result.calories.surplus} kcal
            </div>
          </div>
        </div>

        <div className={styles.macros}>
          <h3 className={styles.sectionTitle}>Makronutrien</h3>
          <div className={styles.macrosGrid}>
            <div className={styles.macroBox}>
              <div className={styles.macroName}>Protein</div>
              <div className={styles.macroValue}>
                {result.macros.protein.grams} g (
                {result.macros.protein.percentage}%)
              </div>
            </div>
            <div className={styles.macroBox}>
              <div className={styles.macroName}>Karbohidrat</div>
              <div className={styles.macroValue}>
                {result.macros.carbs.grams} g ({result.macros.carbs.percentage}
                %)
              </div>
            </div>
            <div className={styles.macroBox}>
              <div className={styles.macroName}>Lemak</div>
              <div className={styles.macroValue}>
                {result.macros.fat.grams} g ({result.macros.fat.percentage}%)
              </div>
            </div>
          </div>
        </div>

        <div className={styles.water}>
          <h3 className={styles.sectionTitle}>Kebutuhan Air</h3>
          <div className={styles.waterRow}>
            <span className={styles.waterValue}>{result.water.liters} L</span>
            <span className={styles.waterHint}>
              ≈ {result.water.glasses} gelas/hari
            </span>
          </div>
        </div>

        <div className={styles.recommendations}>
          <h3 className={styles.sectionTitle}>Rekomendasi</h3>
          <ul className={styles.recoList}>
            <li>🍗 {result.recommendations.protein}</li>
            <li>🍚 {result.recommendations.carbs}</li>
            <li>🥑 {result.recommendations.fat}</li>
            <li>💧 {result.recommendations.water}</li>
            <li>🏋️ {result.recommendations.exercise}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NutritionResults;
