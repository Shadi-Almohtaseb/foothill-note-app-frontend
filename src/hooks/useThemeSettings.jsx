import { useEffect, useState } from "react";

const useThemeSettings = () => {
  const [currentMode, setCurrentMode] = useState(
    localStorage.getItem("theme") || "Light"
  );

  const toggleTheme = () => {
    const newTheme = currentMode === "Light" ? "Dark" : "Light";
    localStorage.setItem("theme", newTheme);
    setCurrentMode(newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", currentMode === "Dark");
  }, [currentMode]);

  return { currentMode, toggleTheme };
};

export { useThemeSettings };
