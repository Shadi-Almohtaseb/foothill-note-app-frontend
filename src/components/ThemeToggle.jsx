import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeToggle = ({ currentMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-[#ffffff34]"
    >
      <DarkModeSwitch
        checked={currentMode === "Dark"}
        onClick={toggleTheme}
        size={28}
      />
    </button>
  );
};

export default ThemeToggle;
