"use client";
import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <section className="min-h-[50vh] flex flex-col justify-center px-6 py-12 sm:px-8 lg:px-12 xl:px-16 bg-gray-100 dark:bg-gray-800/50">
      <motion.div 
        className="max-w-7xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Section header */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
            My Journey
          </h2>
        </div>

        {/* Main content */}
        <div className="space-y-6 max-w-4xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
            From Breaking News to Breaking Code
          </h3>
          
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              I started as editor-in-chief of <em>The Indiana Daily Student</em> and spent the next 18 years as an investigative journalist. My most recent work focused on democracy and government accountability through a nonprofit organization.
            </p>
            
            <p>
              Looking to expand beyond reporting, I earned a certificate from the <em>University of Oklahoma's</em> Full-Stack Web Development Bootcamp.
            </p>
            
            <p>
              Now I'm working at the intersection of journalism, technology, politics, and AI. With my experience and appetite for the latest in modern web development, let's build something great.
            </p>
          </div>

          {/* Resume & GitHub CTAs */}
          <div className="mt-6 flex gap-3">
            <a 
              href="/resume" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              View Resume
            </a>
            <a 
              href="https://github.com/tbrown034" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border-2 border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              View GitHub
            </a>
          </div>

          {/* Key achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Award-winning</h4>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">State reporter, investigative journalist</p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Technical Skills</h4>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Full-stack development, SEO, PPC</p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Unique Perspective</h4>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Journalist's eye for detail and story</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}