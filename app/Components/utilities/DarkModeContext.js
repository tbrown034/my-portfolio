"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

// Create a context
export const DarkModeContext = createContext();

// Create a provider component
export const DarkModeProvider = ({ children }) => {
  // State to keep track of dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect to toggle the 'dark' class on the body element
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Provide the state and setter function to the components wrapped within DarkModeProvider
  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
