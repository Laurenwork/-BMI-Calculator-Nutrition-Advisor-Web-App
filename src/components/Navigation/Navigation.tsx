import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./Navigation.module.css";

interface NavigationProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

const Navigation: React.FC<NavigationProps> = ({
  onNavigate,
  currentSection,
}) => {
  const { theme, toggleTheme } = useTheme();
  const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "calculator", label: "Kalkulator", icon: "🧮" },
    { id: "nutrition", label: "Nutrisi", icon: "🍎" },
    { id: "info", label: "Info BMI", icon: "ℹ️" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.logo}>🏃‍♂️</span>
          <span className={styles.title}>BMI Calculator</span>
        </div>

        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`${styles.navLink} ${
                currentSection === item.id ? styles.active : ""
              }`}
              onClick={() => onNavigate(item.id)}
              aria-label={`Navigate to ${item.label}`}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
            </button>
          ))}
        </div>

        <button
          className={`${styles.themeToggle} ${
            theme === "dark" ? styles.dark : ""
          }`}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        >
          <span className={styles.themeIcon}>
            {theme === "light" ? "🌙" : "☀️"}
          </span>
        </button>

        <button className={styles.mobileMenu} aria-label="Toggle mobile menu">
          <span className={styles.hamburger}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
