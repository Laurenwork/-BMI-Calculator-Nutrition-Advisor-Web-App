import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import InputForm from "./components/InputForm/InputForm";
import ResultsDisplay from "./components/ResultsDisplay/ResultsDisplay";
import NutritionCalculator from "./components/NutritionCalculator/NutritionCalculator";
import NutritionResults from "./components/NutritionResults/NutritionResults";
import InfoSection from "./components/InfoSection/InfoSection";
import Footer from "./components/Footer/Footer";
import { UserInput, BMIResult, NutritionResult } from "./types";
import { calculateBMIResult } from "./utils/bmiCalculator";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import styles from "./App.module.css";

const AppContent: React.FC = () => {
  const { theme } = useTheme();
  const [currentSection, setCurrentSection] = useState("home");
  const [bmiResult, setBmiResult] = useState<BMIResult | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [nutritionResult, setNutritionResult] = useState<NutritionResult | null>(null);
  const [showNutrition, setShowNutrition] = useState(false);

  const handleFormSubmit = (input: UserInput) => {
    const result = calculateBMIResult(input);
    setBmiResult(result);
    setShowResults(true);
    setCurrentSection("calculator");
  };

  const handleNutritionCalculate = (result: NutritionResult) => {
    setNutritionResult(result);
    setShowNutrition(true);
    setCurrentSection("nutrition");
  };

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "calculator", "nutrition", "info"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`App ${theme}`}>
      <Navigation onNavigate={handleNavigate} currentSection={currentSection} />

      <section id="home">
        <HeroBanner />
      </section>

      <div className={styles.container}>
        <section id="calculator" className={styles.section}>
          <div className={styles.twoColumn}>
            <InputForm onSubmit={handleFormSubmit} />
            <ResultsDisplay result={bmiResult} isVisible={showResults} />
          </div>
        </section>

        <section id="nutrition" className={styles.section}>
          <div className={styles.twoColumn}>
            <NutritionCalculator onCalculate={handleNutritionCalculate} isVisible={true} />
            <NutritionResults result={nutritionResult} isVisible={showNutrition} />
          </div>
        </section>
      </div>

      <InfoSection />
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
