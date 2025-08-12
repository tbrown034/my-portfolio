import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function IAm() {
  const [expandedItems, setExpandedItems] = useState(new Set());
  
  // Auto-expand all items on mount with staggered delay for gentle greeting
  useEffect(() => {
    const timer1 = setTimeout(() => setExpandedItems(new Set([0])), 500);
    const timer2 = setTimeout(() => setExpandedItems(new Set([0, 1])), 900);
    const timer3 = setTimeout(() => setExpandedItems(new Set([0, 1, 2])), 1300);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Remove interactivity - these are always expanded after initial animation
  // Keeping functions for potential future use
  const handleClick = (index) => {
    // Disabled - items auto-expand on load
  };

  const handleMouseEnter = (index) => {
    // Disabled - no hover effects
  };

  const roles = [
    {
      title: "Award-winning Reporter",
      detail: "18 years covering government, politics, data analysis, and accountability journalism across multiple states"
    },
    {
      title: "Modern Stack Developer", 
      detail: "Full-stack: Next.js, React, TypeScript, PostgreSQL"
    },
    {
      title: "Data-driven Visualizer",
      detail: "Interactive charts, maps, and dashboards that tell stories"
    }
  ];

  return (
    <motion.section 
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
    >
      <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
        <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
          About Me
        </h2>
      </div>
      
      <div className="space-y-3">
        {roles.map((role, index) => {
          const isExpanded = expandedItems.has(index);
          return (
            <motion.div 
              key={index}
              className="px-4 py-3 -mx-4 rounded-lg"
              animate={{
                backgroundColor: isExpanded 
                  ? "rgba(59, 130, 246, 0.03)" 
                  : "transparent"
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <motion.h3 
                className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400"
                animate={{
                  x: isExpanded ? 2 : 0
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {role.title}
              </motion.h3>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.p 
                    className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base mt-2 pl-4 border-l-2 border-blue-500/20"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: "easeInOut",
                      opacity: { duration: 0.6, delay: 0.1 }
                    }}
                  >
                    {role.detail}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
