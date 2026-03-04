# Portfolio — Claude Code Instructions

## Cross-Project References

This portfolio must stay in sync with **second-brain-v2** for job applications and career positioning.

- **Second Brain root**: `~/Desktop/dev/active/second-brain-v2/`
- **Job applications**: `~/Desktop/dev/active/second-brain-v2/config/applications.json`
- **Job profile**: `~/Desktop/dev/active/second-brain-v2/config/job-profile.json`
- **Project tracking**: `~/Desktop/dev/active/second-brain-v2/config/projects.json`
- **Portfolio data mirror**: `~/Desktop/dev/active/second-brain-v2/raw/portfolio/portfolio.json` — flag for re-scraping when portfolio content changes

### Consistency rules:
- Project names, descriptions, and tech stacks must match job applications
- Python proficiency is SECONDARY (JavaScript/TypeScript is primary)
- Career narrative: "investigative journalist turned web developer" — both halves matter equally

---

## Content Rules (Non-Negotiable)

- **Em dashes**: ALWAYS spaced AP style: `word — word` (U+2014). NEVER en dashes for parenthetical breaks.
- **No Oxford comma**: AP style throughout.
- **No emojis**: Professional interfaces rely on typography and iconography.
- **No fabricated URLs/links**: Only use links already in codebase or explicitly provided.
- **No unauthorized content changes**: Never add/delete whole sentences without explicit permission.
- **No freelancing**: Never add features, components, or functionality unless explicitly requested. Every change must be tied to a user request. When in doubt, ask.

---

## Design Ethos

**Three words: intuition, clarity, focus.**

### Primary Influence: Editorial newspapers
- Front-page mindset (lede → dek → modules above the fold)
- Hed/dek type hierarchy, modular grid, progressive disclosure
- Sections like beats, pull-quote callouts used sparingly

### Secondary Influences
- **Architectural modernism**: Right angles for order, soft radii for welcome
- **Selective brutalism**: Honest structure, minimal ornament
- **Glass as depth**: Frosted layers only when they clarify hierarchy

### Visual Language: Flat + Glass
- **Flat sections** = editorial clarity (headers, text blocks, structural dividers)
- **Glass sections** = interactive depth (cards, project highlights, live content)
- Never nest glass within glass. One hero per viewport. Style changes serve content hierarchy.

### Principles
- Clarity over clever. One center of gravity per screen.
- Everything earns its place. White space is strategic, not filler.
- Accessibility & performance are table stakes.
- Respectful motion — confirms and guides, never decorates.

### Anti-Goals
- Mystery-meat nav, dark patterns, decorative motion, style without purpose
- If it needs a tooltip to make sense, it's not done

---

## Coding Ethos

**Small, modular, clear.**

- Small, focused components that do one thing well
- Predictable naming, structure, and patterns throughout
- Folder structure reflects mental models
- Consistent patterns established early and followed religiously
- Code reads like well-organized journalism — clear hierarchy, logical flow, no wasted words

---

## Key Architecture Notes

### PDF Generation
- Static PDFs served from `public/pdfs/` — not generated on-the-fly
- Puppeteer runs locally, requires dev server on localhost:3001
- Workflow: edit content → `pnpm generate-pdfs` → verify → commit
- Dedicated PDF-only routes bypass root layout nav

### Contact Form
- Honeypot spam protection (hidden `website` field)
- Server-side validation in `/api/contact/route.js`

### Known Bug Fixes (Do Not Regress)
- **Contact button MUST link to #contact** (NOT #about — there is no #about section)
- Never change navigation anchors without verifying the target section exists

---

## Workspace Context

**Project**: my-portfolio
**Location**: `~/Desktop/dev/active/my-portfolio`
**GitHub**: github.com/tbrown034/my-portfolio
**Prod URL**: trevorthewebdeveloper.com
**Deploy**: Vercel auto-deploys on push to main

Historical dev log archived in `DEVLOG.md`.

*Last updated: 2026-03-03*
