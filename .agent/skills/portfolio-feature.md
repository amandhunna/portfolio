# Portfolio — feature and section work

**Source: Layer 1 — Portfolio**

Use when adding or editing portfolio sections, components, or App.tsx content.

## Before starting

1. Read `.agent/context.md` for section order and key decisions.
2. Read `.agent/rules/design-system.md` Rules 2–6, 10–13 (tokens, layout, a11y, mobile-first, rem).
3. Check `.agent/verification.md` for what already exists.

## File placement

| Change | Path |
|--------|------|
| New reusable UI | `src/components/Name/Name.tsx` + `index.ts` |
| New page section | Prefer `src/sections/Name/Name.tsx` if App.tsx is large |
| Design tokens | `src/tokens/` + sync `figma-tokens.json` |
| Global styles | `src/styles/global.css` (mobile-first) |
| Nav links | `src/components/Nav/Nav.tsx` + `useActiveSection.ts` |

## Design system checklist

- 8pt spacing via `spacingRem`
- `Typography` variants — no one-off font sizes
- `Layout` for 60/40 and 3-col
- Cards: transparent + backdrop blur (globe shows through)
- Use hex entities for em dashes and special chars in JSX

## After implementation

```bash
npm run typecheck
npm run build
```

Update `.agent/verification.md` if adding components or sections.

## Commands

- PR review: `.agent/commands/review-pr.md`
- Full audit: `.agent/commands/audit-codebase.md`
