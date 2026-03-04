"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ResumePage from "./components/ResumePage.jsx";

import Form from "@/app/home/contact/Form";
import Links from "@/app/home/contact/Links";

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
                About Me
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
          <div className="flex gap-8 border-b-2 border-gray-900 dark:border-white pt-4">
            {navTabs.map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className={`pb-2 text-sm font-medium -mb-0.5 transition-colors duration-200 ${
                  activeSection === tab.id
                    ? "text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white"
                    : "text-gray-500 dark:text-neutral-400 border-b-2 border-transparent hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white"
                }`}
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Career Narrative */}
      <section
        id="narrative"
        className="no-print scroll-mt-24 bg-slate-100 dark:bg-neutral-900"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="max-w-4xl flex-1 space-y-4 text-gray-600 dark:text-neutral-200 leading-relaxed">
              <p>
                My journalism career began at{" "}
                <a
                  href="https://www.idsnews.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-800 dark:text-blue-400 underline decoration-1 underline-offset-2 hover:decoration-2 transition-colors duration-200"
                >
                  Indiana University
                </a>
                , where I was editor-in-chief of The Indiana Daily Student and
                graduated with bachelor's degrees in political science and
                journalism. I then spent 15-plus years reporting in several states,
                most recently as the statehouse reporter for the{" "}
                <a
                  href="https://www.wyomingnews.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-800 dark:text-blue-400 underline decoration-1 underline-offset-2 hover:decoration-2 transition-colors duration-200"
                >
                  Wyoming Tribune Eagle
                </a>{" "}
                and as an investigative reporter with{" "}
                <a
                  href="https://oklahomawatch.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-800 dark:text-blue-400 underline decoration-1 underline-offset-2 hover:decoration-2 transition-colors duration-200"
                >
                  Oklahoma Watch
                </a>
                , a nonprofit newsroom based out of Oklahoma City.
              </p>

              <p>
                My reporting has led to policy changes, legislative reforms and
                increased government transparency. From uncovering gaps in
                racial profiling enforcement to investigating hospital billing
                practices, I've
                specialized in stories that serve the public interest and hold
                institutions accountable.
              </p>

              <p>
                I've always been a data-driven reporter — from learning Excel
                to building visualizations in Datawrapper, Tableau and Flourish.
                Visual storytelling has been a constant thread in my journalism career.
                Now I use tools, including JavaScript and Python libraries, to
                transform datasets into stories that reveal patterns, trends and
                insights.
              </p>

              <p>
                Looking to expand beyond reporting, I graduated from{" "}
                <a
                  href="https://bootcamp.outreach.ou.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-800 dark:text-blue-400 underline decoration-1 underline-offset-2 hover:decoration-2 transition-colors duration-200"
                >
                  OU Outreach's Fullstack Academy Web Development Bootcamp
                </a>
                , a 260-hour program that honed my skills in modern, full-stack
                web technologies. Now I work at the intersection of journalism,
                technology, politics and AI.
              </p>
            </div>

            {/* Photo */}
            <div className="w-48 sm:w-56 lg:w-72 shrink-0">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/images/trevor-puppy-selfie.jpeg"
                  alt="Trevor and his dog"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 288px"
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
              Let's Build Something Together
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-montserrat text-gray-900 dark:text-white mb-2">
              Contact
            </h2>
            <p className="text-lg text-gray-700 dark:text-neutral-200 max-w-3xl mb-6">
              Open to freelance projects, consulting and full-time opportunities
            </p>
            <div className="border-t-2 border-gray-900 dark:border-white w-full" />
          </div>
          <div className="flex flex-col gap-8">
            <Form />
            <Links />
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
