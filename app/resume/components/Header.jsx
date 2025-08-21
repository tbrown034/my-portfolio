export default function Header() {
  return (
    <header className="py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="space-y-4">
          {/* Kicker */}
          <div className="text-xs font-bold uppercase tracking-[0.15em] text-blue-800 dark:text-blue-400 mb-2">
            Professional Experience
          </div>
          
          {/* Main title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100">
            Resume & Selected Works
          </h1>
          
          {/* Subtitle/description */}
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Two decades of investigative journalism and modern web development expertise
          </p>
          
          {/* Visual separator - double rule */}
          <div className="pt-4">
            <div className="border-t-4 border-gray-900 dark:border-gray-100 mb-1"></div>
            <div className="border-t border-gray-900 dark:border-gray-100"></div>
          </div>
        </div>
      </div>
    </header>
  );
}