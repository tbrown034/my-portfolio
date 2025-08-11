"use client";
import { useState } from "react";
import Link from "next/link";

export default function ResumePage() {
  const [isExporting, setIsExporting] = useState(false);

  const handleExportPDF = async () => {
    setIsExporting(true);
    try {
      // Create a clean print environment
      const printWindow = window.open('', '_blank');
      const resumeContent = document.querySelector('.resume-content').innerHTML;
      
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Trevor Brown - Resume</title>
          <meta charset="utf-8">
          <style>
            @page {
              margin: 0.5in;
              size: 8.5in 11in;
            }
            
            @page :first {
              @top-left { content: ""; }
              @top-center { content: ""; }
              @top-right { content: ""; }
              @bottom-left { content: ""; }
              @bottom-center { content: ""; }
              @bottom-right { content: ""; }
            }
            
            @media print {
              @page {
                margin: 0.5in;
              }
              
              body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              
              .no-print, 
              header[role="banner"], 
              nav, 
              .header, 
              .footer {
                display: none !important;
              }
            }
            
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.4;
              color: #000;
              background: white;
              margin: 0;
              padding: 0;
              font-size: 12px;
            }
            
            .resume-content {
              max-width: none !important;
              padding: 0 !important;
              margin: 0 !important;
            }
            
            .print-header {
              text-align: center;
              margin-bottom: 1rem;
            }
            
            .print-header h1 {
              font-size: 20px;
              font-weight: bold;
              margin: 0 0 0.5rem 0;
            }
            
            .print-header p {
              font-size: 14px;
              color: #2563eb;
              font-weight: 500;
              margin: 0 0 0.5rem 0;
            }
            
            .print-header div {
              font-size: 11px;
              color: #666;
            }
            
            .section-heading {
              font-size: 11px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              color: #374151;
              border-bottom: 1px solid #e5e7eb;
              padding-bottom: 0.2rem;
              margin: 0.8rem 0 0.4rem 0;
            }
            
            .section-heading:first-child {
              margin-top: 0;
            }
            
            .job-entry {
              margin-bottom: 0.4rem;
            }
            
            .job-entry h3 {
              font-weight: 600;
              font-size: 12px;
              margin: 0;
            }
            
            .job-entry p {
              font-size: 11px;
              color: #2563eb;
              font-weight: 500;
              margin: 0;
            }
            
            .job-entry ul {
              margin: 0.2rem 0 0 0;
              padding-left: 0;
              list-style: none;
            }
            
            .job-entry li {
              font-size: 11px;
              margin: 0.1rem 0;
              padding-left: 0;
              position: relative;
            }
            
            .grid {
              display: grid;
              grid-template-columns: 2fr 1fr;
              gap: 1.5rem;
            }
            
            .space-y-4 > * + * {
              margin-top: 0.8rem;
            }
            
            .space-y-2 > * + * {
              margin-top: 0.4rem;
            }
            
            .space-y-0\\.5 > * + * {
              margin-top: 0.2rem;
            }
            
            .text-blue-600 {
              color: #2563eb;
            }
            
            .font-medium {
              font-weight: 500;
            }
            
            .font-semibold {
              font-weight: 600;
            }
            
            .text-center {
              text-align: center;
            }
            
            .flex {
              display: flex;
            }
            
            .justify-between {
              justify-content: space-between;
            }
            
            .items-start {
              align-items: flex-start;
            }
            
            .mb-1 {
              margin-bottom: 0.25rem;
            }
            
            .whitespace-nowrap {
              white-space: nowrap;
            }
            
            h4 {
              font-size: 11px;
              font-weight: 500;
              margin: 0 0 0.2rem 0;
            }
            
            p {
              margin: 0;
              font-size: 11px;
            }
            
            ul {
              list-style-type: none;
              padding: 0;
              margin: 0;
            }
            
            li {
              position: relative;
              padding-left: 0;
              text-indent: 0;
            }
            
            span {
              font-size: 11px;
            }
          </style>
        </head>
        <body>
          <div class="resume-content">${resumeContent}</div>
        </body>
        </html>
      `);
      
      printWindow.document.close();
      printWindow.focus();
      
      setTimeout(() => {
        // Try to hide browser headers/footers
        printWindow.onbeforeprint = () => {
          printWindow.document.title = '';
        };
        
        printWindow.print();
        printWindow.close();
      }, 500);
      
    } catch (error) {
      console.error("Export failed:", error);
      // Fallback to regular print
      window.print();
    } finally {
      setTimeout(() => setIsExporting(false), 1000);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* No-print header with actions */}
      <div className="no-print border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-6 py-8 sm:px-8">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
            <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
              Resume
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Trevor Brown
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Investigative journalist + developer with expertise in government accountability and modern web development.
              </p>
            </div>
            
            <div className="flex gap-3">
              <Link
                href="/"
                className="inline-flex items-center px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md"
              >
                ← Back to Portfolio
              </Link>
              <button
                onClick={handleExportPDF}
                disabled={isExporting}
                className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-200 text-sm font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {isExporting ? "Generating PDF..." : "Export as PDF"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Content - Print Optimized */}
      <div className="resume-content max-w-3xl mx-auto px-6 py-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 my-8">
        {/* Header */}
        <header className="print-header text-center mb-6">
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            TREVOR BROWN
          </h1>
          <p className="text-blue-600 dark:text-blue-400 mb-3 font-medium text-sm">
            Investigative Journalist + Full-Stack Developer
          </p>
          <div className="text-sm text-gray-600 dark:text-gray-400 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span>630-301-0589</span>
            <span>trevorbrown.web@gmail.com</span>
            <span>trevorthewebdeveloper.com</span>
          </div>
        </header>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-5">
            {/* Summary */}
            <section>
              <h2 className="section-heading">SUMMARY</h2>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                Award-winning investigative journalist and full-stack developer with 15+ years in government accountability reporting. Expertise in web applications, data visualization, and digital marketing.
              </p>
            </section>

            {/* Professional Experience */}
            <section>
              <h2 className="section-heading">PROFESSIONAL EXPERIENCE</h2>
              
              <div className="space-y-4">
                {/* Digital Marketing & Web Development */}
                <div className="job-entry">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                        Digital Marketing Consultant & Web Developer
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                        Keith Brown DDS
                      </p>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                      2023 – Present
                    </span>
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Developed modern, responsive website using Next.js, React, and Tailwind CSS</li>
                    <li>Managed $2k+ monthly advertising budget, achieving 100% revenue increase with reduced spend</li>
                    <li>Implemented SEO strategies and analytics tracking for improved online visibility</li>
                  </ul>
                </div>

                {/* Oklahoma Watch */}
                <div className="job-entry">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                        Investigative Journalist
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                        Oklahoma Watch
                      </p>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                      2016 – 2022
                    </span>
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Produced award-winning investigative journalism focused on politics and government accountability</li>
                    <li>Created data visualizations, interactive databases, and multimedia storytelling</li>
                    <li>Launched Democracy Watch newsletter, growing to 4,000+ subscribers</li>
                  </ul>
                </div>

                {/* Wyoming Tribune Eagle */}
                <div className="job-entry">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                        State Capitol Reporter
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                        Wyoming Tribune Eagle
                      </p>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                      2011 – 2016
                    </span>
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Wrote hundreds of articles covering Wyoming state government, including the legislature, governor's office and state agencies</li>
                  </ul>
                </div>

                {/* CNHI */}
                <div className="job-entry">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                        State Government Reporter
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                        Community Newspaper Holding Inc.
                      </p>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                      2010 – 2011
                    </span>
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Produced enterprise stories as the state capitol reporter for CNHI's 14 Oklahoma newspapers</li>
                  </ul>
                </div>

                {/* Staunton News Leader */}
                <div className="job-entry">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                        Local Government Reporter
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                        Staunton News Leader
                      </p>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                      2008 – 2010
                    </span>
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Covered Staunton, Waynesboro and Augusta County governments</li>
                  </ul>
                </div>

                {/* Indianapolis Star */}
                <div className="job-entry">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                        Pulliam Fellow
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                        Indianapolis Star
                      </p>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                      2008
                    </span>
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Awarded competitive fellowship for exceptional journalism students</li>
                  </ul>
                </div>

                {/* Indiana Daily Student */}
                <div className="job-entry">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                        Editor-in-Chief
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                        Indiana Daily Student
                      </p>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                      2008
                    </span>
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Oversaw editorial content for the five-day-a-week newspaper, managing staff of more than 50</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {/* Education */}
            <section>
              <h2 className="section-heading">EDUCATION</h2>
              <div className="space-y-2">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs">Web Development Certificate</h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    University of Oklahoma
                  </p>
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    Led by FullStack Academy
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">2022</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs">B.A. Journalism</h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    Indiana University
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">2008</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs">B.A. Political Science</h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    Indiana University
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">2008</p>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="section-heading">TECHNICAL SKILLS</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs mb-1 border-b border-blue-200 dark:border-blue-800 pb-1">Frontend</h4>
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML, CSS
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs mb-1 border-b border-blue-200 dark:border-blue-800 pb-1">Backend</h4>
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    Node.js, Express, PostgreSQL, NextAuth.js, API Development
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs mb-1 border-b border-blue-200 dark:border-blue-800 pb-1">AI & Machine Learning</h4>
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    OpenAI API, Anthropic Claude, LLM Integration
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs mb-1 border-b border-blue-200 dark:border-blue-800 pb-1">Tools & Analytics</h4>
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    Git, Vercel, Google Analytics, Google Tag Manager, SEO
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs mb-1 border-b border-blue-200 dark:border-blue-800 pb-1">Data Visualization</h4>
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    Tableau, DataWrapper, Flourish, Excel
                  </p>
                </div>
              </div>
            </section>

            {/* Recent Projects */}
            <section>
              <h2 className="section-heading">RECENT PROJECTS</h2>
              <div className="space-y-2">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs">Keith Brown DDS</h4>
                  <p className="text-xs text-gray-700 dark:text-gray-300 mb-1">
                    Professional dental practice website with 24/7 emergency services, online appointment scheduling, and 40+ years of trusted care in Naperville
                  </p>
                  <a href="https://keithbrowndds.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">keithbrowndds.com</a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs">My Expiry</h4>
                  <p className="text-xs text-gray-700 dark:text-gray-300 mb-1">
                    AI-powered grocery freshness tracker that monitors food safety and prevents waste through smart alerts
                  </p>
                  <a href="https://my-expiry.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">my-expiry.vercel.app</a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs">ReStub</h4>
                  <p className="text-xs text-gray-700 dark:text-gray-300 mb-1">
                    Sports memory keeper for logging stadium visits and preserving game experiences with AI enhancement
                  </p>
                  <a href="https://restub.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">restub.vercel.app</a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Print-specific styles */}
      <style jsx global>{`
        
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          
          .no-print {
            display: none !important;
          }
          
          .resume-content {
            padding: 0.5in !important;
            max-width: none !important;
            margin: 0 !important;
          }
          
          .resume-content::before,
          .resume-content::after {
            display: none !important;
          }
          
          .print-header {
            margin-bottom: 0.3in !important;
          }
          
          .section-heading {
            color: black !important;
            border-color: black !important;
            margin-top: 0.2in !important;
            margin-bottom: 0.1in !important;
          }
          
          .job-entry {
            margin-bottom: 0.15in !important;
          }
          
          * {
            color: black !important;
            background: transparent !important;
          }
          
          .text-blue-600,
          .text-blue-400 {
            color: #2563eb !important;
          }
        }
        
        .section-heading {
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #374151;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 0.25rem;
          margin-bottom: 0.75rem;
        }
        
        .dark .section-heading {
          color: #d1d5db;
          border-color: #4b5563;
        }
        
        .job-entry {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </main>
  );
}