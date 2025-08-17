export default function Introduction() {
  return (
    <section className="min-h-[50vh] flex flex-col justify-center px-6 py-12 sm:px-8 lg:px-12 xl:px-16 bg-white dark:bg-blue-950">
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
              I started as editor-in-chief of <a href="https://www.idsnews.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200">Indiana University's student newspaper</a> and spent the next 18-plus years as a journalist in several states. My most recent work was as the statehouse reporter for the <a href="https://www.wyomingnews.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200">Wyoming Tribune Eagle</a> and as an investigative reporter with <a href="https://oklahomawatch.org" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200">Oklahoma Watch</a>, a nonprofit newsroom based out of Oklahoma City.
            </p>
            
            <p>
              Looking to expand beyond reporting, I graduated from <a href="https://bootcamp.outreach.ou.edu/" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200">OU Outreach's Fullstack Academy Web Development Bootcamp</a>, a 260-hour program that honed my skills in modern, full-stack web technologies.
            </p>
            
            <p>
              Now I'm working at the intersection of journalism, technology, politics and AI. I'm particularly interested in LLM integration and exploring use cases that could transform how we gather, verify and distribute information in journalism and political communications.
            </p>
          </div>

          {/* Key achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="border-l-2 border-blue-800 pl-4 transition-all duration-300 hover:pl-6 hover:border-blue-600 hover:scale-105 group cursor-default">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors duration-300">Award-winning</h4>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">State reporter, investigative journalist</p>
            </div>
            <div className="border-l-2 border-blue-800 pl-4 transition-all duration-300 hover:pl-6 hover:border-blue-600 hover:scale-105 group cursor-default">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors duration-300">Technical Skills</h4>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Full-stack development, SEO, PPC</p>
            </div>
            <div className="border-l-2 border-blue-800 pl-4 transition-all duration-300 hover:pl-6 hover:border-blue-600 hover:scale-105 group cursor-default">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors duration-300">Unique Perspective</h4>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Journalist's eye for detail and story</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}