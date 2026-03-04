"use client";

import { useRef } from "react";
import { useDocumentScaling } from "@/app/hooks/useDocumentScaling";
import { graphics } from "@/content/visualizations.js";
import { demoProjects } from "@/content/demos.js";

/* All visualizations */
const vizEntries = graphics;

/* Pick 4 web projects by ID: KAB (1), News Pulse (2), Second Brain (5), sort(id) (4) */
const webProjectIds = [1, 2, 5, 4];
const webEntries = webProjectIds
  .map((id) => demoProjects.find((p) => p.id === id))
  .filter(Boolean);

export default function SelectedWorksResponsive({ showGuides = false }) {
  const containerRef = useRef(null);
  const documentRef = useRef(null);

  const { scale, dimensions } = useDocumentScaling(containerRef, documentRef);

  return (
    <div
      ref={containerRef}
      className="selected-works-container w-full flex flex-col items-center p-8 bg-slate-100 dark:bg-neutral-900 print:bg-white"
    >
      {/* Scaling wrapper */}
      <div
        className="relative"
        style={{
          width: dimensions.width,
          height: dimensions.height,
        }}
      >
        {/* Fixed letter-size container - 8.5 x 11 inches */}
        <div
          ref={documentRef}
          className="clips-page-paper absolute top-0 left-0 bg-white rounded-lg shadow-2xl dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.95)] print:shadow-none print:rounded-none origin-top-left"
          style={{
            width: "8.5in",
            height: "11in",
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          {/* Content with fixed padding for consistent layout */}
          <div
            className="h-full overflow-hidden print:overflow-visible"
            style={{ padding: "0.5in 0.6in 0.4in 0.6in" }}
          >
            {/* Header */}
            <header className="text-center mb-2 pb-1.5 border-b border-gray-300">
              <h1 className="text-xl font-bold tracking-wider text-gray-900 mb-1 uppercase">
                TREVOR BROWN
              </h1>
              <div className="flex justify-center items-center gap-4 text-[10px] text-gray-600 font-normal">
                <span>630&#8209;301&#8209;0589</span>
                <a
                  href="mailto:trevorbrown.web@gmail.com"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  trevorbrown.web@gmail.com
                </a>
                <a
                  href="https://trevorthewebdeveloper.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 underline underline-offset-2 hover:text-gray-800 hover:no-underline transition-colors"
                >
                  trevorthewebdeveloper.com
                </a>
                <a
                  href="https://github.com/tbrown034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  github.com/tbrown034
                </a>
              </div>
              <div className="text-[11px] font-medium text-gray-700 mt-1.5">
                Portfolio Samples — Data Visualization & Web Development
              </div>
            </header>

            {/* DATA JOURNALISM + VISUALIZATIONS */}
            <section className="mb-2.5">
              <h2 className="text-[9px] font-extrabold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-0.5 mb-1">
                Data Journalism + Visualizations
              </h2>

              <div className="space-y-1">
                {vizEntries.map((item) => {
                  const vizUrls = item.vizUrls || [];
                  const toolList = item.tools
                    ? item.tools.join(", ")
                    : item.program;
                  return (
                    <div key={item.id} className="pb-0.5">
                      {/* Row: headline + tools + date */}
                      <div className="flex items-baseline justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <a
                            href={item.siteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] font-bold text-gray-900 hover:text-blue-700 leading-tight transition-colors"
                          >
                            {item.headline}
                          </a>
                        </div>
                        <div className="flex items-baseline gap-2 shrink-0">
                          <span className="text-[8px] font-medium text-gray-500 uppercase tracking-wide">
                            {toolList}
                          </span>
                          <span className="text-[9px] text-gray-500 whitespace-nowrap">
                            {item.date}
                          </span>
                        </div>
                      </div>

                      {/* Viz links on second line */}
                      {vizUrls.length > 0 && (
                        <div className="text-[8px] text-gray-500 mt-0">
                          {vizUrls.map((viz, i) => (
                            <span key={i}>
                              {i > 0 && (
                                <span className="text-gray-300"> · </span>
                              )}
                              <a
                                href={viz.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 underline underline-offset-2 decoration-gray-300 hover:text-blue-700 hover:decoration-blue-400 transition-colors"
                              >
                                {viz.label}
                              </a>
                            </span>
                          ))}
                          {item.award && (
                            <span className="text-[8px] text-gray-500 ml-2 italic">
                              {item.award}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* WEB DEVELOPMENT & INTERACTIVE PROJECTS */}
            <section className="mb-2">
              <h2 className="text-[9px] font-extrabold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-0.5 mb-1.5">
                Web Development & Interactive Projects
              </h2>

              <div className="space-y-2">
                {webEntries.map((item, index) => {
                  const isSecondBrain = !item.siteLink;
                  const siteUrl = item.siteLink;
                  const displayUrl = item.displayUrl;

                  return (
                    <div
                      key={item.id}
                      className={`pb-1.5 ${index < webEntries.length - 1 ? "border-b border-gray-200" : ""}`}
                    >
                      {/* Title — Subtitle */}
                      <div className="flex items-start justify-between gap-3 mb-0.5">
                        <h3 className="text-[11px] font-bold text-gray-900 leading-tight">
                          {item.title}
                          {item.subtitle && (
                            <span className="font-normal text-gray-700">
                              {" "}
                              — {item.subtitle}
                            </span>
                          )}
                        </h3>
                      </div>

                      {/* Live Site link */}
                      <div className="text-[9px] text-gray-600 mb-0.5">
                        {isSecondBrain ? (
                          <>
                            <span className="font-semibold">
                              Demo (locally hosted):{" "}
                            </span>
                            <a
                              href="https://trevorthewebdeveloper.com/projects"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 underline underline-offset-2 decoration-gray-300 hover:text-blue-700 hover:decoration-blue-400 transition-colors"
                            >
                              trevorthewebdeveloper.com/projects
                            </a>
                          </>
                        ) : (
                          <>
                            <span className="font-semibold">Live Site: </span>
                            <a
                              href={siteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 underline underline-offset-2 decoration-gray-300 hover:text-blue-700 hover:decoration-blue-400 transition-colors"
                            >
                              {displayUrl || siteUrl}
                            </a>
                          </>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-[10px] text-gray-700 leading-[1.35]">
                        {Array.isArray(item.oneLiner)
                          ? item.oneLiner.join(" ")
                          : item.oneLiner}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Footer */}
            <div className="text-[10px] text-gray-500 text-center pt-2 border-t border-gray-200">
              Full portfolio at{" "}
              <a
                href="https://trevorthewebdeveloper.com/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 underline underline-offset-2 decoration-gray-300 hover:text-blue-700 hover:decoration-blue-400 transition-colors"
              >
                trevorthewebdeveloper.com/projects
              </a>
            </div>
          </div>

          {/* Guides overlay for print */}
          {showGuides && (
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_0_0.75in_rgba(59,130,246,0.08)] print:hidden" />
          )}
        </div>
      </div>

      {/* Download button */}
      <div className="mt-6 print:hidden flex justify-center">
        <a
          href="/pdfs/Trevor_Brown_Selected_Works.pdf"
          download
          className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-blue-800 dark:bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 hover:shadow-lg hover:-translate-y-1 active:bg-blue-900 dark:active:bg-blue-700 active:shadow-sm active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Download Projects (PDF)
        </a>
      </div>
      {/* Note: To regenerate PDF after content changes, run: npm run generate-pdfs */}
    </div>
  );
}
