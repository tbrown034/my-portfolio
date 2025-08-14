"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { clips } from "../../data/journalismClips.js";

export default function Clips() {
  const [displayCount, setDisplayCount] = useState(4);

  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900/50 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section header */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
            Selected Clips
          </h2>
        </div>
        
        <div className="space-y-3 mb-8">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            News Articles
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
            Investigative stories and in-depth reporting on government accountability and policy.
          </p>
        </div>

        {/* Articles grid - indented */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 md:pl-8 lg:pl-12">
        {clips.slice(0, displayCount).map((article, index) => (
          <div key={index} className="group relative">
            {/* Card content - simplified */}
            <div className="relative bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded font-medium">
                      Oklahoma Watch
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">{article.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {article.headline}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {article.text}
                  </p>
                </div>

                {/* Article image - left aligned for horizontal photos */}
                {article.image && (
                  <div className="w-2/3 border border-gray-200 dark:border-gray-600 rounded overflow-hidden shadow-sm bg-white dark:bg-gray-800">
                    <Image
                      alt={`Screenshot for ${article.headline}`}
                      className="w-full h-auto object-center"
                      src={article.image}
                      width={300}
                      height={200}
                    />
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    By Trevor Brown
                  </span>
                  
                  <Link
                    className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200"
                    href={article.siteLink || "https://oklahomawatch.org"}
                    target="_blank"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>

        {/* Show more/fewer buttons */}
        {displayCount < clips.length && (
          <div className="flex justify-center mt-8">
          <button
            className="inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-blue-800 border-2 border-blue-800 rounded-2xl dark:text-blue-950 dark:bg-blue-50 dark:border-blue-50 hover:bg-blue-600 hover:border-blue-600 active:bg-blue-950 focus:bg-blue-500 dark:hover:bg-blue-200 dark:hover:border-blue-200 focus:outline-none focus:ring focus:ring-blue-400 cursor-pointer"
            onClick={() => setDisplayCount((prevCount) => prevCount + 4)}
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
      </div>
    </section>
  );
}