import Link from "next/link";

export default function HeroCTA() {
  return (
    <div className="flex flex-col md:flex-row gap-3">
      <Link
        href="/resume"
        className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-blue-800 dark:bg-blue-600 rounded-lg hover:bg-blue-900 dark:hover:bg-blue-700 transition-colors duration-200"
      >
        View Resume
      </Link>
      <a
        href="#about"
        className="inline-flex items-center justify-center px-6 py-3 font-semibold text-gray-900 dark:text-gray-100 border-2 border-gray-900 dark:border-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
      >
        Contact
      </a>
    </div>
  );
}