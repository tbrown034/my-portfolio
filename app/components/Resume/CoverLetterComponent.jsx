"use client";

import { useState, useRef } from "react";

export default function CoverLetterComponent({ showGuides = false }) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportType, setExportType] = useState('');
  const [selectedType, setSelectedType] = useState('ap-elections-data-viz-dev');
  const pageRef = useRef(null);

  const coverLetterTypes = [
    { value: 'ap-elections-data-viz-dev', label: 'AP - Elections Data Visualizations Developer' },
    { value: 'ap-election-data-analyst', label: 'AP - Election Data Analyst' },
    { value: 'ap-elections-quality-control', label: 'AP - Elections Quality Control Editor' },
    { value: 'ap-elections-research-products', label: 'AP - Elections Research Products Editor' }
  ];

  const handleExportPDF = async () => {
    if (!pageRef.current) return;
    setIsExporting(true);
    setExportType('pdf');
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const typeLabel = coverLetterTypes.find(t => t.value === selectedType)?.label.replace(/\s+/g, '_') || 'Cover_Letter';
      await html2pdf()
        .set({
          margin: 0,
          filename: `Trevor_Brown_Cover_Letter_${typeLabel}.pdf`,
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
      
      const typeLabel = coverLetterTypes.find(t => t.value === selectedType)?.label.replace(/\s+/g, '_') || 'Cover_Letter';
      // Convert to PNG and download
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `Trevor_Brown_Cover_Letter_${typeLabel}.png`;
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
    // AP Elections Data Visualizations Developer
    if (selectedType === 'ap-elections-data-viz-dev') {
      return {
        position: 'Elections Data Visualizations Developer Position',
        body: [
          "I combine award-winning political journalism with modern web development skills to build data visualizations that make complex election information clear and accessible. My track record of statehouse reporting, data analysis and interactive storytelling makes me ready to help the Associated Press deliver trusted election coverage with speed and accuracy.",
          
          "I have covered every election since 2008, from presidential races to local government, including direct collaboration with Associated Press reporters in the Wyoming and Oklahoma state capitols. At Oklahoma Watch, I built award-winning election maps, charts, trend visualizations and interactive storytelling projects. This work included campaign finance maps, ICE detainer trend charts, color-coded vaccination maps and redistricting impact comparisons that required collecting, cleaning and analyzing complex datasets.",
          
          "My technical skills include React, Next.js, Node.js, TypeScript, PostgreSQL and Tailwind CSS. I have experience with data visualization libraries including Chart.js and D3.js, and I'm comfortable quickly learning new technologies and documentation. I recently doubled revenue for a client site while keeping the same $2,000 ad budget through SEO optimization and GA4 tracking implementation.",
          
          "I was recognized with multiple first-place awards from the Oklahoma Society of Professional Journalists for investigative work that included a statewide fact-checking investigation into disinformation patterns across 50+ primary races and analysis of 20 years of racial profiling complaint data revealing systemic enforcement gaps. I was named Great Plains Newspaper Writer of the Year in 2021 for work that consistently combined data analysis with clear storytelling.",
          
          "I understand the importance of accuracy, data integrity and editorial standards that the Associated Press is known for. My experience fact-checking complex datasets and verifying source material, combined with my technical ability to build modern web applications, positions me to contribute immediately to your election data products and visualizations."
        ]
      };
    }
    
    // AP Election Data Analyst
    if (selectedType === 'ap-election-data-analyst') {
      return {
        position: 'Election Data Analyst Position',
        body: [
          "I bring award-winning investigative journalism experience and strong data analysis skills to help the Associated Press deliver accurate, insightful election coverage. My background analyzing complex datasets and translating findings into clear narratives makes me ready to contribute to your election data analysis efforts.",
          
          "I have covered every election since 2008, from presidential races to local government, with direct experience collaborating with Associated Press reporters in the Wyoming and Oklahoma state capitols. My investigative work required deep data analysis skills – from campaign finance patterns to demographic voting trends – and I consistently combined statistical analysis with editorial judgment to ensure accuracy.",
          
          "At Oklahoma Watch, I analyzed complex datasets including 20 years of racial profiling complaint data and 15,000+ court records for hospital debt investigations. I also led fact-checking investigations that required verifying candidate statements using court records and public data across 50+ primary races. This work required cleaning messy data, identifying statistical anomalies, and presenting findings in ways that both editors and readers could understand. I was named Great Plains Newspaper Writer of the Year in 2021 for work that consistently combined rigorous data analysis with clear storytelling.",
          
          "My technical skills include working with large datasets, statistical analysis, and data validation processes. I understand the critical importance of data integrity in election reporting and have experience with the editorial standards required for high-stakes political coverage. I'm comfortable with both technical analysis and explaining complex findings to editorial teams.",
          
          "I am eager to apply my data analysis experience and deep understanding of election processes to help maintain the Associated Press's reputation for accurate, trusted election coverage."
        ]
      };
    }
    
    // AP Elections Quality Control Editor  
    if (selectedType === 'ap-elections-quality-control') {
      return {
        position: 'Elections Quality Control Editor Position',
        body: [
          "I bring award-winning investigative journalism experience and modern technical skills to ensure accuracy, editorial quality and data integrity in election coverage. My background combining deep reporting expertise with data analysis makes me ready to uphold the editorial standards the Associated Press is known for.",
          
          "I have covered every election since 2008, from presidential races to local government, with direct experience collaborating with Associated Press reporters in the Wyoming and Oklahoma state capitols. At Oklahoma Watch, I conducted investigations that required rigorous fact-checking, cleaning datasets and verifying source material – work that won multiple first-place awards from the Oklahoma Society of Professional Journalists.",
          
          "My investigative work included a statewide fact-checking investigation into disinformation patterns across 50+ primary races and a comprehensive analysis of 20 years of racial profiling complaint data that revealed systemic enforcement gaps. This work required not only data analysis skills but also the editorial judgment to ensure accuracy and maintain credibility. I was named Great Plains Newspaper Writer of the Year in 2021 and received Community Champion recognition from the Institute for Nonprofit News.",
          
          "I understand that election data products must meet the highest editorial standards and that accuracy is paramount in this field. My technical skills – including React, Next.js, Node.js, TypeScript and PostgreSQL – enhance my ability to work with complex election data products while ensuring they meet editorial quality requirements.",
          
          "I am comfortable working with large datasets, identifying inconsistencies and ensuring data integrity throughout the editorial process. My record of investigative work demonstrates my commitment to accuracy and my ability to work under deadline pressure while maintaining the quality standards that readers expect from the Associated Press."
        ]
      };
    }
    
    // AP Elections Research Products Editor
    if (selectedType === 'ap-elections-research-products') {
      return {
        position: 'Elections Research Products Editor Position',
        body: [
          "I combine award-winning investigative journalism with research expertise to help the Associated Press develop comprehensive, accurate election research products. My experience analyzing political trends, voter data, and election processes positions me to contribute immediately to your elections research efforts.",
          
          "I have covered every election since 2008, conducting in-depth research on candidates, ballot measures, and electoral trends. My collaboration with Associated Press reporters in the Wyoming and Oklahoma state capitols gave me direct insight into the research standards and editorial processes that make AP election coverage trusted nationwide.",
          
          "At Oklahoma Watch, I produced research-driven investigations that required deep dives into complex datasets and court records. This work included a statewide fact-checking investigation into disinformation patterns across 50+ primary races, analysis of 20 years of racial profiling complaint data, and building a searchable database from 15,000+ court records tracking hospital lawsuits against patients. My research consistently met the rigorous editorial standards required for investigative work that won multiple first-place awards.",
          
          "I understand the critical importance of thorough, accurate research in election coverage. My investigative background has taught me to verify sources, cross-reference data, and maintain editorial objectivity while working under tight deadlines. I was named Great Plains Newspaper Writer of the Year in 2021 for research-driven work that consistently uncovered important stories.",
          
          "I am excited to bring my research expertise and deep understanding of election processes to help develop the comprehensive, trusted election research products that readers and news organizations rely on from the Associated Press."
        ]
      };
    }
    
    // Default fallback (should not be reached with current AP-only options)
    return {
      position: 'Position',
      body: ['Default content']
    };
  };

  const content = getCoverLetterContent();

  return (
    <div className="mx-auto max-w-[calc(8.5in+6rem)] px-6 py-12 flex flex-col items-center">
      {/* Cover Letter Type Selector */}
      <div className="mb-6 no-print">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cover Letter Type:
        </label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
        >
          {coverLetterTypes.map((type) => (
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
          <div className="letter-date">August 11, 2025</div>

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