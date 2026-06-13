# PR review workflow

**Source: Layer 1 — Portfolio**

Run from the repository root before opening or merging a PR.

## How to trigger

- **Claude Code**: say "review my PR" or "review the changes on this branch"
- **Cursor**: type `@portfolio-pr-review` in chat, then ask for a review

## Ready-to-use prompt

```
Review my PR changes against portfolio design system standards.

Steps:
1. Run `git diff main...HEAD --stat` then `git diff main...HEAD` for the full diff.
2. Run `npm run typecheck` and `npm run build`. Report any errors.
3. Read `.agent/PR_CODE_QUALITY_CHECKLIST.md` and walk sections relevant to the diff:
   - Always: §1 TypeScript, §2 Design System Tokens, §6 Final Checks
   - If components/sections: §3 React Patterns
   - If user-facing UI: §4 Accessibility
   - If secrets, links, or deps: §6 Security
4. Report findings grouped as:
   - MUST FIX (type errors, hardcoded px/colors, console.log, a11y blockers)
   - SHOULD FIX (missing aria-label, token bypass, missing semantic HTML)
   - CONSIDER (extract section, test coverage, memoization)
5. End with a PR description template pre-filled with what and why.
```

## 1. Understand what changed

```bash
git diff main...HEAD --stat
git diff main...HEAD
```

If reviewing staged changes only:

```bash
git diff --staged
```

## 2. Run automated checks

```bash
npm run typecheck
npm run build
```

## 3. Walk the checklist

Open `.agent/PR_CODE_QUALITY_CHECKLIST.md` and check sections relevant to the diff.

## 4. Report findings

- **MUST FIX** — blocks PR approval
- **SHOULD FIX** — important but not blocking
- **CONSIDER** — follow-up improvements

## 5. PR description checklist

- [ ] One-sentence **what** and **why**
- [ ] Screenshots for any UI change
- [ ] Self-reviewed your own diff before requesting review
