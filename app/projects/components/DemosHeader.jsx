export default function DemosHeader() {
  return (
    <div>
      <div className="text-xs font-bold uppercase tracking-[0.15em] text-blue-800 dark:text-blue-400 mb-2">
        See the Work
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat text-gray-900 dark:text-white mb-3">
        Projects
      </h1>

      <p className="text-lg text-gray-600 dark:text-neutral-300 max-w-3xl mb-4">
        Screenshots, interactive walkthroughs and live links for what I've built
      </p>

      <div className="text-sm text-gray-400 dark:text-neutral-500 mb-6">
        Next.js, React, TypeScript, Python, PostgreSQL
      </div>

      <div className="border-t-2 border-gray-900 dark:border-white w-full" />
    </div>
  );
}
