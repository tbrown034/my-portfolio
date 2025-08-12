"use client";
import { useState, useEffect } from "react";

export default function IAm() {
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(true);

  // Show content immediately, then trigger animations after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const roles = [
    {
      title: "Award-winning Reporter",
      detail: "18 years covering government, politics, data analysis, and accountability journalism across multiple states"
    },
    {
      title: "Modern Stack Developer", 
      detail: "Frontend: React, Next.js, JavaScript, TypeScript, Tailwind • Backend: Node.js, PostgreSQL"
    },
    {
      title: "Data-driven Visualizer",
      detail: "Interactive charts, maps and dashboards that tell stories"
    }
  ];

  return (
    <section className="space-y-4">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
        <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
          About Me
        </h2>
      </div>
      
      <div className="space-y-3">
        {roles.map((role, index) => (
          <div 
            key={index}
            className={`px-4 py-3 mx-2 rounded-lg transition-all duration-[2000ms] hover:-translate-y-0.5 cursor-default ${
              isVisible ? 'bg-blue-500/[0.05] dark:bg-blue-400/[0.10] hover:bg-blue-500/[0.08] dark:hover:bg-blue-400/[0.15] opacity-100 translate-y-0' : 'bg-transparent hover:bg-transparent opacity-100 translate-y-0'
            }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: isVisible ? `${300 + index * 400}ms` : '0ms'
            }}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-blue-700 dark:text-blue-300 pl-2">
              {role.title}
            </h3>
            
            <div 
              className={`overflow-hidden transition-all duration-[2000ms] max-h-40 opacity-100`}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base mt-2 pl-4 border-l-2 border-gray-400 dark:border-gray-500 font-medium">
                {role.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}