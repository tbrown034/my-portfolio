"use client";

import { useState, useRef } from "react";
import { useDocumentScaling } from "@/app/hooks/useDocumentScaling";
import { graphics } from "@/content/visualizations.js";

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
      className="selected-works-container w-full min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900 print:bg-white"
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
          <div className="p-12 h-full overflow-hidden print:overflow-visible" style={{ padding: "0.3in 0.75in 0.75in 0.75in" }}>
            {/* Header */}
            <header className="text-center mb-4 pb-2 border-b border-gray-300">
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
                className="text-blue-600 hover:text-blue-800"
              >
                trevorthewebdeveloper.com
              </a>
            </div>
          </header>

          {/* Main content */}
          <div className="max-w-2xl mx-auto space-y-3">
            {/* Journalism Section */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2">
                Journalism
              </h2>

              <div className="space-y-2">
                <div className="pb-2 border-b border-gray-200">
                  <a href="https://oklahomawatch.org/2022/06/06/the-misinformation-election" target="_blank" rel="noopener noreferrer" className="block hover:bg-gray-50 transition-colors">
                    <h3 className="text-sm font-bold mb-0.5 hover:text-blue-600" style={{ color: '#111827' }}>
                      The Misinformation Election: Lies, Conspiracy Theories Prominent in Many GOP Races
                    </h3>
                  </a>
                  <div className="text-xs italic mb-1" style={{ color: '#4b5563' }}>
                    (June 2022) oklahomawatch.org/2022/06/06/the-misinformation-election
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: '#374151' }}>
                    Fact-checking investigation analyzing disinformation patterns across 50+ primary races.
                  </p>
                </div>

                <div className="pb-2 border-b border-gray-200">
                  <a href="https://oklahomawatch.org/2020/06/02/racial-profiling-charges-remain-scarce" target="_blank" rel="noopener noreferrer" className="block hover:bg-gray-50 transition-colors">
                    <h3 className="text-sm font-bold mb-0.5 hover:text-blue-600" style={{ color: '#111827' }}>
                      Twenty Years After It Became a Crime, Racial Profiling Charges Remain Scarce
                    </h3>
                  </a>
                  <div className="text-xs italic mb-1" style={{ color: '#4b5563' }}>
                    (June 2020) oklahomawatch.org/2020/06/02/racial-profiling-charges-remain-scarce
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: '#374151' }}>
                    Analyzed 20 years of court data to reveal enforcement gaps. Combined FOIA request and interviews.
                  </p>
                </div>

                <div className="pb-2 border-b border-gray-200">
                  <a href="https://oklahomawatch.org/2019/08/07/oklahoma-hospitals-sue-thousands" target="_blank" rel="noopener noreferrer" className="block hover:bg-gray-50 transition-colors">
                    <h3 className="text-sm font-bold mb-0.5 hover:text-blue-600" style={{ color: '#111827' }}>
                      Oklahoma Hospitals Sue Thousands Each Year Over Unpaid Medical Bills
                    </h3>
                  </a>
                  <div className="text-xs italic mb-1" style={{ color: '#4b5563' }}>
                    (Aug. 2019) oklahomawatch.org/2019/08/07/oklahoma-hospitals-sue-thousands
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: '#374151' }}>
                    Scraped court records to expose medical debt crisis. Built database of 15,000+ cases revealing systemic issues.
                  </p>
                </div>
              </div>
            </section>

            {/* Web Development Section */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2 mt-3">
                Web Development
              </h2>

              <div className="space-y-2">
                <div className="pb-2 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-0.5">
                    <a href="https://keithbrowndds.com" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-50 transition-colors">
                      <h3 className="text-sm font-bold hover:text-blue-600" style={{ color: '#111827' }}>
                        Keith Brown DDS – Production Next.js Application (2024)
                      </h3>
                    </a>
                    <span className="text-[10px] font-medium px-2 py-0.5 bg-blue-100 text-blue-700 rounded inline-block">Professional</span>
                  </div>
                  <div className="text-xs italic mb-1" style={{ color: '#4b5563' }}>
                    keithbrowndds.com
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: '#374151' }}>
                    Professional practice website with appointment booking system. Built with Next.js, optimized for performance and search visibility.
                  </p>
                </div>

                <div className="pb-2 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-0.5">
                    <a href="https://my-expiry.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-50 transition-colors">
                      <h3 className="text-sm font-bold hover:text-blue-600" style={{ color: '#111827' }}>
                        My Expiry – AI-Integrated TypeScript Application (2024)
                      </h3>
                    </a>
                    <span className="text-[10px] font-medium px-2 py-0.5 bg-gray-100 text-gray-700 rounded inline-block">Hobby</span>
                  </div>
                  <div className="text-xs italic mb-1" style={{ color: '#4b5563' }}>
                    my-expiry.vercel.app
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: '#374151' }}>
                    AI-powered food freshness tracker with receipt scanning, expiry alerts, and waste analytics. Uses the OpenAI API for intelligent shelf-life detection and personalized suggestions to reduce waste and save money.
                  </p>
                </div>

                <div className="pb-2 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-0.5">
                    <a href="https://restub.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-50 transition-colors">
                      <h3 className="text-sm font-bold hover:text-blue-600" style={{ color: '#111827' }}>
                        ReStub – Digital Collection Platform (2024)
                      </h3>
                    </a>
                    <span className="text-[10px] font-medium px-2 py-0.5 bg-gray-100 text-gray-700 rounded inline-block">Hobby</span>
                  </div>
                  <div className="text-xs italic mb-1" style={{ color: '#4b5563' }}>
                    restub.vercel.app
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: '#374151' }}>
                    Modern platform for logging, enhancing, and sharing live sports game experiences. Built with Next.js 15, Tailwind CSS, and TypeScript. Features AI-assisted event completion, user authentication, and shareable digital collections.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Visualization Section */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2 mt-3">
                Data Visualization
              </h2>

              <div className="space-y-2">
                {graphics.slice(0, 3).map((viz, index) => {
                  const graphicLink = Array.isArray(viz.graphicLink) ? viz.graphicLink[0] : viz.graphicLink;
                  return (
                    <div key={viz.id} className={`pb-2 ${index < 2 ? 'border-b border-gray-200' : ''}`}>
                      <a href={graphicLink} target="_blank" rel="noopener noreferrer" className="block hover:bg-gray-50 transition-colors">
                        <h3 className="text-xs font-bold mb-0.5 hover:text-blue-600" style={{ color: '#111827' }}>
                          {viz.headline}
                        </h3>
                      </a>
                      <p className="text-xs leading-relaxed mb-1" style={{ color: '#374151' }}>
                        {viz.summary || viz.text}
                      </p>
                      <div className="text-xs" style={{ color: '#4b5563' }}>
                        <a href={graphicLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                          Visualization
                        </a>
                        {' • '}
                        <a href={viz.siteLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                          Article
                        </a>
                        <span className="mx-2">|</span>
                        {viz.publication}, {viz.date}
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
        <button
          onClick={handleExportImage}
          disabled={isExporting}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 rounded-lg border border-gray-300 transition-colors"
        >
          {isExporting && exportType === "image" ? "Generating…" : "Download Image"}
        </button>
      </div>
    </div>
  );
}