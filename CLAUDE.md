# Claude Code Preferences - Trevor Brown

## Cross-Project References

This portfolio does NOT exist in isolation. The **second-brain-v2** project tracks job applications, project metadata, and career positioning that must stay in sync with this portfolio.

### Key files to cross-reference:
- **Second Brain project root**: `~/Desktop/dev/active/second-brain-v2/`
- **Second Brain CLAUDE.md**: `~/Desktop/dev/active/second-brain-v2/.claude/rules/` (project rules)
- **Job applications**: `~/Desktop/dev/active/second-brain-v2/config/applications.json` — 72 tracked applications with prestige/hirability scores. Project descriptions used in applications should match this portfolio.
- **Job profile**: `~/Desktop/dev/active/second-brain-v2/config/job-profile.json` — target roles, skills, career narrative
- **Project tracking**: `~/Desktop/dev/active/second-brain-v2/config/projects.json` — internal project status, health, tech stacks
- **Portfolio data mirror**: `~/Desktop/dev/active/second-brain-v2/raw/portfolio/portfolio.json` — scraped copy of this portfolio's content (last scraped 2026-02-02). When portfolio content changes here, this file becomes stale.
- **AP application workspace**: `~/Desktop/dev/active/second-brain-v2/docs/ap-application-knowledge.md` — verified facts, interview prep, skill assessments

### Consistency rules:
- Project names, descriptions, and tech stacks in this portfolio should match what's in job applications
- If a project description is updated here, flag that `second-brain-v2/raw/portfolio/portfolio.json` needs re-scraping
- Python proficiency is SECONDARY (JavaScript/TypeScript is primary) — do not overstate Python in any content
- The career narrative is "investigative journalist turned web developer" — both halves matter equally

---

## Current Priority Tasks (Feb 2026 Audit)

These are verified issues from a cross-repo audit comparing the portfolio against the second-brain job tracking system, live site verification, and GitHub profile review. Work through these in order.

### Phase 1: Quick Wins (Typos, Dates, Naming, Em Dashes)

**1a. Fix "Reporting Reporting" typo in awards.js**
- File: `/content/awards.js` line ~72
- "Science, Technology, Health and Environmental Reporting Reporting (First Place)" — delete the duplicate "Reporting"

**1b. Fix 3 wrong publication dates in journalism.js**
- These show portfolio-update dates, not actual publication dates. Use the URL slugs as the source of truth:
  - id 8 (Dark Money): Currently "Jan. 13, 2022" — should be "Nov. 16, 2020" (URL: `/2020/11/16/`)
  - id 5 (No Comment): Currently "Feb. 11, 2022" — should be "March 15, 2021" (URL: `/2021/03/15/`)
  - id 9 (OKC Bombing/COVID): Currently "Feb. 11, 2022" — should be "April 25, 2021" (URL: `/2021/04/25/`)

**1c. Fix em dash usage across all content files**
- Rule: ALWAYS use spaced em dashes: `word — word` (space, em dash U+2014, space)
- NEVER use en dashes for parenthetical breaks
- 7 instances to fix in: journalism.js (~4), visualizations.js (~1), coding.js (~2)
- Search for ` – ` (spaced en dash) and replace with ` — ` (spaced em dash)

**1d. Reconcile project naming across demos.js and coding.js**
- The same projects have different names in different files. Pick ONE canonical name per project:

| Canonical Name | demos.js (current) | coding.js (current) | Fix |
|---------------|-------------------|---------------------|-----|
| sort(id) | "sort(id)" | "ReflectYr" | Update coding.js to "sort(id)" |
| Food Xpiry | "Food Xpiry" | "My Expiry" | Update coding.js to "Food Xpiry" |
| StuddyBuddy | "StuddyBuddy" | "studdy-buddy" | Update coding.js to "StuddyBuddy" |

- Also fix coding.js `siteLink` for Food Xpiry: change `my-expiry.vercel.app` to `food-xpiry.vercel.app`
- Verify the studdy-buddy GitHub link resolves (repo may be named `study-buddy` not `studdy-buddy`)

**1e. Fix variable name typo in journalism.js**
- Import variable `profling` should be `profiling` (not user-facing but sloppy)

### Phase 3: Content Rewrite (Match Job Application Quality)

The portfolio dramatically undersells every project compared to what Trevor tells employers. Below is the gap and the target quality. When rewriting, use AP style (spaced em dashes, no Oxford comma in series, active voice).

**IMPORTANT: Do NOT fabricate metrics, technologies, or capabilities. Only include claims that are verifiable from the codebase or that Trevor explicitly confirms.**

**3a. Second Brain — Most undersold project**
- Current (demos.js): "A local knowledge base built from texts, emails, articles, ChatGPT exports, photos and DNA data."
- What it actually is: 200K+ records processed through TypeScript data pipelines, LanceDB vector embeddings with semantic search, streaming chat assistant with 30+ tools, Tauri desktop wrapper, Ollama LLM integration, eager execution optimization pattern
- Rewrite to surface the data engineering and AI architecture. This is the most technically complex project in the portfolio.

**3b. Keith Brown DDS — Reads like a static site**
- Current: "Built and manage a production dental practice website and a protected admin dashboard..."
- What's missing: Measurable business impact (33% booking increase), $2K/month Google Ads management, Python billing data pipeline, AI chat interface, CallRail/GA4/GBP analytics integration
- Rewrite to lead with business outcomes and technical depth. This is the only production client project.

**3c. All projects — Tech stacks are too generic**
- Portfolio lists "Next.js, Tailwind CSS" for everything
- Job applications list specific APIs, databases, auth systems, and integrations
- For each project, surface the differentiating technologies:
  - News Pulse: RSS/Bluesky/Telegram/Reddit aggregation, map-based monitoring, Claude AI summarization
  - AI Model Arena: 4 LLM APIs (Claude, GPT, Gemini, Grok), real-time cost tracking, AI peer ranking
  - sort(id): TMDB API, drag-and-drop ranking, NextAuth, PostgreSQL
  - Food Xpiry: USDA FoodKeeper data, Anthropic API for shelf-life estimates
  - StuddyBuddy: GPT-4o Mini, personalized curriculum generation

**3d. Surface journalism credentials on the homepage**
- The portfolio markets Trevor as a generic web developer
- Job applications emphasize the journalism-tech intersection — that's the differentiator
- Awards (Reporter of the Year, Writer of the Year) should be more prominent
- 15 years of elections/investigative reporting is a unique selling point, not just background

**3e. coding.js needs 3 missing projects**
- Currently has 4 projects; demos.js has 7
- Missing from homepage coding section: News Pulse, AI Model Arena, Second Brain
- Either add them to coding.js or ensure the homepage coding section pulls from demos.js instead

### Phase 4: Analytics & SEO

**4a. Add @vercel/speed-insights**
- Free, one-line addition. Gives Core Web Vitals (LCP, FID, CLS) in Vercel dashboard.
- Install: `pnpm add @vercel/speed-insights`
- In layout.js, add alongside existing Analytics:
  ```js
  import { SpeedInsights } from "@vercel/speed-insights/next";
  // In the JSX:
  <SpeedInsights />
  ```

**4b. Update @vercel/analytics**
- Currently on v1.0.2 (initial release from 2023). Run `pnpm update @vercel/analytics` to get latest.

**4c. Review OG image**
- Current OG image is `/images/Aug17desktopview.png` — filename suggests August 2025
- If the site design has changed since then, take a new screenshot for social sharing
- OG images should be 1200x630px, show the current homepage design

**4d. Consider GA4 (optional)**
- Vercel Analytics gives page views but limited detail
- GA4 would give: traffic sources, user demographics, session duration, bounce rate, conversion tracking
- If Trevor wants to track whether employers are visiting from LinkedIn/GitHub/job applications, GA4 is worth adding
- This is a decision for Trevor — don't add without explicit approval

---

## Design Ethos & Mission

**Three words: intuition, clarity, focus.**

Design experiences that are intuitive, clear, and focused—where every element earns its place.

## Primary Influence

**Editorial newspapers.**

- Front-page mindset for landing pages (lede → dek → modules above the fold)
- Hed/dek type hierarchy
- Modular grid system
- "Jump line" as progressive disclosure: peek → expand
- Sections like beats
- Pull-quote callouts used sparingly

## Secondary Influences

- **Architectural modernism**: Right angles for order, soft radii for welcome; interfaces should feel "placed," not stapled on
- **Selective brutalism**: Honest structure, minimal ornament, grid/spacing/type carry meaning
- **Glass as depth**: Dark, quiet canvas with frosted layers when they clarify hierarchy (never as a gimmick)

## Design Principles

- Clarity over clever
- One center of gravity per screen
- Everything earns its place (space, color, type as a budget)
- **White space is selective**: Used strategically to guide attention, never as filler
- **Above the fold priority**: Show relevant content and immediate entry points first
- Accessibility & performance are table stakes
- Respectful motion (confirm, guide, don't distract)

## Interaction Philosophy

**Progressive discovery / iceberg interactions**: Surface scans in seconds; depth is opt-in and complete when chosen.

- "Iceberg": peek on hover/tap, expand on intent
- Motion is respectful—confirmations and focus shifts, not choreography
- Each screen has one center of gravity

## Aesthetic System

- **Canvas**: Adaptive contrast (light/dark mode) prioritizing readability
- **Modules**: Frosted cards, rounded rectangles
- **Type**: Modern sans, clear weights, generous leading
- **Typography details**: Always use spaced em dash ( — ) in AP style: `word — word`. Never use unspaced em dashes or en dashes for parenthetical breaks.
- **Color**: Neutrals + one disciplined accent
- **Rhythm**: Strict grid, consistent alignment, airy spacing

Architecture shapes taste—strong right angles for order, soft radii for welcome. Masculine energy (confident lines, weight, restraint) tempered with warmth and softness.

## Visual Language Strategy: Flat + Glass

**Core Philosophy: Contrast, Readability, Compartmentalization, Structure**

### **Flat Sections** (Newspaper-like)

- **Purpose**: Editorial clarity for text-heavy content
- **Usage**: Section headers, lead-in text blocks, headlines, "About Me" content
- **Function**: Structural dividers that frame content areas
- **Style**: Clean backgrounds, high contrast typography, minimal visual effects

### **Glass Sections** (Apple-like)

- **Purpose**: Interactive depth for tactile content
- **Usage**: Portfolio cards, data examples, project highlights, role showcases
- **Function**: Content modules that signal "click me" or "live content"
- **Style**: Frosted backgrounds, subtle depth, contained within flat frameworks

### **Application Rules**

1. **Functional contrast, not decorative** – Style changes serve content hierarchy
2. **Clear boundaries** – Flat areas introduce themes, glass cards contain artifacts
3. **Editorial handoff** – Flat section headers "deck" the glass modules below
4. **One hero per viewport** – If both styles appear together, one leads, other supports
5. **Consistent typography** – Hierarchy remains constant across both visual languages

### **Anti-Patterns to Avoid**

- Overuse of glass (kills contrast and specialness)
- Glass nested within glass (muddled layering)
- Typography drift between styles (breaks brand consistency)
- Random style swaps without structural logic

## Decision Filters

- Can a new user state the purpose in 5 seconds?
- Is anything competing with the primary action? Remove it.
- Can I say this with fewer elements? Do it.
- If I remove an effect, does meaning change? If not, cut it.
- Would I want to live in this screen for an hour?

## What Makes Me Unique

Investigative journalist turned developer - I design like an editor and build like a reporter. The grid and spacing do most of the talking. Effects stay quiet.

## Anti-Goals

- Mystery-meat nav
- Dark patterns
- Decorative motion
- Style without purpose
- If it needs a tooltip to make sense, it's not done
- **Never use emojis** - Professional interfaces rely on typography and iconography, not emojis

## Goal

Interfaces that feel obvious at a glance and rewarding when explored—calm, purposeful, quietly premium.

## Coding Ethos

**Small, modular, clear.**

- **Modular architecture**: Small, focused components that do one thing well
- **Clear and consistent**: Predictable naming, structure, and patterns throughout
- **Sensible organization**: Folder structure that reflects mental models and usage
- **Rather over-engineer than under**: Build for maintainability, extensibility, and clarity over quick fixes
- **Component clarity**: Each component has a clear purpose and clean interface
- **Consistent patterns**: Establish patterns early and follow them religiously
- **NEVER add or delete whole sentences without explicit permission** – Do not make up content or remove existing content unless explicitly told to do so. Every sentence in the codebase was written intentionally.
- **NEVER fabricate URLs, social media handles, or links** – Do not make up or guess at URLs, usernames, or social media handles. Only use links and handles that are explicitly provided or already exist in the codebase. If unsure, ask for clarification.

Code should read like well-organized journalism—clear hierarchy, logical flow, no wasted words.

---

## Development Log

### August 12, 2025 - Resume System Refinement

**Tonight's major work:**

- **Resume page architecture completed** – Built comprehensive resume system with three distinct components:
  - ResumeComponent: Core professional resume with editorial newspaper styling
  - CoverLetterComponent: Dynamic cover letter generator with job-specific customization
  - SelectedWorksComponent: Portfolio-style clips showcase

- **Portfolio-wide UI improvements** – Refined contact forms, hero sections, journalism intro, and project cards throughout site

- **Professional resume styling** – Implemented editorial-inspired design system:
  - US Letter page format (8.5" × 11") with print-safe margins
  - Editorial masthead header styling with proper typography hierarchy
  - Two-column layout optimizing space usage
  - Professional color scheme and consistent spacing
  - PDF/PNG/RTF export functionality

- **Cover letter system** – Dynamic content generation for different job applications with professional business letter formatting

- **Component architecture** – Modular, reusable components following established design patterns

- **Strategic hiding** – Cover letter and guides functionality temporarily hidden per immediate needs while maintaining codebase integrity

**Technical approach:** Clean component separation, consistent styling patterns, professional typography, and export capabilities. Everything built with maintainability and future enhancement in mind.

**Status:** Core resume system complete and production-ready. Cover letter component developed but currently hidden.

### August 17, 2025 - Content Refinement & Consistency Updates

**Today's major work:**

- **Introduction & Journalism sections restored** – Reverted to original editorial newspaper-style formatting with proper section headers, typography hierarchy, and interactive achievement cards

- **Content formatting standardization** – Unified formatting across Introduction, Journalism Experience, and Data Visualization sections:
  - Consistent 2px left borders with hover animations
  - Standardized text sizing (text-sm headers, text-xs descriptions)
  - Uniform grid spacing and color transitions

- **Selected Works centering** – Fixed indentation issue by centering the works-content container with max-width and auto margins

- **Copy editing improvements**:
  - Removed Oxford comma from freelance description
  - Added hyperlinks to Indiana Daily Student and Wyoming Tribune Eagle
  - Removed unnecessary italics from publication names
  - Fixed "Both demand" sentence structure to "Each field demands"

- **Desktop navigation enhancement** – Added "Let's build something together" CTA link to desktop view in the About Me section's second column

- **Constants file creation** – Centralized all social links and personal information:
  - Created `/app/constants/index.js` with PERSONAL_INFO and SOCIAL_LINKS
  - Updated location to "Bloomington, IN"
  - Fixed LinkedIn URL to correct profile: `https://www.linkedin.com/in/trevorabrown/`
  - Removed fabricated links and unnecessary constants

- **Link corrections**:
  - Fixed ReflectYr project links (site: `https://reflectyr.vercel.app/`, GitHub: `https://github.com/tbrown034/ReflectYr`)

- **Background color consistency** – Fixed My Journey section background from `bg-gray-50 dark:bg-gray-900/50` to `bg-white dark:bg-blue-950` to match site theme

- **Documentation updates** – Added explicit instruction to CLAUDE.md: "NEVER fabricate URLs, social media handles, or links"

**Technical approach:** Focus on consistency, accuracy, and maintainability. All changes preserve the editorial newspaper design philosophy while improving user experience and code organization.

**Status:** UI consistency improvements complete, all links verified and corrected, constants centralized for easier maintenance.

### August 18, 2025 - CRITICAL: Unauthorized Code Changes

**MAJOR ISSUE:**

- **Claude added unauthorized components** – Created MobileNav.jsx with hamburger menu without being asked
- **Freelancing and making unwanted changes** – Added navigation elements that were never requested
- **VIOLATED CORE PRINCIPLE** – Made proactive changes to the codebase without explicit permission

**What happened:**
- Claude created a MobileNav component with hamburger menu that didn't exist before
- This was done without any request for mobile navigation
- The component was silently added to the Header without permission

**Resolution:**
- Removed the unauthorized MobileNav.jsx file
- Cleaned up Header.jsx to remove the hamburger menu import and usage
- Restored header to intended state

**CRITICAL INSTRUCTION GOING FORWARD:**
- **NEVER add features, components, or functionality unless EXPLICITLY requested**
- **NEVER "improve" or "enhance" code without being asked**
- **DO EXACTLY what is asked – nothing more, nothing less**
- **NO FREELANCING** – Every change must be directly tied to a user request
- **When in doubt, ASK before making changes**

This is unacceptable. The codebase is intentional and every line has a purpose. Unauthorized additions break trust and waste time.

---

### August 17, 2025 (Evening) - Next.js 15 Upgrade & Dependency Audit

**Major upgrade to Next.js 15:**

- **Next.js 15 image optimization improvements:**
  - Added `sizes` prop to responsive images for better srcset generation
  - Implemented lazy loading with `loading="lazy"` for non-priority images
  - Set optimal quality (85) for balance between file size and visual quality
  - Created `OptimizedImage` utility component with sensible defaults
  - Installed `sharp` for advanced image processing (AVIF/WebP support)
  - Enhanced `next.config.js` with:
    - AVIF and WebP format support for modern browsers
    - Optimized device sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
    - Image sizes for thumbnails: [16, 32, 48, 64, 96, 128, 256, 384]
    - Minimum cache TTL (60 seconds) for better performance
  - Fixed alt text for better accessibility across all Image components

- **Dependency audit and cleanup:**
  - **Removed 4 unused dependencies:**
    - `@react-email/render` – Not used in any source files
    - `devicons-react` – Replaced by react-icons
    - `dotenv` – Next.js has built-in env support
    - `react-card-flip` – Not used, was causing React 19 peer dependency conflicts
  
  - **Verified 19 active dependencies:**
    - Core framework: `next`, `react`, `react-dom`
    - Styling: `tailwindcss`, `@tailwindcss/postcss`, `autoprefixer`, `postcss`
    - Icons: `@heroicons/react`, `react-icons`
    - Features: `resend` (contact form), `html2canvas` & `html2pdf.js` (resume export)
    - Analytics: `@vercel/analytics`
    - Image optimization: `sharp`
    - Development: `eslint`, `eslint-config-next`, `typescript`, `@types/*`, `@svgr/webpack`
  
  - **Resolved TypeScript setup:**
    - Added `typescript` as dev dependency (v5.9.2)
    - Maintained existing tsconfig.json for future TypeScript migration

- **Performance improvements identified:**
  - Large PNG images need conversion (some over 1MB)
  - Recommendation: Convert to WebP format for 60-80% size reduction
  - Next.js 15 now automatically serves WebP/AVIF to supported browsers

**Technical approach:** Systematic dependency analysis using code search, removal of unused packages, optimization of image loading strategy for Next.js 15's enhanced capabilities.

**Status:** Next.js 15 upgrade complete, unused dependencies removed, image optimization enhanced. Project runs cleanly with React 19.

### August 18, 2025 (Evening) - Mobile Navigation & UI Refinement Battle

**The Challenge:**

Today's session highlighted a fundamental tension in AI-assisted development – the struggle between following explicit instructions versus making assumptions about what "should" be done. This was a masterclass in why clear communication and strict adherence to instructions matters.

**What went wrong:**

- **Pattern mismatches everywhere** – Claude kept trying to "fix" intentional design choices, treating editorial newspaper-style layouts as bugs rather than features
- **Mobile navigation saga** – Multiple attempts to add unauthorized hamburger menus, mobile navigation components, and responsive features that were never requested
- **The "helpful" AI problem** – Constant attempts to "improve" the codebase by adding features, reorganizing components, or "modernizing" patterns without permission
- **Context confusion** – Difficulty maintaining awareness of what was intentionally designed versus what needed fixing
- **Unauthorized component creation** – Multiple instances of creating new files and components without explicit requests

**Why this was so difficult:**

1. **Design philosophy clash** – The editorial newspaper design (with its intentional use of white space, specific typography hierarchy, and modular grid) doesn't match typical web patterns that AI models are trained on
2. **Implicit vs explicit** – Claude repeatedly tried to infer what "should" be done based on common patterns rather than following the explicit instructions in CLAUDE.md
3. **The proactive trap** – Well-intentioned attempts to be helpful by adding "standard" features (like mobile navigation) that violated the core principle of "do exactly what is asked"
4. **Pattern recognition overreach** – Seeing responsive design "problems" where intentional design choices existed

**What we accomplished despite the challenges:**

- **Hero section refinement** – Finally achieved proper alignment and spacing after multiple iterations
- **Mobile responsiveness** – Fixed actual mobile issues without adding unwanted navigation features
- **UI consistency** – Maintained the editorial design philosophy throughout refinements
- **Clear boundaries established** – Reinforced the critical importance of not freelancing or making unauthorized changes

**Lessons learned:**

- **Explicit > Implicit** – Every assumption about what "should" be done is likely wrong
- **Ask before acting** – When in doubt, always ask rather than implement
- **Respect intentional design** – Not every pattern that differs from the norm is a bug
- **Documentation matters** – The CLAUDE.md file exists for a reason – follow it religiously
- **Trust erosion** – Unauthorized changes, even well-intentioned ones, break trust and waste time

**What still needs to be accomplished:**

1. **Image optimization** – Convert large PNGs to WebP format (60-80% size reduction potential)
2. **Performance audit** – Lighthouse score optimization and Core Web Vitals improvements
3. **Accessibility review** – Full WCAG compliance check and improvements
4. **Content updates** – Add new journalism clips and recent projects
5. **Resume export enhancement** – Improve PDF generation quality and formatting
6. **Testing suite** – Add comprehensive tests for critical user paths
7. **SEO optimization** – Meta tags, structured data, and sitemap generation
8. **Analytics enhancement** – More detailed event tracking for user interactions

**Critical reminders for future sessions:**

- **DO NOT add features unless explicitly requested**
- **DO NOT create components without permission**
- **DO NOT "improve" existing patterns**
- **DO follow CLAUDE.md instructions exactly**
- **DO ask when unclear rather than assume**

**The fundamental truth:** This portfolio has an intentional, opinionated design philosophy. Every line of code, every spacing decision, every typography choice is deliberate. The goal isn't to make it look like every other portfolio – it's to create something that reflects the unique intersection of journalism and development, with editorial sensibilities and architectural modernism as guiding principles.

### CRITICAL BUG FIXES TO REMEMBER

**Navigation Anchors:**
- **Contact button MUST link to #contact** (NOT #about - there is no #about section)
- The contact section exists at the bottom of the homepage with id="contact"
- Never change navigation anchors without verifying the target section exists

---

### August 21, 2025 - Hero Photo Enhancement

**Tonight's refinement:**

- **Hero photo redesign** – Transformed the profile photo component to be more prominent and professional:
  - Mobile/Tablet: Circular format (192px → 256px) with gradient border framing
  - Desktop: Larger rectangular format (288px → 320px) with architectural framing
  - Added subtle animated glow effects using slow pulse animation (4s cycle)
  - Stronger shadows and ring effects for better visual hierarchy
  
- **Animation system expansion** – Added `pulse-slow` keyframe animation to globals.css for gentle breathing effects

- **Visual presence improvements**:
  - Increased photo sizes across all breakpoints for better visibility
  - Enhanced border and shadow treatments for professional appearance
  - Added gradient backgrounds with blur for depth without distraction
  - Container now uses `w-fit` to prevent unnecessary width consumption

**Technical approach:** Maintained editorial restraint while adding visual prominence through size, subtle animation, and careful use of shadows rather than decorative elements.

**Status:** Hero photo now commands appropriate attention while respecting the overall design philosophy.

---

### August 24, 2025 - Major Portfolio Refinement Session

**Session Overview:**
Comprehensive portfolio refinement focusing on color scheme analysis, resume optimization, and UI consistency improvements.

**Color Scheme Audit & Dark Mode Analysis:**
- **Conducted full color audit** revealing disciplined Blue-Gray system with semantic color usage
- **Identified dark mode issues:** Monochromatic blue overload (blue-950/900), poor depth hierarchy, cold feeling
- **Documented color system:** Primary blue (blue-800/600), Gray scale hierarchy, Green for data/success, Red for errors
- **Found minor inconsistencies:** Resume using indigo instead of blue, some gray-50 vs white backgrounds
- **Proposed improvements:** Warmer slate system, true black with elevation, refined blue with warm accents

**Resume & ClipsPage Optimizations:**

**Content Improvements:**
- **Resume summary rewritten multiple times** for authenticity:
  - Started with corporate buzzword-heavy version
  - Evolved to: "Combines 15 years of award-winning investigative journalism with full-stack development"
  - Split into two paragraphs to fix text-justify spacing issues
  - Made active voice, removed specific tech mentions, kept concise
  
- **Journalism clip descriptions refined:**
  - Racial profiling: "Found that every one of dozens of racial profiling complaints over the years was dismissed"
  - Election misinformation: "Exposed how election misinformation moved from margins to mainstream"
  - Both shortened to fit on single lines

- **Coding project descriptions updated:**
  - My Expiry rewritten to active voice: "Developed My Expiry to track food freshness"
  - Removed passive constructions throughout

**Layout & Spacing Fixes:**
- **Aligned Resume and ClipsPage dimensions:** Both now use padding: "0.75in"
- **Fixed text-justify issues:** Removed from bullet points to eliminate weird word spacing
- **Optimized ClipsPage spacing:** Reduced header margins, tightened sections to prevent content cutoff
- **Added paragraph breaks** in resume summary for better readability

**Navigation & UI Updates:**
- **Redesigned resume page toolbar:**
  - Removed "Experience & Highlights" text
  - Created clean tab navigation with underlines (Resume | Selected Works)
  - Moved Home link to "← Back to Portfolio" in top left
  - Added "← Back to Homepage" button next to "↑ Back to Top" at bottom

- **Header improvements:**
  - Changed "Career Highlights" to "Quick View"
  - Updated description to emphasize two-page summary nature
  - Made "homepage" a hyperlink in description

- **Button cleanup:**
  - Fixed "Let's build something together" text in HeroBuildSomething
  - Updated CTA to "View Resume + Selected Works"
  - Removed "Download Image" buttons, kept only PDF export

**Skills Section Updates:**
- **AI & Automation:** Simplified to "LLM Integrations, OpenAI API, Anthropic API"
- **Data Visualization:** Removed "& Analysis" from title, removed D3.js, added Flourish/Infogram

**Critical Bug Fixes:**
- **FIXED: Contact button linking to non-existent #about** - Now correctly links to #contact
- **Added to CLAUDE.md memory** to prevent recurrence

**Technical Improvements:**
- **Consistent hyperlinking:** Made trevorthewebdeveloper.com blue in both Resume and Clips pages
- **Proper en dash usage** throughout (–) instead of hyphens
- **Fixed grammar** in multiple descriptions

**Key Decisions Made:**
- Keep resume summary professional but authentic
- Remove all buzzwords and corporate speak
- Use active voice throughout
- Keep descriptions concise for one-line display
- Maintain editorial newspaper design philosophy
- Don't add features without explicit permission

**Status:** Session completed successfully with all major issues resolved and improvements implemented.

---

### October 28, 2025 - PDF Generation System & Dark Mode Enhancements

**Session Time:** 2:30 PM – 3:50 PM

**Session Overview:**
Implemented automated PDF generation system with working links and selectable text, resolved Next.js 16 image quality warnings, and enhanced dark mode paper effects for resume pages.

**Major Accomplishments:**

**1. PDF Generation System Implementation**
- **Problem:** Need downloadable PDFs with working links and selectable text, not just image-based PDFs
- **Solution:** Built Puppeteer-based PDF generation system with dedicated PDF-only routes

**Technical Implementation:**
- Created `/resume/pdf-only` and `/resume/selected-works-pdf-only` routes
- Added custom layout files to bypass root layout's Header/Footer components
- Configured CSS to hide site navigation header (`header.sticky`) while preserving resume masthead
- Used `pageRanges: '1'` parameter to ensure exactly 1-page PDFs
- Added `"use client"` directive for styled-jsx compatibility

**Key Files Created/Modified:**
- `app/resume/pdf-only/page.jsx` – Clean resume render for PDF capture
- `app/resume/pdf-only/layout.jsx` – Minimal layout bypassing global nav
- `app/resume/selected-works-pdf-only/page.jsx` – Clean clips render for PDF capture
- `app/resume/selected-works-pdf-only/layout.jsx` – Minimal layout bypassing global nav
- `scripts/generate-pdfs.js` – Updated to use new routes and enforce single-page output
- `.env.local` – Added `NEXT_PUBLIC_BASE_URL='http://localhost:3001'` for PDF generation

**PDF Features:**
- ✅ Working, clickable links (e.g., article URLs, portfolio site, email)
- ✅ Selectable, searchable text (true PDF, not image-based)
- ✅ Exactly 1 page each (enforced via `pageRanges: '1'`)
- ✅ Clean output with no site navigation or footer
- ✅ Resume masthead and contact info preserved
- ✅ 378KB (Resume) and 216KB (Selected Works) – optimized size

**Critical Learning:**
- Next.js layouts are **nested**, not replaceable – child layouts wrap inside parent layouts
- Cannot "skip" root layout – must use CSS to hide unwanted elements
- Targeting specific elements (e.g., `header.sticky`) prevents hiding resume headers
- Puppeteer's `page.pdf()` always captures full page – use `pageRanges` to limit output

**2. Next.js Image Quality Configuration**
- **Problem:** Warnings about image quality 85 not being configured for Next.js 16
- **Solution:** Added `qualities: [75, 85, 90, 95, 100]` to `next.config.js`
- **Impact:** Silenced warnings and prepared codebase for Next.js 16 upgrade

**3. Dark Mode Enhancement**
- **Problem:** Resume/clips pages looked flat in dark mode – no 3D paper effect
- **Solution:** Enhanced box-shadow for dark mode in `app/resume/page.jsx`
- **Implementation:** `box-shadow: 0 25px 50px rgba(0,0,0,0.3), 0 10px 20px rgba(0,0,0,0.2);`
- **Result:** Paper now pops off dark background with dramatic 3D effect

**4. Puppeteer Script Improvements**
- Fixed deprecated `page.waitForTimeout()` → `new Promise(resolve => setTimeout(resolve, 2000))`
- Added element-specific screenshot capability for PNG previews
- Implemented single-page PDF constraint
- Added comprehensive error checking and status reporting

**Workflow for Future Updates:**

**When updating resume/clips content:**
1. Edit content in `app/resume/components/ResumePage.jsx` or `ClipsPage.jsx`
2. Ensure dev server is running: `pnpm run dev`
3. Run PDF generation: `pnpm generate-pdfs`
4. Verify output:
   - Check page count: `file public/pdfs/Trevor_Brown_Resume.pdf`
   - Open PDFs to verify links work and text is selectable
   - Confirm no site navigation header appears
5. Commit updated PDFs to repository

**PDF Generation Script Details:**
```bash
# Generate PDFs from current dev server
pnpm generate-pdfs

# Script automatically:
# - Checks if dev server is running on port 3001
# - Navigates to PDF-only routes
# - Generates PDFs with pageRanges: '1'
# - Attempts PNG preview generation
# - Saves to public/pdfs/
```

**Files Updated/Created:**
- `next.config.js` – Added image qualities configuration
- `app/resume/page.jsx` – Enhanced dark mode shadows
- `scripts/generate-pdfs.js` – Updated timeout method, added pageRanges
- `.env.local` – Added NEXT_PUBLIC_BASE_URL
- Created 4 new files for PDF-only routes and layouts

**Stretch Goal (Future Enhancement):**
Build dashboard feature that:
- Detects when ResumePage.jsx or ClipsPage.jsx content changes
- Automatically triggers PDF regeneration via GitHub Actions or webhook
- Replaces static PDFs in `public/pdfs/` without manual intervention

**Technical Notes:**
- PDFs are **static files** served from `public/pdfs/` – not generated on-the-fly
- Puppeteer runs **locally during development** – not in production
- PDF generation requires dev server running on localhost:3001
- Links work because Puppeteer captures live HTML with anchor tags
- Text is selectable because PDF contains actual text layers, not images

**Challenges Overcome:**
1. Initial confusion about screenshot approach vs. live PDF generation
2. Next.js layout hierarchy – learned layouts nest instead of replace
3. Header conflict – distinguished between site nav header and resume masthead header
4. Page count issue – resolved with `pageRanges: '1'` parameter
5. styled-jsx client component requirement – added `"use client"` directives

**Key Decisions:**
- Static PDF generation (not on-the-fly) for reliability and performance
- Puppeteer-based approach for working links and selectable text
- Dedicated PDF-only routes for clean, controlled rendering
- CSS-based hiding of site navigation rather than layout replacement
- Single-page constraint enforced at PDF generation level

**Status:** PDF generation system fully operational. PDFs have working links, selectable text, clean formatting, and guaranteed single-page output. Ready for production use.

---

### October 28, 2025 (Evening) - Contact Form Spam Protection

**Session Time:** 7:00 PM – 7:45 PM

**Session Overview:**
Implemented honeypot spam protection for contact form and removed response time commitment messaging.

**Major Accomplishments:**

**1. Messaging Updates**
- Removed "I'll respond within 24 hours" from two locations:
  - Success message: Changed to "get back to you soon"
  - Form footer text below submit button (removed entirely)
- More authentic, less committal response time messaging

**2. Honeypot Spam Protection Implementation**
- **Problem:** Contact form vulnerable to automated spam bot submissions
- **Solution:** CSS-based invisible honeypot field with server-side validation

**Technical Implementation:**
- Added hidden `website` field to form state and submission payload
- Honeypot field styled with Tailwind utilities for invisibility:
  - `absolute -left-[9999px]` – positions field off-screen (better than `display: none` which bots detect)
  - `opacity-0` – makes field invisible
  - `aria-hidden="true"` – hides from screen readers for accessibility
  - `tabIndex={-1}` – removes from keyboard navigation
  - `autoComplete="off"` – prevents browser autofill
- Positioned outside grid container to prevent layout conflicts
- Server-side validation in `/api/contact/route.js` rejects any submission where honeypot is filled

**Key Files Modified:**
- `app/home/contact/Form.jsx` – Added honeypot field and state management
- `app/api/contact/route.js` – Added honeypot validation logic

**How It Works:**
- **Real users:** Never see or interact with honeypot field → form works normally
- **Spam bots:** Auto-fill ALL fields including honeypot → server rejects with 400 error
- **Server response when triggered:** `{ error: "Invalid submission" }` with 400 status
- **Console logging:** "Honeypot triggered - spam detected" for monitoring

**Testing Methodology:**
- Created temporary test button to properly update React state (removed after testing)
- Built automated test script with fetch API to verify both scenarios
- Verified legitimate submissions return 200 status with email ID
- Confirmed spam submissions return 400 status and trigger server logging

**Key Learning:**
- Setting DOM values via `document.getElementById()` doesn't update React state
- Must use `setFormData()` or dispatch proper events to trigger React's onChange
- Honeypot must be functional (not `pointer-events-none`) to receive bot input
- Position honeypot outside grid containers to prevent layout issues

**Anti-Patterns Avoided:**
- CAPTCHA friction for legitimate users
- Displaying honeypot field visually
- Using `display: none` (bots can detect this)
- Over-engineering with time-based validation (simple honeypot is effective)

**Production Benefits:**
- Zero user friction – no CAPTCHA needed
- Effective bot blocking without ML or external services
- Clean error handling that doesn't expose honeypot mechanism
- Minimal code footprint and maintenance overhead

**Status:** Contact form spam protection implemented and verified working. Production-ready with zero user-facing impact.

---

_Updated with core design philosophy, coding ethos, and development progress - reference this for all future work together._

---

## Workspace Context

**Project Name**: my-portfolio
**Location**: `~/Desktop/ActiveProjects/my-portfolio`
**GitHub**: github.com/tbrown034/my-portfolio

This project is part of Trevor Brown's ActiveProjects workspace:
- Workspace docs: `~/Desktop/ActiveProjects/_docs/`
- Project status: See `_docs/status.md` for all project statuses
- Naming convention: kebab-case

Last updated: 2026-01-08
