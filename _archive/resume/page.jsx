"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ResumePage from "./components/ResumePage.jsx";
import ClipsPage from "./components/ClipsPage.jsx";
import Form from "@/app/home/contact/Form";
import Links from "@/app/home/contact/Links";

export default function ResumePageLayout() {
  const [activeSection, setActiveSection] = useState("resume");

  useEffect(() => {
    const handleScroll = () => {
      const resumeSection = document.getElementById("resume-section");
      const projectsSection = document.getElementById("projects-section");

      if (!resumeSection || !projectsSection) return;

      const scrollPosition = window.scrollY + 150; // Offset for header
      const resumeTop = resumeSection.offsetTop;
      const projectsTop = projectsSection.offsetTop;

      if (scrollPosition >= projectsTop) {
        setActiveSection("projects");
      } else {
        setActiveSection("resume");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-neutral-900">

      {/* Header Section - Editorial Style */}
      <div className="no-print px-6 sm:px-8 lg:px-12 xl:px-16 py-8 bg-slate-100 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-blue-800 dark:text-blue-400 mb-2">
                  Quick View
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat text-gray-900 dark:text-white mb-2">
                  Resume & Highlights
                </h2>
              </div>
              <Link
                href="/"
                className="text-sm font-medium text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                ← Back to Portfolio
              </Link>
            </div>
            <p className="text-lg text-gray-700 dark:text-neutral-200 max-w-3xl mb-6">
              Quick summary of my professional experience and selected work.
            </p>
            {/* Navigation tabs */}
            <div className="flex gap-8 border-b-2 border-gray-900 dark:border-white pt-4">
              <a
                href="#resume-section"
                className={`pb-2 text-sm font-medium -mb-0.5 transition-colors duration-200 hover:underline ${
                  activeSection === "resume"
                    ? "text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white"
                    : "text-gray-600 dark:text-neutral-200 border-b-2 border-transparent hover:border-neutral-700 dark:hover:border-neutral-600"
                }`}
              >
                Resume
              </a>
              <a
                href="#projects-section"
                className={`pb-2 text-sm font-medium -mb-0.5 transition-colors duration-200 hover:underline ${
                  activeSection === "projects"
                    ? "text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white"
                    : "text-gray-600 dark:text-neutral-200 border-b-2 border-transparent hover:border-neutral-700 dark:hover:border-neutral-600"
                }`}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="pb-2 text-sm font-medium -mb-0.5 transition-colors duration-200 hover:underline text-gray-600 dark:text-neutral-200 border-b-2 border-transparent hover:border-neutral-700 dark:hover:border-neutral-600"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* Resume and Selected Works Container - Same background as header */}
      <div className="flex flex-col items-center px-2 sm:px-4 md:px-8 py-4 sm:py-8 bg-slate-100 dark:bg-neutral-900">
        {/* Resume Component */}
        <div id="resume-section" className="scroll-mt-24 w-full max-w-full overflow-x-auto">
          <ResumePage showGuides={false} />
        </div>

        {/* Selected Works Component */}
        <div id="projects-section" className="scroll-mt-24 mt-8 w-full max-w-full overflow-x-auto">
          <ClipsPage showGuides={false} />
        </div>

        {/* Portfolio Navigation */}
        <div className="no-print w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 mt-12 mb-8">
          <p className="text-lg text-gray-700 dark:text-neutral-200 font-medium mb-6 text-center">
            Explore the full portfolio
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link
              href="/journalism"
              className="group p-4 border-b-2 border-gray-300 dark:border-neutral-700 hover:border-blue-800 dark:hover:border-blue-400 transition-all duration-200"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors duration-200 mb-1">
                Journalism & Data
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-400">
                Investigations, visualizations, public records
              </p>
            </Link>

            <Link
              href="/projects"
              className="group p-4 border-b-2 border-gray-300 dark:border-neutral-700 hover:border-blue-800 dark:hover:border-blue-400 transition-all duration-200"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors duration-200 mb-1">
                Web Development
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-400">
                Next.js, React, TypeScript
              </p>
            </Link>

            <Link
              href="/#contact"
              className="group p-4 border-b-2 border-gray-300 dark:border-neutral-700 hover:border-blue-800 dark:hover:border-blue-400 transition-all duration-200"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors duration-200 mb-1">
                Contact
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-400">
                Get in touch
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Form + Direct Contact Section - Different background */}
      <section id="contact" className="no-print bg-white dark:bg-black py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="[&_section>div>div:first-child]:hidden flex flex-col gap-8">
            <Form />
            <Links />
          </div>
        </div>
      </section>

      {/* Back to Top Section - Same background as contact */}
      <section className="no-print bg-white dark:bg-black py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex justify-center gap-4">
            <a
              href="#resume-section"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-blue-800 dark:bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 hover:shadow-lg hover:-translate-y-1 active:bg-blue-900 dark:active:bg-blue-700 active:shadow-sm active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              ↑ Back to Top
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-gray-800 dark:text-gray-100 bg-white dark:bg-neutral-900 border-2 border-gray-400 dark:border-gray-500 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-neutral-800 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-800 dark:hover:text-blue-400 hover:shadow-md hover:-translate-y-0.5 active:bg-gray-100 dark:active:bg-gray-950 active:shadow-none active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              ← Back to Homepage
            </Link>
          </div>
        </div>
      </section>

      {/* Print styles */}
      <style jsx global>{`
        @page {
          size: 8.5in 11in;
          margin: 0;
        }

        @media print {
          .no-print { display: none !important; }
          html, body { background: #fff !important; }
        }
      `}</style>
    </main>
  );
}