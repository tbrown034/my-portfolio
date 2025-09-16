import Link from "next/link";

export default function HeroCTA() {
  return (
    <div className="flex flex-col lg:flex-row gap-3">
      <a
        href="#contact"
        className="inline-flex items-center justify-center px-6 py-3 md:py-2.5 text-base md:text-sm font-semibold text-white bg-blue-800 dark:bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 hover:shadow-lg hover:-translate-y-1 active:bg-blue-900 dark:active:bg-blue-700 active:shadow-sm active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        Contact
      </a>
      <Link
        href="/resume"
        className="inline-flex items-center justify-center px-6 py-3 md:py-2.5 text-base md:text-sm font-semibold text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 border-2 border-gray-400 dark:border-gray-500 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-800 dark:hover:text-blue-400 hover:shadow-md hover:-translate-y-0.5 active:bg-gray-100 dark:active:bg-gray-950 active:shadow-none active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        View Resume + Selected Works
      </Link>
    </div>
  );
}
