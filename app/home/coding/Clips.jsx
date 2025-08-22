import Image from "next/image";
import Link from "next/link";
import { webProjects } from "@content/coding.js";

export default function Clips() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Subsection header */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
            Selected Projects
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {webProjects.map((project, index) => (
            <div key={index} className="group relative">
              {/* Card content - simplified */}
              <div className="relative bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700">
                {/* Content */}
                <div className="space-y-4 mb-6">
                  <div className="space-y-2">
                    {/* Project type tags */}
                    <div className="flex items-center gap-2 text-xs">
                      {/* Professional/Hobby tag */}
                      <span
                        className={`px-2 py-1 rounded font-medium ${
                          project.type === "Professional"
                            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {project.type}
                      </span>
                      {/* Work in Progress tag */}
                      {project.workInProgress && (
                        <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 rounded font-medium">
                          Work in Progress
                        </span>
                      )}
                    </div>

                    <Link 
                      href={project.siteLink} 
                      target="_blank"
                      className="inline-block hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 cursor-pointer">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <Link
                      className="inline-flex items-center gap-1.5 text-base font-medium text-gray-600 dark:text-gray-400 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200"
                      href={project.githubLink}
                      target="_blank"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Code
                    </Link>
                    <Link
                      className="inline-flex items-center gap-1.5 text-base font-medium text-gray-600 dark:text-gray-400 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200"
                      href={project.siteLink}
                      target="_blank"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Visit
                    </Link>
                  </div>
                </div>

                {/* Smaller image with border - left aligned */}
                <div className="relative">
                  <Link 
                    href={project.siteLink} 
                    target="_blank"
                    className="block w-2/3 cursor-pointer"
                  >
                    <div className="border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300">
                      <div
                        className={`${index % 3 === 0 ? "h-48" : index % 3 === 1 ? "h-40" : "h-56"} overflow-hidden`}
                      >
                        <Image
                          alt={`Screenshot of ${project.title}`}
                          className="w-full h-auto object-top hover:scale-105 transition-transform duration-300"
                          src={project.image}
                          width={400}
                          height={500}
                          sizes="(max-width: 768px) 66vw, (max-width: 1024px) 33vw, 25vw"
                          loading="lazy"
                          quality={85}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
