"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { clips } from "@content/journalism.js";

export default function Clips() {
  const [showAll, setShowAll] = useState(false);

  // Sort clips by ID to control display order
  const sortedClips = [...clips].sort((a, b) => a.id - b.id);
  const visibleClips = showAll ? sortedClips : sortedClips.slice(0, 6);
  
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Subsection header */}
        <div className="border-b border-gray-300 dark:border-neutral-700 pb-2 mb-6">
          <h2 className="text-sm uppercase tracking-wider font-semibold text-gray-600 dark:text-neutral-400">
            Selected Articles
          </h2>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleClips.map((article, index) => (
            <div key={index} className={`group relative${!showAll && index >= 4 ? " hidden lg:block" : ""}`}>
              {/* Card content - simplified */}
              <div className="relative bg-white dark:bg-neutral-800 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700">
                {/* Content */}
                <div className="space-y-4 mb-6">
                  <div className="space-y-2">
                    {/* Publication and date */}
                    <div className="flex items-center gap-2 text-xs">
                      {/* Publication tag */}
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded font-medium">
                        {article.publication || "Oklahoma Watch"}
                      </span>
                      {/* Date */}
                      <span className="text-gray-500 dark:text-neutral-400">
                        {article.date}
                      </span>
                    </div>

                    <Link 
                      href={article.siteLink || "https://oklahomawatch.org"} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 cursor-pointer">
                        {article.headline}
                      </h3>
                    </Link>
                    <p className="text-gray-600 dark:text-neutral-100 leading-relaxed text-sm">
                      {article.text}
                    </p>
                  </div>

                  {/* Link */}
                  <div className="flex gap-4">
                    <Link
                      className="inline-flex items-center gap-1.5 text-base font-medium text-gray-600 dark:text-neutral-400 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200"
                      href={article.siteLink || "https://oklahomawatch.org"}
                      target="_blank"
                      rel="noopener noreferrer"
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
                      Read Article
                    </Link>
                  </div>
                </div>

                {/* Smaller image with border - left aligned */}
                {article.image && (
                  <div className="relative">
                    <Link 
                      href={article.siteLink || "https://oklahomawatch.org"} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-1/2 cursor-pointer"
                    >
                      <div className="border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-neutral-800 hover:shadow-xl transition-shadow duration-300">
                        <div
                          className="h-32 overflow-hidden"
                        >
                          <Image
                            alt={`Screenshot for ${article.headline}`}
                            className="w-full h-auto object-top hover:scale-105 transition-transform duration-300"
                            src={article.image}
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
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less button */}
        {sortedClips.length > 4 && !showAll && (
          <div className="flex justify-center mt-8">
            <button
              className="inline-flex items-center justify-center px-6 py-2.5 font-semibold text-white bg-blue-800 dark:bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 hover:shadow-lg hover:-translate-y-1 active:bg-blue-900 dark:active:bg-blue-700 active:shadow-sm active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer"
              onClick={() => setShowAll(true)}
            >
              Show More
            </button>
          </div>
        )}
        {showAll && (
          <div className="flex justify-center mt-8">
            <button
              className="inline-flex items-center justify-center px-6 py-2.5 font-semibold text-gray-800 dark:text-gray-100 bg-white dark:bg-neutral-900 border-2 border-gray-400 dark:border-gray-500 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-800 dark:hover:text-blue-400 hover:shadow-md hover:-translate-y-0.5 active:bg-gray-100 dark:active:bg-gray-950 active:shadow-none active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer"
              onClick={() => setShowAll(false)}
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}