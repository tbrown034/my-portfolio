/**
 * PDF Generation Script using Puppeteer
 *
 * This script generates PDFs of the resume and selected works pages.
 *
 * Usage: npm run generate-pdfs
 *
 * Requirements:
 * - Next.js dev server must be running (npm run dev)
 * - PDF_STORAGE_PATH must be set in .env.local (optional, defaults to ./public/pdfs)
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Configuration
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
const PDF_OUTPUT_DIR = process.env.PDF_STORAGE_PATH || path.join(__dirname, '../public/pdfs');

// Ensure output directory exists
if (!fs.existsSync(PDF_OUTPUT_DIR)) {
  fs.mkdirSync(PDF_OUTPUT_DIR, { recursive: true });
  console.log(`Created output directory: ${PDF_OUTPUT_DIR}`);
}

async function generatePDF(page, url, outputPath, pageFormat = { format: 'Letter' }) {
  console.log(`Navigating to ${url}...`);

  await page.goto(url, {
    waitUntil: 'networkidle0', // Wait for all network requests to finish
    timeout: 30000
  });

  // Wait a bit more to ensure fonts and styles are loaded
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Hide print:hidden elements and show print-only elements
  await page.evaluate(() => {
    const style = document.createElement('style');
    style.textContent = '.print\\:hidden { display: none !important; }';
    document.head.appendChild(style);
  });

  console.log(`Generating PDF...`);

  await page.pdf({
    path: outputPath,
    ...pageFormat,
    printBackground: true,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    pageRanges: '1' // Only capture the first page
  });

  console.log(`✓ PDF saved to: ${outputPath}`);

  // Generate PNG preview image of just the resume-page element
  const pngPath = outputPath.replace('.pdf', '.png');
  console.log(`Generating PNG preview...`);

  // Find the .resume-page element and take a screenshot of just that element
  const element = await page.$('.resume-page');
  if (element) {
    await element.screenshot({
      path: pngPath,
      type: 'png'
    });
    console.log(`✓ PNG preview saved to: ${pngPath}`);
  } else {
    console.log(`⚠ Warning: Could not find .resume-page element for PNG preview`);
  }
}

async function main() {
  console.log('Starting PDF generation...\n');
  console.log(`Base URL: ${BASE_URL}`);
  console.log(`Output directory: ${PDF_OUTPUT_DIR}\n`);

  // Launch browser
  const browser = await puppeteer.launch({
    headless: 'new', // Use new headless mode
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Set viewport for consistent rendering
  await page.setViewport({
    width: 1200,
    height: 1600,
    deviceScaleFactor: 2 // Higher quality
  });

  try {
    // Generate Resume PDF (single page)
    await generatePDF(
      page,
      `${BASE_URL}/resume/pdf-only`,
      path.join(PDF_OUTPUT_DIR, 'Trevor_Brown_Resume.pdf'),
      {
        format: 'Letter', // 8.5 x 11 inches
        preferCSSPageSize: false
      }
    );

    // Generate Selected Works PDF (can be multiple pages)
    await generatePDF(
      page,
      `${BASE_URL}/resume/selected-works-pdf-only`,
      path.join(PDF_OUTPUT_DIR, 'Trevor_Brown_Selected_Works.pdf'),
      {
        format: 'Letter',
        preferCSSPageSize: false
      }
    );

    console.log('\n✓ All PDFs generated successfully!');
  } catch (error) {
    console.error('\n✗ Error generating PDFs:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

// Check if dev server is running
async function checkServer() {
  try {
    const response = await fetch(BASE_URL);
    return response.ok;
  } catch {
    return false;
  }
}

// Main execution
(async () => {
  console.log('Checking if Next.js dev server is running...');

  const serverRunning = await checkServer();

  if (!serverRunning) {
    console.error(`\n✗ Error: Next.js dev server is not running at ${BASE_URL}`);
    console.error('\nPlease start the dev server first:');
    console.error('  npm run dev\n');
    process.exit(1);
  }

  console.log('✓ Server is running\n');

  await main();
})();
