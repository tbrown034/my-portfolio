"use client";

import { useState, useRef } from "react";
import { useDocumentScaling } from "@/app/hooks/useDocumentScaling";

/* Component Library - Editorial Resume Style with Tailwind */
const Section = ({ title, children }) => (
  <section>
    <h3 className="text-xs font-extrabold tracking-widest uppercase text-gray-900 border-b border-gray-300 pb-1 mb-2 mt-3 first:mt-0">
      {title}
    </h3>
    {children}
  </section>
);

const Job = ({ title, org, period, highlights }) => (
  <div className="mb-2">
    <div className="flex justify-between items-start mb-1 gap-4">
      <div>
        <div className="text-sm font-bold text-gray-900 leading-tight">
          {title}
        </div>
        <div className="text-xs font-semibold text-gray-800 mt-0.5">{org}</div>
      </div>
      <div className="text-xs font-medium text-gray-600 whitespace-nowrap text-right">
        {period}
      </div>
    </div>
    <ul className="mt-1 pl-0 list-none">
      {highlights.map((highlight, i) => (
        <li
          key={i}
          className="mb-0.5 pl-3 relative text-xs leading-relaxed before:content-['•'] before:absolute before:left-0 before:text-gray-600 before:font-bold"
        >
          {highlight}
        </li>
      ))}
    </ul>
  </div>
);

const Credential = ({ degree, institution, detail, year }) => (
  <div className="mb-1.5">
    <div className="text-xs font-bold text-gray-900 leading-tight">
      {degree}
      {year && ` (${year})`}
    </div>
    <div className="text-xs font-semibold text-gray-700 mt-0.5">
      {institution}
    </div>
    {detail && (
      <div className="text-[10px] text-gray-600 mt-0.5 italic">{detail}</div>
    )}
  </div>
);

const SkillGroup = ({ category, skills }) => (
  <div className="mb-1.5">
    <div className="text-xs font-bold text-gray-900 mb-0.5 border-b border-gray-200 pb-0.5">
      {category}
    </div>
    <div className="text-xs text-gray-700 leading-relaxed">{skills}</div>
  </div>
);

const Award = ({ title, org, year, article }) => (
  <div className="mb-1.5">
    <div className="text-xs font-bold text-gray-900 leading-tight">
      {title} ({year})
    </div>
    <div className="text-xs font-medium text-gray-700 mt-0.5">{org}</div>
    {article && (
      <div className="text-[10px] text-gray-700 mt-0.5 italic">"{article}"</div>
    )}
  </div>
);

export default function ResumeComponentResponsive({ showGuides = false }) {
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
          filename: "Trevor_Brown_Resume.pdf",
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
          link.download = "Trevor_Brown_Resume.png";
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
      className="resume-container w-full flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-900 print:bg-white"
    >
      {/* Scaling wrapper */}
      <div
        className="relative"
        style={{
          width: dimensions.width,
          height: dimensions.height,
        }}
      >
        {/* Fixed letter-size resume container - 8.5 × 11 inches */}
        <div
          ref={(el) => {
            pageRef.current = el;
            documentRef.current = el;
          }}
          className="absolute top-0 left-0 bg-white shadow-xl print:shadow-none origin-top-left"
          style={{
            width: "8.5in",
            height: "11in",
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          {/* Resume content with fixed padding for consistent layout */}
          <div
            className="p-12 h-full overflow-hidden print:overflow-visible"
            style={{ padding: "0.75in" }}
          >
            {/* Header - Editorial masthead style */}
            <header className="text-center mb-3 pb-2 border-b-2 border-gray-900">
              <h1 className="text-2xl font-black tracking-wider text-gray-900 mb-1 uppercase">
                TREVOR BROWN
              </h1>
              <div className="text-sm font-medium text-gray-700 mb-2 tracking-wide">
                Investigative Journalist & Full‑Stack Developer
              </div>
              <div className="flex justify-center items-center gap-4 text-xs text-gray-600 font-normal">
                <span>630‑301‑0589</span>
                <a
                  href="https://trevorthewebdeveloper.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 underline underline-offset-2 hover:text-gray-800 hover:no-underline transition-colors"
                >
                  trevorthewebdeveloper.com
                </a>
                <a
                  href="mailto:trevorbrown.web@gmail.com"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  trevorbrown.web@gmail.com
                </a>
              </div>
            </header>

            {/* Main content - Fixed 2-column grid */}
            <div className="grid grid-cols-3 gap-8">
              {/* Primary column - takes 2 columns */}
              <div className="col-span-2">
                <div className="mb-2">
                  <Section title="Summary">
                    <p className="text-xs text-gray-700 leading-relaxed">
                      Combines 15 years of award-winning investigative journalism with full-stack development. 
                      Builds data-driven applications that require both technical skills and editorial judgment.
                    </p>
                    <p className="text-xs text-gray-700 leading-relaxed mt-2">
                      Creates interactive visualizations and web tools that make complex information accessible. 
                      Interested in exploring practical applications of AI and LLMs.
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
                          className="text-inherit hover:text-gray-600"
                        >
                          Keith Brown DDS
                        </a>{" "}
                        (Naperville, Ill.)
                      </>
                    }
                    period="2023 – Present"
                    highlights={[
                      "Built a responsive dental practice website with Next.js, including appointment booking, service pages and a blog. Manage SEO and a $2,000/month Google Ads budget, optimizing campaigns that tripled new patient bookings over the past year.",
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
                          className="text-inherit hover:text-gray-600"
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
                          className="text-inherit hover:text-gray-600"
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
                          className="text-inherit hover:text-gray-600"
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
                          className="text-inherit hover:text-gray-600"
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
                          className="text-inherit hover:text-gray-600"
                        >
                          Indiana Daily Student
                        </a>{" "}
                        (Bloomington, Ind.)
                      </>
                    }
                    period="2007 – 2008"
                    highlights={[
                      "Directed newsroom of 100+ student journalists",
                    ]}
                  />
                </Section>
              </div>

              {/* Secondary column */}
              <div>
                <Section title="Education">
                  <Credential
                    degree="Web Development Certificate"
                    institution={
                      <>
                        <a
                          href="https://bootcamp.outreach.ou.edu/programs/coding"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-inherit hover:text-gray-600"
                        >
                          University of Oklahoma
                        </a>
                      </>
                    }
                    detail="260-hour intensive program via FullStack Academy"
                    year="2022"
                  />
                  <Credential
                    degree="B.A. Journalism"
                    institution={
                      <>
                        <a
                          href="https://bloomington.iu.edu/index.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-inherit hover:text-gray-600"
                        >
                          Indiana University
                        </a>
                      </>
                    }
                    year="2008"
                  />
                  <Credential
                    degree="B.A. Political Science"
                    institution={
                      <>
                        <a
                          href="https://bloomington.iu.edu/index.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-inherit hover:text-gray-600"
                        >
                          Indiana University
                        </a>
                      </>
                    }
                    year="2008"
                  />
                </Section>

                <Section title="Technical Skills">
                  <SkillGroup
                    category="Core Web Technologies"
                    skills="Next.js, React, TypeScript, Node.js, PostgreSQL, Tailwind"
                  />
                  <SkillGroup
                    category="Data Visualization"
                    skills="Flourish, Datawrapper, Infogram, Tableau, Chart.js, Excel, web scraping"
                  />
                  <SkillGroup
                    category="AI & Automation"
                    skills="LLM Integrations, OpenAI API, Anthropic API"
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
                          className="text-inherit hover:text-gray-600"
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
                          className="text-inherit hover:text-gray-600"
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
                          className="text-inherit hover:text-gray-600"
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
                          className="text-inherit hover:text-gray-600"
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

          {/* Guides overlay for print */}
          {showGuides && (
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_0_0.75in_rgba(59,130,246,0.08)] print:hidden" />
          )}
        </div>
      </div>

      {/* Download buttons below resume */}
      <div className="mt-6 print:hidden flex gap-3">
        <button
          onClick={handleExportPDF}
          disabled={isExporting}
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-800 dark:bg-sky-500 dark:text-slate-900 rounded-xl hover:bg-blue-900 dark:hover:bg-sky-400 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isExporting && exportType === "pdf" ? "Generating…" : "Download PDF"}
        </button>
      </div>
    </div>
  );
}
