"use client";

import { useState, useRef } from "react";

export default function SelectedWorksComponent({ showGuides = false }) {
  const [isExporting, setIsExporting] = useState(false);
  const pageRef = useRef(null);

  const handleExportPDF = async () => {
    if (!pageRef.current) return;
    setIsExporting(true);
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
    }
  };

  return (
    <div className="mx-auto max-w-[calc(8.5in+6rem)] px-6 py-12 flex flex-col items-center">
      {/* Exact US Letter page - same dimensions as resume */}
      <div
        ref={pageRef}
        className={`resume-page ${showGuides ? "show-guides" : ""}`}
      >
        {/* Selected Works content */}
        <div className="resume-content">
          {/* Header - Editorial style but smaller */}
          <header className="clips-masthead">
            <h1 className="clips-name">TREVOR BROWN</h1>
            <div className="clips-dek">Selected Clips & Projects</div>
            <div className="clips-contact">
              See full portfolio at <a href="https://trevorthewebdeveloper.com" target="_blank" rel="noopener noreferrer" className="contact-link">trevorthewebdeveloper.com</a>
            </div>
          </header>

          {/* Main content - Single column for works */}
          <div className="works-content">
            {/* Journalism Section */}
            <section className="work-section">
              <h2 className="section-title">Journalism</h2>
              
              <div className="work-item">
                <div className="work-header">
                  <a href="https://oklahomawatch.org/2022/06/06/the-misinformation-election-lies-conspiracy-theories-prominent-in-many-gop-races/" target="_blank" rel="noopener noreferrer" className="work-title-link">
                    <div className="work-title">The Misinformation Election: Lies, Conspiracy Theories Prominent in Many GOP Races <span className="work-date">(June 2022)</span></div>
                  </a>
                  <a href="https://oklahomawatch.org/2022/06/06/the-misinformation-election-lies-conspiracy-theories-prominent-in-many-gop-races/" target="_blank" rel="noopener noreferrer" className="work-url-link">
                    oklahomawatch.org/2022/06/06/the-misinformation-election
                  </a>
                </div>
                <div className="work-description">
                  Fact-checking investigation analyzing disinformation patterns across 50+ primary races. Shows ability to verify claims at scale – essential for wire service accuracy.
                </div>
              </div>

              <div className="work-item">
                <div className="work-header">
                  <a href="https://oklahomawatch.org/2020/06/02/twenty-years-after-it-became-a-crime-racial-profiling-charges-remain-scarce/" target="_blank" rel="noopener noreferrer" className="work-title-link">
                    <div className="work-title">Twenty Years After It Became a Crime, Racial Profiling Charges Remain Scarce <span className="work-date">(June 2020)</span></div>
                  </a>
                  <a href="https://oklahomawatch.org/2020/06/02/twenty-years-after-it-became-a-crime-racial-profiling-charges-remain-scarce/" target="_blank" rel="noopener noreferrer" className="work-url-link">
                    oklahomawatch.org/2020/06/02/racial-profiling-charges-remain-scarce
                  </a>
                </div>
                <div className="work-description">
                  Analyzed 20 years of court data to reveal enforcement gaps. Combined FOIA requests, database queries, and interviews – the investigative toolkit AP values.
                </div>
              </div>

              <div className="work-item">
                <div className="work-header">
                  <a href="https://oklahomawatch.org/2019/08/07/oklahoma-hospitals-sue-thousands-each-year-over-unpaid-medical-bills/" target="_blank" rel="noopener noreferrer" className="work-title-link">
                    <div className="work-title">Oklahoma Hospitals Sue Thousands Each Year Over Unpaid Medical Bills <span className="work-date">(Aug. 2019)</span></div>
                  </a>
                  <a href="https://oklahomawatch.org/2019/08/07/oklahoma-hospitals-sue-thousands-each-year-over-unpaid-medical-bills/" target="_blank" rel="noopener noreferrer" className="work-url-link">
                    oklahomawatch.org/2019/08/07/oklahoma-hospitals-sue-thousands
                  </a>
                </div>
                <div className="work-description">
                  Scraped court records to expose medical debt crisis. Built database of 15,000+ cases revealing systemic issues – enterprise reporting that sparked policy discussions.
                </div>
              </div>
            </section>

            {/* Web Development Section */}
            <section className="work-section">
              <h2 className="section-title">Web Development</h2>
              
              <div className="work-item">
                <div className="work-header">
                  <a href="https://keithbrowndds.com" target="_blank" rel="noopener noreferrer" className="work-title-link">
                    <div className="work-title">Keith Brown DDS – Production Next.js Application <span className="work-date">(2024)</span></div>
                  </a>
                  <a href="https://keithbrowndds.com" target="_blank" rel="noopener noreferrer" className="work-url-link">
                    keithbrowndds.com
                  </a>
                </div>
                <div className="work-description">
                  Professional practice website with appointment booking system. Built with Next.js, optimized for performance and search visibility.
                </div>
              </div>

              <div className="work-item">
                <div className="work-header">
                  <a href="https://my-expiry.vercel.app/" target="_blank" rel="noopener noreferrer" className="work-title-link">
                    <div className="work-title">My Expiry – AI-Integrated TypeScript Application <span className="work-date">(2024)</span></div>
                  </a>
                  <a href="https://my-expiry.vercel.app/" target="_blank" rel="noopener noreferrer" className="work-url-link">
                    my-expiry.vercel.app
                  </a>
                </div>
                <div className="work-description">
                  Uses OpenAI API for intelligent shelf-life detection. Shows how I integrate AI tools pragmatically.
                </div>
              </div>

              <div className="work-item">
                <div className="work-header">
                  <a href="https://restub.vercel.app/" target="_blank" rel="noopener noreferrer" className="work-title-link">
                    <div className="work-title">ReStub – Digital Collection Platform <span className="work-date">(2024)</span></div>
                  </a>
                  <a href="https://restub.vercel.app/" target="_blank" rel="noopener noreferrer" className="work-url-link">
                    restub.vercel.app
                  </a>
                </div>
                <div className="work-description">
                  Sports memorabilia platform I built with Next.js 15 and TypeScript. Features real-time updates and user authentication.
                </div>
              </div>
            </section>

            {/* Data Visualization Section */}
            <section className="work-section">
              <h2 className="section-title">Data Visualization</h2>
              
              <div className="work-item">
                <div className="work-header">
                  <a href="https://oklahomawatch.org/2021/02/08/oklahoma-lawmakers-report-large-campaign-reserves-after-2020-races/" target="_blank" rel="noopener noreferrer" className="work-title-link">
                    <div className="work-title">Campaign Finance Interactive Dashboard <span className="work-date">(Feb. 2021)</span></div>
                  </a>
                  <a href="https://oklahomawatch.org/2021/02/08/oklahoma-lawmakers-report-large-campaign-reserves-after-2020-races/" target="_blank" rel="noopener noreferrer" className="work-url-link">
                    oklahomawatch.org/2021/02/08/campaign-reserves
                  </a>
                </div>
                <div className="work-description">
                  Tableau visualization analyzing campaign reserves across Oklahoma legislature. Interactive data presentation for complex political finance.
                </div>
              </div>

              <div className="work-item">
                <div className="work-header">
                  <a href="https://oklahomawatch.org/2022/03/04/ice-holds-drop-as-immigrant-communities-law-enforcement-balance-policy-changes/" target="_blank" rel="noopener noreferrer" className="work-title-link">
                    <div className="work-title">Redistricting Impact Visualization <span className="work-date">(March 2022)</span></div>
                  </a>
                  <a href="https://oklahomawatch.org/2022/03/04/ice-holds-drop-as-immigrant-communities-law-enforcement-balance-policy-changes/" target="_blank" rel="noopener noreferrer" className="work-url-link">
                    oklahomawatch.org/2022/03/04/redistricting-impact
                  </a>
                </div>
                <div className="work-description">
                  Mapped demographic shifts showing 50% reduction in Hispanic representation. Census data + GIS analysis to explain political implications.
                </div>
              </div>

              <div className="work-item">
                <div className="work-header">
                  <a href="https://inn.org/2020-community-champion-award-winners" target="_blank" rel="noopener noreferrer" className="work-title-link">
                    <div className="work-title">COVID-19 Digital Memorial <span className="work-date">(2020)</span></div>
                  </a>
                  <a href="https://inn.org/2020-community-champion-award-winners" target="_blank" rel="noopener noreferrer" className="work-url-link">
                    inn.org/2020-community-champion-award-winners
                  </a>
                </div>
                <div className="work-description">
                  Community Champion Award winner from Institute for Nonprofit News. Created memorial database combining data visualization with personal stories.
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Guides overlay */}
        {showGuides && <div className="guides no-print" />}
      </div>

      {/* Download button below selected works */}
      <div className="mt-6 no-print">
        <button
          onClick={handleExportPDF}
          disabled={isExporting}
          className="px-6 py-3 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 disabled:opacity-50 rounded-lg transition-colors"
        >
          {isExporting ? "Generating…" : "Download Selected Works PDF"}
        </button>
      </div>
    </div>
  );
}