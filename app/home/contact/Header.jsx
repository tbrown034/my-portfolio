export default function Header() {
  return (
    <header className="py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="space-y-4">
          {/* Kicker */}
          <div className="text-xs font-bold uppercase tracking-[0.15em] text-blue-800 dark:text-blue-400 mb-2">
            Let's Build Something Together
          </div>
          
          {/* Main title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            Contact
          </h1>
          
          {/* Subtitle/description */}
          <p className="text-lg text-gray-600 dark:text-slate-300 max-w-3xl">
            Open to freelance projects, consulting, and full-time opportunities
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