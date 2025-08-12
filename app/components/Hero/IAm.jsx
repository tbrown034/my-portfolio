"use client";
import { useState, useEffect } from "react";

export default function IAm() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations after component mounts
  useEffect(() => {
    setIsVisible(true);
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
    <section className={`space-y-4 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
             style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
      <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
        <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
          About Me
        </h2>
      </div>
      
      <div className="space-y-3">
        {roles.map((role, index) => (
          <div 
            key={index}
            className={`px-4 py-3 -mx-4 rounded-lg bg-blue-500/[0.03] dark:bg-blue-400/[0.08] transition-all duration-500 hover:bg-blue-500/[0.06] dark:hover:bg-blue-400/[0.12] hover:-translate-y-0.5 cursor-default ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
            }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: isVisible ? `${150 + index * 80}ms` : '0ms'
            }}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-blue-700 dark:text-blue-300 pl-2">
              {role.title}
            </h3>
            
            <div 
              className={`overflow-hidden transition-all duration-400 ${
                isVisible ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: isVisible ? `${200 + index * 80}ms` : '0ms'
              }}
            >
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base mt-2 pl-4 border-l-2 border-blue-500/20">
                {role.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}