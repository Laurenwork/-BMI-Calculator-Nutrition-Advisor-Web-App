import React, { useState } from "react";
import { UserInput, NutritionResult, ValidationError } from "../../types";
import { validateInputs } from "../../utils/bmiCalculator";
import { calculateNutritionResult as calculateNutrition } from "../../utils/nutritionCalculator";
import styles from "./NutritionCalculator.module.css";

interface NutritionCalculatorProps {
  onCalculate: (result: NutritionResult) => void;
  isVisible: boolean;
}

const NutritionCalculator: React.FC<NutritionCalculatorProps> = ({
  onCalculate,
  isVisible,
}) => {
  const [formData, setFormData] = useState<UserInput>({
    height: 0,
    weight: 0,
    gender: "lainnya",
    age: 0,
    activityLevel: "moderate",
    goal: "maintain",
  });
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi input dasar
    const validationErrors = validateInputs(formData.height, formData.weight);

    // Validasi tambahan untuk nutrisi
    if (formData.age < 1 || formData.age > 120) {
      validationErrors.push({
        field: "age",
        message: "Usia harus antara 1-120 tahun.",
      });
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors([]);
    const result = calculateNutrition(formData);
    onCalculate(result);
  };

  if (!isVisible) return null;

  return (
    <section
      className={`${styles.nutritionSection} ${styles.animateIn}`}
      aria-labelledby="nutrition-title"
    >
      <h2 id="nutrition-title" className={styles.title}>
        Kalkulator Nutrisi & Makronutrien
      </h2>
      <p className={styles.subtitle}>
        Hitung kebutuhan kalori, protein, karbohidrat, dan lemak harian Anda
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGrid}>
          <div className={styles.inputGroup}>
            <label htmlFor="height" className={styles.label}>
              Tinggi Badan (cm)
            </label>
            <input
              type="number"
              id="height"
              name="height"
              min="50"
              max="300"
              required
              placeholder="170"
              value={formData.height || ""}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="weight" className={styles.label}>
              Berat Badan (kg)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              min="10"
              max="500"
              step="0.1"
              required
              placeholder="70"
              value={formData.weight || ""}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="age" className={styles.label}>
              Usia (tahun)
            </label>
            <input
              type="number"
              id="age"
              name="age"
              min="1"
              max="120"
              required
              placeholder="25"
              value={formData.age || ""}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="gender" className={styles.label}>
              Jenis Kelamin
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className={styles.select}
            >
              <option value="pria">Pria</option>
              <option value="wanita">Wanita</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="activityLevel" className={styles.label}>
              Level Aktivitas
            </label>
            <select
              id="activityLevel"
              name="activityLevel"
              value={formData.activityLevel}
              onChange={handleInputChange}
              className={styles.select}
            >
              <option value="sedentary">
                Sedentary (Sedikit/tidak olahraga)
              </option>
              <option value="light">Light (Olahraga ringan 1-3x/minggu)</option>
              <option value="moderate">
                Moderate (Olahraga sedang 3-5x/minggu)
              </option>
              <option value="active">
                Active (Olahraga keras 6-7x/minggu)
              </option>
              <option value="very_active">
                Very Active (Olahraga sangat keras, pekerjaan fisik)
              </option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="goal" className={styles.label}>
              Tujuan
            </label>
            <select
              id="goal"
              name="goal"
              value={formData.goal}
              onChange={handleInputChange}
              className={styles.select}
            >
              <option value="maintain">Maintain (Pertahankan berat)</option>
              <option value="lose">Lose (Turunkan berat)</option>
              <option value="gain">Gain (Naikkan berat/massa otot)</option>
            </select>
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          <span className={styles.buttonText}>Hitung Kebutuhan Nutrisi</span>
          <span className={styles.buttonIcon}>🧮</span>
        </button>

        {errors.length > 0 && (
          <div className={`${styles.error} ${styles.show}`} role="alert">
            {errors.map((error, index) => (
              <div key={index} className={styles.errorItem}>
                ⚠️ {error.message}
              </div>
            ))}
          </div>
        )}
      </form>
    </section>
  );
};

export default NutritionCalculator;
