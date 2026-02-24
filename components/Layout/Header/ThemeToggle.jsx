"use client";
import { useContext } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { DarkModeContext } from "../../providers/DarkModeContext.jsx";

export default function ThemeToggle() {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </button>
  );
}
