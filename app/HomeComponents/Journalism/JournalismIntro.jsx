export default function JournalismIntro() {
  return (
    <section className="min-h-[50vh] flex flex-col justify-center px-6 py-12 sm:px-8 lg:px-12 xl:px-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto w-full animate-fadeInUp">
        {/* Section header */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
            Journalism Experience
          </h2>
        </div>

        {/* Main content */}
        <div className="space-y-6 max-w-4xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
            18 Years of Investigative Reporting
          </h3>
          
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              I was editor-in-chief of <em>The Indiana Daily Student</em> and graduated from Indiana University with a degree in political science and journalism. I spent the next 18 years covering government accountability and investigative stories, most recently with <a href="https://oklahomawatch.org" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200"><em>Oklahoma Watch</em></a>, a nonprofit newsroom focused on democracy and transparency.
            </p>
            
            <p>
              Over nearly two decades, I won state and national awards for investigative reporting, covered everything from city council meetings to statewide campaigns, and specialized in stories that led to policy changes and government reform.
            </p>
          </div>

          {/* Key achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="border-l-2 border-blue-800 pl-4 transition-all duration-300 hover:pl-6 hover:border-blue-600 hover:scale-105 group cursor-default">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors duration-300">Awards</h4>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">2020 OK SPJ Reporter of the Year, 2021 Great Plains Writer of the Year</p>
            </div>
            <div className="border-l-2 border-blue-800 pl-4 transition-all duration-300 hover:pl-6 hover:border-blue-600 hover:scale-105 group cursor-default">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors duration-300">Experience</h4>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Oklahoma Watch, Wyoming Tribune Eagle, Indiana Daily Student</p>
            </div>
            <div className="border-l-2 border-blue-800 pl-4 transition-all duration-300 hover:pl-6 hover:border-blue-600 hover:scale-105 group cursor-default">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors duration-300">Focus</h4>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Investigative reporting, government accountability, public records</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}