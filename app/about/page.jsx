"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ResumePage from "./components/ResumePage.jsx";

import Form from "@/app/home/contact/Form";
import Links from "@/app/home/contact/Links";
import SectionNav from "@/components/SectionNav";

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("narrative");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["narrative", "resume", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navTabs = [
    { id: "narrative", label: "Background" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-neutral-900">
      {/* Header */}
      <div className="no-print px-6 sm:px-8 lg:px-12 xl:px-16 py-8 bg-slate-100 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.15em] text-blue-800 dark:text-blue-400 mb-2">
                The Intersection
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat text-gray-900 dark:text-white mb-2">
                About Me & Resume
              </h1>
            </div>
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              &larr; Back to Portfolio
            </Link>
          </div>
          <p className="text-lg text-gray-700 dark:text-neutral-200 max-w-3xl mb-6">
            Award-winning investigative journalist turned web developer —
            15 years in newsrooms, now building tools that turn data into understanding.
          </p>

          {/* Navigation tabs */}
          <SectionNav tabs={navTabs} activeSection={activeSection} />
        </div>
      </div>

      {/* Career Narrative */}
      <section
        id="narrative"
        className="no-print scroll-mt-24 bg-slate-100 dark:bg-neutral-900"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="max-w-4xl flex-1 columns-1 md:columns-2 gap-x-10 text-gray-600 dark:text-neutral-200 leading-relaxed [&>p]:mb-4 [&>p]:break-inside-avoid">
              <p>
                I spent 15 years as an investigative reporter — covering
                statehouses, analyzing public records and building data
                visualizations at newsrooms in Indiana, Virginia, Oklahoma and
                Wyoming. I left journalism voluntarily in 2022 to pursue web
                development full time.
              </p>

              <p>
                The transition wasn't a departure from journalism — it was a
                move deeper into the tools. I'd been building Tableau
                dashboards and Datawrapper charts for years; learning React and
                TypeScript let me build the whole product, not just the graphic.
              </p>

              <p>
                I'm looking for roles where journalism, data and technology
                overlap — news applications, election tools, AI-assisted
                reporting platforms, civic tech or any product that helps people
                understand complex information. I'm also open to general
                frontend and fullstack work, especially at mission-driven
                companies.
              </p>

              <p>
                Outside of work, I follow AI policy closely. I live in
                Bloomington, Indiana, with my dog. I'm a lifelong Cubs fan, a
                distance runner and an IU alum who still reads the{" "}
                <a
                  href="https://www.idsnews.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-800 dark:text-blue-400 underline decoration-1 underline-offset-2 hover:decoration-2 transition-colors duration-200"
                >
                  Indiana Daily Student
                </a>
                .
              </p>
            </div>

            {/* Photo — desktop only */}
            <div className="hidden lg:block w-64 xl:w-72 shrink-0">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden ring-1 ring-gray-200 dark:ring-neutral-700">
                <Image
                  src="/images/trevor-puppy-car.jpeg"
                  alt="Trevor and his dog"
                  fill
                  className="object-cover object-top"
                  sizes="288px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume and Selected Works */}
      <div className="flex flex-col items-center px-2 sm:px-4 md:px-8 py-4 sm:py-8 bg-slate-100 dark:bg-neutral-900">
        {/* Resume */}
        <div id="resume" className="scroll-mt-24 w-full max-w-full overflow-x-auto">
          <ResumePage showGuides={false} />
        </div>

      </div>

      {/* Portfolio Navigation */}
      <div className="no-print w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 mt-12 mb-8">
        <p className="text-lg text-gray-700 dark:text-neutral-200 font-medium mb-6 text-center">
          Explore the full portfolio
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
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
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="no-print bg-white dark:bg-black py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="mb-8">
            <div className="text-sm font-bold uppercase tracking-[0.15em] text-blue-800 dark:text-blue-400 mb-2">
              Let's Work Together
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-montserrat text-gray-900 dark:text-white mb-2">
              Contact
            </h2>
            <p className="text-lg text-gray-700 dark:text-neutral-200 max-w-3xl">
              Open to freelance projects, consulting and full-time opportunities
            </p>
          </div>
          <div className="border-t-2 border-gray-900 dark:border-white w-full mb-8" />
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            {/* Form — primary */}
            <div className="flex-1 min-w-0">
              <Form />
            </div>
            {/* Sidebar — photo + links */}
            <div className="w-full lg:w-80 xl:w-96 shrink-0">
              <div className="flex flex-row items-center gap-6 lg:flex-col lg:items-start lg:gap-8 p-6 lg:p-0 rounded-lg border border-gray-200 dark:border-neutral-700 lg:border-0 bg-gray-50 dark:bg-neutral-900 lg:bg-transparent dark:lg:bg-transparent">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 shrink-0 rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-neutral-700">
                  <Image
                    src="/images/trevor-puppy-selfie.jpeg"
                    alt="Trevor and his dog"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 128px, 192px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <Links />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top */}
      <section className="no-print bg-white dark:bg-black py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex justify-center gap-4">
            <a
              href="#narrative"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-blue-800 dark:bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 hover:shadow-lg hover:-translate-y-1 active:bg-blue-900 dark:active:bg-blue-700 active:shadow-sm active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              &uarr; Back to Top
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-gray-800 dark:text-gray-100 bg-white dark:bg-neutral-900 border-2 border-gray-400 dark:border-gray-500 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-neutral-800 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-800 dark:hover:text-blue-400 hover:shadow-md hover:-translate-y-0.5 active:bg-gray-100 dark:active:bg-gray-950 active:shadow-none active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              &larr; Back to Homepage
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
