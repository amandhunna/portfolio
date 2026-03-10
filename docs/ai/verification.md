# HTML vs React Portfolio — Verification

Comparison of the original HTML portfolio with the current React (Vite + TypeScript) implementation.

**Status:** Three.js globe, Nav, scroll reveal, and react-icons are now implemented. This file is kept as the single source of truth for "what was in HTML vs what is in React."

---

## ✅ Implemented in React

| Feature | Status |
|--------|--------|
| Theme (light/dark) | ✅ ThemeProvider, Nav theme toggle |
| Three.js globe | ✅ Globe component: wireframe, nodes, arcs, scroll/theme |
| Nav bar | ✅ Fixed nav, section links, theme toggle, hamburger @768px |
| Scroll reveal | ✅ useScrollReveal, .fade-up / .reveal-item + .visible |
| Icons | ✅ react-icons (Fa*, Si*) in Hero, Badge, SkillGroup, Blog, Contact |
| Hero: badge, gradient, 3 CTAs with hrefs | ✅ |
| About: 60/40, 3 StatCards | ✅ |
| StatCard animated counters | ✅ |
| Spatial & GIS: 3-col cards | ✅ |
| Experience: Timeline, 4 jobs | ✅ |
| Projects: 3 cards with links | ✅ |
| Creative & MCP: 3 cards | ✅ |
| Skills: 6 SkillGroups | ✅ |
| HTB Badges: 9 badges | ✅ |
| Blog: 3 cards + All posts link | ✅ |
| Contact: links, phone, Based in India | ✅ |
| Footer | ✅ |
| Responsive, smooth scroll | ✅ |

---

## ❌ Missing or Optional

- **Blog:** 3 more posts could be added (see context.md).
- **Storybook, tests, SEO, Open Graph:** low priority per context.

---

## Summary

HTML behavior and content are ported. Globe, nav, scroll reveal, and icons are implemented. Common AI context lives in **docs/ai/** (this file, context.md, rules.md, skills.md).
