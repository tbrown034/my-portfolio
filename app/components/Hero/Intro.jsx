import { motion } from "framer-motion";
import Link from "next/link";

export default function Intro() {
  const work = [
    { 
      href: "#journalism", 
      title: "Investigations",
      description: "Public records, data analysis" 
    },
    { 
      href: "#coding", 
      title: "Development",
      description: "Next.js, React, TypeScript"
    },
    { 
      href: "#shipping", 
      title: "Recent ships",
      description: "Apps that solve real problems"
    }
  ];

  return (
    <motion.section 
      className="space-y-4 sm:space-y-5 mt-6 sm:mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
    >
      {/* Work sections - clean grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {work.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="group block space-y-1 pb-3 border-b border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-200"
          >
            <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
              {item.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              {item.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Contact - simple */}
      <div className="flex gap-6 text-sm">
        <a 
          href="mailto:trevorbrown.web@gmail.com"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          Email
        </a>
        <a 
          href="https://github.com/tbrown034"
          target="_blank"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/trevorabrown/"
          target="_blank"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          LinkedIn
        </a>
      </div>
    </motion.section>
  );
}
