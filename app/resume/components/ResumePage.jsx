"use client";

import { useRef } from "react";
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
    {highlights && highlights.length > 0 && (
      <ul className="mt-1 pl-0 list-none">
        {highlights.map((highlight, i) => (
          <li
            key={i}
            className="mb-0.5 pl-3 relative text-xs leading-relaxed text-gray-700 before:content-['•'] before:absolute before:left-0 before:text-gray-600 before:font-bold"
          >
            {highlight}
          </li>
        ))}
      </ul>
    )}
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

const Project = ({ name, year, tech, description }) => (
  <div className="mb-1.5">
    <div className="text-xs font-bold text-gray-900 leading-tight">
      {name} ({year})
    </div>
    <div className="text-[10px] text-gray-600 italic">{tech}</div>
    <div className="text-xs text-gray-700 leading-relaxed mt-0.5">
      {description}
    </div>
  </div>
);

export default function ResumeComponentResponsive({ showGuides = false }) {
  const pageRef = useRef(null);
  const containerRef = useRef(null);
  const documentRef = useRef(null);

  const { scale, dimensions } = useDocumentScaling(containerRef, documentRef);

  return (
    <div
      ref={containerRef}
      className="resume-container w-full flex flex-col items-center p-8 bg-slate-100 dark:bg-neutral-900 print:bg-white"
    >
      {/* Scaling wrapper */}
      <div
        className="relative"
        style={{
          width: dimensions.width,
          height: dimensions.height,
        }}
      >
        {/* Fixed letter-size resume container - 8.5 x 11 inches */}
        <div
          ref={(el) => {
            pageRef.current = el;
            documentRef.current = el;
          }}
          className="absolute top-0 left-0 bg-white rounded-lg shadow-2xl dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.95)] print:shadow-none print:rounded-none origin-top-left"
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
                Full&#8209;Stack Developer & Investigative Data Journalist
              </div>
              <div className="flex justify-center items-center gap-4 text-xs text-gray-600 font-normal">
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
                  href="https://www.linkedin.com/in/trevorabrown/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  linkedin.com/in/trevorabrown
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
            </header>

            {/* Main content - Fixed 2-column grid */}
            <div className="grid grid-cols-3 gap-8">
              {/* Primary column - takes 2 columns */}
              <div className="col-span-2">
                <div className="mb-2">
                  <Section title="Summary">
                    <p className="text-xs text-gray-700 leading-relaxed">
                      Investigative data journalist turned full-stack developer
                      with 15 years of elections and political reporting
                      experience. Builds production web applications and data
                      pipelines in JavaScript, TypeScript and SQL, with deep
                      domain expertise in voter data, campaign finance and
                      election systems.
                    </p>
                  </Section>
                </div>

                <Section title="Elections & Data Experience">
                  <Job
                    title="Investigative Reporter"
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
                      "Analyzed 90,000+ voter registration records to identify systemic purge of inactive voters",
                      "Built Tableau dashboards visualizing state lawmakers' campaign finance disclosures",
                      "Analyzed 3,600+ bills across two legislative sessions and built Flourish and Datawrapper visualizations of partisan authorship patterns",
                      "Structured 22,250+ court records into an analyzable dataset exposing hospital litigation patterns",
                      "Published Democracy Watch newsletter (4,000 subscribers) on elections and democratic institutions",
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
                      "Analyzed election results, voter turnout and registration trends across three election cycles",
                      "Covered state legislature and agencies with a focus on budget and fiscal data",
                    ]}
                  />
                  <Job
                    title="Reporter & Editor"
                    org={
                      <>
                        <a
                          href="https://www.cnhi.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-inherit hover:text-gray-600"
                        >
                          Community Newspaper Holdings Inc.
                        </a>{" "}
                        (14 papers),{" "}
                        <a
                          href="https://www.newsleader.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-inherit hover:text-gray-600"
                        >
                          Staunton News Leader
                        </a>{" "}
                        (Virginia daily),{" "}
                        <a
                          href="https://www.idsnews.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-inherit hover:text-gray-600"
                        >
                          Indiana Daily Student
                        </a>{" "}
                        (Indiana University)
                      </>
                    }
                    period="2007 – 2011"
                    highlights={[
                      "Sole statehouse correspondent filing coverage for 14 newspapers across Oklahoma",
                      "Editor-in-Chief of Indiana Daily Student",
                    ]}
                  />
                </Section>

                <Section title="Web Development">
                  <Job
                    title="Frontend & Backend Developer"
                    org={
                      <>
                        <a
                          href="https://keithbrowndds.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-inherit hover:text-gray-600"
                        >
                          Keith Brown DDS
                        </a>
                      </>
                    }
                    period="2023 – Present"
                    highlights={[
                      "Built public-facing Next.js site with appointment forms, call tracking and SEO \u2014 cut ad costs and increased new patient bookings by more than 33% in 2025",
                      "Built data pipeline for financial reporting, Google Ads API and AI chat interface via Claude",
                    ]}
                  />
                </Section>

                <Section title="Technical Skills">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                    <SkillGroup
                      category="Languages"
                      skills="JavaScript, TypeScript, SQL, Python"
                    />
                    <SkillGroup
                      category="Data"
                      skills="PostgreSQL, Excel, Playwright, web scraping, data pipelines"
                    />
                    <SkillGroup
                      category="AI"
                      skills="OpenAI API, Anthropic API, Claude Code, Ollama"
                    />
                    <SkillGroup
                      category="Web"
                      skills="Next.js, React, Node.js, REST APIs"
                    />
                    <SkillGroup
                      category="Visualization"
                      skills="Tableau, Datawrapper, Tailwind, Flourish, Chart.js"
                    />
                    <SkillGroup
                      category="Domain"
                      skills="Voter files, campaign finance, election results, public records (FOIA)"
                    />
                  </div>
                </Section>
              </div>

              {/* Secondary column */}
              <div>
                <Section title="Education">
                  <Credential
                    degree="Web Development Certificate"
                    institution={
                      <a
                        href="https://bootcamp.outreach.ou.edu/programs/coding"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-inherit hover:text-gray-600"
                      >
                        University of Oklahoma / Fullstack Academy
                      </a>
                    }
                    detail="260-hour intensive program"
                    year="2022"
                  />
                  <Credential
                    degree="B.A. Journalism"
                    institution={
                      <a
                        href="https://bloomington.iu.edu/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-inherit hover:text-gray-600"
                      >
                        Indiana University
                      </a>
                    }
                    year="2008"
                  />
                  <Credential
                    degree="B.A. Political Science"
                    institution={
                      <a
                        href="https://bloomington.iu.edu/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-inherit hover:text-gray-600"
                      >
                        Indiana University
                      </a>
                    }
                    year="2008"
                  />
                </Section>

                <Section title="Awards & Recognition">
                  <Award
                    title="Writer of the Year"
                    org={
                      <a
                        href="https://oklahomawatch.org/2021/05/10/oklahoma-watchs-trevor-brown-earns-writer-of-year-honors-in-great-plains-journalism-contest/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-inherit hover:text-gray-600"
                      >
                        Great Plains Journalism Awards
                      </a>
                    }
                    year="2021"
                  />
                  <Award
                    title="Reporter of the Year"
                    org={
                      <a
                        href="https://okspj.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-inherit hover:text-gray-600"
                      >
                        Oklahoma Society of Professional Journalists
                      </a>
                    }
                    year="2020"
                  />
                  <Award
                    title="First Place, Investigative Reporting"
                    org={
                      <a
                        href="https://okspj.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-inherit hover:text-gray-600"
                      >
                        Oklahoma Society of Professional Journalists
                      </a>
                    }
                    year="2022"
                  />
                  <Award
                    title="Community Champion Award"
                    org={
                      <a
                        href="https://inn.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-inherit hover:text-gray-600"
                      >
                        Institute for Nonprofit News
                      </a>
                    }
                    year="2020"
                  />
                </Section>

                <Section title="Projects">
                  <Project
                    name="Second Brain"
                    year="2026"
                    tech="TypeScript, Vector DB, Playwright, Anthropic API"
                    description="Personal knowledge base processing 200,000+ records through data pipelines with AI-powered semantic search"
                  />
                  <Project
                    name="AI Model Arena"
                    year="2025"
                    tech="TypeScript, Better Auth, Claude/GPT/Gemini/Grok APIs"
                    description="4-way LLM comparison with OAuth authentication, AI judging system, response streaming and multi-provider API management"
                  />
                  <Project
                    name="News Pulse"
                    year="2025"
                    tech="TypeScript, Next.js, PostgreSQL, REST APIs, Better Auth"
                    description="Open-source intelligence dashboard pulling from Bluesky, Telegram, Mastodon, RSS and API feeds with caching optimizations"
                  />
                  <Project
                    name="Food Xpiry"
                    year="2025"
                    tech="TypeScript, Next.js, PostgreSQL, OpenAI API"
                    description="Grocery tracker with database-backed inventory, programmatic search, AI shelf-life estimates and receipt scanning"
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

      {/* Download button below resume */}
      <div className="mt-6 print:hidden flex justify-center">
        <a
          href="/pdfs/Trevor_Brown_Resume.pdf"
          download
          className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-blue-800 dark:bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 hover:shadow-lg hover:-translate-y-1 active:bg-blue-900 dark:active:bg-blue-700 active:shadow-sm active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Download Resume (PDF)
        </a>
      </div>
      {/* Note: To regenerate PDF after content changes, run: npm run generate-pdfs */}
    </div>
  );
}
