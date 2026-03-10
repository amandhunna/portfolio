# HTML vs React Portfolio — Verification

Comparison of the original HTML portfolio with the current React (Vite + TypeScript) implementation.

---

## ✅ Implemented in React

| Feature | Status |
|--------|--------|
| Theme (light/dark) | ✅ ThemeProvider + useTheme, ThemeToggle |
| Hero: name gradient, subtitle, 3 CTAs | ✅ (CTAs lacked hrefs — fixed) |
| About: 60/40 layout, description + 3 StatCards | ✅ |
| StatCard animated counters | ✅ IntersectionObserver + requestAnimationFrame |
| Spatial & GIS: 3-col cards (QGIS, Pipelines, Web Mapping) | ✅ |
| Experience: Timeline + TimelineItem, 4 jobs | ✅ Filled dot for current role |
| HTB Badges: 9 badges, green accent | ✅ (icons are emoji, not Font Awesome) |
| Blog: 3 cards + "All posts on Medium" | ✅ (link added) |
| Skills: 6 SkillGroups in grid | ✅ (icons are emoji/abbrev) |
| Contact: links + location | ✅ (proper hrefs added) |
| Footer: dynamic year, B.Tech line | ✅ |
| Responsive: container/section padding at 768px | ✅ global.css |
| Scroll-behavior: smooth | ✅ global.css |
| Fade-up CSS class | ✅ (no IntersectionObserver wiring in App yet) |

---

## ❌ Missing or Different

### 1. Three.js globe (not implemented)
- **HTML:** Fixed canvas `#globe-container`, wireframe icosahedron, 42 Fibonacci nodes with glow sprites, 20 arc connections with traveling pulses, scroll-reactive position/rotation/scale, theme-aware `--globe-wire`, `--globe-node`, `--globe-arc`.
- **React:** No globe. Needs port: `three` + `@types/three`, canvas in a fixed-position wrapper, same geometry/curves/sprites, resize/scroll/theme sync.

### 2. Navigation bar (not implemented)
- **HTML:** Fixed top nav: logo "AS.", section links (About, Spatial, Experience, Projects, Creative, Skills, Blog, Contact), theme toggle, hamburger + mobile menu, active section on scroll.
- **React:** Only a floating ThemeToggle. No nav bar, no section links, no hamburger.

### 3. Scroll reveal (not fully wired)
- **HTML:** IntersectionObserver adds `.visible` to `.fade-up` and `.reveal-item`; staggered delays on children.
- **React:** `.fade-up` and `.visible` exist in CSS but sections/cards are not observed or toggled in JS.

### 4. Font Awesome icons (not used)
- **HTML:** `<i class="fas fa-globe-americas">`, `fab fa-react`, etc. via CDN.
- **React:** Emoji or text abbreviations (⚛, 🗺, "JS", "PY"). Add `react-icons` or `@fortawesome/react-fontawesome` and replace.

### 5. Section order and missing sections
- **HTML order:** Hero → About → Spatial → Experience → **Projects** → **Creative & MCP** → Skills → Badges → Blog → Contact.
- **React (before fix):** Hero → About → Spatial → Experience → **Badges** → Blog → Skills → Contact. Missing **Projects** and **Creative & MCP**; order differed.
- **React (after fix):** Sections reordered and Projects + Creative added; section ids added for future nav.

### 6. Hero
- **HTML:** "Software Engineer" badge with green pulsing dot; CTAs are `<a href="#spatial">`, `#contact`, external GitHub.
- **React:** No hero badge; CTAs were `<button>`. Fixed: Hero badge added; CTAs use `href` (Button as link or `<a>`).

### 7. Projects section
- **HTML:** 3 cards: Climate Risk Intelligence System (link), Asset Inspection & Monitoring (link), AiDash Maptiler (no link).
- **React:** Was missing. Added in verification pass.

### 8. Creative & MCP section
- **HTML:** 3 cards: AI RCA + MCP (LinkedIn post link), QGIS MCP, Agent Skills & Tooling.
- **React:** Was missing. Added in verification pass.

### 9. Contact
- **HTML:** Real links: LinkedIn, GitHub, Medium, Email (mailto), Phone (tel), "Based in India."
- **React:** Buttons without hrefs. Fixed: proper `<a>` links, phone, "Based in India."

### 10. Blog
- **HTML:** 6 posts shown; "All posts on Medium" links to amandhunna.medium.com.
- **React:** 3 posts; "All posts" was not a link. Fixed: href to Medium; 3 extra posts can be added per CONTEXT.md.

### 11. Design system / tokens
- **HTML:** Uses `--radius: 12px` (design system allows only 8 or 16).
- **React:** Uses tokens; tech-pill had `gap: 4` (forbidden 8pt grid). Fixed: tech-pill gap 8px; radius already 8/16 in tokens.

### 12. Special characters (Rule 11)
- **React:** Raw `©` in footer. Prefer `&#x00A9;` or `\u00A9`. Fixed: use entity in footer.

### 13. index.html
- **HTML:** Full meta description, viewport, title with em dash.
- **React:** Minimal. Fixed: add meta description.

---

## Summary

| Category | Missing in React |
|----------|------------------|
| **Visual / FX** | Three.js globe |
| **Layout / UX** | Fixed nav bar, section links, active state, hamburger menu |
| **Animation** | Scroll reveal IntersectionObserver wiring |
| **Assets** | Font Awesome (or react-icons) for icons |
| **Content** | Projects + Creative sections (added); optional 3 more blog cards |
| **Links** | Hero/Contact/Blog links (added); Button as link when href provided |
| **Design** | 8pt gap fix, footer © entity, meta description (fixed) |

---

## Recommended next steps

1. **Port Three.js globe** — New component, e.g. `src/components/Globe/Globe.tsx`, with theme and scroll integration.
2. **Add nav bar** — Fixed header with section anchors, theme toggle, hamburger at 768px.
3. **Wire scroll reveal** — Single IntersectionObserver in App or layout that adds `.visible` to `.fade-up` / `.reveal-item`.
4. **Add icons** — Install `react-icons` (or Font Awesome) and replace emoji/abbrevs in Badge, SkillGroup, Hero, Contact, Blog.
