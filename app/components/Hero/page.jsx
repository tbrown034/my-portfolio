"use client";
import React from "react";
import Mug from "./Mug.jsx";
import HelloWorld from "./HelloWorld.jsx";
import IAm from "./IAm.jsx";

export default function Hero() {
  return (
    <main className="flex flex-col px-6 pb-0 pt-4 sm:px-8 lg:px-12 xl:px-16">
      {/* Vertical layout for mobile only */}
      <section className="flex flex-col gap-4 sm:hidden max-w-3xl mx-auto pt-8">
        <HelloWorld />
        <IAm />
      </section>

      {/* 3-column layout for small screens and up */}
      <section className="hidden sm:flex sm:flex-col max-w-7xl mx-auto sm:pb-8 sm:pt-4 w-full">
        <div className="flex flex-col">
          <HelloWorld />
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-500">
              About Me
            </h2>
            <div className="grid grid-cols-3 gap-6 items-start">
              <IAm showDesktopLayout="large" />
              <div className="col-span-1 flex justify-center">
                <Mug />
              </div>
            </div>
            
            {/* CTA Buttons for desktop */}
            <div className="grid grid-cols-3 gap-6 mt-4">
              <div className="col-span-1 flex gap-3">
                <a 
                  href="/resume" 
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-800 dark:bg-blue-600 rounded-lg hover:bg-blue-900 dark:hover:bg-blue-700 transition-colors duration-200"
                >
                  View Resume
                </a>
                <a 
                  href="https://github.com/tbrown034" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 justify-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 border-2 border-gray-900 dark:border-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
              
              {/* Let's build link spanning last 2 columns */}
              <div className="col-span-2 flex items-end">
                <a href="#about" className="flex items-center justify-between w-full text-gray-900 dark:text-gray-100 group cursor-pointer">
                  <span className="flex items-center gap-3 border-b-2 border-blue-800 dark:border-blue-300 group-hover:border-blue-900 dark:group-hover:border-blue-200 transition-colors duration-200">
                    <span className="text-lg font-bold">Let's build something together</span>
                    <svg 
                      className="w-6 h-6 text-blue-800 dark:text-blue-300 transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-200 animate-gentlePulse" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7v10m0 0H7m10 0L7 7" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Three section cards - positioned at bottom */}
        <div className="grid grid-cols-3 gap-3">
          <a href="#journalism" className="group p-3 border-b-2 border-gray-200 dark:border-gray-700 hover:border-blue-800 dark:hover:border-blue-300 transition-colors">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Investigations</h3>
            <p className="text-xs text-gray-500 dark:text-gray-500">Public records, data analysis</p>
          </a>
          
          <a href="#coding" className="group p-3 border-b-2 border-gray-200 dark:border-gray-700 hover:border-blue-800 dark:hover:border-blue-300 transition-colors">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Development</h3>
            <p className="text-xs text-gray-500 dark:text-gray-500">Next.js, React, TypeScript</p>
          </a>
          
          <a href="/resume" className="group p-3 border-b-2 border-gray-200 dark:border-gray-700 hover:border-blue-800 dark:hover:border-blue-300 transition-colors">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Resume</h3>
            <p className="text-xs text-gray-500 dark:text-gray-500">CV + work samples</p>
          </a>
        </div>
      </section>
    </main>
  );
}
