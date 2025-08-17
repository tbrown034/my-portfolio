"use client";

import Link from "next/link";
import ResumeComponent from "./ResumeComponents/ResumeComponent";
import SelectedWorksComponent from "./ResumeComponents/SelectedWorksComponent";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Toolbar */}
      <div className="no-print sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-sm font-medium tracking-wider uppercase text-gray-600 letter-spacing-wide">Experience & Highlights</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              ← Back
            </Link>
          </div>
        </div>
      </div>

      {/* Resume Component */}
      <ResumeComponent showGuides={false} />

      {/* Selected Works Component */}
      <SelectedWorksComponent showGuides={false} />

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
          padding: 0.4in 0.75in 0.4in 0.75in;
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
          align-items: start;
        }
        
        /* Summary */
        .summary-text {
          font-size: 10pt;
          line-height: 1.45;
          color: #374151;
          margin: 0;
          text-align: justify;
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
        
        .primary-col .section-title:first-child,
        .secondary-col .section-title:first-child {
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
          text-align: justify;
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

        /* CTA Section */
        .cta-section {
          background: #f3f4f6;
          padding: 12px;
          border-radius: 4px;
          margin-top: 8px;
        }

        .cta-text {
          font-size: 9.5pt;
          color: #374151;
          line-height: 1.45;
          margin-bottom: 8px;
          text-align: justify;
        }

        .cta-action {
          text-align: center;
        }

        .cta-link {
          font-size: 10pt;
          font-weight: 700;
          color: #1e40af;
          text-decoration: none;
          display: inline-block;
          padding: 6px 12px;
          background: #ffffff;
          border: 1px solid #1e40af;
          border-radius: 3px;
          transition: all 0.2s;
        }

        .cta-link:hover {
          background: #1e40af;
          color: #ffffff;
        }

        /* Selected Works Specific Styles */
        .clips-masthead {
          text-align: center;
          margin-bottom: 16px;
          padding-bottom: 10px;
          border-bottom: 1px solid #d1d5db;
        }

        .clips-name {
          font-size: 18pt;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #111827;
          margin-bottom: 6px;
          text-transform: uppercase;
        }

        .clips-dek {
          font-size: 11pt;
          font-weight: 500;
          color: #374151;
          margin-bottom: 8px;
          letter-spacing: 0.01em;
        }

        .clips-contact {
          font-size: 9pt;
          color: #6b7280;
          font-weight: 400;
        }

        .text-link {
          color: #1e40af;
          text-decoration: none;
          font-weight: 500;
        }

        .text-link:hover {
          text-decoration: underline;
        }

        .works-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-width: 600px;
          margin: 0 auto;
        }

        .work-section {
          margin-bottom: 8px;
        }

        .work-section .section-title {
          margin-top: 8px;
          margin-bottom: 6px;
          padding-bottom: 2px;
          font-size: 10pt;
        }

        .work-item {
          margin-bottom: 6px;
          padding-bottom: 4px;
          border-bottom: 1px solid #e5e7eb;
        }

        .work-item:last-child {
          border-bottom: none;
        }

        .work-header {
          margin-bottom: 4px;
        }

        .work-title-link {
          text-decoration: none;
          color: inherit;
        }

        .work-title-link:hover .work-title {
          color: #1e40af;
        }

        .work-title {
          font-size: 10pt;
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
          margin-bottom: 1px;
        }

        .work-date {
          font-weight: 400;
          color: #6b7280;
          font-size: 9pt;
        }

        .work-url-link {
          font-size: 8.5pt;
          color: #6b7280;
          font-style: italic;
          text-decoration: none;
        }
        
        .work-url-link:hover {
          color: #1e40af;
          text-decoration: underline;
        }

        .work-description {
          font-size: 8.5pt;
          color: #374151;
          line-height: 1.3;
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
            page-break-after: always;
          }
          .guides { display: none !important; }
          
          /* Ensure proper print breaks */
          .section-title {
            page-break-after: avoid;
          }
          
          .job-entry, .credential, .project, .work-item {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </main>
  );
}