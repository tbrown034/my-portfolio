"use client";
import { useContext } from "react";
import Link from "next/link.js";

import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
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
    <header className="flex items-center justify-between p-2 ">
      <a href="/" className="text-lg font-majorMono sm:hidden">
        &lt;TrevorBrown /&gt;
      </a>
      <Link
        href="/"
        className="hidden text-lg lg:text-2xl sm:flex font-majorMono"
        style={{ textShadow: "rgba(0, 0, 0, 0.5) 1px 0px 0px" }}
      >
        &lt;TB /&gt;
      </Link>
      <div>
        <div className="hidden gap-4 p-2 lg:gap-16 sm:flex opacity-80">
          <a href="#coding">
            <div className="flex items-center gap-1 p-1 rounded-lg cursor-pointer hover:bg-blue-300 active:bg-blue-400">
              <CodeBracketIcon className="w-6 h-6" />
              <p>Coding</p>
            </div>
          </a>
          <a href="#journalism">
            <div className="flex items-center gap-1 p-1 rounded-lg cursor-pointer hover:bg-blue-300 active:bg-blue-400">
              <NewspaperIcon className="w-6 h-6" />
              <p>Journalism</p>
            </div>
          </a>
          <a href="#dataviz">
            <div className="flex items-center gap-1 p-1 rounded-lg cursor-pointer hover:bg-blue-300 active:bg-blue-400">
              <ChartBarIcon className="w-6 h-6" />
              <p>Data</p>
            </div>
          </a>
          <a href="#about">
            <div className="flex items-center gap-1 p-1 rounded-lg cursor-pointer hover:bg-blue-300 active:bg-blue-400">
              <UserIcon className="w-6 h-6" />
              <p>About</p>
            </div>
          </a>
        </div>
      </div>
      <div className="sm:hidden">
        <Bars3Icon className="w-8 h-8" />
      </div>
      <button
        onClick={handleToggle}
        className="items-center justify-center hidden gap-1 p-1 bg-blue-800 rounded-lg text-blue-50 opacity-80 hover:bg-blue-700 active:bg-blue-900 sm:flex"
      >
        {isDarkMode ? (
          <>
            <SunIcon className="w-6 h-6 text-yellow-300" />
            <p className="">Light Mode</p>
          </>
        ) : (
          <>
            <MoonIcon className="w-6 h-6 text-blue-300" />
            <p className="">Dark Mode</p>
          </>
        )}
      </button>
    </header>
  );
}
