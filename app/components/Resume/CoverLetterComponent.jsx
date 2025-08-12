"use client";

import { useState, useRef } from "react";

export default function CoverLetterComponent({ showGuides = false }) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportType, setExportType] = useState('');
  const [selectedType, setSelectedType] = useState('elections-news-editor');
  const pageRef = useRef(null);

  const jobTypes = [
    { value: 'data-viz-dev', label: 'Elections Data Visualizations Developer (Newsperson) Position' },
    { value: 'data-analyst', label: 'Election Data Analyst Position' },
    { value: 'quality-control', label: 'Elections Quality Control Editor Position' },
    { value: 'research-products', label: 'Elections Research Products Editor Position' },
    { value: 'elections-news-editor', label: 'Elections News Editor Position' }
  ];

  const handleExportPDF = async () => {
    if (!pageRef.current) return;
    setIsExporting(true);
    setExportType('pdf');
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const jobLabel = jobTypes.find(t => t.value === selectedType)?.label.replace(/\s+/g, '_') || 'Cover_Letter';
      await html2pdf()
        .set({
          margin: 0,
          filename: `Trevor_Brown_Cover_Letter_${jobLabel}.pdf`,
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
      setExportType('');
    }
  };

  const handleExportImage = async () => {
    if (!pageRef.current) return;
    setIsExporting(true);
    setExportType('image');
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(pageRef.current, {
        scale: 3,
        useCORS: true,
        letterRendering: true,
        backgroundColor: '#ffffff'
      });
      
      const jobLabel = jobTypes.find(t => t.value === selectedType)?.label.replace(/\s+/g, '_') || 'Cover_Letter';
      // Convert to PNG and download
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `Trevor_Brown_Cover_Letter_${jobLabel}.png`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
      }, 'image/png', 1.0);
    } catch (err) {
      console.error(err);
    } finally {
      setIsExporting(false);
      setExportType('');
    }
  };

  const getCoverLetterContent = () => {
    const selectedJob = jobTypes.find(t => t.value === selectedType);
    
    if (selectedType === 'elections-news-editor') {
      return {
        position: 'Elections News Editor Position',
        body: [
          "I am writing to express my strong interest in the Elections News Editor position with the Associated Press. As an investigative journalist turned full-stack developer, I bring award-winning political reporting and modern technical skills.",
          
          "My journalism foundation runs deep through Wyoming and Oklahoma state capitals. I worked alongside AP reporters I respect for their accuracy and speed under pressure.",
          
          "At Oklahoma Watch, I led enterprise coverage that earned multiple first-place awards from the Oklahoma Society of Professional Journalists. My work exposed misinformation in political campaigns and revealed dark money influence in state races. I was named Great Plains Newspaper Writer of the Year in 2021.",
          
          "I produced data-driven election projects including campaign finance maps and redistricting impact visualizations. These required collecting and analyzing complex datasets, then translating findings into clear stories.",
          
          "I pivoted from journalism into development, working on consulting projects and launching web applications. Now I want to bring these technical skills back to journalism. This dual perspective makes me uniquely positioned for AP's election coverage.",
          
          "AP's race calls and election night coverage shape how millions understand our democracy. Our explanatory coverage must illuminate rather than confuse.",
          
          "I genuinely like working with newer reporters on complicated stories. Election mechanics and data analysis can be intimidating - I'd be happy to share what I've learned and help however I can.",
          
          "I would welcome the opportunity to discuss how my experience can strengthen AP's election journalism."
        ]
      };
    }
    
    return {
      position: selectedJob?.label || 'Elections Data Visualizations Developer (Newsperson) Position',
      body: [
        "I am writing to express my strong interest in the Elections Data Visualizations Developer (Newsperson) position with the Associated Press. I combine award-winning political journalism with modern web development skills, and I bring a record of statehouse reporting, data analysis and interactive storytelling that makes me ready to help AP cover elections with speed and accuracy.",
        
        "I have reported from the Wyoming and Oklahoma state capitals and worked alongside AP reporters I respect for their accuracy and speed. At Oklahoma Watch I produced data-driven projects such as campaign finance maps, ICE detainer trend charts, color-coded vaccination maps and redistricting impact comparisons. These pieces required collecting, cleaning and analyzing datasets, then designing accessible visualizations with tools like Datawrapper, Flourish and Tableau.",
        
        "I was also recognized with multiple first-place awards from the Oklahoma Society of Professional Journalists for in-depth enterprise, investigative, government and criminal justice reporting. My work included uncovering misinformation in political campaigns, exposing racial profiling enforcement failures and revealing the influence of dark money in state races. I was named Great Plains Newspaper Writer of the Year in 2021 and have been a finalist for other national and regional awards.",
        
        "In recent years I have pivoted into full-stack development. I built and shipped modern React and Next.js applications including ReStub, a platform for logging live sports experiences, and My Expiry, an AI-powered grocery tracker. I also rebuilt and optimized a high-traffic dental practice site, doubled revenue while keeping the same $2,000 ad budget, improved search rankings with SEO, and implemented GA4 event tracking.",
        
        "I work in React, Next.js, Node.js, TypeScript, PostgreSQL and Tailwind CSS. I have explored and used data visualization libraries like Chart.js and D3.js. I am always ready to pick up a new technology or dive into unfamiliar documentation to deliver results.",
        
        "I am eager to contribute to the trusted election data products AP is known for. I would welcome the chance to discuss how my skills and experience can strengthen your coverage."
      ]
    };
  };

  const content = getCoverLetterContent();

  return (
    <div className="mx-auto max-w-[calc(8.5in+6rem)] px-6 py-12 flex flex-col items-center">
      {/* Job Type Selector */}
      <div className="mb-6 no-print">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Position:
        </label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
        >
          {jobTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
      {/* Exact US Letter page - same dimensions as resume */}
      <div
        ref={pageRef}
        className={`resume-page ${showGuides ? "show-guides" : ""}`}
      >
        {/* Cover Letter content */}
        <div className="cover-letter-content">
          {/* Header with contact info */}
          <header className="letter-header">
            <div className="sender-name">TREVOR BROWN</div>
            <div className="sender-contact">
              630-301-0589 • TrevorBrown.Web@gmail.com • trevorthewebdeveloper.com
            </div>
          </header>

          {/* Date */}
          <div className="letter-date">Aug. 11, 2025</div>

          {/* Recipient */}
          <div className="letter-recipient">
            <div>Hiring Manager</div>
            <div>The Associated Press</div>
          </div>

          {/* Subject Line */}
          <div className="letter-subject">
            Re: {content.position}
          </div>

          {/* Salutation */}
          <div className="letter-salutation">Dear Hiring Manager,</div>

          {/* Body paragraphs */}
          <div className="letter-body">
            {content.body.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Closing */}
          <div className="letter-closing">
            <div className="closing-text">Sincerely,</div>
            <div className="signature">Trevor Brown</div>
          </div>
        </div>

        {/* Guides overlay */}
        {showGuides && <div className="guides no-print" />}
      </div>

      {/* Download buttons below cover letter */}
      <div className="mt-6 no-print flex gap-4">
        <button
          onClick={handleExportPDF}
          disabled={isExporting}
          className="px-6 py-3 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 disabled:opacity-50 rounded-lg transition-colors"
        >
          {isExporting && exportType === 'pdf' ? "Generating…" : "Download PDF"}
        </button>
        <button
          onClick={handleExportImage}
          disabled={isExporting}
          className="px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 rounded-lg transition-colors"
        >
          {isExporting && exportType === 'image' ? "Generating…" : "Download Image"}
        </button>
      </div>
    </div>
  );
}