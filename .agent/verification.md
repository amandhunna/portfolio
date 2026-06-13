# HTML vs React Portfolio — Verification

**Source: Layer 1 — Portfolio**

Comparison of the original HTML portfolio with the current React (Vite + TypeScript) implementation.

**Status:** Three.js globe, Nav, scroll reveal, and react-icons are implemented.

---

## Implemented in React

| Feature | Status |
|--------|--------|
| Theme (light/dark) | ✅ ThemeProvider, Nav theme toggle |
| Three.js globe | ✅ Globe component: wireframe, nodes, arcs, scroll/theme |
| Nav bar | ✅ Fixed nav, section links, theme toggle, hamburger @768px |
| Scroll reveal | ✅ useScrollReveal, .fade-up / .reveal-item + .visible |
| Icons | ✅ react-icons (Fa*, Si*) |
| Hero: Senior FE badge, gradient, CTAs | ✅ |
| About: 60/40, 3 StatCards | ✅ |
| StatCard animated counters | ✅ |
| Spatial & GIS: 3-col cards | ✅ |
| Experience: Timeline, 4 jobs | ✅ |
| Projects: 6 cards | ✅ |
| AI & Workflow Engineering: 3 cards | ✅ |
| Skills: 8 SkillGroups | ✅ |
| HTB Badges: 9 badges | ✅ |
| Blog: 3 cards + All posts link | ✅ |
| Contact: links, emails, Based in India | ✅ |
| Footer | ✅ |
| Responsive, smooth scroll | ✅ |
| Agent OS (.agent/, AI_SOURCES layers) | ✅ |

---

## Missing or Optional

- **Blog:** Additional posts could be added.
- **Storybook, tests, SEO, Open Graph:** low priority.

---

## Summary

HTML behavior and content are ported. AI context lives in **`.agent/`** — see **`.agent/AI_SOURCES.md`** for layer index.
