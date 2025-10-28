"use client";

import { useRef } from "react";
import { useDocumentScaling } from "@/app/hooks/useDocumentScaling";
import { graphics } from "@/content/visualizations.js";
import { clips } from "@/content/journalism.js";
import { webProjects } from "@/content/coding.js";

export default function SelectedWorksResponsive({ showGuides = false }) {
  const pageRef = useRef(null);
  const containerRef = useRef(null);
  const documentRef = useRef(null);

  const { scale, dimensions } = useDocumentScaling(containerRef, documentRef);

  return (
    <div
      ref={containerRef}
      className="selected-works-container w-full flex flex-col items-center p-4 bg-white dark:bg-blue-950 print:bg-white"
    >
      {/* Scaling wrapper */}
      <div 
        className="relative"
        style={{
          width: dimensions.width,
          height: dimensions.height,
        }}
      >
        {/* Fixed letter-size container - 8.5 × 11 inches */}
        <div
          ref={(el) => {
            pageRef.current = el;
            documentRef.current = el;
          }}
          className="absolute top-0 left-0 bg-white shadow-xl print:shadow-none origin-top-left"
          style={{ 
            width: '8.5in', 
            height: '11in',
            transform: `scale(${scale})`,
            transformOrigin: 'top left'
          }}
        >
          {/* Content with fixed padding for consistent layout */}
          <div className="p-12 h-full overflow-hidden print:overflow-visible" style={{ padding: "0.5in 0.75in 0.75in 0.75in" }}>
            {/* Header */}
            <header className="text-center mb-3 pb-2 border-b border-gray-300">
              <h1 className="text-xl font-bold tracking-wider text-gray-900 mb-1 uppercase">
              TREVOR BROWN
            </h1>
            <div className="text-sm font-medium text-gray-700 mb-1">
              Selected Clips & Projects
            </div>
            <div className="text-xs text-gray-600">
              See full portfolio at{" "}
              <a
                href="https://trevorthewebdeveloper.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 underline underline-offset-2 hover:text-gray-800 hover:no-underline"
              >
                trevorthewebdeveloper.com
              </a>
            </div>
          </header>

          {/* Main content */}
          <div className="max-w-2xl mx-auto space-y-2">
            {/* Journalism Section */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-1">
                Journalism
              </h2>

              <div className="space-y-2">
                {clips.slice(0, 3).map((item, index) => (
                  <div key={item.id} className={`pb-2 ${index < 2 ? 'border-b border-gray-200' : ''}`}>
                    <div className="flex items-start justify-between mb-0.5">
                      <a href={item.siteLink} target="_blank" rel="noopener noreferrer" className="flex-1 hover:bg-gray-50 transition-colors">
                        <h3 className="text-sm font-bold text-gray-900 hover:text-blue-700 underline decoration-gray-300 decoration-1 underline-offset-2 hover:decoration-blue-400 transition-colors">
                          {item.headline}
                        </h3>
                      </a>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-700 ml-2">
                        {item.publication}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed mb-1" style={{ color: '#374151' }}>
                      {item.text}
                    </p>
                    <div className="text-xs" style={{ color: '#4b5563' }}>
                      <a href={item.siteLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 underline decoration-gray-300 decoration-1 underline-offset-2 transition-colors">
                        View Article
                      </a>
                      <span className="mx-2">|</span>
                      {item.publication}, {item.date}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Web Development Section */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-1 mt-2">
                Web Development
              </h2>

              <div className="space-y-2">
                {webProjects.slice(0, 3).map((item, index) => (
                  <div key={item.id} className={`pb-2 ${index < 2 ? 'border-b border-gray-200' : ''}`}>
                    <div className="flex items-start justify-between mb-0.5">
                      <a href={item.siteLink} target="_blank" rel="noopener noreferrer" className="flex-1 hover:bg-gray-50 transition-colors">
                        <h3 className="text-sm font-bold text-gray-900 hover:text-blue-700 underline decoration-gray-300 decoration-1 underline-offset-2 hover:decoration-blue-400 transition-colors">
                          {item.title}
                        </h3>
                      </a>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-700 ml-2">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed mb-1" style={{ color: '#374151' }}>
                      {item.description}
                    </p>
                    <div className="text-xs" style={{ color: '#4b5563' }}>
                      <a href={item.siteLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 underline decoration-gray-300 decoration-1 underline-offset-2 transition-colors">
                        Live Site
                      </a>
                      {item.githubLink && (
                        <>
                          {' • '}
                          <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 underline decoration-gray-300 decoration-1 underline-offset-2 transition-colors">
                            GitHub
                          </a>
                        </>
                      )}
                      <span className="mx-2">|</span>
                      {item.createdDate}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Data Visualization Section */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-1 mt-2">
                Data Visualization
              </h2>

              <div className="space-y-2">
                {graphics.slice(0, 3).map((item, index) => {
                  const graphicLink = Array.isArray(item.graphicLink) ? item.graphicLink[0] : item.graphicLink;
                  return (
                    <div key={item.id} className={`pb-2 ${index < 2 ? 'border-b border-gray-200' : ''}`}>
                      <div className="flex items-start justify-between mb-0.5">
                        <a href={graphicLink} target="_blank" rel="noopener noreferrer" className="flex-1 hover:bg-gray-50 transition-colors">
                          <h3 className="text-sm font-bold text-gray-900 hover:text-blue-700 underline decoration-gray-300 decoration-1 underline-offset-2 hover:decoration-blue-400 transition-colors">
                            {item.headline}
                          </h3>
                        </a>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-700 ml-2">
                          {item.program}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed mb-1" style={{ color: '#374151' }}>
                        {item.summary || item.text}
                      </p>
                      <div className="text-xs" style={{ color: '#4b5563' }}>
                        <a href={graphicLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 underline decoration-gray-300 decoration-1 underline-offset-2 transition-colors">
                          Visualization
                        </a>
                        {' • '}
                        <a href={item.siteLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 underline decoration-gray-300 decoration-1 underline-offset-2 transition-colors">
                          Article
                        </a>
                        <span className="mx-2">|</span>
                        {item.publication}, {item.date}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
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
          Download Selected Works (PDF)
        </a>
      </div>
      {/* Note: To regenerate PDF after content changes, run: npm run generate-pdfs */}
    </div>
  );
}