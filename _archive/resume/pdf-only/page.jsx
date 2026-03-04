"use client";

import ResumePage from "../components/ResumePage.jsx";

export default function ResumePDFOnly() {
  return (
    <>
      <style jsx global>{`
        @page {
          size: 8.5in 11in;
          margin: 0;
        }
        body {
          margin: 0 !important;
          padding: 0 !important;
        }
        /* Hide ONLY the site navigation header (with sticky class), not resume header */
        header.sticky {
          display: none !important;
        }
        footer {
          display: none !important;
        }
        /* Hide everything except the actual resume paper */
        .resume-container {
          padding: 0 !important;
          background: white !important;
          min-height: 11in !important;
          display: flex !important;
          align-items: flex-start !important;
          justify-content: flex-start !important;
        }
        /* Hide download button */
        .print\\:hidden {
          display: none !important;
        }
      `}</style>
      <ResumePage showGuides={false} />
    </>
  );
}
