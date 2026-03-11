# Project Context — Portfolio Design System

## Who

**Amanjot Singh** — Software Engineer at AiDash, 7+ years.
Core stack: React, Spring Boot, PostGIS, RabbitMQ, Mapbox GL JS.
LinkedIn: https://linkedin.com/in/amandhunna-ln
GitHub: https://github.com/amandhunna
Medium: https://amandhunna.medium.com
Email: aman.dhunna@gmail.com
Phone: +91 7042458977
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

Full rules in **docs/ai/rules.md**.

| Rule               | Standard                                                                                 |
| ------------------ | ---------------------------------------------------------------------------------------- |
| Spacing            | 8pt grid only: 8, 16, 24, 32, 40, 48, 64. Never 4, 6, 10, 12, 20.                        |
| Typography         | Modular scale 1.25x. Base 16px. Font: DM Sans.                                           |
| Component sizes    | Buttons: 32/40/48px. Inputs: 40/48px. Touch targets: ≥44px.                              |
| Border radius      | 8px or 16px only.                                                                        |
| Color              | 60% dominant, 30% secondary, 10% accent. CSS variables. Light theme: pastel palette.     |
| Layout             | 60/40 or golden ratio for two-col. 3-col for cards.                                      |
| Accessibility      | Contrast ≥ 4.5:1. Touch ≥ 44px. Semantic HTML.                                           |
| Mobile-first       | Base CSS = mobile; use `min-width` breakpoints (768px, 1024px). See Rule 12 in rules.md. |
| Special characters | Use hex entities (e.g. `&#x2014;`) or `\uNNNN` in strings (see Rule 11 in rules.md).     |

---

## Project Structure

```
portfolio-design-system/
├── docs/ai/                 ← Common AI context (Claude + Cursor)
│   ├── README.md
│   ├── context.md          ← This file
│   ├── rules.md
│   ├── verification.md
│   └── skills.md
├── figma-tokens.json
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── styles/global.css
│   ├── tokens/             ← spacing, colors, typography, radii, index
│   ├── components/         ← ThemeProvider, Button, Typography, Card, Layout,
│   │                        StatCard, Timeline, Badge, BlogCard, SkillGroup,
│   │                        Globe, Nav
│   └── hooks/              ← useScrollReveal, useActiveSection
```

---

## Portfolio Sections (order)

1. Hero — name gradient, subtitle, 3 CTAs, Software Engineer badge
2. About — 60/40 layout, 3 StatCards (Years, Assets, DAU)
3. Spatial & GIS — 3-col cards (QGIS, Pipelines, Web Mapping)
4. Experience — Timeline, 4 jobs (AiDash, Swiggy, Jio, Successive)
5. Projects — 3 cards (CRIS, Asset Inspection, Maptiler)
6. Creative & MCP — 3 cards (AI RCA, QGIS MCP, Agent Skills)
7. Skills — 6 SkillGroups in grid
8. HTB Badges — 9 badges, green accent
9. Blog — 3 BlogCards + "All posts on Medium"
10. Contact — LinkedIn, GitHub, Medium, Email, Phone, Based in India
11. Footer — © year, B.Tech IT, GTBIT Delhi

---

## Key Decisions

- Sections transparent so Three.js globe shows through; cards use backdrop-filter blur.
- Timeline: filled dot = current role, outlined = past.
- Light theme uses pastel palette; dark unchanged.
- Globe, Nav, scroll reveal, react-icons are implemented; see verification.md for status.

---

## Commands

```bash
npm install
npm run dev
npm run build
```

---

## Figma

Import `figma-tokens.json` via Tokens Studio. Token files export `FIGMA_*` constants from `src/tokens/`.
