export default function Intro() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Subsection header */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
            About Working Together
          </h2>
        </div>

        {/* Main content */}
        <div className="max-w-4xl">
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              I'm available for freelance development projects, data visualization work and consulting on digital strategy. Whether you need a website built, data analyzed, or stories told through interactive graphics, I'd love to help bring your vision to life.
            </p>
            
            <p>
              With my background bridging journalism and technology, I bring a unique perspective to projects that need both technical execution and clear communication. I specialize in turning complex information into accessible, engaging experiences.
            </p>
            
            <p>
              I'm also open to full-time employment opportunities, especially those at the intersection of technology and journalism where I can leverage both skill sets to build meaningful products that inform and empower users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}