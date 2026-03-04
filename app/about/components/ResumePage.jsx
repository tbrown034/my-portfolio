"use client";

import { useRef } from "react";
import { useDocumentScaling } from "@/app/hooks/useDocumentScaling";

/* ── Inline-style helpers (pt units, matching second-brain ResumeLayout) ── */

const FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const SectionHeading = ({ children }) => (
  <div style={{ fontSize: '9.5pt', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', borderBottom: '1.5px solid #999', paddingBottom: '1.5pt', marginBottom: '3pt' }}>
    {children}
  </div>
);

const Job = ({ title, org, period, highlights }) => (
  <div style={{ marginBottom: '3pt' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
      <div style={{ fontSize: '9.5pt', fontWeight: 700 }}>{title}</div>
      {period && <div style={{ fontSize: '8.5pt', color: '#555', whiteSpace: 'nowrap' }}>{period}</div>}
    </div>
    <div style={{ fontSize: '8pt', color: '#555', marginBottom: highlights?.length ? '1pt' : 0 }}>{org}</div>
    {highlights && highlights.length > 0 && (
      <ul style={{ margin: 0, paddingLeft: '12pt', listStyleType: 'disc' }}>
        {highlights.map((h, i) => (
          <li key={i} style={{ fontSize: '8pt', lineHeight: 1.3, marginBottom: '0.2pt', color: '#333' }}>
            {h}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Credential = ({ degree, institution, detail, year }) => (
  <div style={{ marginBottom: '4pt' }}>
    <div style={{ fontSize: '9pt', fontWeight: 700 }}>
      {degree}{year && ` (${year})`}
    </div>
    <div style={{ fontSize: '8.5pt', color: '#555' }}>{institution}</div>
    {detail && <div style={{ fontSize: '8pt', color: '#777', fontStyle: 'italic' }}>{detail}</div>}
  </div>
);

const Award = ({ title, org, year }) => (
  <div style={{ marginBottom: '4pt' }}>
    <div style={{ fontSize: '9.5pt', fontWeight: 700 }}>{title} ({year})</div>
    <div style={{ fontSize: '9pt', color: '#555' }}>{org}</div>
  </div>
);

const Project = ({ name, tech, description }) => (
  <div style={{ marginBottom: '5pt' }}>
    <div style={{ fontSize: '9pt', fontWeight: 700 }}>{name}</div>
    <div style={{ fontSize: '8pt', color: '#555', fontStyle: 'italic' }}>{tech}</div>
    {description && (
      <ul style={{ margin: 0, paddingLeft: '12pt', listStyleType: 'disc' }}>
        <li style={{ fontSize: '8pt', lineHeight: 1.3, marginBottom: '0.2pt', color: '#333' }}>
          {description}
        </li>
      </ul>
    )}
  </div>
);

const SkillGroup = ({ label, items }) => (
  <div>
    <div style={{ fontSize: '8.5pt', fontWeight: 700, marginBottom: '0.5pt', color: '#1a1a1a' }}>{label}</div>
    <div style={{ fontSize: '8pt', color: '#444', lineHeight: 1.35 }}>{items}</div>
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
          {/* Resume content */}
          <div
            style={{
              height: '100%',
              overflow: 'hidden',
              padding: '0.4in 0.5in 0.3in 0.5in',
              fontFamily: FONT,
              color: '#1a1a1a',
              lineHeight: 1.35,
            }}
            className="print:overflow-visible"
          >
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '4pt' }}>
              <div style={{ fontSize: '20pt', fontWeight: 800, letterSpacing: '2px', color: '#1a2332' }}>
                TREVOR BROWN
              </div>
            </div>
            <div style={{ borderBottom: '1.5px solid #333', marginBottom: '4pt' }} />
            <div style={{ textAlign: 'center', fontSize: '9pt', color: '#555', marginBottom: '4pt' }}>
              <span>630&#8209;301&#8209;0589</span>
              {' \u00b7 '}
              <a href="mailto:trevorbrown.web@gmail.com" style={{ color: '#555' }}>
                trevorbrown.web@gmail.com
              </a>
              {' \u00b7 '}
              <a
                href="https://trevorthewebdeveloper.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#555', textDecoration: 'underline', textUnderlineOffset: '2px' }}
              >
                trevorthewebdeveloper.com
              </a>
            </div>
            <div style={{ borderBottom: '1px solid #ccc', marginBottom: '5pt' }} />

            {/* Two columns - 61/39 split */}
            <div style={{ display: 'flex', gap: '10pt' }}>

              {/* Left column - 61% */}
              <div style={{ flex: '0 0 61%' }}>

                {/* Summary — keeping portfolio general-purpose version */}
                <div style={{ marginBottom: '4pt' }}>
                  <SectionHeading>Summary</SectionHeading>
                  <div style={{ fontSize: '8pt', lineHeight: 1.35, color: '#333' }}>
                    Award-winning investigative journalist with 15 years in
                    newsrooms covering elections, government and public policy
                    across four states. Turns public records and complex
                    datasets into clear, accurate charts, maps and interactive
                    graphics using Tableau, Datawrapper, Flourish and
                    Chart.js. Now builds production web applications and data
                    pipelines in JavaScript, TypeScript and SQL.
                  </div>
                </div>

                {/* Web Development — first, like NYT layout */}
                <div style={{ marginBottom: '4pt' }}>
                  <SectionHeading>Web Development</SectionHeading>
                  <Job
                    title="Frontend & Backend Developer"
                    org="Keith Brown DDS (Naperville, IL)"
                    period="2023 – Present"
                    highlights={[
                      "Built production Next.js site from scratch — layout, forms, call tracking, full design system",
                      "Manages $2,000/month Google Ads campaign with API dashboard integrating GA4, CallRail and Google Business Profile; increased new patient bookings by 33%",
                      "Built admin dashboard with Clerk authentication, role-based access, Python billing pipeline and AI chat interface via Anthropic API",
                    ]}
                  />
                </div>

                {/* Journalism & Data Visualization */}
                <div style={{ marginBottom: '4pt' }}>
                  <SectionHeading>Journalism & Data Visualization</SectionHeading>
                  <Job
                    title="Investigative Reporter"
                    org="Oklahoma Watch (Oklahoma City) — independent nonprofit newsroom"
                    period="2016 – 2022"
                    highlights={[
                      "Investigated Oklahoma's legislative, executive and judicial branches for independent nonprofit newsroom — beats included elections, dark money, criminal justice, redistricting and public health",
                      "Built Tableau dashboards, Datawrapper charts and Flourish visualizations for own investigations and for other reporters published under Creative Commons and republished by other outlets",
                      "Investigations included hospital billing practices (22,250 court records), voter registration purges (90,000+ records), partisan legislation (3,600+ bills), campaign finance and redistricting",
                    ]}
                  />
                  <Job
                    title="State Capitol Reporter"
                    org="Wyoming Tribune Eagle (Cheyenne)"
                    period="2011 – 2016"
                    highlights={[
                      "Covered the governor's office, state legislature and state budget across three election cycles",
                      "Broke story on Wyoming Highway Patrol using ticket quotas to evaluate troopers — practice rescinded after publication",
                    ]}
                  />
                  <Job
                    title="Reporter & Editor"
                    org="CNHI (14 papers in Oklahoma), Staunton News Leader (Virginia daily), Indiana Daily Student (Indiana University)"
                    period="2007 – 2011"
                    highlights={[
                      "Sole statehouse correspondent filing for 14 newspapers across Oklahoma",
                      "Daily newspaper reporter at Staunton News Leader covering local government in Virginia",
                      "Editor-in-Chief of Indiana Daily Student (Indiana University), directing 100+ student journalists",
                    ]}
                  />
                </div>

                {/* Technical Skills */}
                <div style={{ marginBottom: '4pt' }}>
                  <SectionHeading>Technical Skills</SectionHeading>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: '2pt', columnGap: '8pt' }}>
                    <SkillGroup label="Languages" items="JavaScript, TypeScript, Python, SQL, HTML, CSS" />
                    <SkillGroup label="Frameworks" items="React, Next.js, Node.js, Tailwind CSS" />
                    <SkillGroup label="Data & APIs" items="PostgreSQL, REST APIs, Google Ads API, Chart.js, data pipelines" />
                    <SkillGroup label="Auth & Tooling" items="Clerk, NextAuth, Better Auth, Playwright, Git, Vercel" />
                    <SkillGroup label="AI" items="Claude API, OpenAI API, Gemini API, Grok API, Ollama" />
                    <SkillGroup label="Domain" items="Newsroom workflows, editorial judgment, FOIA, deadline publishing" />
                  </div>
                </div>
              </div>

              {/* Right column - 39% */}
              <div style={{ flex: 1 }}>

                {/* Education */}
                <div style={{ marginBottom: '10pt' }}>
                  <SectionHeading>Education</SectionHeading>
                  <Credential
                    degree="Web Development Certificate"
                    institution="University of Oklahoma / Fullstack Academy"
                    detail="260-hour intensive program"
                    year="2022"
                  />
                  <Credential
                    degree="B.A. Journalism"
                    institution="Indiana University"
                    year="2008"
                  />
                  <Credential
                    degree="B.A. Political Science"
                    institution="Indiana University"
                    year="2008"
                  />
                </div>

                {/* Awards */}
                <div style={{ marginBottom: '10pt' }}>
                  <SectionHeading>Awards & Recognition</SectionHeading>
                  <Award
                    title="Writer of the Year"
                    org="Great Plains Journalism Awards"
                    year="2021"
                  />
                  <Award
                    title="Reporter of the Year"
                    org="Oklahoma Society of Professional Journalists"
                    year="2020"
                  />
                  <Award
                    title="1st Place, Investigative Reporting"
                    org="Oklahoma Society of Professional Journalists"
                    year="2022"
                  />
                  <Award
                    title="Community Champion (Honorable Mention)"
                    org="Institute for Nonprofit News"
                    year="2020"
                  />
                </div>

                {/* Web Projects */}
                <div>
                  <SectionHeading>Web Projects</SectionHeading>
                  <Project
                    name="Second Brain — Personal Data Platform (2026)"
                    tech="TypeScript, React, Next.js, Node.js, PostgreSQL, Anthropic API"
                    description="Fullstack application with TypeScript data pipelines processing 200,000+ records from 14 sources, React frontend with search and visualization dashboards, API route handlers, and Tauri desktop wrapper"
                  />
                  <Project
                    name="Keith Brown DDS — Admin Dashboard (2024)"
                    tech="Next.js, Google Ads API, Clerk Auth, Python"
                    description="Authenticated admin dashboard with role-based access, financial reporting pipeline, and real-time Google Ads performance metrics"
                  />
                  <Project
                    name="News Pulse (2025)"
                    tech="TypeScript, Next.js, PostgreSQL, REST APIs, Better Auth"
                    description="News monitoring dashboard aggregating live feeds from Bluesky, Telegram, Mastodon, RSS and API sources with OAuth authentication and AI briefings"
                  />
                  <Project
                    name="AI Model Arena (2025)"
                    tech="TypeScript, React, Claude/GPT/Gemini/Grok APIs"
                    description="4-way LLM comparison tool with concurrent API calls, response streaming, error recovery and real-time cost tracking"
                  />
                  <div style={{ fontSize: '8pt', color: '#555', fontStyle: 'italic', borderTop: '1px solid #ccc', paddingTop: '2pt', marginTop: '1pt' }}>
                    Full portfolio at trevorthewebdeveloper.com/projects
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guides overlay */}
          {showGuides && (
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_0_0.75in_rgba(59,130,246,0.08)] print:hidden" />
          )}
        </div>
      </div>

      {/* Save as PDF button */}
      <div className="mt-6 print:hidden flex justify-center">
        <a
          href="/pdfs/Trevor_Brown_Resume.pdf"
          download
          className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-blue-800 dark:bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 hover:shadow-lg hover:-translate-y-1 active:bg-blue-900 dark:active:bg-blue-700 active:shadow-sm active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Export PDF
        </a>
      </div>
    </div>
  );
}
