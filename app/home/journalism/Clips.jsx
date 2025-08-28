"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { clips } from "@content/journalism.js";

export default function Clips() {
  const [showAll, setShowAll] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  const defaultItemCount = isLargeScreen ? 6 : 4;
  // Sort clips by ID to control display order
  const sortedClips = [...clips].sort((a, b) => a.id - b.id);
  const visibleClips = showAll ? sortedClips : sortedClips.slice(0, defaultItemCount);
  
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Subsection header */}
        <div className="border-b border-gray-300 dark:border-slate-600 pb-2 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-slate-400">
            Selected Articles
          </h2>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleClips.map((article, index) => (
            <div key={index} className="group relative">
              {/* Card content - simplified */}
              <div className="relative bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700">
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
                      <span className="text-gray-500 dark:text-slate-400">
                        {article.date}
                      </span>
                    </div>

                    <Link 
                      href={article.siteLink || "https://oklahomawatch.org"} 
                      target="_blank"
                      className="inline-block hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 cursor-pointer">
                        {article.headline}
                      </h3>
                    </Link>
                    <p className="text-gray-600 dark:text-slate-100 leading-relaxed text-sm">
                      {article.text}
                    </p>
                  </div>

                  {/* Link */}
                  <div className="flex gap-4">
                    <Link
                      className="inline-flex items-center gap-1.5 text-base font-medium text-gray-600 dark:text-slate-400 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200"
                      href={article.siteLink || "https://oklahomawatch.org"}
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
                      className="block w-1/2 cursor-pointer"
                    >
                      <div className="border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300">
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
        {sortedClips.length > defaultItemCount && !showAll && (
          <div className="flex justify-center mt-8">
            <button
              className="inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-blue-800 border-2 border-blue-800 rounded-2xl dark:text-blue-950 dark:bg-blue-50 dark:border-blue-50 hover:bg-blue-600 hover:border-blue-600 active:bg-blue-950 focus:bg-blue-500 dark:hover:bg-blue-200 dark:hover:border-blue-200 focus:outline-none focus:ring focus:ring-blue-400 cursor-pointer"
              onClick={() => setShowAll(true)}
            >
              Show More
            </button>
          </div>
        )}
        {showAll && (
          <div className="flex justify-center mt-8">
            <button
              className="inline-flex items-center justify-center px-6 py-3 font-bold text-blue-800 bg-gray-100 border-2 border-gray-300 rounded-2xl dark:text-blue-50 dark:bg-gray-700 dark:border-gray-600 hover:bg-gray-200 hover:border-gray-400 active:bg-gray-300 focus:bg-gray-200 dark:hover:bg-gray-600 dark:hover:border-gray-500 focus:outline-none focus:ring focus:ring-gray-400 cursor-pointer"
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