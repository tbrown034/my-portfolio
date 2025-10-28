export default function Header() {
  return (
    <header className="py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="space-y-4">
          {/* Kicker */}
          <div className="text-xs font-bold uppercase tracking-[0.15em] text-blue-800 dark:text-blue-400 mb-2">
            Holding Power Accountable
          </div>
          
          {/* Main title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            Journalism
          </h1>
          
          {/* Subtitle/description */}
          <p className="text-lg text-gray-600 dark:text-neutral-200 max-w-3xl">
            From city halls to state capitols, I've spent 15-plus years holding power accountable
          </p>
          
          {/* Visual separator - double rule */}
          <div className="pt-4">
            <div className="border-t-4 border-gray-900 dark:border-white mb-1"></div>
            <div className="border-t border-gray-900 dark:border-white"></div>
          </div>
        </div>
      </div>
    </header>
  );
}