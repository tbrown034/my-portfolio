"use client";

import { useState, useRef } from "react";
import Link from "next/link";

/* Component Library - Editorial Resume Style */
const Section = ({ title, children }) => (
  <section>
    <h3 className="section-title">{title}</h3>
    {children}
  </section>
);

const Job = ({ title, org, period, highlights }) => (
  <div className="job-entry">
    <div className="job-header">
      <div>
        <div className="job-title">{title}</div>
        <div className="job-org">{org}</div>
      </div>
      <div className="job-period">{period}</div>
    </div>
    <ul className="job-highlights">
      {highlights.map((highlight, i) => (
        <li key={i}>{highlight}</li>
      ))}
    </ul>
  </div>
);

const Credential = ({ degree, institution, detail, year }) => (
  <div className="credential">
    <div className="credential-degree">
      {degree}{year && ` (${year})`}
    </div>
    <div className="credential-institution">{institution}</div>
    {detail && <div className="credential-detail">{detail}</div>}
  </div>
);

const SkillGroup = ({ category, skills }) => (
  <div className="skill-group">
    <div className="skill-category">{category}</div>
    <div className="skill-list">{skills}</div>
  </div>
);

const Project = ({ name, url, description }) => (
  <div className="project">
    <div>
      <span className="project-name">{name}</span>
      <a 
        href={`https://${url}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="project-url"
      >
        {url}
      </a>
    </div>
    <div className="project-description">{description}</div>
  </div>
);

const Award = ({ title, org, year, article }) => (
  <div className="award">
    <div className="award-title">
      {title} ({year})
    </div>
    <div className="award-org">{org}</div>
    {article && <div className="award-article">"{article}"</div>}
  </div>
);

const DataProject = ({ title, description, impact, link }) => (
  <div className="data-project">
    <div className="data-project-title">{title}</div>
    <div className="data-project-description">{description}</div>
    <div className="data-project-impact">{impact}</div>
    {link && (
      <a 
        href={`https://${link}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="data-project-link"
      >
        {link}
      </a>
    )}
  </div>
);

export default function ResumePage() {
  const [isExporting, setIsExporting] = useState(false);
  const [showGuides, setShowGuides] = useState(false);
  const pageRef = useRef(null);

  const handleExportPDF = async () => {
    if (!pageRef.current) return;
    setIsExporting(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      await html2pdf()
        .set({
          margin: 0,
          filename: "Trevor_Brown_Resume_AP.pdf",
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
    <main className="min-h-screen bg-gray-50">
      {/* Toolbar */}
      <div className="no-print sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-sm font-medium tracking-wider uppercase text-gray-600 letter-spacing-wide">Resume</h1>
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={showGuides}
                onChange={() => setShowGuides(v => !v)}
                className="rounded"
              />
              Show guides
            </label>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              ← Back
            </Link>
            <button
              onClick={handleExportPDF}
              disabled={isExporting}
              className="px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 disabled:opacity-50 rounded-lg transition-colors"
            >
              {isExporting ? "Generating…" : "Download PDF"}
            </button>
          </div>
        </div>
      </div>

      {/* Center the page on screen */}
      <div className="mx-auto max-w-[calc(8.5in+6rem)] px-6 py-12 flex justify-center">
        {/* Exact US Letter page */}
        <div
          ref={pageRef}
          className={`resume-page ${showGuides ? "show-guides" : ""}`}
        >
          {/* Resume content */}
          <div className="resume-content">
            {/* Header - Editorial masthead style */}
            <header className="header-section">
              <h1 className="name-title">TREVOR BROWN</h1>
              <div className="dek">Investigative Journalist & Full‑Stack Developer</div>
              <div className="contact-line">
                <span>630‑301‑0589</span>
                <a href="https://trevorthewebdeveloper.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                  trevorthewebdeveloper.com
                </a>
                <a href="mailto:trevorbrown.web@gmail.com" className="contact-link">trevorbrown.web@gmail.com</a>
              </div>
            </header>

            {/* Main content - Two column layout */}
            <div className="main-content">
              {/* Primary column */}
              <div className="primary-col">
                <div className="summary-section">
                  <Section title="Summary">
                    <p className="summary-text">
                      Award‑winning investigative journalist and full‑stack developer specializing in data‑driven applications and interactive storytelling. Builds dynamic visualizations and tools by combining deep reporting expertise with modern development skills to deliver accurate, engaging information on complex issues.
                    </p>
                  </Section>
                </div>

                <Section title="Professional Experience">
                  <Job
                    title="Web Developer & Digital Marketing"
                    org={<><a href="https://keithbrowndds.com/" target="_blank" rel="noopener noreferrer" className="org-link">Keith Brown DDS</a> (Naperville, Ill.)</>}
                    period="2023 – Present"
                    highlights={[
                      "Build and maintain responsive dental practice website with appointment booking system and search optimization using Next.js",
                      "Manage $2,000 monthly advertising budget and triple new patient revenue through targeted search campaigns"
                    ]}
                  />
                  <Job
                    title="Investigative Journalist"
                    org={<><a href="https://oklahomawatch.org/" target="_blank" rel="noopener noreferrer" className="org-link">Oklahoma Watch</a> (Oklahoma City)</>}
                    period="2016 – 2022"
                    highlights={[
                      "Conducted long‑form investigations into government corruption, public policy issues and legislative accountability using data analysis",
                      "Launched Democracy Watch newsletter to 4,000+ subscribers covering voting, elections, redistricting and government transparency"
                    ]}
                  />
                  <Job
                    title="State Capitol Reporter"
                    org={<><a href="https://www.wyomingnews.com/" target="_blank" rel="noopener noreferrer" className="org-link">Wyoming Tribune Eagle</a> (Cheyenne)</>}
                    period="2011 – 2016"
                    highlights={[
                      "Reported on legislature, elections, governor and state agencies with focus on budget data and policy analysis"
                    ]}
                  />
                  <Job
                    title="State Government Reporter"
                    org={<><a href="https://www.cnhi.com/" target="_blank" rel="noopener noreferrer" className="org-link">CNHI</a> (Oklahoma City)</>}
                    period="2010 – 2011"
                    highlights={[
                      "Functioned as sole statehouse correspondent, creating enterprise and election coverage for 14 newspapers"
                    ]}
                  />
                  <Job
                    title="Reporter"
                    org={<><a href="https://www.newsleader.com/" target="_blank" rel="noopener noreferrer" className="org-link">Staunton News Leader</a> (Staunton, Va.)</>}
                    period="2008 – 2010"
                    highlights={[
                      "Wrote about local government, courts and breaking news for daily newspaper"
                    ]}
                  />
                  <Job
                    title="Editor‑in‑Chief"
                    org={<><a href="https://www.idsnews.com/" target="_blank" rel="noopener noreferrer" className="org-link">Indiana Daily Student</a> (Bloomington, Ind.)</>}
                    period="2007 – 2008"
                    highlights={[
                      "Directed newsroom of 100+ student journalists"
                    ]}
                  />
                </Section>
              </div>

              {/* Secondary column */}
              <div className="secondary-col">
                <Section title="Education">
                  <Credential 
                    degree="Web Development Certificate"
                    institution={<><a href="https://bootcamp.outreach.ou.edu/programs/coding" target="_blank" rel="noopener noreferrer" className="org-link">University of Oklahoma</a></>}
                    detail="Led by FullStack Academy"
                    year="2022"
                  />
                  <Credential 
                    degree="B.A. Journalism" 
                    institution={<><a href="https://bloomington.iu.edu/index.html" target="_blank" rel="noopener noreferrer" className="org-link">Indiana University</a></>} 
                    year="2008" 
                  />
                  <Credential 
                    degree="B.A. Political Science" 
                    institution={<><a href="https://bloomington.iu.edu/index.html" target="_blank" rel="noopener noreferrer" className="org-link">Indiana University</a></>} 
                    year="2008" 
                  />
                </Section>

                <Section title="Technical Skills">
                  <SkillGroup 
                    category="Core Web Technologies" 
                    skills="Next.js, React, TypeScript, Node.js, PostgreSQL, Tailwind" 
                  />
                  <SkillGroup 
                    category="Data Visualization & Analysis" 
                    skills="Tableau, Datawrapper, D3.js, Chart.js, Excel, web scraping" 
                  />
                  <SkillGroup 
                    category="AI & Automation" 
                    skills="OpenAI API, Anthropic API, ChatGPT, Claude, prompt engineering, AI workflow automation" 
                  />
                </Section>

                <Section title="Awards & Recognition">
                  <Award 
                    title="Newspaper Writer of the Year"
                    org={<><a href="https://oklahomawatch.org/2021/05/10/oklahoma-watchs-trevor-brown-earns-writer-of-year-honors-in-great-plains-journalism-contest/" target="_blank" rel="noopener noreferrer" className="org-link">Great Plains Journalism Awards</a></>}
                    year="2021"
                  />
                  <Award 
                    title="Reporter of the Year"
                    org={<><a href="https://okspj.com/" target="_blank" rel="noopener noreferrer" className="org-link">Oklahoma Society of Professional Journalists</a></>}
                    year="2020"
                  />
                  <Award 
                    title="First Place, Investigative Reporting"
                    org={<><a href="https://okspj.com/" target="_blank" rel="noopener noreferrer" className="org-link">Oklahoma Society of Professional Journalists</a></>}
                    year="2022"
                  />
                  <Award 
                    title="Community Champion Award"
                    org={<><a href="https://inn.org/" target="_blank" rel="noopener noreferrer" className="org-link">Institute for Nonprofit News</a></>}
                    year="2020"
                    article="A Digital Memorial to Oklahomans Who Died from COVID-19"
                  />
                </Section>
              </div>
            </div>
          </div>

          {/* Guides overlay */}
          {showGuides && <div className="guides no-print" />}
        </div>
      </div>

      {/* Editorial-inspired Resume Styles */}
      <style jsx global>{`
        /* Resume Page Container */
        .resume-page {
          position: relative;
          width: 8.5in;
          height: 11in;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          overflow: hidden;
        }
        
        /* Content Area - Print-safe margins */
        .resume-content {
          width: 100%;
          height: 100%;
          padding: 0.6in 0.75in 0.4in 0.75in;
          box-sizing: border-box;
          color: #111827;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
          font-size: 10.5pt;
          line-height: 1.5;
        }

        /* Header - Editorial masthead style */
        .header-section {
          text-align: center;
          margin-bottom: 12px;
          padding-bottom: 8px;
          border-bottom: 2px solid #111827;
        }
        
        .name-title {
          font-size: 28pt;
          font-weight: 900;
          letter-spacing: 0.08em;
          color: #111827;
          margin-bottom: 8px;
          text-transform: uppercase;
        }
        
        .dek {
          font-size: 12pt;
          font-weight: 500;
          color: #374151;
          margin-bottom: 16px;
          letter-spacing: 0.02em;
        }
        
        .contact-line {
          display: flex;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
          font-size: 9.5pt;
          color: #6b7280;
          font-weight: 400;
        }
        
        .contact-link {
          color: #6b7280;
          text-decoration: none;
        }
        
        .contact-link:hover {
          color: #374151;
        }
        
        .org-link {
          color: inherit;
          text-decoration: none;
        }
        
        .org-link:hover {
          color: #374151;
        }
        
        /* Main content layout */
        .main-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 32px;
        }
        
        /* Summary */
        .summary-text {
          font-size: 10pt;
          line-height: 1.45;
          color: #374151;
          margin: 0;
        }
        
        /* Section styling - Editorial hierarchy */
        .section-title {
          font-size: 11pt;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #111827;
          border-bottom: 1px solid #d1d5db;
          padding-bottom: 6px;
          margin-bottom: 14px;
          margin-top: 20px;
        }
        
        .section-title:first-child {
          margin-top: 0;
        }
        
        /* Add space after Summary section */
        .summary-section {
          margin-bottom: 16px;
        }
        
        /* Job entries */
        .job-entry {
          margin-bottom: 12px;
          page-break-inside: avoid;
        }
        
        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 6px;
          gap: 16px;
        }
        
        .job-title {
          font-size: 10.5pt;
          font-weight: 700;
          color: #111827;
          line-height: 1.3;
        }
        
        .job-org {
          font-size: 10pt;
          font-weight: 600;
          color: #1f2937;
          margin-top: 2px;
        }
        
        .job-period {
          font-size: 9pt;
          font-weight: 500;
          color: #6b7280;
          white-space: nowrap;
          text-align: right;
        }
        
        .job-highlights {
          margin-top: 8px;
          padding-left: 0;
          list-style: none;
        }
        
        .job-highlights li {
          margin-bottom: 4px;
          padding-left: 12px;
          position: relative;
          font-size: 9.5pt;
          line-height: 1.45;
        }
        
        .job-highlights li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #6b7280;
          font-weight: bold;
        }
        
        /* Education entries */
        .credential {
          margin-bottom: 10px;
        }
        
        .credential-degree {
          font-size: 10pt;
          font-weight: 700;
          color: #111827;
          line-height: 1.3;
        }
        
        .credential-institution {
          font-size: 9.5pt;
          font-weight: 600;
          color: #374151;
          margin-top: 1px;
        }
        
        .credential-detail {
          font-size: 9pt;
          color: #6b7280;
          margin-top: 1px;
          font-style: italic;
        }
        
        .credential-year {
          font-size: 9pt;
          color: #9ca3af;
          margin-top: 1px;
        }
        
        /* Skills */
        .skill-group {
          margin-bottom: 8px;
        }
        
        .skill-category {
          font-size: 9.5pt;
          font-weight: 700;
          color: #111827;
          margin-bottom: 4px;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2px;
        }
        
        .skill-list {
          font-size: 9pt;
          color: #374151;
          line-height: 1.4;
        }
        
        /* Projects */
        .project {
          margin-bottom: 14px;
        }
        
        .project-name {
          font-size: 10pt;
          font-weight: 700;
          color: #111827;
        }
        
        .project-url {
          font-size: 8.5pt;
          color: #1d4ed8;
          text-decoration: none;
          margin-left: 8px;
        }
        
        .project-url:hover {
          text-decoration: underline;
        }
        
        .project-description {
          font-size: 9pt;
          color: #4b5563;
          line-height: 1.4;
          margin-top: 3px;
        }
        
        /* Awards */
        .award {
          margin-bottom: 8px;
        }
        
        .award-title {
          font-size: 9.5pt;
          font-weight: 700;
          color: #111827;
          line-height: 1.3;
        }
        
        .award-org {
          font-size: 9pt;
          font-weight: 500;
          color: #374151;
          margin-top: 1px;
        }
        
        .award-year {
          font-size: 8.5pt;
          color: #6b7280;
          margin-top: 2px;
        }
        
        .award-article {
          font-size: 8.5pt;
          color: #374151;
          margin-top: 3px;
          font-style: italic;
        }
        
        /* Data Projects */
        .data-project {
          margin-bottom: 12px;
        }
        
        .data-project-title {
          font-size: 10pt;
          font-weight: 700;
          color: #111827;
          line-height: 1.3;
        }
        
        .data-project-description {
          font-size: 9pt;
          color: #374151;
          line-height: 1.4;
          margin-top: 2px;
        }
        
        .data-project-impact {
          font-size: 8.5pt;
          color: #374151;
          margin-top: 3px;
        }
        
        .data-project-link {
          display: block;
          font-size: 8.5pt;
          color: #1d4ed8;
          text-decoration: none;
          margin-top: 4px;
        }
        
        .data-project-link:hover {
          text-decoration: underline;
        }
        
        /* Guides */
        .guides {
          position: absolute;
          inset: 0;
          pointer-events: none;
          box-shadow: inset 0 0 0 0.75in rgba(59, 130, 246, 0.08);
          background-image:
            repeating-linear-gradient(
              to bottom,
              rgba(0,0,0,0.05) 0,
              rgba(0,0,0,0.05) 1px,
              transparent 1px,
              transparent 18px
            ),
            repeating-linear-gradient(
              to right,
              rgba(0,0,0,0.03) 0,
              rgba(0,0,0,0.03) 1px,
              transparent 1px,
              transparent 18px
            );
        }
        
        /* Print styles */
        @page { 
          size: 8.5in 11in; 
          margin: 0; 
        }
        
        @media print {
          .no-print { display: none !important; }
          html, body { background: #fff !important; }
          .resume-page { 
            border: none; 
            box-shadow: none; 
          }
          .guides { display: none !important; }
          
          /* Ensure proper print breaks */
          .section-title {
            page-break-after: avoid;
          }
          
          .job-entry, .credential, .project {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </main>
  );
}