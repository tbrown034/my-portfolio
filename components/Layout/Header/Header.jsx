"use client";

import Link from "next/link.js";
import ThemeToggle from "./ThemeToggle.jsx";
import DesktopNav from "./DesktopNav.jsx";
import MobileNav from "./MobileNav.jsx";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12 xl:px-16 bg-slate-100/95 dark:bg-neutral-900/98 backdrop-blur-md border-b border-gray-200 dark:border-neutral-700">
      <Link
        href="/#top"
        className="header-brand flex items-center gap-2.5 text-lg font-semibold tracking-tight text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
      >
        <span className="tab-key" aria-hidden="true">
          <span className="relative z-10 select-none">TB</span>
        </span>
        Trevor Brown
      </Link>

      <DesktopNav />

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <MobileNav />
      </div>
    </header>
  );
}
