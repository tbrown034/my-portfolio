# Claude Code Preferences - Trevor Brown

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
- **Typography details**: Always use spaced en dash ( – ) not em dash or hyphen
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
  - Fixed Reflectyr project links (site: `https://reflectyr.vercel.app/`, GitHub: `https://github.com/tbrown034/ReflectYr`)

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

---

_Updated with core design philosophy, coding ethos, and development progress - reference this for all future work together._
