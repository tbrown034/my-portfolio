"use client";
import React from "react";
import Mug from "./Mug.jsx";
import HelloWorld from "./HelloWorld.jsx";
import IAm from "./IAm.jsx";

export default function Hero() {
  return (
    <main className="min-h-screen flex flex-col justify-start px-6 py-4 sm:px-8 lg:px-12 xl:px-16">
      {/* Vertical layout for mobile only */}
      <section className="flex flex-col gap-4 sm:hidden max-w-3xl mx-auto pt-8">
        <HelloWorld />
        <IAm />
      </section>

      {/* 3-column layout for small screens and up */}
      <section className="hidden sm:flex sm:flex-col sm:gap-6 max-w-7xl mx-auto pt-12">
        <HelloWorld />
        <div className="space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-500">
            About Me
          </h2>
          <div className="grid grid-cols-3 gap-8 items-start">
            <IAm showDesktopLayout="large" />
            <div className="col-span-1 flex justify-center">
              <Mug />
            </div>
          </div>
          
          {/* CTA Buttons for desktop */}
          <div className="flex gap-3 mt-8">
            <a 
              href="/resume" 
              className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
            >
              View Resume
            </a>
            <a 
              href="https://github.com/tbrown034" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 font-semibold text-gray-900 dark:text-gray-100 border-2 border-gray-900 dark:border-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
          
          {/* Let's build something together link */}
          <div className="flex items-center gap-2 text-base font-semibold text-gray-900 dark:text-gray-100 group cursor-pointer mt-6">
            <span className="border-b-2 border-gray-900 dark:border-gray-100 group-hover:border-blue-600 dark:group-hover:border-blue-400 transition-colors duration-200">
              Let's build something together
            </span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10v10M17 7L7 17" />
            </svg>
          </div>
          
          {/* Three section cards */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <a href="#journalism" className="group p-4 border-b-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Investigations</h3>
              <p className="text-sm text-gray-500 dark:text-gray-500">Public records, data analysis</p>
            </a>
            
            <a href="#coding" className="group p-4 border-b-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Development</h3>
              <p className="text-sm text-gray-500 dark:text-gray-500">Next.js, React, TypeScript</p>
            </a>
            
            <a href="/resume" className="group p-4 border-b-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Resume</h3>
              <p className="text-sm text-gray-500 dark:text-gray-500">CV + work samples</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
