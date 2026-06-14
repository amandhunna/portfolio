# Design Tokens — Verification

This doc confirms tokens are defined correctly and used consistently. When adding or changing tokens, update this file.

---

## 1. Token definitions (source of truth)

| File | Exports | Rule |
|------|---------|------|
| `src/tokens/spacing.ts` | `spacing` (xs=8, sm=16, md=24, lg=32, xl=40, xxl=48, xxxl=64, 4xl=80), `FIGMA_SPACING` | Rule 2 — 8pt grid |
| `src/tokens/breakpoints.ts` | `breakpoints` (sm=640, md=768, lg=1024, xl=1280), `FIGMA_BREAKPOINTS` | Rule 12 — mobile-first |
| `src/tokens/colors.ts` | `lightColors`, `darkColors`, `FIGMA_COLORS_*`, `cssVars` | Rule 5 — 60-30-10 |
| `src/tokens/typography.ts` | `fontFamily`, `fontSize`, `lineHeight`, `fontWeight`, `textStyle`, `FIGMA_TYPOGRAPHY` | Rule 3 — 1.25x scale |
| `src/tokens/radii.ts` | `radii` (sm=8, md=16, full=9999), `shadow`, `FIGMA_RADII` | Rule 4 — 8px or 16px |
| `src/tokens/layout.ts` | `layout` (maxWidth=1100, navHeight=64, section padding, touchTargetMin=44), `FIGMA_LAYOUT` | Rule 2 |
| `src/tokens/componentSizes.ts` | `componentSizes` (button 32/40/48, input, table row, iconButton=40, touchTargetMin=44), `FIGMA_COMPONENT_SIZES` | Rule 4 |

All are re-exported from `src/tokens/index.ts` and included in `FIGMA_TOKENS_ALL` where applicable.

---

## 2. ThemeProvider (color tokens → CSS variables)

`ThemeProvider` applies:

- `--dominant-bg`, `--dominant-text`, `--dominant-text-muted`
- `--secondary-bg`, `--secondary-border`
- `--accent-base`, `--accent-hover`, `--accent-light`, `--accent-glow`
- `--error`, `--success`, `--warning`
- `--globe-wire`, `--globe-node`, `--globe-arc`

Values come from `lightColors` / `darkColors` in `tokens/colors.ts`. No hardcoded hex in UI; components use `var(--*)`.

---

## 3. Component usage

| Component | Uses |
|-----------|------|
| **Button** | `spacing`, `radii`, `componentSizes.buttonHeight`, `fontFamily`, `fontSize`, `fontWeight`; colors via CSS vars |
| **Nav** | `spacing`, `radii`, `layout` (maxWidth, navHeight), `componentSizes` (iconButton, touchTargetMin) |
| **Card** | `spacing`, `radii` |
| **Typography** | `textStyle`, `fontFamily`, `fontFamilyMono` from typography tokens |
| **Timeline** | `spacing`, `radii` |
| **Badge** | `spacing`, `radii`, `fontSize` (xs, sm, base) |
| **BlogCard** | `spacing`, `radii`, `fontFamily`, `fontSize`, `fontWeight`, `lineHeight` |
| **SkillGroup** | `spacing`, `radii`, `fontFamily`, `fontSize`, `fontWeight` |
| **StatCard** | `spacing`, `fontFamily`, `fontSize`, `fontWeight` |
| **Layout** | `spacing` (gapMap) |
| **App** | `spacing`, `layout`, `fontSize`, `fontWeight`, `radii` for hero badge |
| **Globe** | Reads `--globe-wire`, `--globe-node`, `--globe-arc` from DOM |

---

## 4. Global CSS alignment

`src/styles/global.css` cannot import TS; values are kept in sync manually and documented in comments:

- `.container` max-width 1100px = `layout.maxWidth`
- `.container` padding 16px / 32px = `spacing.sm` / `spacing.lg`
- `.section` padding 48px/16px, 80px/32px = `spacing.xxl`/`spacing.sm`, `spacing.4xl`/`spacing.lg`
- `.grid-3` gap 16px = `spacing.sm`
- Nav open menu top 64px = `layout.navHeight`
- `.nav-links` gap 28px (desktop) — not in 8pt grid; acceptable for link spacing

---

## 5. Typography scale (Rule 3)

Scale: 13, 16, 20, 25, 31, 39, 49. No 11px or 12px; label/meta use `fontSize.xs` (13).

---

## 6. Figma sync

- `figma-tokens.json` in project root is the import source for Tokens Studio.
- Structure may differ from `FIGMA_*` in code (nested vs flat). Code exports are in `tokens/index.ts` via `FIGMA_TOKENS_ALL` for programmatic export if needed.
- When changing tokens in code, update `figma-tokens.json` (or run a tokens export script if added) so Figma stays in sync.

---

## 7. Checklist for new work

- [ ] Spacing: use only `spacing.*` (8pt multiples).
- [ ] Colors: use CSS variables from ThemeProvider only.
- [ ] Typography: use `textStyle` / `fontSize` / `fontFamily` from tokens; no 11px.
- [ ] Radii: use `radiiRem.sm` / `radiiRem.md` / `radiiRem.full` (Rule 13).
- [ ] Component heights: use `componentSizesRem` for buttons, inputs, touch targets.
- [ ] Layout: use `layoutRem` for maxWidth, nav height in styles.
- [ ] **Rule 13 — Units:** Use rem in CSS and inline styles. Use `toRem(px)`, `spacingRem`, `fontSizeRem`, `radiiRem`, `layoutRem`, `componentSizesRem` from tokens.
