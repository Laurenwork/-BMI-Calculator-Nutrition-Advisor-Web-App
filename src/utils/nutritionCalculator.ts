import { UserInput, NutritionResult } from "../types";

/**
 * Menghitung BMR (Basal Metabolic Rate) menggunakan rumus Mifflin-St Jeor
 */
export const calculateBMR = (input: UserInput): number => {
  const { weight, height, age, gender } = input;
  
  // Rumus Mifflin-St Jeor (lebih akurat dari Harris-Benedict)
  let bmr: number;
  
  if (gender === "pria") {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }
  
  return Math.round(bmr);
};

/**
 * Menghitung TDEE (Total Daily Energy Expenditure) berdasarkan level aktivitas
 */
export const calculateTDEE = (bmr: number, activityLevel: string): number => {
  const activityMultipliers: Record<string, number> = {
    sedentary: 1.2,      // Sedentary (little to no exercise)
    light: 1.375,        // Lightly active (light exercise 1-3 days/week)
    moderate: 1.55,      // Moderately active (moderate exercise 3-5 days/week)
    active: 1.725,       // Very active (hard exercise 6-7 days/week)
    very_active: 1.9     // Extremely active (very hard exercise, physical job)
  };
  
  return Math.round(bmr * activityMultipliers[activityLevel]);
};

/**
 * Menghitung kebutuhan kalori berdasarkan tujuan
 */
export const calculateCalorieNeeds = (tdee: number, goal: string) => {
  const deficit = Math.round(tdee * 0.2); // 20% deficit untuk weight loss
  const surplus = Math.round(tdee * 0.1); // 10% surplus untuk weight gain
  
  return {
    maintenance: tdee,
    deficit: Math.max(tdee - deficit, 1200), // Minimum 1200 kalori
    surplus: tdee + surplus
  };
};

/**
 * Menghitung makronutrien berdasarkan tujuan dan berat badan
 */
export const calculateMacros = (input: UserInput, calories: number) => {
  const { weight } = input;
  
  // Protein: 1.6-2.2g per kg berat badan (untuk muscle building)
  const proteinGrams = Math.round(weight * 2.0);
  const proteinCalories = proteinGrams * 4;
  const proteinPercentage = Math.round((proteinCalories / calories) * 100);
  
  // Fat: 25-30% dari total kalori
  const fatPercentage = 25;
  const fatCalories = Math.round(calories * (fatPercentage / 100));
  const fatGrams = Math.round(fatCalories / 9);
  
  // Karbohidrat: sisa kalori
  const carbCalories = calories - proteinCalories - fatCalories;
  const carbGrams = Math.round(carbCalories / 4);
  const carbPercentage = Math.round((carbCalories / calories) * 100);
  
  return {
    protein: {
      grams: proteinGrams,
      calories: proteinCalories,
      percentage: proteinPercentage
    },
    carbs: {
      grams: carbGrams,
      calories: carbCalories,
      percentage: carbPercentage
    },
    fat: {
      grams: fatGrams,
      calories: fatCalories,
      percentage: fatPercentage
    }
  };
};

/**
 * Menghitung kebutuhan air harian
 */
export const calculateWaterNeeds = (weight: number, activityLevel: string): { liters: number; glasses: number } => {
  // 35ml per kg berat badan (standar medis)
  const baseWater = (weight * 35) / 1000;
  
  // Tambahan berdasarkan aktivitas
  const activityMultipliers: Record<string, number> = {
    sedentary: 0,
    light: 0.2,
    moderate: 0.4,
    active: 0.6,
    very_active: 0.8
  };
  
  const additionalWater = baseWater * activityMultipliers[activityLevel];
  const totalLiters = Math.round((baseWater + additionalWater) * 10) / 10;
  const glasses = Math.round(totalLiters * 4.2); // 1 gelas = 240ml
  
  return {
    liters: totalLiters,
    glasses: glasses
  };
};

/**
 * Generate rekomendasi nutrisi berdasarkan hasil perhitungan
 */
export const generateRecommendations = (
  input: UserInput,
  macros: NutritionResult["macros"],
  goal: string
) => {
  const { weight, activityLevel } = input;
  
  const recommendations = {
    protein: `Konsumsi ${macros.protein.grams}g protein per hari. Sumber terbaik: daging tanpa lemak, ikan, telur, kacang-kacangan, dan susu.`,
    carbs: `Konsumsi ${macros.carbs.grams}g karbohidrat per hari. Pilih karbohidrat kompleks seperti beras merah, oatmeal, dan sayuran.`,
    fat: `Konsumsi ${macros.fat.grams}g lemak per hari. Pilih lemak sehat seperti alpukat, kacang-kacangan, dan minyak zaitun.`,
    water: `Minum ${Math.round(weight * 35 / 1000 * 10) / 10} liter air per hari (${Math.round(weight * 35 / 1000 * 4.2)} gelas). Tambahkan 0.5-1 liter jika berolahraga.`,
    exercise: generateExerciseRecommendation(activityLevel, goal)
  };
  
  return recommendations;
};

/**
 * Generate rekomendasi olahraga berdasarkan level aktivitas dan tujuan
 */
const generateExerciseRecommendation = (activityLevel: string, goal: string): string => {
  const recommendations: Record<string, Record<string, string>> = {
    sedentary: {
      maintain: "Mulai dengan jalan kaki 30 menit/hari, 3x seminggu. Tambahkan latihan beban ringan 2x seminggu.",
      lose: "Kombinasi kardio (jalan cepat, bersepeda) 45 menit/hari, 5x seminggu + latihan beban 2x seminggu.",
      gain: "Latihan beban 3x seminggu + kardio ringan 2x seminggu. Fokus pada compound movements."
    },
    light: {
      maintain: "Pertahankan rutinitas saat ini. Tambahkan variasi latihan untuk mencegah kebosanan.",
      lose: "Tingkatkan intensitas kardio menjadi 60 menit/hari, 5x seminggu. Tambahkan HIIT 2x seminggu.",
      gain: "Tingkatkan frekuensi latihan beban menjadi 4x seminggu. Tambahkan progressive overload."
    },
    moderate: {
      maintain: "Rutinitas Anda sudah baik. Pertahankan konsistensi dan tambahkan variasi.",
      lose: "Tambahkan HIIT 3x seminggu + kardio steady state 4x seminggu. Fokus pada defisit kalori.",
      gain: "Tingkatkan volume latihan beban. Tambahkan isolasi exercises untuk muscle definition."
    },
    active: {
      maintain: "Rutinitas Anda sangat baik. Pertimbangkan periodisasi untuk optimasi hasil.",
      lose: "Fokus pada high-intensity training + clean eating. Pertimbangkan intermittent fasting.",
      gain: "Implementasikan advanced training techniques: drop sets, supersets, dan rest-pause."
    },
    very_active: {
      maintain: "Rutinitas Anda optimal. Fokus pada recovery dan nutrisi untuk performa maksimal.",
      lose: "Kombinasi high-intensity training dengan strategic refeeds. Monitor recovery dengan cermat.",
      gain: "Advanced periodization dengan deload weeks. Fokus pada compound movements dengan volume tinggi."
    }
  };
  
  return recommendations[activityLevel]?.[goal] || "Konsultasikan dengan trainer profesional untuk program yang disesuaikan.";
};

/**
 * Fungsi utama untuk menghitung semua kebutuhan nutrisi
 */
export const calculateNutritionResult = (input: UserInput): NutritionResult => {
  const bmr = calculateBMR(input);
  const tdee = calculateTDEE(bmr, input.activityLevel);
  const calories = calculateCalorieNeeds(tdee, input.goal);
  
  // Tentukan kalori target berdasarkan tujuan
  let targetCalories: number;
  switch (input.goal) {
    case "lose":
      targetCalories = calories.deficit;
      break;
    case "gain":
      targetCalories = calories.surplus;
      break;
    default:
      targetCalories = calories.maintenance;
  }
  
  const macros = calculateMacros(input, targetCalories);
  const water = calculateWaterNeeds(input.weight, input.activityLevel);
  const recommendations = generateRecommendations(input, macros, input.goal);
  
  return {
    bmr,
    tdee,
    calories,
    macros,
    water,
    recommendations
  };
};
