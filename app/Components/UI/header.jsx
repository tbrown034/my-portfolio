"use client";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";
import { DarkModeContext } from "../utilities/DarkModeContext";

export default function Header() {
  // Use the context to get the dark mode state and setter function
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  // Toggle dark mode
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="flex items-center justify-between p-2 text-2xl dark:text-blue-200 dark:bg-blue-800">
      <h1
        className="font-majorMono"
        style={{ textShadow: "rgba(0, 0, 0, 0.5) 1px 0px 0px" }}
      >
        &lt;TrevorBrown /&gt;
      </h1>

      <div className="hidden gap-8 sm:flex opacity-80">
        <Link href="/">
          <div className="flex gap-1 p-1 rounded-lg cursor-pointer hover:bg-blue-300 active:bg-blue-400">
            <CodeBracketIcon className="w-6 h-6" />
            <p>Coding</p>
          </div>
        </Link>
        <Link href="/">
          <div className="flex gap-1 p-1 rounded-lg cursor-pointer hover:bg-blue-300 active:bg-blue-400">
            <NewspaperIcon className="w-6 h-6" />
            <p>Journalism</p>
          </div>
        </Link>
        <Link href="/">
          <div className="flex gap-1 p-1 rounded-lg cursor-pointer hover:bg-blue-300 active:bg-blue-400">
            <ChartBarIcon className="w-6 h-6" />
            <p>Data Viz</p>
          </div>
        </Link>
      </div>
      <div className="sm:hidden">
        <Bars3Icon className="w-8 h-8" />
      </div>
      <button
        onClick={handleToggle}
        className="items-center justify-center hidden gap-1 p-1 border-2 border-blue-800 border-opacity-50 rounded-lg opacity-80 sm:flex hover:bg-blue-300 active:bg-blue-400"
      >
        <MoonIcon className="w-6 h-6 text-blue-300 fill-blue-800" />
        <p>Dark Mode</p>
      </button>
    </header>
  );
}
