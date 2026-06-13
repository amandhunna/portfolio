# Codebase health audit

**Source: Layer 1 — Portfolio**

Run these tasks in order for the portfolio repo. Audit first — open a separate session per fix area.

## Task 1 — Automated baseline

```bash
npm run typecheck 2>&1 | tail -60
npm run build 2>&1 | tail -60
```

Report: error count per command.

## Task 2 — Design token violations

```bash
grep -rn "padding:\|margin:\|gap:\|fontSize:\|borderRadius:" src/ --include="*.tsx" | grep -E "[0-9]+px" | head -40
grep -rn "#[0-9a-fA-F]\{3,8\}" src/ --include="*.tsx" | grep -v "tokens/" | head -30
```

For each match: should it use `spacingRem`, `fontSizeRem`, `radiiRem`, or CSS variables?

## Task 3 — God components (line count)

```bash
find src -name "*.tsx" | xargs wc -l | sort -rn | head -15
```

For each file >300 lines: identify split points (sections → `src/sections/`).

## Task 4 — Type safety audit

```bash
grep -rn ": any\|as any\|<any>" src/ --include="*.ts" --include="*.tsx" | grep -v "// "
```

## Task 5 — Accessibility gaps

```bash
grep -rn "onClick" src/ --include="*.tsx" | grep -v "button\|Button\|a href" | head -20
grep -rn "<button" src/ --include="*.tsx" | grep -v "aria-label\|aria-labelledby" | head -20
```

## Task 6 — Special character rule

```bash
grep -rnP "[\u2014\u00B7\u00A9\u2022\u2026]" src/ --include="*.tsx" | head -20
```

Raw em dashes and symbols should use hex entities per `.agent/rules/design-system.md` Rule 11.

## After all tasks

Summarize as a table with issue count, severity, and suggested fix order.
