"use client";

import { useRef } from "react";
import { useDocumentScaling } from "@/app/hooks/useDocumentScaling";

/* Component Library - Editorial Resume Style with Tailwind */
const Section = ({ title, children }) => (
  <section>
    <h3 className="text-[9px] font-extrabold tracking-widest uppercase text-gray-900 border-b border-gray-300 pb-0.5 mb-1.5 mt-2 first:mt-0">
      {title}
    </h3>
    {children}
  </section>
);

const Job = ({ title, org, period, highlights }) => (
  <div className="mb-1.5">
    <div className="flex justify-between items-start mb-0.5 gap-4">
      <div>
        <div className="text-[11px] font-bold text-gray-900 leading-tight">
          {title}
        </div>
        <div className="text-[10px] font-semibold text-gray-800 mt-0">{org}</div>
      </div>
      <div className="text-[10px] font-medium text-gray-600 whitespace-nowrap text-right">
        {period}
      </div>
    </div>
    {highlights && highlights.length > 0 && (
      <ul className="mt-0.5 pl-0 list-none">
        {highlights.map((highlight, i) => (
          <li
            key={i}
            className="mb-0 pl-2.5 relative text-[10px] leading-[1.35] text-gray-700 before:content-['•'] before:absolute before:left-0 before:text-gray-600 before:font-bold"
          >
            {highlight}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Credential = ({ degree, institution, detail, year }) => (
  <div className="mb-1">
    <div className="text-[10px] font-bold text-gray-900 leading-tight">
      {degree}
      {year && ` (${year})`}
    </div>
    <div className="text-[10px] font-semibold text-gray-700 mt-0">
      {institution}
    </div>
    {detail && (
      <div className="text-[9px] text-gray-600 mt-0 italic">{detail}</div>
    )}
  </div>
);

const Award = ({ title, org, year, article }) => (
  <div className="mb-1">
    <div className="text-[10px] font-bold text-gray-900 leading-tight">
      {title} ({year})
    </div>
    <div className="text-[10px] font-medium text-gray-700 mt-0">{org}</div>
    {article && (
      <div className="text-[9px] text-gray-700 mt-0 italic">"{article}"</div>
    )}
  </div>
);

const Project = ({ name, year, tech, description }) => (
  <div className="mb-1">
    <div className="text-[10px] font-bold text-gray-900 leading-tight">
      {name} ({year})
    </div>
    <div className="text-[9px] text-gray-600 italic">{tech}</div>
    <div className="text-[10px] text-gray-700 leading-[1.35] mt-0">
      {description}
    </div>
  </div>
);

const SkillPair = ({ leftLabel, leftSkills, rightLabel, rightSkills }) => (
  <div className="grid grid-cols-2 gap-3 mb-0.5">
    <div>
      <span className="text-[10px] font-bold text-gray-900">{leftLabel}:</span>{" "}
      <span className="text-[10px] text-gray-700">{leftSkills}</span>
    </div>
    <div>
      <span className="text-[10px] font-bold text-gray-900">{rightLabel}:</span>{" "}
      <span className="text-[10px] text-gray-700">{rightSkills}</span>
    </div>
  </div>
);

export default function ResumeComponentResponsive({ showGuides = false }) {
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
          ref={documentRef}
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
            className="h-full overflow-hidden print:overflow-visible"
            style={{ padding: "0.5in 0.6in 0.4in 0.6in" }}
          >
            {/* Header - Editorial masthead style */}
            <header className="text-center mb-2 pb-1.5 border-b-2 border-gray-900">
              <h1 className="text-2xl font-black tracking-wider text-gray-900 mb-1 uppercase">
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
              </div>
            </header>

            {/* Main content - Fixed 2-column grid */}
            <div className="grid grid-cols-3 gap-6">
              {/* Primary column - takes 2 columns */}
              <div className="col-span-2">
                <div className="mb-1">
                  <Section title="Summary">
                    <p className="text-[10px] text-gray-700 leading-[1.4]">
                      Award-winning investigative journalist with 15 years in
                      newsrooms covering elections, government and public policy
                      across four states. Turns public records and complex
                      datasets into clear, accurate charts, maps and interactive
                      graphics using Tableau, Datawrapper, Flourish and
                      Chart.js. Now builds production web applications and data
                      pipelines in JavaScript, TypeScript and SQL.
                    </p>
                  </Section>
                </div>

                <Section title="Data Journalism & Visualization">
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
                      "Investigated Oklahoma's legislative, executive and judicial branches for independent nonprofit newsroom — beats included elections, dark money, criminal justice, redistricting and public health",
                      "Built Tableau dashboards, Datawrapper charts and Flourish visualizations for own investigations and for other reporters — work published under Creative Commons and republished by other outlets",
                      "Published Democracy Watch newsletter (4,000 subscribers), ran newsroom Twitter with live coverage of elections and legislative sessions, appeared on TV, radio and podcasts",
                      "Investigations included hospital billing practices (22,250 court records), voter registration purges (90,000+ records), partisan legislation (3,600+ bills), campaign finance, redistricting and election misinformation",
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
                      "Covered the governor's office, state legislature and state budget across three election cycles",
                      "Broke story on Wyoming Highway Patrol using ticket quotas to evaluate troopers — practice rescinded after publication",
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
                      "Sole statehouse correspondent filing for 14 newspapers across Oklahoma",
                      "Daily newspaper reporter at Staunton News Leader covering local government in Virginia",
                      "Editor-in-Chief of Indiana Daily Student (Indiana University), directing 100+ student journalists",
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
                      "Designed and built production Next.js site from scratch — responsive layout, typography, color system, appointment forms and call tracking",
                      "Manages $2,000/month Google Ads campaign with API dashboard tracking spend and performance",
                      "Increased new patient bookings by more than 33%",
                      "Built data pipeline for financial reporting integrating GA4, CallRail and Google Business Profile",
                    ]}
                  />
                </Section>

                {/* Technical Skills - 2-column sub-grid at bottom of left column */}
                <Section title="Technical Skills">
                  <div className="space-y-0.5">
                    <SkillPair
                      leftLabel="Visualization"
                      leftSkills="Tableau, Datawrapper, Flourish, Chart.js, D3.js"
                      rightLabel="Languages"
                      rightSkills="JavaScript, TypeScript, Python, SQL, HTML, CSS"
                    />
                    <SkillPair
                      leftLabel="Data Analysis"
                      leftSkills="Spreadsheets, SQL queries, PostgreSQL, public records, FOIA"
                      rightLabel="Web/Interactive"
                      rightSkills="React, Next.js, Node.js, Tailwind CSS, responsive design"
                    />
                    <SkillPair
                      leftLabel="Automation & AI"
                      leftSkills="Playwright (scraping and data collection), AI agents (Claude Code, Anthropic API)"
                      rightLabel="AI Tools"
                      rightSkills="Claude Code, Anthropic API, OpenAI API, Gemini API, Ollama (local models)"
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

                <Section title="Web Projects">
                  <Project
                    name="Oklahoma COVID-19 Legacy Project"
                    year="2020"
                    tech="Flourish, crowdsourced data, Oklahoma Watch"
                    description="Interactive memorial visualizing individual lives lost to COVID-19 through crowdsourced stories and obituaries"
                  />
                  <Project
                    name="News Pulse"
                    year="2025"
                    tech="Next.js, React, PostgreSQL, REST APIs"
                    description="Open-source news intelligence dashboard aggregating RSS, Bluesky, Telegram, Reddit and YouTube with AI summarization"
                  />
                  <Project
                    name="Second Brain"
                    year="2026"
                    tech="TypeScript, React, Chart.js, Anthropic API"
                    description="Personal data platform processing 200,000+ records through TypeScript pipelines with AI chat and semantic search"
                  />
                  <Project
                    name="sort(id)"
                    year="2025"
                    tech="Next.js, PostgreSQL, TMDB API, drag-and-drop"
                    description="Media ranking platform with drag-and-drop interfaces, TMDB integration and NextAuth authentication"
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
