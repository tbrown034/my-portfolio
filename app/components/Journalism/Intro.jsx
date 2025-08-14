export default function Intro() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:px-12 xl:px-16">
      {/* Section header - matching Hero style */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-8">
        <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
          Journalism
        </h2>
      </div>

      {/* Mobile layout */}
      <div className="block lg:hidden max-w-4xl space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
          Experience
        </h1>
        
        <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            I was editor-in-chief of <em>The Indiana Daily Student</em> and graduated from Indiana University with a degree in political science and journalism. I spent the next 18 years covering government accountability and investigative stories, most recently with{" "}
            <a 
              href="https://oklahomawatch.org/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors duration-200 underline decoration-2 underline-offset-2"
            >
              Oklahoma Watch
            </a>
            , a nonprofit newsroom focused on democracy and transparency.
          </p>
          
          <p>
            Over nearly two decades, I won state and national awards for investigative reporting, covered everything from city council meetings to statewide campaigns, and specialized in stories that led to policy changes and government reform.
          </p>
        </div>

        {/* Resume CTA */}
        <div className="mt-6">
          <a 
            href="/resume" 
            className="inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-blue-800 border-2 border-blue-800 rounded-2xl dark:text-blue-950 dark:bg-blue-50 dark:border-blue-50 hover:bg-blue-600 hover:border-blue-600 active:bg-blue-950 focus:bg-blue-500 dark:hover:bg-blue-200 dark:hover:border-blue-200 focus:outline-none focus:ring focus:ring-blue-400 cursor-pointer"
          >
            View Resume
          </a>
        </div>

        {/* Awards highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="border-l-2 border-blue-500 pl-4">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Work Experience</h4>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Oklahoma Watch, Wyoming Tribune Eagle, CNHI Newspapers, Staunton News Leader, Indiana Daily Student</p>
          </div>
          <div className="border-l-2 border-blue-500 pl-4">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Recognition</h4>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">OK SPJ Reporter of Year (2020), Great Plains Writer of Year (2021), OK SPJ Investigative (2022)</p>
          </div>
          <div className="border-l-2 border-blue-500 pl-4">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Coverage</h4>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Democracy, voting rights, state agencies, oversight, military, criminal justice, healthcare policy, budget analysis</p>
          </div>
        </div>
      </div>

      {/* Large screen layout - broken out left column */}
      <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 items-start">
        <div className="lg:col-span-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Experience
          </h1>

          {/* Resume CTA */}
          <div className="mb-8">
            <a 
              href="/resume" 
              className="inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-blue-800 border-2 border-blue-800 rounded-2xl dark:text-blue-950 dark:bg-blue-50 dark:border-blue-50 hover:bg-blue-600 hover:border-blue-600 active:bg-blue-950 focus:bg-blue-500 dark:hover:bg-blue-200 dark:hover:border-blue-200 focus:outline-none focus:ring focus:ring-blue-400 cursor-pointer"
            >
              View Resume
            </a>
          </div>

          {/* Awards highlights */}
          <div className="space-y-6">
            <div className="border-l-2 border-blue-800 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Work Experience</h4>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Oklahoma Watch, Wyoming Tribune Eagle, CNHI Newspapers, Staunton News Leader, Indiana Daily Student</p>
            </div>
            <div className="border-l-2 border-blue-800 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Recognition</h4>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">OK SPJ Reporter of Year (2020), Great Plains Writer of Year (2021), OK SPJ Investigative (2022)</p>
            </div>
            <div className="border-l-2 border-blue-800 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Coverage</h4>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Democracy, voting rights, state agencies, oversight, military, criminal justice, healthcare policy, budget analysis</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              I was editor-in-chief of <em>The Indiana Daily Student</em> and graduated from Indiana University with a degree in political science and journalism. I spent the next 18 years covering government accountability and investigative stories, most recently with{" "}
              <a 
                href="https://oklahomawatch.org/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors duration-200 underline decoration-2 underline-offset-2"
              >
                Oklahoma Watch
              </a>
              , a nonprofit newsroom focused on democracy and transparency.
            </p>
            
            <p>
              Over nearly two decades, I won state and national awards for investigative reporting, covered everything from city council meetings to statewide campaigns, and specialized in stories that led to policy changes and government reform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}