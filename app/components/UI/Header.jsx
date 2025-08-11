"use client";
import { useContext } from "react";
import Link from "next/link.js";

import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";

import { ChartBarIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";

import { SunIcon } from "@heroicons/react/24/outline";
import { DarkModeContext } from "../../utilities/DarkModeContext.jsx";
import { UserIcon } from "@heroicons/react/24/outline";

export default function Header() {
  // Use the context to get the dark mode state and setter function
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  // Toggle dark mode
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-blue-200/20 dark:border-blue-800/20 backdrop-blur-sm">
      <Link
        href="/"
        className="text-xl font-bold tracking-tight text-blue-900 dark:text-blue-100 font-montserrat hover:text-blue-700 dark:hover:text-blue-200 transition-colors"
      >
        Trevor Brown
      </Link>
      
      <nav className="hidden lg:flex items-center gap-8">
        <a 
          href="/#coding"
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-blue-800 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-100 transition-colors"
        >
          <CodeBracketIcon className="w-4 h-4" />
          Coding
        </a>
        <a 
          href="/#journalism"
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-blue-800 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-100 transition-colors"
        >
          <NewspaperIcon className="w-4 h-4" />
          Journalism
        </a>
        <a 
          href="/#dataviz"
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-blue-800 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-100 transition-colors"
        >
          <ChartBarIcon className="w-4 h-4" />
          Data
        </a>
        <a 
          href="/#about"
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-blue-800 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-100 transition-colors"
        >
          <UserIcon className="w-4 h-4" />
          Contact
        </a>
      </nav>

      <button
        onClick={handleToggle}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <>
            <SunIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Light</span>
          </>
        ) : (
          <>
            <MoonIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Dark</span>
          </>
        )}
      </button>
    </header>
  );
}
