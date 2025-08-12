export default function Contact() {
  return (
    <section className="min-h-[50vh] flex flex-col justify-center px-6 py-12 sm:px-8 lg:px-12 xl:px-16 bg-gray-100 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto w-full animate-fadeInUp">
        {/* Section header */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
            Contact
          </h2>
        </div>

        {/* Main content */}
        <div className="space-y-6 max-w-4xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Let's Work Together
          </h3>
        
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              I'm available for freelance development projects, data visualization work, and consulting on digital strategy. Whether you need a website built, data analyzed, or stories told through interactive graphics, I'd love to help.
            </p>
            
            <p>
              With my background bridging journalism and technology, I bring a unique perspective to projects that need both technical execution and clear communication.
            </p>
          </div>

          {/* Contact methods with vertical lines */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Email</h4>
              <a 
                href="mailto:trevorbrown.web@gmail.com"
                className="text-xs text-gray-500 dark:text-gray-500 mt-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Contact
              </a>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">GitHub</h4>
              <a 
                href="https://github.com/tbrown034"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 dark:text-gray-500 mt-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">LinkedIn</h4>
              <a 
                href="https://www.linkedin.com/in/trevorabrown/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 dark:text-gray-500 mt-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-3">
            <a 
              href="mailto:trevorbrown.web@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-blue-800 border-2 border-blue-800 rounded-2xl dark:text-blue-950 dark:bg-blue-50 dark:border-blue-50 hover:bg-blue-600 hover:border-blue-600 active:bg-blue-950 focus:bg-blue-500 dark:hover:bg-blue-200 dark:hover:border-blue-200 focus:outline-none focus:ring focus:ring-blue-400 cursor-pointer"
            >
              Get In Touch
            </a>
            <a 
              href="/resume"
              className="inline-flex items-center justify-center px-6 py-3 font-bold text-blue-800 bg-gray-100 border-2 border-gray-300 rounded-2xl dark:text-blue-50 dark:bg-gray-700 dark:border-gray-600 hover:bg-gray-200 hover:border-gray-400 active:bg-gray-300 focus:bg-gray-200 dark:hover:bg-gray-600 dark:hover:border-gray-500 focus:outline-none focus:ring focus:ring-gray-400 cursor-pointer"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}