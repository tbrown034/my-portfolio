"use client";
import React, { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Initialize from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored !== null) {
      setIsDarkMode(stored === "true");
    } else {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    setIsHydrated(true);
  }, []);

  // Apply dark class and persist preference
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    if (isHydrated) {
      localStorage.setItem("darkMode", String(isDarkMode));
    }
  }, [isDarkMode, isHydrated]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
