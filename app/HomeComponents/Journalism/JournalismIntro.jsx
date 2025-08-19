export default function JournalismIntro() {
  const skills = [
    "Investigative Reporting", "Breaking News", "Data Journalism", "Public Records", "AP Style", "Source Development"
  ];
  

  return (
    <section className="min-h-[50vh] flex flex-col justify-center px-6 sm:px-8 lg:px-12 xl:px-16 subSection">
      <div className="max-w-7xl mx-auto w-full animate-fadeInUp">
        {/* Section header - indented on larger screens */}
        <div className="md:pl-12 lg:pl-16 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 pb-2 inline-block">
            Journalism Experience
          </h2>
        </div>

        {/* Main content - indented on larger screens */}
        <div className="md:pl-12 lg:pl-16 space-y-6 max-w-4xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
            15 Years of Reporting
          </h3>
          
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              I was editor-in-chief of <em>The Indiana Daily Student</em> and graduated from Indiana University with a degree in political science and journalism. I spent the next 15 years covering government accountability and investigative stories, most recently with <a href="https://oklahomawatch.org" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200"><em>Oklahoma Watch</em></a>, a nonprofit newsroom focused on democracy and transparency.
            </p>
            
            <p>
              Over nearly two decades, I won state and national awards for investigative reporting, covered everything from city council meetings to statewide campaigns, and specialized in stories that led to policy changes and government reform.
            </p>
          </div>

          {/* Skills section */}
          <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
            {/* Skills Section */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-4">
                Core Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
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