import Link from "next/link";

export default function HeroCTA() {
  return (
    <div className="flex flex-col lg:flex-row gap-3">
      <a
        href="#contact"
        className="inline-flex items-center justify-center px-6 py-3 md:py-2 text-base md:text-sm font-medium md:font-normal text-white bg-blue-800 dark:bg-sky-500 dark:text-slate-900 rounded-xl hover:bg-blue-900 dark:hover:bg-sky-400 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      >
        Contact
      </a>
      <Link
        href="/resume"
        className="inline-flex items-center justify-center px-6 py-3 md:py-2 text-base md:text-sm font-medium md:font-normal text-gray-900 dark:text-slate-100 border-2 border-gray-900 dark:border-slate-400 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 hover:border-blue-800 dark:hover:border-sky-400 transition-all duration-200"
      >
        View Resume + Selected Works
      </Link>
    </div>
  );
}