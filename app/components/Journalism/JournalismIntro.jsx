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