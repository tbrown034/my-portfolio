"use client";

import { useState, useRef } from "react";
import { useDocumentScaling } from "@/app/hooks/useDocumentScaling";
import { graphics } from "@/content/visualizations.js";
import { clips } from "@/content/journalism.js";
import { webProjects } from "@/content/coding.js";

export default function SelectedWorksResponsive({ showGuides = false }) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportType, setExportType] = useState("");
  const pageRef = useRef(null);
  const containerRef = useRef(null);
  const documentRef = useRef(null);
  
  const { scale, dimensions } = useDocumentScaling(containerRef, documentRef);

  const handleExportPDF = async () => {
    if (!pageRef.current) return;
    setIsExporting(true);
    setExportType("pdf");
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      await html2pdf()
        .set({
          margin: 0,
          filename: "Trevor_Brown_Selected_Works.pdf",
          image: { type: "jpeg", quality: 1 },
          html2canvas: { scale: 3, useCORS: true, letterRendering: true },
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        })
        .from(pageRef.current)
        .save();
    } catch (err) {
      console.error(err);
    } finally {
      setIsExporting(false);
      setExportType("");
    }
  };

  const handleExportImage = async () => {
    if (!pageRef.current) return;
    setIsExporting(true);
    setExportType("image");
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(pageRef.current, {
        scale: 3,
        useCORS: true,
        letterRendering: true,
        backgroundColor: "#ffffff",
      });

      canvas.toBlob(
        (blob) => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.download = "Trevor_Brown_Selected_Works.png";
          link.href = url;
          link.click();
          URL.revokeObjectURL(url);
        },
        "image/png",
        1.0
      );
    } catch (err) {
      console.error(err);
    } finally {
      setIsExporting(false);
      setExportType("");
    }
  };

  return (
    <div 
      ref={containerRef}
      className="selected-works-container w-full flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-900 print:bg-white"
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
                        <h3 className="text-sm font-bold hover:text-blue-600" style={{ color: '#111827' }}>
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
                      <a href={item.siteLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
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
                        <h3 className="text-sm font-bold hover:text-blue-600" style={{ color: '#111827' }}>
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
                      <a href={item.siteLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        Live Site
                      </a>
                      {item.githubLink && (
                        <>
                          {' • '}
                          <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
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
                          <h3 className="text-sm font-bold hover:text-blue-600" style={{ color: '#111827' }}>
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
                        <a href={graphicLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                          Visualization
                        </a>
                        {' • '}
                        <a href={item.siteLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
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

      {/* Download buttons */}
      <div className="mt-6 print:hidden flex gap-3">
        <button
          onClick={handleExportPDF}
          disabled={isExporting}
          className="px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 disabled:opacity-50 rounded-lg transition-colors"
        >
          {isExporting && exportType === "pdf" ? "Generating…" : "Download PDF"}
        </button>
      </div>
    </div>
  );
}