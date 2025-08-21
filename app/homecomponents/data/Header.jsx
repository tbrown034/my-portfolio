export default function Header() {
  return (
    <div className="px-6 sm:px-8 lg:px-12 xl:px-16 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Newspaper-style section header */}
        <div>
          {/* Kicker/eyebrow - editorial style */}
          <div className="text-xs font-bold uppercase tracking-[0.15em] text-purple-800 dark:text-purple-400 mb-2">
            Data to Understanding
          </div>
          
          {/* Main headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat text-gray-900 dark:text-gray-100 mb-2">
            Data Visualization
          </h2>
          
          {/* Lede paragraph */}
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-6">
            Transforming complex datasets into clear, interactive visualizations that reveal patterns 
            and drive informed decisions.
          </p>
          
          {/* Section divider - newspaper style double rule */}
          <div className="space-y-1">
            <div className="border-t-2 border-gray-900 dark:border-gray-100"></div>
            <div className="border-t border-gray-900 dark:border-gray-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
}