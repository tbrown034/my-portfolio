import Link from "next/link";
import Image from "next/image";
import { graphics } from "@content/dataProjects.js";

export default function Clips() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Subsection header */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
            Selected Visualizations
          </h2>
        </div>

        {/* Visualizations grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {graphics.map((story, index) => (
            <div key={story.id} className="group relative">
              {/* Card content - simplified */}
              <div className="relative bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700">
                {/* Content */}
                <div className="space-y-4 mb-6">
                  <div className="space-y-2">
                    {/* Program tag and publication info */}
                    <div className="flex items-center gap-2 text-xs">
                      {/* Program tag */}
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded font-medium">
                        {story.program || "Data Viz"}
                      </span>
                      {/* Publication and year */}
                      <span className="text-gray-500 dark:text-gray-400">
                        {story.publication} • {new Date(story.date).getFullYear()}
                      </span>
                    </div>

                    <Link 
                      href={story.siteLink} 
                      target="_blank"
                      className="inline-block hover:text-green-800 dark:hover:text-green-400 transition-colors duration-200"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 cursor-pointer">
                        {story.headline}
                      </h3>
                    </Link>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                      {story.summary || story.text}
                    </p>
                  </div>

                  {/* Link */}
                  <div className="flex gap-4">
                    <Link
                      className="inline-flex items-center gap-1.5 text-base font-medium text-gray-600 dark:text-gray-400 hover:text-green-800 dark:hover:text-green-400 transition-colors duration-200"
                      href={story.siteLink}
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
                      View Visualization
                    </Link>
                  </div>
                </div>

                {/* Smaller image with border - left aligned */}
                <div className="relative">
                  <Link 
                    href={story.siteLink} 
                    target="_blank"
                    className="block w-2/3 cursor-pointer"
                  >
                    <div className="border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300">
                      <div
                        className={`${index % 3 === 0 ? "h-48" : index % 3 === 1 ? "h-40" : "h-56"} overflow-hidden`}
                      >
                        <Image
                          alt={story.headline || "Data visualization"}
                          className="w-full h-auto object-top hover:scale-105 transition-transform duration-300"
                          src={story.image}
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