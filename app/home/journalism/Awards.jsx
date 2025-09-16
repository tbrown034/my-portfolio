"use client";
import { useState } from "react";
import { awards } from "@content/awards.js";

export default function Awards() {
  const [showAll, setShowAll] = useState(false);
  
  // Get unique years and sort them descending
  const years = [...new Set(awards.map(award => award.year))].sort((a, b) => b - a);
  
  // Filter years to show (2022-2021 by default, all if showAll is true)
  const visibleYears = showAll ? years : years.filter(year => year >= 2021 && year <= 2022);
  const hiddenYears = years.filter(year => year < 2021);
  
  return (
    <section className="pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Subsection header */}
        <div className="border-b border-gray-300 dark:border-gray-600 pb-2 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
            Recognition & Awards
          </h2>
        </div>

        {/* Awards by year */}
        <div className="space-y-8">
          {visibleYears.map(year => (
            <div key={year}>
              {/* Year header */}
              <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-4">
                {year}
              </h3>
              
              {/* Awards for this year */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {awards
                  .filter(award => award.year === year)
                  .map((award, index) => (
                    <div 
                      key={index}
                      className="border-l-2 border-blue-800 dark:border-blue-400 pl-4 py-2 hover:pl-6 transition-all duration-300"
                    >
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                          {award.award}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {award.article}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          {award.organization}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less button */}
        {hiddenYears.length > 0 && !showAll && (
          <div className="flex justify-center mt-6">
            <button
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 border-2 border-gray-400 dark:border-gray-500 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-800 dark:hover:text-blue-400 hover:shadow-md hover:-translate-y-0.5 active:bg-gray-100 dark:active:bg-gray-950 active:shadow-none active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer"
              onClick={() => setShowAll(true)}
            >
              Show More
            </button>
          </div>
        )}
        {showAll && (
          <div className="flex justify-center mt-6">
            <button
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-blue-800 dark:bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 hover:shadow-lg hover:-translate-y-1 active:bg-blue-900 dark:active:bg-blue-700 active:shadow-sm active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer"
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