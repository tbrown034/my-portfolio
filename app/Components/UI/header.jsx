"use client";
import { useContext } from "react";
import Link from "next/link";
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
    <header className="flex items-center justify-between p-2 text-2xl">
      <h1
        className="font-majorMono sm:hidden"
        style={{ textShadow: "rgba(0, 0, 0, 0.5) 1px 0px 0px" }}
      >
        &lt;TrevorBrown /&gt;
      </h1>
      <h1
        className="hidden sm:flex font-majorMono"
        style={{ textShadow: "rgba(0, 0, 0, 0.5) 1px 0px 0px" }}
      >
        &lt;TB /&gt;
      </h1>

      <div className="hidden gap-8 text-base lg:text-2xl sm:flex opacity-80">
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
            <p>Data Viz</p>
          </div>
        </a>
        <a href="#about">
          <div className="flex items-center gap-1 p-1 rounded-lg cursor-pointer hover:bg-blue-300 active:bg-blue-400">
            <UserIcon className="w-6 h-6" />
            <p>About</p>
          </div>
        </a>
      </div>
      <div className="sm:hidden">
        <Bars3Icon className="w-8 h-8" />
      </div>
      <button
        onClick={handleToggle}
        className="items-center justify-center hidden gap-1 p-1 text-blue-100 bg-blue-800 rounded-lg opacity-80 hover:bg-blue-700 active:bg-blue-900 sm:flex"
      >
        {isDarkMode ? (
          <>
            <SunIcon className="w-6 h-6 text-yellow-300" />
            <p className="text-base ">Light Mode</p>
          </>
        ) : (
          <>
            <MoonIcon className="w-6 h-6 text-blue-300" />
            <p className="text-base">Dark Mode</p>
          </>
        )}
      </button>
    </header>
  );
}
