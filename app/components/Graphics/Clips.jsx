"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { dataStories } from "../../data/data-stories.js";

export default function Clips() {
  const [displayCount, setDisplayCount] = useState(4);

  return (
    <section className="max-w-7xl mx-auto px-6 py-8 sm:px-8 lg:px-12 xl:px-16">
      {/* Section header */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-8">
        <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
          Selected Visualizations
        </h2>
      </div>

      <div className="space-y-3 mb-8">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
          Selected Data Stories
        </h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          Interactive charts, maps, and data stories that reveal insights from complex datasets.
        </p>
      </div>

      {/* Visualizations grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {dataStories.slice(0, displayCount).map((story) => (
          <div key={story.id} className="group relative">
            {/* Gradient background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Card content */}
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded font-medium">
                      {story.type}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">{story.year}</span>
                    <span className="text-gray-500 dark:text-gray-400">•</span>
                    <span className="text-gray-500 dark:text-gray-400">{story.publication}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200">
                    {story.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {story.dek}
                  </p>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-2">
                  {story.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Visualization preview */}
                <div className="w-2/3 border border-gray-200 dark:border-gray-600 rounded overflow-hidden shadow-sm bg-white dark:bg-gray-800">
                  <Image
                    alt={story.alt}
                    className="w-full h-auto object-center group-hover:scale-105 transition-transform duration-300"
                    src={story.image}
                    width={300}
                    height={200}
                  />
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Data Visualization
                  </span>
                  
                  <Link
                    className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                    href={story.articleUrl}
                    target="_blank"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show more/fewer buttons */}
      {displayCount < dataStories.length && (
        <div className="flex justify-center mt-8">
          <button
            className="inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-blue-800 border-2 border-blue-800 rounded-2xl dark:text-blue-950 dark:bg-blue-50 dark:border-blue-50 hover:bg-blue-600 hover:border-blue-600 active:bg-blue-950 focus:bg-blue-500 dark:hover:bg-blue-200 dark:hover:border-blue-200 focus:outline-none focus:ring focus:ring-blue-400 cursor-pointer"
            onClick={() => setDisplayCount((prevCount) => prevCount + 2)}
          >
            Show More
          </button>
        </div>
      )}
      {displayCount > 4 && (
        <div className="flex justify-center mt-8">
          <button
            className="inline-flex items-center justify-center px-6 py-3 font-bold text-blue-800 bg-gray-100 border-2 border-gray-300 rounded-2xl dark:text-blue-50 dark:bg-gray-700 dark:border-gray-600 hover:bg-gray-200 hover:border-gray-400 active:bg-gray-300 focus:bg-gray-200 dark:hover:bg-gray-600 dark:hover:border-gray-500 focus:outline-none focus:ring focus:ring-gray-400 cursor-pointer"
            onClick={() => setDisplayCount(4)}
          >
            Show Fewer
          </button>
        </div>
      )}
    </section>
  );
}