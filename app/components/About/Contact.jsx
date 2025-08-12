export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:px-12 xl:px-16">
      {/* Section header - matching Hero style */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-8">
        <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
          Contact
        </h2>
      </div>

      {/* Clean header and content */}
      <div className="max-w-4xl space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
          Let's Work Together
        </h1>
        
        <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            I'm available for freelance development projects, data visualization work, and consulting on digital strategy. Whether you need a website built, data analyzed, or stories told through interactive graphics, I'd love to help.
          </p>
          
          <p>
            With my background bridging journalism and technology, I bring a unique perspective to projects that need both technical execution and clear communication.
          </p>
        </div>

        {/* Contact methods */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Email</h4>
            <a 
              href="mailto:trevorbrown.web@gmail.com"
              className="block text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
            >
              trevorbrown.web@gmail.com
            </a>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">GitHub</h4>
            <a 
              href="https://github.com/tbrown034"
              target="_blank"
              className="block text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
            >
              github.com/tbrown034
            </a>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">LinkedIn</h4>
            <a 
              href="https://www.linkedin.com/in/trevorabrown/"
              target="_blank"
              className="block text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
            >
              linkedin.com/in/trevorabrown
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:trevorbrown.web@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Get In Touch
            </a>
            <a 
              href="/resume"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-medium rounded-lg transition-colors duration-200"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}