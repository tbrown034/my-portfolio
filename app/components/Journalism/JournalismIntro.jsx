export default function JournalismIntro() {
  return (
    <section className="min-h-[50vh] flex flex-col justify-center px-6 py-12 sm:px-8 lg:px-12 xl:px-16 bg-gray-100 dark:bg-gray-800/50">
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
              From editor-in-chief of <em>The Indiana Daily Student</em> to award-winning investigative reporter, I've spent nearly two decades covering government accountability and democracy.
            </p>
            
            <p>
              My most recent work with Oklahoma Watch focused on transparency, voting rights, and policy reform that led to real government changes.
            </p>
          </div>

          {/* Journalism CTAs */}
          <div className="mt-6 flex gap-3">
            <a 
              href="https://oklahomawatch.org/author/trevorbrown/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-white bg-blue-800 border-2 border-blue-800 rounded-2xl dark:text-blue-950 dark:bg-blue-50 dark:border-blue-50 hover:bg-blue-600 hover:border-blue-600 active:bg-blue-950 focus:bg-blue-500 dark:hover:bg-blue-200 dark:hover:border-blue-200 focus:outline-none focus:ring focus:ring-blue-400 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Oklahoma Watch Author Archives
            </a>
          </div>

          {/* Key achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Awards</h4>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">OK SPJ Reporter of Year, Great Plains Writer of Year</p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Expertise</h4>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Government accountability, investigative reporting</p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Impact</h4>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Policy changes, government reform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}