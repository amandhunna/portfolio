# Design System Rules

These rules apply to every file in this project. They enforce the Mathematical UI Framework for SaaS and ensure tokens are portable to Figma.

---

## Rule 1 — Project Structure

```
src/
  tokens/           → Design tokens (spacing, color, type, radii, shadows)
  components/       → One folder per component: Name/Name.tsx + Name.css.ts + index.ts
  sections/         → Page-level sections (Hero, About, Experience, etc.)
  styles/           → Global CSS, theme CSS variables
  App.tsx           → Root layout
  main.tsx          → Entry point
```

Every component folder has:
- `Name.tsx` — the component
- `index.ts` — barrel export

No deeply nested folders. No curly braces or special characters in folder names.

---

## Rule 2 — 8pt Spatial Grid

All spacing values MUST be multiples of 8.

Allowed: 0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 96, 128
Forbidden: 4, 6, 10, 12, 14, 18, 20, 22, 26, 28, 30

Import from `tokens/spacing.ts`. Map to Figma variables as:
- spacing/xs = 8
- spacing/sm = 16
- spacing/md = 24
- spacing/lg = 32
- spacing/xl = 40
- spacing/2xl = 48
- spacing/3xl = 64

---

## Rule 3 — Typography (Modular Scale 1.25x)

Base: 16px. Scale: 13, 16, 20, 25, 31, 39, 49
Line height: 1.4 to 1.6 for body, 1.1 to 1.2 for headings.
Font: DM Sans (body), JetBrains Mono (code).

Figma text style names:
- text/h1 = 49px/1.1
- text/h2 = 39px/1.1
- text/h3 = 31px/1.2
- text/h4 = 25px/1.2
- text/body = 16px/1.5
- text/small = 13px/1.5
- text/mono = 14px/1.5

---

## Rule 4 — Component Sizes (Fixed Tiers)

Buttons: 32px (sm), 40px (md), 48px (lg)
Inputs: 40px (md), 48px (lg)
Touch targets: minimum 44px for any clickable element.
Border radius: 8px or 16px only. Never 4, 6, 10, 12.

---

## Rule 5 — Color (60-30-10)

60% dominant — page background
30% secondary — cards, nav, elevated surfaces
10% accent — CTAs, links, highlights

All colors defined as CSS custom properties in ThemeProvider.
Figma color style names: color/dominant/bg, color/secondary/bg, color/accent/base, etc.

---

## Rule 6 — Layout Proportions

Two-column: 60/40 or golden ratio (61.8/38.2)
Three-column: equal 1fr 1fr 1fr
Never use arbitrary splits like 55/45, 70/30.

---

## Rule 7 — Interaction (Fitts + Hick)

Primary button = largest, highest contrast. Max 5-7 choices visible per group.

---

## Rule 8 — Table Density

Comfortable: 48px rows. Compact: 40px. Dense: 32px.

---

## Rule 9 — White Space

25-35% negative space on content screens.

---

## Rule 10 — Accessibility

Text contrast >= 4.5:1 (WCAG AA). Touch targets >= 44px.
Use semantic HTML: button, nav, main, section, article.

---

## Rule 11 — Special Characters (Hex / Unicode)

Use **HTML hex entities** or **Unicode escapes** for special characters instead of raw symbols. Keeps source encoding-safe and tooling-friendly.

**In JSX / HTML:** use `&#xNNNN;` (hex) or `&#NNNN;` (decimal).

| Character | Name        | Hex entity   | Unicode escape |
|-----------|-------------|--------------|----------------|
| —         | Em dash     | `&#x2014;`   | `\u2014`       |
| ·         | Middle dot  | `&#x00B7;`   | `\u00B7`       |
| ©         | Copyright   | `&#x00A9;`   | `\u00A9`       |
| •         | Bullet      | `&#x2022;`   | `\u2022`       |
| …         | Ellipsis    | `&#x2026;`   | `\u2026`       |
| ′ ″       | Prime       | `&#x2032;` `&#x2033;` | `\u2032` `\u2033` |
| ™ ®       | Trademark   | `&#x2122;` `&#x00AE;` | `\u2122` `\u00AE` |

**In JS/TS strings:** use `\uNNNN` (e.g. `'\u2014'` for em dash).

**Avoid:** typing raw — · © • … in source. Prefer entities in JSX and `\uNNNN` in string literals.

---

## Figma Token Export Format

Every token file exports a FIGMA_TOKENS object that maps directly to Figma variable names:

```ts
export const FIGMA_TOKENS = {
  "spacing/xs": 8,
  "spacing/sm": 16,
  "color/accent/base": "#2563EB",
  "text/body": { fontSize: 16, lineHeight: 1.5 },
  "radius/sm": 8,
}
```

This allows direct import into Figma via Tokens Studio or Style Dictionary.
