import Link from "next/link.js";
import ThemeToggle from "./ThemeToggle.jsx";
import DesktopNav from "./DesktopNav.jsx";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12 xl:px-16 bg-slate-100 dark:bg-blue-950/90 backdrop-blur-md border-b border-gray-200 dark:border-slate-600">
      <Link
        href="/#top"
        className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
      >
        Trevor Brown
      </Link>

      <DesktopNav />

      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </header>
  );
}
