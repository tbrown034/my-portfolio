import Link from "next/link";

export default function JournalismHeader() {
  return (
    <div>
      <div className="flex items-start justify-between gap-6">
        <div>
          {/* Kicker */}
          <div className="text-xs font-bold uppercase tracking-[0.15em] text-blue-800 dark:text-blue-400 mb-2">
            Holding Power Accountable
          </div>

          {/* Main title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat text-gray-900 dark:text-white mb-3">
            Journalism & Data Visualization
          </h1>

          {/* Dek */}
          <p className="text-lg text-gray-600 dark:text-neutral-300 max-w-3xl mb-6">
            15 years of investigative reporting, public records analysis and
            visual storytelling across Oklahoma and Wyoming
          </p>
        </div>

        <Link
          href="/"
          className="text-sm font-medium text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors shrink-0 mt-1"
        >
          &larr; Back to Portfolio
        </Link>
      </div>

      {/* Visual separator */}
      <div className="border-t-2 border-gray-900 dark:border-white w-full" />
    </div>
  );
}
