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
- **Kill your darlings**: Remove any section, div, or element that doesn't add value—if it takes without giving, it goes

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

---
*Updated with core design philosophy, coding ethos, and development progress - reference this for all future work together.*