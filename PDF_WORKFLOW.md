# PDF Generation Workflow

This document explains how to generate and update PDFs for your resume and selected works.

## Overview

The portfolio uses a **static PDF approach** where PDFs are pre-generated and stored, rather than generated on-the-fly. This provides:

- ✅ Best quality (real browser rendering via Puppeteer)
- ✅ No oklch color errors for users
- ✅ Instant downloads (no generation delay)
- ✅ Full control over when PDFs are updated

## How It Works

1. **Edit content** in the resume components (`app/resume/components/`)
2. **Generate PDFs** by running the script (see below)
3. **PDFs are saved** to `public/pdfs/` (or custom location)
4. **Download buttons** link directly to the static PDF files

## Generating PDFs

### Prerequisites

1. Make sure the Next.js dev server is running:
   ```bash
   pnpm dev
   ```

2. In a separate terminal, run the PDF generation script:
   ```bash
   pnpm generate-pdfs
   ```

### What Happens

The script will:
1. Launch a headless Chrome browser using Puppeteer
2. Navigate to `/resume` page
3. Capture the Resume section as a PDF
4. Capture the Selected Works section as a PDF
5. Save both to `public/pdfs/` (or custom path from `.env.local`)

### Output Files

- `public/pdfs/Trevor_Brown_Resume.pdf`
- `public/pdfs/Trevor_Brown_Selected_Works.pdf`

## Configuration

### Custom Storage Location (Optional)

If you want to save PDFs outside the project folder:

1. Create a directory for your PDFs (e.g., `~/Documents/portfolio-pdfs`)

2. Add to `.env.local`:
   ```
   PDF_STORAGE_PATH=/Users/yourusername/Documents/portfolio-pdfs
   ```

3. Run `npm run generate-pdfs` - PDFs will be saved to your custom location

4. Manually copy PDFs to `public/pdfs/` when ready to deploy

## When to Regenerate

Run `pnpm generate-pdfs` whenever you:

- Update resume content (jobs, skills, education, etc.)
- Update selected works (new clips, projects, or visualizations)
- Change styling that affects the resume pages
- Notice the PDFs are outdated

## Troubleshooting

### "Server is not running" error

Make sure `pnpm dev` is running in another terminal before running `pnpm generate-pdfs`.

### PDFs look different from the browser

This is normal! Puppeteer uses a real Chrome browser but renders PDFs slightly differently. The script waits 2 seconds after page load to ensure fonts and styles are applied.

### Resume is more than one page

Check the content length in `app/resume/components/ResumePage.jsx`. You may need to trim content or adjust font sizes to fit on one page.

### Selected Works is cut off

Selected Works is allowed to be multiple pages. The script doesn't enforce single-page for this document.

## Script Details

The generation script is located at `scripts/generate-pdfs.js`.

**Key features:**
- Uses Puppeteer for high-quality PDF generation
- Waits for all network requests to finish before capturing
- Hides print:hidden elements (nav, buttons, etc.)
- Generates Letter format (8.5" × 11")
- 2x device scale factor for sharp text

**Customization:**
You can edit the script to:
- Change PDF dimensions
- Adjust margins
- Add watermarks
- Generate additional pages

## Development Workflow

Typical workflow when updating your resume:

1. Edit content in `app/resume/components/ResumePage.jsx`
2. Check changes in browser at `http://localhost:3000/resume`
3. When satisfied, run `pnpm generate-pdfs`
4. Review generated PDFs in `public/pdfs/`
5. Commit changes and deploy

---

**Questions?** The script has built-in error checking and helpful messages. If something goes wrong, check the console output.
