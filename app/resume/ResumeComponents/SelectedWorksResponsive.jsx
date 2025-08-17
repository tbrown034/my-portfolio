"use client";

import { useState, useRef } from "react";

export default function SelectedWorksResponsive({ showGuides = false }) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportType, setExportType] = useState("");
  const pageRef = useRef(null);

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
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12 flex flex-col items-center">
      {/* Responsive container with aspect ratio */}
      <div
        ref={pageRef}
        className="w-full max-w-[850px] bg-white shadow-xl print:shadow-none"
        style={{ aspectRatio: '8.5/11' }}
      >
        {/* Content with responsive padding */}
        <div className="p-4 sm:p-6 md:p-8 h-full overflow-auto print:overflow-visible">
          {/* Header */}
          <header className="text-center mb-4 pb-2 border-b border-gray-300">
            <h1 className="text-lg sm:text-xl font-bold tracking-wider text-gray-900 mb-1 uppercase">
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
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-0.5">
                    The Misinformation Election: Lies, Conspiracy Theories Prominent in Many GOP Races
                  </h3>
                  <div className="text-[10px] sm:text-xs text-gray-600 italic mb-1">
                    (June 2022) oklahomawatch.org/2022/06/06/the-misinformation-election
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-700 leading-relaxed">
                    Fact-checking investigation analyzing disinformation patterns across 50+ primary races. Shows ability to verify claims at scale – essential for wire service accuracy.
                  </p>
                </div>

                <div className="pb-2 border-b border-gray-200">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-0.5">
                    Twenty Years After It Became a Crime, Racial Profiling Charges Remain Scarce
                  </h3>
                  <div className="text-[10px] sm:text-xs text-gray-600 italic mb-1">
                    (June 2020) oklahomawatch.org/2020/06/02/racial-profiling-charges-remain-scarce
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-700 leading-relaxed">
                    Analyzed 20 years of court data to reveal enforcement gaps. Combined FOIA requests, database queries, and interviews.
                  </p>
                </div>

                <div className="pb-2 border-b border-gray-200">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-0.5">
                    Oklahoma Hospitals Sue Thousands Each Year Over Unpaid Medical Bills
                  </h3>
                  <div className="text-[10px] sm:text-xs text-gray-600 italic mb-1">
                    (Aug. 2019) oklahomawatch.org/2019/08/07/oklahoma-hospitals-sue-thousands
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-700 leading-relaxed">
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
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-0.5">
                    Keith Brown DDS – Production Next.js Application (2024)
                  </h3>
                  <div className="text-[10px] sm:text-xs text-gray-600 italic mb-1">
                    keithbrowndds.com
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-700 leading-relaxed">
                    Professional practice website with appointment booking system. Built with Next.js, optimized for performance and search visibility.
                  </p>
                </div>

                <div className="pb-2 border-b border-gray-200">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-0.5">
                    My Expiry – AI-Integrated TypeScript Application (2024)
                  </h3>
                  <div className="text-[10px] sm:text-xs text-gray-600 italic mb-1">
                    my-expiry.vercel.app
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-700 leading-relaxed">
                    AI-powered food freshness tracker with receipt scanning, expiry alerts, and waste analytics. Uses the OpenAI API for intelligent shelf-life detection and personalized suggestions to reduce waste and save money.
                  </p>
                </div>

                <div className="pb-2 border-b border-gray-200">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-0.5">
                    ReStub – Digital Collection Platform (2024)
                  </h3>
                  <div className="text-[10px] sm:text-xs text-gray-600 italic mb-1">
                    restub.vercel.app
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-700 leading-relaxed">
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
                <div className="pb-2 border-b border-gray-200">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-0.5">
                    Campaign Finance Interactive Dashboard (Feb. 2021)
                  </h3>
                  <div className="text-[10px] sm:text-xs text-gray-600 italic mb-1">
                    oklahomawatch.org/2021/02/08/campaign-reserves
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-700 leading-relaxed">
                    Tableau visualization analyzing campaign reserves across Oklahoma legislature. Interactive data presentation for complex political finance.
                  </p>
                </div>

                <div className="pb-2 border-b border-gray-200">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-0.5">
                    Redistricting Impact Visualization (March 2022)
                  </h3>
                  <div className="text-[10px] sm:text-xs text-gray-600 italic mb-1">
                    oklahomawatch.org/2021/11/18/redistricting-impact
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-700 leading-relaxed">
                    Mapped demographic shifts showing 50% reduction in Hispanic representation. Census data + GIS analysis to explain political implications.
                  </p>
                </div>

                <div className="pb-2">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-0.5">
                    COVID-19 Digital Memorial (2020)
                  </h3>
                  <div className="text-[10px] sm:text-xs text-gray-600 italic mb-1">
                    oklahomawatch.org/oklahoma-covid-legacy-project
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-700 leading-relaxed">
                    Community Champion Award winner from Institute for Nonprofit News. Created memorial database combining data collection with human stories.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Guides overlay for print */}
        {showGuides && (
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_0_0.75in_rgba(59,130,246,0.08)] print:hidden" />
        )}
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