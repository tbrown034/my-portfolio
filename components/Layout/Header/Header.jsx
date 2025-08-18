import Link from "next/link.js";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Header() {

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12 xl:px-16 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
      <Link
        href="/#top"
        className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
      >
        Trevor Brown
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        <Link
          href="/#coding"
          className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 pb-1"
        >
          Development
        </Link>
        <Link
          href="/#journalism"
          className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 pb-1"
        >
          Journalism
        </Link>
        <Link
          href="/#dataviz"
          className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 pb-1"
        >
          Data Stories
        </Link>
        <Link
          href="/#about"
          className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 pb-1"
        >
          Contact
        </Link>
      </nav>

      <ThemeToggle />
    </header>
  );
}
