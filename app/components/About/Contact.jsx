import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  BlueskyIcon,
} from "../Icons/SocialIcons";

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

            <p>
              I'm also open to full-time employment opportunities, especially those at the intersection of technology and journalism where I can leverage both skill sets to build meaningful products.
            </p>
          </div>

          {/* Social icons - clean and spaced */}
          <div className="flex items-center gap-8 mt-8">
            <a 
              href="mailto:trevorbrown.web@gmail.com" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <EmailIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/tbrown034" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/trevorabrown/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://bsky.app/profile/trevorthedev.bsky.social" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Bluesky"
            >
              <BlueskyIcon className="w-6 h-6" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}