import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";

export default function Contact() {
  return (
    <section className="w-full subSection min-h-[50vh] flex flex-col justify-center px-6 sm:px-8 lg:px-12 xl:px-16">
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
              I'm available for freelance development projects, data
              visualization work and consulting on digital strategy. Whether you
              need a website built, data analyzed, or stories told through
              interactive graphics, I'd love to help.
            </p>

            <p>
              Withd my background bridging journalism and technology, I bring a
              unique perspective to projects that need both technical execution
              and clear communication.
            </p>

            <p>
              I'm also open to full-time employment opportunities, especially
              those at the intersection of technology and journalism where I can
              leverage both skill sets to build meaningful products.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/resume"
              className="inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-blue-800 border-2 border-blue-800 rounded-2xl dark:text-blue-950 dark:bg-blue-50 dark:border-blue-50 hover:bg-blue-600 hover:border-blue-600 active:bg-blue-950 focus:bg-blue-500 dark:hover:bg-blue-200 dark:hover:border-blue-200 focus:outline-none focus:ring focus:ring-blue-400 cursor-pointer"
            >
              View Resume
            </a>
            <a
              href="https://github.com/trevorbrown-school"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-bold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 active:bg-gray-200 dark:active:bg-gray-900 focus:bg-gray-100 dark:focus:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-400 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Contact Form Section */}
          <div className="mt-8">
            {/* Form header */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
              <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
                Send a Message
              </h2>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>

          {/* Contact Links */}
          <ContactLinks />
        </div>
      </div>
    </section>
  );
}
