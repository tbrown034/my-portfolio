export default function Introduction() {
  return (
    <section className="min-h-[50vh] flex flex-col justify-center px-6 py-12 sm:px-8 lg:px-12 xl:px-16 bg-gray-100 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto w-full animate-fadeInUp">
        {/* Section header */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
            My Journey
          </h2>
        </div>

        {/* Main content */}
        <div className="space-y-6 max-w-4xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
            From Copy to Code
          </h3>
          
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              I started as editor-in-chief of <em>Indiana University's</em> student newspaper and spent the next 18-plus years as a journalist in several states. My most recent work was as an investigative reporter with <a href="https://oklahomawatch.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 dark:hover:text-blue-400"><em>Oklahoma Watch</em></a>, a nonprofit newsroom based out of Oklahoma City.
            </p>
            
            <p>
              Looking to expand beyond reporting, I graduated from <a href="https://bootcamp.outreach.ou.edu/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 dark:hover:text-blue-400"><em>OU Outreach's Fullstack Academy Web Development Bootcamp</em></a>, a 260-hour program that honed my skills in modern, full-stack web technologies.
            </p>
            
            <p>
              Now I'm working at the intersection of journalism, technology, politics and AI. I'm particularly interested in LLM integration and exploring use cases that could transform how we gather, verify and distribute information in journalism and political communications.
            </p>
          </div>

          {/* Connect CTAs */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/ViewResume" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white bg-blue-800 border-2 border-blue-800 rounded-2xl dark:text-blue-950 dark:bg-blue-50 dark:border-blue-50 hover:bg-blue-600 hover:border-blue-600 active:bg-blue-950 focus:bg-blue-500 dark:hover:bg-blue-200 dark:hover:border-blue-200 focus:outline-none focus:ring focus:ring-blue-400 cursor-pointer text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Resume
              </a>
              <a 
                href="https://github.com/tbrown034" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-gray-900 bg-white border-2 border-gray-300 rounded-2xl dark:text-gray-100 dark:bg-gray-800 dark:border-gray-600 hover:bg-gray-100 hover:border-gray-400 active:bg-gray-200 focus:bg-gray-100 dark:hover:bg-gray-700 dark:hover:border-gray-500 focus:outline-none focus:ring focus:ring-gray-400 cursor-pointer text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
              Let's build something together
            </p>
          </div>

          {/* Key achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-base">Award-winning</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">State reporter, investigative journalist</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-base">Technical Skills</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Full-stack development, SEO, PPC</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-base">Unique Perspective</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Journalist's eye for detail and story</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}