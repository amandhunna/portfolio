# Figma Design Standards for SaaS

**Source: Layer 2 — Figma**

**Purpose:** Align all product UI with a shared, mathematical design system so layouts are consistent, scalable, and accessible. Use these standards in Figma for every flow, component, and screen.

**Audience:** UX / Product Design team.

**Code mirror:** `.agent/rules/design-system.md`. Token export: `figma-tokens.json` and `FIGMA_TOKENS` in `src/tokens/`.

---

## 1. Spatial system — 8pt grid

- **Base unit:** 8px.
- **All spacing** (margins, padding, gaps, component spacing) must be **multiples of 8**: 8, 16, 24, 32, 40, 48, 56, 64, etc.
- **In Figma:**
  - Set layout grid to **8px** (or 8pt) for frames and key screens.
  - Use **8px grid** when aligning and resizing elements.
  - Define spacing tokens/variables as 8, 16, 24, 32, 40, 48, 64 (avoid 4, 6, 10, 12, 20, 22, etc. unless explicitly approved).
- **Do not use:** 4, 6, 10, 12, 14, 20, 22, 26, or any value that is not a multiple of 8 for layout or component spacing.

**Code tokens:** `spacing/xs` through `spacing/3xl` in `src/tokens/spacing.ts` (Rule 2 in rules/design-system.md).

---

## 2. Typography — modular scale

- **Base font size:** 16px for body.
- **Scale ratio:** **1.25** (project standard).
  - Scale: 13 → 16 → 20 → 25 → 31 → 39 → 49 (round to whole numbers).
- **Line height:** **1.4–1.6** for body and UI text; **1.1–1.2** for headings.
- **Font family:** DM Sans (body), JetBrains Mono (code/mono).
- **In Figma:**
  - Create **text styles** for each step of the scale (body, labels, H4–H1).
  - Use the same font family and scale across all files; avoid one-off font sizes.
  - Set line height explicitly in each style.

**Code tokens:** `text/h1` through `text/mono` in `src/tokens/typography.ts` (Rule 3 in rules/design-system.md).

---

## 3. Layout proportions

- Use **proportional layouts** for structure, not arbitrary percentages.
- **Recommended splits:**
  - **60 / 40** (e.g. main content / sidebar or detail).
  - **Golden ratio:** 61.8% / 38.2% where a more balanced split is needed.
  - **3-column grids** where content is list- or card-based.
- **In Figma:**
  - Define **layout frames or auto-layout** with fixed proportion constraints (e.g. 60%–40%).
  - Document standard layouts (e.g. “Dashboard: 60/40”, “List: 3-col”) in your design system page.

**Code:** `Layout` component with `split="60-40"` or `split="3-col"` (Rule 6 in rules/design-system.md).

---

## 4. Component scaling

- **Fixed size tiers** — avoid arbitrary sizes.
- **Buttons:** **32px** (small), **40px** (medium), **48px** (large) height.
- **Inputs and cards:** Heights align to the **8pt grid** (input height 40px or 48px).
- **Border radius:** **8px** or **16px** only, aligned to the 8pt grid.
- **In Figma:**
  - Create **component variants** for size (e.g. Button / Small, Medium, Large with fixed heights).
  - Use **8px or 16px** for corner radius on cards, buttons, inputs; avoid 6, 10, 12.
  - Document size tiers in the component library so all designers use the same set.

**Code tokens:** `componentSizesRem`, `radiiRem` (Rules 4 and 13 in rules/design-system.md).

---

## 5. Color distribution — 60-30-10 rule

- **60%** — dominant (page/screen background).
- **30%** — secondary (cards, sidebars, secondary surfaces).
- **10%** — accent (CTAs, key actions, highlights).
- **In Figma:**
  - Tag or name colors as **Dominant**, **Secondary**, **Accent** (and semantic roles like error, success if needed).
  - Use accent sparingly so primary actions stay clear; avoid accent overload.
  - When reviewing screens, check that the approximate 60–30–10 balance holds.

**Code tokens:** `--dominant-*`, `--secondary-*`, `--accent-*` CSS variables in ThemeProvider (Rule 5 in rules/design-system.md).

---

## 6. Interaction — Fitts's and Hick's laws

- **Fitts's Law:** Primary actions must be **large and easy to reach** (main CTA = large button, high-affinity placement).
- **Hick's Law:** **Limit visible choices**; group or collapse complex options (filters, settings).
- **In Figma:**
  - Mark **primary vs secondary** actions clearly in specs; primary = larger, higher contrast.
  - Avoid crowded menus or long flat lists of actions; use grouping, sections, or progressive disclosure.

**Code:** Rule 7 in rules/design-system.md (max 5–7 visible choices per group).

---

## 7. Cognitive density

- Define **consistent density modes** for lists and tables:
  - **Comfortable:** 48px row height.
  - **Compact:** 40px row height.
  - **Dense:** 32px row height (use only when necessary).
- Keep spacing **consistent within each mode**.
- **In Figma:**
  - Create table/list **variants or patterns** for each density (Comfortable / Compact / Dense).
  - Document when to use which (e.g. “Comfortable for main dashboards, Compact for data-heavy tables”).

**Code:** Rule 8 in rules/design-system.md.

---

## 8. White space

- **Target:** **25–35%** of the screen as negative space on key dashboards and content pages.
- Too little → clutter; too much → inefficiency.
- **In Figma:**
  - When reviewing key screens, check that content does not fill 100%; aim for ~25–35% breathing room.
  - Use spacing from the 8pt grid for consistent margins and padding.

**Code:** Rule 9 in rules/design-system.md.

---

## 9. Visual weight balance

- Balance elements by **size, contrast, saturation, and spacing**.
- A **small, high-contrast** element can outweigh a **large, muted** one — use this intentionally for hierarchy.
- **In Figma:**
  - Use color and size to show hierarchy (e.g. one primary CTA, rest secondary).
  - Avoid too many elements with the same weight on one screen.

---

## 10. Accessibility

- **Contrast:** Body text must meet at least **4.5:1** contrast ratio against its background (WCAG AA). Use Figma plugins (e.g. Stark or Contrast) to check.
- **Touch targets:** Interactive elements must be at least **44px** in height (and width when possible) for touch.
- **In Figma:**
  - Define **accessible color pairs** in your style library (e.g. “Body on Background” = 4.5:1+).
  - Set **minimum 44px height** for tappable components in component specs and variants.
  - Call out any exception (e.g. “desktop-only, 32px”) in handoff notes.

**Code:** Rule 10 in rules/design-system.md (contrast, touch targets, semantic HTML).

---

## Quick reference

| Area | Standard |
|------|----------|
| **Grid** | 8pt (8, 16, 24, 32, 40, 48, 64…) |
| **Type** | Modular scale 1.25, base 16px, line height 1.4–1.6 |
| **Layout** | 60/40 or 61.8/38.2; 3-col where appropriate |
| **Components** | Fixed tiers (buttons 32/40/48px); radius 8 or 16px |
| **Color** | 60% dominant, 30% secondary, 10% accent |
| **Primary actions** | Large, easy to reach; limit visible choices |
| **Density** | Comfortable 48px / Compact 40px / Dense 32px rows |
| **White space** | 25–35% on dashboards |
| **Contrast** | ≥ 4.5:1 for body text |
| **Touch** | ≥ 44px height for interactive elements |

---

## Handoff to development

- **Spacing:** Use only the 8pt scale in specs (8, 16, 24, 32…).
- **Typography:** Provide the exact scale (sizes + line heights) so dev can mirror in theme.
- **Colors:** Tag Dominant / Secondary / Accent (and semantic names) so implementation can follow 60–30–10.
- **Components:** Specify size variant (e.g. Button Large = 48px height) and min 44px for touch.
- **Contrast:** Note “4.5:1” (or “AA”) for text/background pairs in style docs.
- **Tokens:** Export via Tokens Studio using `figma-tokens.json`; dev maps to `src/tokens/` and CSS variables.

*These standards are based on a Mathematical UI Framework for SaaS (spatial system, typography scale, layout proportions, component scaling, 60-30-10 color, Fitts's/Hick's laws, cognitive density, white space, visual weight, and accessibility).*
