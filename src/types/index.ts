export interface BMIResult {
  bmi: number;
  category: string;
  icon: string;
  idealWeightRange: {
    min: number;
    max: number;
  };
  recommendation: string;
}

export interface UserInput {
  height: number;
  weight: number;
  gender: "pria" | "wanita" | "lainnya";
  age: number;
  activityLevel: "sedentary" | "light" | "moderate" | "active" | "very_active";
  goal: "maintain" | "lose" | "gain";
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface NutritionResult {
  bmr: number; // Basal Metabolic Rate
  tdee: number; // Total Daily Energy Expenditure
  calories: {
    maintenance: number;
    deficit: number;
    surplus: number;
  };
  macros: {
    protein: {
      grams: number;
      calories: number;
      percentage: number;
    };
    carbs: {
      grams: number;
      calories: number;
      percentage: number;
    };
    fat: {
      grams: number;
      calories: number;
      percentage: number;
    };
  };
  water: {
    liters: number;
    glasses: number;
  };
  recommendations: {
    protein: string;
    carbs: string;
    fat: string;
    water: string;
    exercise: string;
  };
}
