import React, { useState } from "react";
import { UserInput, ValidationError } from "../../types";
import { validateInputs } from "../../utils/bmiCalculator";
import styles from "./InputForm.module.css";

interface InputFormProps {
  onSubmit: (input: UserInput) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<UserInput>({
    height: 0,
    weight: 0,
    gender: "lainnya",
    age: 25,
    activityLevel: "moderate",
    goal: "maintain",
  });
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "radio" ? value : parseFloat(value) || 0,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateInputs(formData.height, formData.weight);

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors([]);
    onSubmit(formData);
  };

  return (
    <section className={styles.inputSection} aria-labelledby="input-title">
      <h2 id="input-title">Masukkan Data Anda</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="height" className={styles.label}>
            Tinggi (cm)
          </label>
          <input
            type="number"
            id="height"
            name="height"
            min="50"
            max="300"
            required
            placeholder="Misal: 170"
            value={formData.height || ""}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="weight" className={styles.label}>
            Berat (kg)
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            min="10"
            max="500"
            step="0.1"
            required
            placeholder="Misal: 70"
            value={formData.weight || ""}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Jenis Kelamin (Opsional)</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="gender"
                value="pria"
                checked={formData.gender === "pria"}
                onChange={handleInputChange}
                className={styles.radioInput}
              />
              Pria
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="gender"
                value="wanita"
                checked={formData.gender === "wanita"}
                onChange={handleInputChange}
                className={styles.radioInput}
              />
              Wanita
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="gender"
                value="lainnya"
                checked={formData.gender === "lainnya"}
                onChange={handleInputChange}
                className={styles.radioInput}
              />
              Lainnya
            </label>
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Hitung BMI
        </button>

        {errors.length > 0 && (
          <div className={`${styles.error} ${styles.show}`} role="alert">
            {errors.map((error, index) => (
              <div key={index}>{error.message}</div>
            ))}
          </div>
        )}
      </form>
    </section>
  );
};

export default InputForm;
