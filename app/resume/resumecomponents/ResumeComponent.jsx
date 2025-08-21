"use client";

import { useState, useRef } from "react";

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
      {degree}
      {year && ` (${year})`}
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

const Award = ({ title, org, year, article }) => (
  <div className="award">
    <div className="award-title">
      {title} ({year})
    </div>
    <div className="award-org">{org}</div>
    {article && <div className="award-article">"{article}"</div>}
  </div>
);

export default function ResumeComponent({ showGuides = false }) {
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

      // Convert to PNG and download
      canvas.toBlob(
        (blob) => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.download = "Trevor_Brown_Resume_AP.png";
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

  const handleExportWord = async () => {
    if (!pageRef.current) return;
    setIsExporting(true);
    setExportType("word");
    try {
      // Create RTF format which works better on Mac
      const rtfContent = `{\\rtf1\\ansi\\deff0 {\\fonttbl {\\f0 Times New Roman;}}
\\f0\\fs24 TREVOR BROWN\\par
\\fs18 Investigative Journalist & Full-Stack Developer\\par
\\line
630-301-0589 • TrevorBrown.Web@gmail.com • trevorthewebdeveloper.com\\par
\\line
\\b Summary\\b0\\par
Award-winning investigative journalist and full-stack developer specializing in data-driven applications and interactive storytelling.\\par
\\line
\\b Professional Experience\\b0\\par
\\b Web Developer & Digital Marketing\\b0\\par
Keith Brown DDS (2023 – Present)\\par
• Build and maintain responsive dental practice website\\par
• Manage advertising budget and triple new patient revenue\\par
\\line
\\b Investigative Journalist\\b0\\par
Oklahoma Watch (2016 – 2022)\\par
• Conducted long-form investigations into government corruption\\par
• Launched Democracy Watch newsletter to 4,000+ subscribers\\par
}`;

      const blob = new Blob([rtfContent], { type: "application/rtf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = "Trevor_Brown_Resume.rtf";
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
    } finally {
      setIsExporting(false);
      setExportType("");
    }
  };

  return (
    <div className="mx-auto max-w-[calc(8.5in+6rem)] px-6 py-12 flex flex-col items-center">
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
            <div className="dek">
              Investigative Journalist & Full‑Stack Developer
            </div>
            <div className="contact-line">
              <span>630‑301‑0589</span>
              <a
                href="https://trevorthewebdeveloper.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                trevorthewebdeveloper.com
              </a>
              <a
                href="mailto:trevorbrown.web@gmail.com"
                className="contact-link"
              >
                trevorbrown.web@gmail.com
              </a>
            </div>
          </header>

          {/* Main content - Two column layout */}
          <div className="main-content">
            {/* Primary column */}
            <div className="primary-col">
              <div className="summary-section">
                <Section title="Summary">
                  <p className="summary-text">
                    Award‑winning investigative journalist and full‑stack
                    developer specializing in data‑driven applications and
                    interactive storytelling. Builds dynamic visualizations and
                    tools by combining deep reporting expertise with modern
                    development skills to deliver accurate, engaging information
                    on complex issues.
                  </p>
                </Section>
              </div>

              <Section title="Professional Experience">
                <Job
                  title="Web Developer & Digital Marketing"
                  org={
                    <>
                      <a
                        href="https://keithbrowndds.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="org-link"
                      >
                        Keith Brown DDS
                      </a>{" "}
                      (Naperville, Ill.)
                    </>
                  }
                  period="2023 – Present"
                  highlights={[
                    "Build and maintain responsive dental practice website with appointment booking system and search optimization using Next.js",
                    "Manage $2,000 monthly advertising budget and triple new patient revenue through targeted search campaigns",
                  ]}
                />
                <Job
                  title="Investigative Journalist"
                  org={
                    <>
                      <a
                        href="https://oklahomawatch.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="org-link"
                      >
                        Oklahoma Watch
                      </a>{" "}
                      (Oklahoma City)
                    </>
                  }
                  period="2016 – 2022"
                  highlights={[
                    "Conducted long‑form investigations into government corruption, public policy issues and legislative accountability using data analysis",
                    "Launched Democracy Watch newsletter to 4,000+ subscribers covering voting, elections, redistricting and government transparency",
                  ]}
                />
                <Job
                  title="State Capitol Reporter"
                  org={
                    <>
                      <a
                        href="https://www.wyomingnews.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="org-link"
                      >
                        Wyoming Tribune Eagle
                      </a>{" "}
                      (Cheyenne)
                    </>
                  }
                  period="2011 – 2016"
                  highlights={[
                    "Reported on legislature, elections, governor and state agencies with focus on budget data and policy analysis",
                  ]}
                />
                <Job
                  title="State Government Reporter"
                  org={
                    <>
                      <a
                        href="https://www.cnhi.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="org-link"
                      >
                        CNHI
                      </a>{" "}
                      (Oklahoma City)
                    </>
                  }
                  period="2010 – 2011"
                  highlights={[
                    "Functioned as sole statehouse correspondent, creating enterprise and election coverage for 14 newspapers",
                  ]}
                />
                <Job
                  title="Reporter"
                  org={
                    <>
                      <a
                        href="https://www.newsleader.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="org-link"
                      >
                        Staunton News Leader
                      </a>{" "}
                      (Staunton, Va.)
                    </>
                  }
                  period="2008 – 2010"
                  highlights={[
                    "Wrote about local government, courts and breaking news for daily newspaper",
                  ]}
                />
                <Job
                  title="Editor‑in‑Chief"
                  org={
                    <>
                      <a
                        href="https://www.idsnews.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="org-link"
                      >
                        Indiana Daily Student
                      </a>{" "}
                      (Bloomington, Ind.)
                    </>
                  }
                  period="2007 – 2008"
                  highlights={["Directed newsroom of 100+ student journalists"]}
                />
              </Section>
            </div>

            {/* Secondary column */}
            <div className="secondary-col">
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
                  org={
                    <>
                      <a
                        href="https://oklahomawatch.org/2021/05/10/oklahoma-watchs-trevor-brown-earns-writer-of-year-honors-in-great-plains-journalism-contest/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="org-link"
                      >
                        Great Plains Journalism Awards
                      </a>
                    </>
                  }
                  year="2021"
                />
                <Award
                  title="Reporter of the Year"
                  org={
                    <>
                      <a
                        href="https://okspj.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="org-link"
                      >
                        Oklahoma Society of Professional Journalists
                      </a>
                    </>
                  }
                  year="2020"
                />
                <Award
                  title="First Place, Investigative Reporting"
                  org={
                    <>
                      <a
                        href="https://okspj.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="org-link"
                      >
                        Oklahoma Society of Professional Journalists
                      </a>
                    </>
                  }
                  year="2022"
                />
                <Award
                  title="Community Champion Award"
                  org={
                    <>
                      <a
                        href="https://inn.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="org-link"
                      >
                        Institute for Nonprofit News
                      </a>
                    </>
                  }
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

      {/* Download buttons below resume */}
      <div className="mt-6 no-print flex gap-3">
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
          {isExporting && exportType === "image"
            ? "Generating…"
            : "Download Image"}
        </button>
      </div>
    </div>
  );
}
