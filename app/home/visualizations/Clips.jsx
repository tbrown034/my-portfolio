"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { graphics } from "@content/visualizations.js";

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
  const visibleGraphics = showAll ? graphics : graphics.slice(0, defaultItemCount);
  
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Subsection header */}
        <div className="border-b border-gray-300 dark:border-neutral-700 pb-2 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-neutral-400">
            Selected Visualizations
          </h2>
        </div>

        {/* Visualizations grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleGraphics.map((story, index) => (
            <div key={story.id} className="group relative">
              {/* Card content - simplified */}
              <div className="relative bg-white dark:bg-neutral-800 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700">
                {/* Content */}
                <div className="space-y-4 mb-6">
                  <div className="space-y-2">
                    {/* Program tag and publication info */}
                    <div className="flex items-center gap-2 text-xs">
                      {/* Program tag */}
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded font-medium">
                        {story.program || "Visualization"}
                      </span>
                      {/* Publication and year */}
                      <span className="text-gray-500 dark:text-neutral-400">
                        {story.publication} • {new Date(story.date).getFullYear()}
                      </span>
                    </div>

                    <Link 
                      href={story.graphicLink && !Array.isArray(story.graphicLink) ? story.graphicLink : story.graphicLink?.[0] || story.siteLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block hover:text-green-800 dark:hover:text-green-400 transition-colors duration-200"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 cursor-pointer">
                        {story.headline}
                      </h3>
                    </Link>
                    <p className="text-gray-600 dark:text-neutral-100 leading-relaxed text-sm">
                      {story.summary || story.text}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    {/* Visualization link(s) */}
                    {story.graphicLink && (
                      Array.isArray(story.graphicLink) ? (
                        story.graphicLink.map((link, i) => (
                          <Link
                            key={i}
                            className="inline-flex items-center gap-1.5 text-base font-medium text-gray-600 dark:text-neutral-400 hover:text-green-800 dark:hover:text-green-400 transition-colors duration-200"
                            href={link}
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
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                            View Graphic {story.graphicLink.length > 1 ? i + 1 : ''}
                          </Link>
                        ))
                      ) : (
                        <Link
                          className="inline-flex items-center gap-1.5 text-base font-medium text-gray-600 dark:text-gray-400 hover:text-green-800 dark:hover:text-green-400 transition-colors duration-200"
                          href={story.graphicLink}
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
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                          View Graphic
                        </Link>
                      )
                    )}
                    
                    {/* Article link */}
                    <Link
                      className="inline-flex items-center gap-1.5 text-base font-medium text-gray-600 dark:text-gray-400 hover:text-green-800 dark:hover:text-green-400 transition-colors duration-200"
                      href={story.siteLink}
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
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Read Article
                    </Link>
                  </div>
                </div>

                {/* Smaller image with border - left aligned */}
                <div className="relative">
                  <Link 
                    href={story.graphicLink && !Array.isArray(story.graphicLink) ? story.graphicLink : story.graphicLink?.[0] || story.siteLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-1/2 cursor-pointer"
                  >
                    <div className="border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-neutral-800 hover:shadow-xl transition-shadow duration-300">
                      <div
                        className="h-32 overflow-hidden"
                      >
                        <Image
                          alt={story.headline || "Visualization"}
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

        {/* Show More/Less button */}
        {graphics.length > defaultItemCount && !showAll && (
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