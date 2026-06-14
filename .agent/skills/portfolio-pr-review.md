# Portfolio — PR quality and review

**Source: Layer 1 — Portfolio**

Use with [PR_CODE_QUALITY_CHECKLIST.md](../PR_CODE_QUALITY_CHECKLIST.md). Prefer **Navigation** anchor links for sections instead of loading the entire checklist for small edits.

## How to use

1. **Before coding:** Skim complexity limits and design token rules below.
2. **Before PR:** Run `.agent/commands/review-pr.md` workflow.
3. **During review:** MUST / SHOULD / CONSIDER buckets.

## Code size (MUST)

| Rule | Limit |
|------|-------|
| Function length | ≤ 100 lines |
| Component length | ≤ 300 lines |
| Nesting depth | ≤ 4 |
| Nested ternaries | 0 |

## Design tokens (MUST)

- Spacing: `spacingRem` from `tokens/spacing.ts` — 8pt grid only.
- Typography: `Typography` component + `fontSizeRem` / `fontWeight`.
- Colors: `var(--dominant-*)`, `var(--accent-*)` — no hardcoded hex in JSX.
- Radius: `radiiRem.sm` | `radiiRem.md` only.
- Full rules: `.agent/rules/design-system.md`.

## TypeScript (MUST)

- No `any`; explicit interfaces for props.
- No `console.log`; no dead commented code.

## Accessibility (SHOULD)

- `aria-label` on icon buttons.
- Semantic HTML; 44px touch targets.
- See `.agent/rules/accessibility.md`.

## Automated checks

```bash
npm run typecheck
npm run build
```

## Report format

- **MUST FIX** — type errors, token violations, a11y blockers
- **SHOULD FIX** — missing labels, import order, doc updates
- **CONSIDER** — section extraction, memoization, tests
