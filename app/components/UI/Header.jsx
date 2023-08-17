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
    <header className="flex items-center justify-between p-4 text-blue-900 p- dark:text-blue-100 ">
      <a
        href="/"
        className="text-lg font-semibold font-majorMono sm:hidden"
        style={{ textShadow: "rgba(0, 0, 0, 0.5) 1px 0px 0px" }}
      >
        &lt;TrevorBrown /&gt;
      </a>
      <Link
        href="/"
        className="hidden text-lg font-semibold lg:text-2xl sm:flex font-majorMono"
        style={{ textShadow: "rgba(0, 0, 0, 0.5) 1px 0px 0px" }}
      >
        &lt;TB /&gt;
      </Link>
      <div>
        <div className="hidden gap-4 p-2 font-semibold xl:gap-24 lg:gap-16 lg:text-lg sm:flex opacity-90">
          <a href="/#coding">
            <div className="flex items-center gap-1 p-1 rounded-lg cursor-pointer hover:bg-blue-300 dark:hover:bg-blue-600 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 active-blue-600 ">
              <CodeBracketIcon className="w-6 h-6" />
              <p>Coding</p>
            </div>
          </a>
          <a href="/#journalism">
            <div className="flex items-center gap-1 p-1 rounded-lg cursor-pointer hover:bg-blue-300 dark:hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 active-blue-600">
              <NewspaperIcon className="w-6 h-6" />
              <p>Journalism</p>
            </div>
          </a>
          <a href="/#dataviz">
            <div className="flex items-center gap-1 p-1 rounded-lg cursor-pointer hover:bg-blue-300 dark:hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 active-blue-600">
              <ChartBarIcon className="w-6 h-6" />
              <p>Data</p>
            </div>
          </a>
          <a href="/#about">
            <div className="flex items-center gap-1 p-1 rounded-lg cursor-pointer hover:bg-blue-300 dark:hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 active-blue-600">
              <UserIcon className="w-6 h-6" />
              <p>Contact</p>
            </div>
          </a>
        </div>
      </div>

      <button
        onClick={handleToggle}
        className="flex items-center justify-center gap-1 p-1 text-blue-100 bg-blue-900 rounded-lg dark:text-blue-900 dark:bg-blue-100 sm:flex hover:bg-blue-700 dark:hover:bg-blue-300 "
      >
        {isDarkMode ? (
          <>
            <SunIcon className="w-6 h-6" />
            <p className="">Light Mode</p>
          </>
        ) : (
          <>
            <MoonIcon className="w-5 h-5 " />
            <p className="">Dark Mode</p>
          </>
        )}
      </button>
    </header>
  );
}
