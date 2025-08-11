import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function IAm() {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const handleClick = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const handleMouseEnter = (index) => {
    const newExpanded = new Set(expandedItems);
    if (!newExpanded.has(index)) {
      newExpanded.add(index);
      setExpandedItems(newExpanded);
    }
  };

  const roles = [
    {
      title: "Investigative Journalist",
      detail: "18 years exposing corruption"
    },
    {
      title: "Data-driven Developer", 
      detail: "Full-stack: Next.js, React, TypeScript, PostgreSQL"
    },
    {
      title: "Ship-focused Builder",
      detail: "Knows when to use AI. Focused on what ships"
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
          About
        </h2>
      </div>
      
      <div className="space-y-3">
        {roles.map((role, index) => {
          const isExpanded = expandedItems.has(index);
          return (
            <motion.div 
              key={index}
              className="cursor-pointer px-4 py-3 -mx-4 rounded-lg"
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              animate={{
                backgroundColor: isExpanded 
                  ? "rgba(59, 130, 246, 0.03)" 
                  : "transparent"
              }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.h3 
                className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400"
                animate={{
                  x: isExpanded ? 2 : 0
                }}
                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {role.title}
              </motion.h3>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.p 
                    className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base mt-2 pl-4 border-l-2 border-blue-500/20"
                    initial={{ opacity: 0, height: 0, y: -5 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -5 }}
                    transition={{ 
                      duration: 1.2, 
                      ease: [0.25, 0.1, 0.25, 1],
                      opacity: { duration: 0.8 }
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
