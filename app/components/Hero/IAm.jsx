"use client";
import { useState, useEffect } from "react";

export default function IAm() {
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [expandedItems, setExpandedItems] = useState({});

  // Show content immediately, then trigger animations after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-expand all items with staggered animation on page load
  useEffect(() => {
    const expandTimer = setTimeout(() => {
      // Expand all items with staggered timing
      [0, 1, 2].forEach((index) => {
        setTimeout(() => {
          setExpandedItems(prev => ({
            ...prev,
            [index]: true
          }));
        }, index * 200); // 200ms delay between each expansion
      });
    }, 2000); // Start expanding 2 seconds after page load

    return () => clearTimeout(expandTimer);
  }, []);

  const roles = [
    {
      title: "Award-winning Reporter",
      detail: "I've been digging into government records and chasing down sources for 18 years across multiple states. The best stories are usually the ones someone doesn't want you to tell."
    },
    {
      title: "Modern Stack Developer", 
      detail: "I fell into coding because I needed better tools for data analysis, then got hooked on building things. React, Next.js, Tailwind – whatever gets the job done cleanly."
    },
    {
      title: "Data-driven Visualizer",
      detail: "Spreadsheets tell stories, but most people can't read them. I build charts and maps that make the numbers actually mean something to real people."
    }
  ];

  const toggleExpanded = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="space-y-4">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
        <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
          About Me
        </h2>
      </div>
      
      <div className="space-y-6">
        {roles.map((role, index) => {
          const isExpanded = expandedItems[index];
          return (
            <div 
              key={index}
              className="group"
            >
              <div 
                className={`bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-6 transition-all duration-500 ease-out hover:shadow-md cursor-pointer border border-gray-200/60 dark:border-gray-700/60 ${
                  isExpanded ? 'border-l-2 border-l-blue-600 dark:border-l-blue-400' : ''
                }`}
                onClick={() => toggleExpanded(index)}
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-blue-700 dark:text-blue-300">
                    {role.title}
                  </h3>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-1000 ease-out ${
                      isExpanded 
                        ? 'max-h-60 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isExpanded ? `${index * 200}ms` : '0ms'
                    }}
                  >
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base mt-4 font-robotoSlab">
                      {role.detail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}