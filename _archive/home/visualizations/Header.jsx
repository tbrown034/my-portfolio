export default function Header() {
  return (
    <div className="px-6 sm:px-8 lg:px-12 xl:px-16 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Newspaper-style section header */}
        <div>
          {/* Kicker/eyebrow - editorial style */}
          <div className="text-sm font-bold uppercase tracking-[0.15em] text-blue-800 dark:text-blue-400 mb-2">
            Visual Storytelling
          </div>

          {/* Main headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat text-gray-900 dark:text-white mb-2">
            Visualizations
          </h2>

          {/* Lede paragraph */}
          <p className="text-lg text-gray-700 dark:text-neutral-200 max-w-3xl mb-6">
            Transforming complex datasets into clear, interactive visualizations
          </p>

          {/* Section divider - newspaper style double rule */}
          <div className="space-y-1">
            <div className="border-t-2 border-gray-900 dark:border-white"></div>
            <div className="border-t border-gray-900 dark:border-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
