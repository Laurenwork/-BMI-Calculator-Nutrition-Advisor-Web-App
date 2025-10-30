import { BMIResult, UserInput, ValidationError } from "../types";

/**
 * Validasi input pengguna
 */
export const validateInputs = (
  height: number,
  weight: number
): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (height < 50 || height > 300) {
    errors.push({ field: "height", message: "Tinggi harus antara 50-300 cm." });
  }

  if (weight < 10 || weight > 500) {
    errors.push({ field: "weight", message: "Berat harus antara 10-500 kg." });
  }

  if (isNaN(height) || isNaN(weight)) {
    errors.push({
      field: "general",
      message: "Masukkan nilai numerik yang valid.",
    });
  }

  return errors;
};

/**
 * Menghitung BMI berdasarkan berat dan tinggi
 */
export const calculateBMI = (weight: number, height: number): number => {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return parseFloat(bmi.toFixed(2));
};

/**
 * Menentukan kategori BMI
 */
export const getCategory = (bmi: number): { text: string; icon: string } => {
  if (bmi < 18.5) return { text: "Underweight", icon: "⚖️" };
  if (bmi >= 18.5 && bmi <= 24.9) return { text: "Normal", icon: "❤️" };
  if (bmi >= 25 && bmi <= 29.9) return { text: "Overweight", icon: "🏃‍♂️" };
  return { text: "Obese", icon: "🏋️" };
};

/**
 * Menghitung rentang berat ideal
 */
export const calculateIdealWeightRange = (
  height: number
): { min: number; max: number } => {
  const heightInMeters = height / 100;
  const minWeight = 18.5 * (heightInMeters * heightInMeters);
  const maxWeight = 24.9 * (heightInMeters * heightInMeters);

  return {
    min: parseFloat(minWeight.toFixed(1)),
    max: parseFloat(maxWeight.toFixed(1)),
  };
};

/**
 * Mendapatkan rekomendasi olahraga berdasarkan kategori
 */
export const getRecommendation = (category: string): string => {
  const recommendations: Record<string, string> = {
    Underweight: "Tambahkan latihan beban ringan untuk membangun massa otot.",
    Normal: "Pertahankan rutinitas olahraga seimbang untuk menjaga kesehatan.",
    Overweight:
      "Lakukan kardio + defisit kalori untuk menurunkan berat secara bertahap.",
    Obese:
      "Mulai dengan kardio ringan dan konsultasikan dengan ahli untuk program olahraga aman.",
  };

  return (
    recommendations[category] || "Konsultasikan dengan profesional kesehatan."
  );
};

/**
 * Fungsi utama untuk menghitung BMI dan hasil lengkap
 */
export const calculateBMIResult = (input: UserInput): BMIResult => {
  const bmi = calculateBMI(input.weight, input.height);
  const category = getCategory(bmi);
  const idealWeightRange = calculateIdealWeightRange(input.height);
  const recommendation = getRecommendation(category.text);

  return {
    bmi,
    category: category.text,
    icon: category.icon,
    idealWeightRange,
    recommendation,
  };
};
