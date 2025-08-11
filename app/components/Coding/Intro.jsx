export default function Intro() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:px-12 xl:px-16">
      {/* Section header - matching Hero style */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-8">
        <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
          Development
        </h2>
      </div>

      {/* Clean header without repetitive content */}
      <div className="max-w-4xl space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
          Recent Work
        </h1>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          Web applications built with modern technologies and clean design principles.
        </p>
      </div>
    </section>
  );
}
