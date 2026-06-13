# Pre-PR Checklist

**Source: Layer 1 — Portfolio**

Run before every PR. Do not open a PR until all MUST items pass.

## Pre-submit runbook (MUST)

```bash
npm run typecheck
npm run build
```

Then: manual test in browser (`npm run dev`) — light and dark theme, mobile nav.

## PR description (MUST)

- **What**: one sentence describing the change.
- **Why**: the problem or requirement it addresses.
- **Screenshots**: required for any UI change.
- **Self-review**: confirm you reviewed your own diff.

## MUST FIX before PR approval

- [ ] No `any` / `as any`
- [ ] No `console.log`
- [ ] No hardcoded spacing/colors outside tokens and CSS variables
- [ ] Spacing uses 8pt grid via token imports
- [ ] `npm run typecheck` — 0 errors
- [ ] `npm run build` — succeeds
- [ ] No secrets or `.env` in diff (see `.agent/rules/security.md`)

## SHOULD FIX

- [ ] Icon buttons have `aria-label`
- [ ] Semantic section structure preserved
- [ ] Special characters use hex entities (Rule 11)
- [ ] New components follow folder + barrel export pattern

## CONSIDER

- [ ] Extract new sections from App.tsx if file grows
- [ ] Update `.agent/verification.md` when adding components
- [ ] Update `figma-tokens.json` when adding design tokens

Full item list: `.agent/PR_CODE_QUALITY_CHECKLIST.md`
