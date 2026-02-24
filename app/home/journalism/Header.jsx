export default function Header() {
  return (
    <div className="px-6 sm:px-8 lg:px-12 xl:px-16 py-8">
      <div className="max-w-7xl mx-auto">
        <div>
          {/* Kicker */}
          <div className="text-sm font-bold uppercase tracking-[0.15em] text-blue-800 dark:text-blue-400 mb-2">
            Holding Power Accountable
          </div>

          {/* Main title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat text-gray-900 dark:text-white mb-2">
            Journalism
          </h2>

          {/* Subtitle/description */}
          <p className="text-lg text-gray-700 dark:text-neutral-200 max-w-3xl mb-6">
            From city halls to state capitols, I've spent 15-plus years holding power accountable
          </p>

          {/* Visual separator - double rule */}
          <div className="space-y-1">
            <div className="border-t-2 border-gray-900 dark:border-white"></div>
            <div className="border-t border-gray-900 dark:border-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}