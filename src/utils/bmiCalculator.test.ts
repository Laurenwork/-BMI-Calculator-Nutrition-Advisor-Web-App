import { calculateBMI, getCategory, validateInputs, calculateBMIResult } from './bmiCalculator';

describe('BMI Calculator', () => {
  describe('calculateBMI', () => {
    test('calculates BMI correctly for normal weight', () => {
      const bmi = calculateBMI(70, 170);
      expect(bmi).toBeCloseTo(24.22, 2);
    });

    test('calculates BMI correctly for underweight', () => {
      const bmi = calculateBMI(50, 170);
      expect(bmi).toBeCloseTo(17.30, 2);
    });

    test('calculates BMI correctly for overweight', () => {
      const bmi = calculateBMI(80, 170);
      expect(bmi).toBeCloseTo(27.68, 2);
    });
  });

  describe('getCategory', () => {
    test('returns correct category for underweight', () => {
      const category = getCategory(17);
      expect(category.text).toBe('Underweight');
      expect(category.icon).toBe('⚖️');
    });

    test('returns correct category for normal weight', () => {
      const category = getCategory(22);
      expect(category.text).toBe('Normal');
      expect(category.icon).toBe('❤️');
    });

    test('returns correct category for overweight', () => {
      const category = getCategory(27);
      expect(category.text).toBe('Overweight');
      expect(category.icon).toBe('🏃‍♂️');
    });

    test('returns correct category for obese', () => {
      const category = getCategory(35);
      expect(category.text).toBe('Obese');
      expect(category.icon).toBe('🏋️');
    });
  });

  describe('validateInputs', () => {
    test('returns no errors for valid inputs', () => {
      const errors = validateInputs(170, 70);
      expect(errors).toHaveLength(0);
    });

    test('returns error for invalid height', () => {
      const errors = validateInputs(40, 70);
      expect(errors).toHaveLength(1);
      expect(errors[0].field).toBe('height');
    });

    test('returns error for invalid weight', () => {
      const errors = validateInputs(170, 5);
      expect(errors).toHaveLength(1);
      expect(errors[0].field).toBe('weight');
    });

    test('returns error for NaN values', () => {
      const errors = validateInputs(NaN, NaN);
      expect(errors).toHaveLength(1);
      expect(errors[0].field).toBe('general');
    });
  });

  describe('calculateBMIResult', () => {
    test('calculates complete BMI result', () => {
      const input = { height: 170, weight: 70, gender: 'pria' as const, age: 25, activityLevel: 'moderate' as const, goal: 'maintain' as const };
      const result = calculateBMIResult(input);
      
      expect(result.bmi).toBeCloseTo(24.22, 2);
      expect(result.category).toBe('Normal');
      expect(result.icon).toBe('❤️');
      expect(result.idealWeightRange.min).toBeCloseTo(53.5, 1);
      expect(result.idealWeightRange.max).toBeCloseTo(72.0, 1);
      expect(result.recommendation).toContain('Pertahankan rutinitas olahraga');
    });
  });
});
