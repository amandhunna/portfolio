# Portfolio Design System — Context

**Source: Layer 1 — Portfolio**

## Who

**Amanjot Singh** — Senior Frontend Engineer at AiDash, 7+ years.
Core stack: React, TypeScript, Vite, Mapbox GL JS, design systems, AI-assisted engineering.
LinkedIn: https://linkedin.com/in/amandhunna-ln
GitHub: https://github.com/amandhunna
Medium: https://amandhunna.medium.com
Email: amanjot.singh@aidash.com (work) · aman.dhunna@gmail.com (personal)
Location: India
Education: B.Tech IT, GTBIT Delhi (2018)

---

## What This Project Is

A React (Vite + TypeScript) portfolio site built on a **Mathematical UI Framework for SaaS**. It enforces design tokens that map 1:1 to Figma variables via Tokens Studio.

The project serves two purposes:

1. **Live portfolio** — deployed as a personal site
2. **Design system reference** — tokens and components importable into Figma

---

## Design System Rules (summary)

Full rules in **.agent/rules/design-system.md**. Figma workflows in **.agent/figma-standards.md**. AI layer index: **.agent/AI_SOURCES.md**.

| Rule               | Standard                                                                                 |
| ------------------ | ---------------------------------------------------------------------------------------- |
| Spacing            | 8pt grid only: 8, 16, 24, 32, 40, 48, 64. Never 4, 6, 10, 12, 20.                        |
| Typography         | Modular scale 1.25x. Base 16px. Font: DM Sans.                                           |
| Component sizes    | Buttons: 32/40/48px. Inputs: 40/48px. Touch targets: ≥44px.                              |
| Border radius      | 8px or 16px only.                                                                        |
| Color              | 60% dominant, 30% secondary, 10% accent. CSS variables. Light theme: pastel palette.     |
| Layout             | 60/40 or golden ratio for two-col. 3-col for cards.                                      |
| Accessibility      | Contrast ≥ 4.5:1. Touch ≥ 44px. Semantic HTML.                                           |
| Mobile-first       | Base CSS = mobile; use `min-width` breakpoints (768px, 1024px). See Rule 12 in design-system.md. |
| Special characters | Use hex entities (e.g. `&#x2014;`) or `\uNNNN` in strings (see Rule 11 in design-system.md).     |

---

## Project Structure

```
portfolio/
├── CLAUDE.md               ← Agent entry (root)
├── .agent/                 ← Agent OS: rules, skills, commands, context, AI_SOURCES
├── .cursor/rules/          ← Cursor .mdc pointers (Karpathy → Portfolio → globs)
├── figma-tokens.json
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── styles/global.css
│   ├── tokens/
│   ├── components/         ← ThemeProvider, Button, Typography, Card, Layout,
│   │                          StatCard, Timeline, Badge, BlogCard, SkillGroup,
│   │                          Globe, Nav
│   └── hooks/              ← useScrollReveal, useActiveSection
```

---

## Portfolio Sections (order)

1. Hero — Senior Frontend Engineer badge, gradient title, CTAs
2. About — 60/40 layout, 3 StatCards (Years, Monorepo Files, Assets on CRIS)
3. Spatial & GIS — Map platform, planning geography, geospatial pipelines
4. Experience — Timeline, 4 jobs (AiDash expanded, Swiggy, Jio, Successive)
5. Projects — 6 cards (Monorepo, Risk Map, Create Plan, Agent OS, CDN, CRIS)
6. AI & Workflow Engineering — Agent OS, context engineering, MCP integrations
7. Skills — 8 SkillGroups (Frontend, UI, Maps, Architecture, Platform, AI, Languages, Backend)
8. HTB Badges — 9 badges
9. Blog — 3 BlogCards + Medium link
10. Contact — LinkedIn, GitHub, Medium, work + personal email, Based in India
11. Footer — © year, B.Tech IT, GTBIT Delhi

---

## Key Decisions

- Sections transparent so Three.js globe shows through; cards use backdrop-filter blur.
- Timeline: filled dot = current role, outlined = past.
- Light theme uses pastel palette; dark unchanged.
- Globe, Nav, scroll reveal, react-icons implemented; see verification.md.

---

## Commands

```bash
npm install
npm run dev
npm run build
npm run typecheck
```

---

## Figma

Import `figma-tokens.json` via Tokens Studio. Token files export `FIGMA_*` constants from `src/tokens/`. Designer standards: **.agent/figma-standards.md**.
