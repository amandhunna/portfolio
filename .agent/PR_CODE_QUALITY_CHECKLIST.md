# PR Code Quality Checklist — Portfolio Design System

**Source: Layer 1 — Portfolio** (checklist shape from Layer 3 — Experience)

**Navigation** (use anchors instead of loading the entire file for small edits):

- [Quick Pre-PR](#checklist-quick-pre)
- [1. TypeScript](#checklist-1)
- [2. Design System Tokens](#checklist-2)
- [3. React Patterns](#checklist-3)
- [4. Accessibility](#checklist-4)
- [5. Project Docs](#checklist-5)
- [6. Security](#checklist-6)
- [7. Final Checks](#checklist-7)

**Skills:** `.agent/skills/portfolio-pr-review.md` · **Commands:** `.agent/commands/review-pr.md`

---

<a id="checklist-quick-pre"></a>

## Quick Pre-PR

- 🔴 **MUST FIX** — blocks PR
- 🟡 **SHOULD FIX** — important
- 🟢 **CONSIDER** — optional improvement

```bash
npm run typecheck
npm run build
```

---

<a id="checklist-1"></a>

## 1. TypeScript (MUST)

- [ ] No `any` or `as any`
- [ ] Explicit prop interfaces on components
- [ ] No unused imports or variables
- [ ] No `console.log`
- [ ] Functions ≤ 100 lines; components ≤ 300 lines
- [ ] No nested ternaries; nesting ≤ 4 levels

---

<a id="checklist-2"></a>

## 2. Design System Tokens (MUST)

- [ ] Spacing from `spacingRem` / 8pt grid — no 4, 6, 10, 12, 20
- [ ] Typography via `Typography` variants + token imports
- [ ] Colors via CSS variables — no stray hex in components
- [ ] Border radius: `radiiRem.sm` or `radiiRem.md` only
- [ ] Layout via `Layout` (60/40, 3-col) where applicable
- [ ] rem units via token maps — no raw px for layout/type
- [ ] Special chars: hex entities or `\uNNNN` (see `.agent/rules/design-system.md` Rule 11)

---

<a id="checklist-3"></a>

## 3. React Patterns (SHOULD)

- [ ] Reuse existing components before adding new ones
- [ ] Component folder: `Name/Name.tsx` + `index.ts`
- [ ] Stable list keys (not index when list mutates)
- [ ] Import order: React → external → components → hooks/tokens → styles

---

<a id="checklist-4"></a>

## 4. Accessibility (SHOULD)

- [ ] Contrast ≥ 4.5:1 on text
- [ ] Touch targets ≥ 44px
- [ ] `aria-label` on icon-only buttons
- [ ] Semantic landmarks (`nav`, `section`, `main`)
- [ ] External links: `rel="noopener noreferrer"`

---

<a id="checklist-5"></a>

## 5. Project Docs (CONSIDER)

- [ ] Update `.agent/verification.md` for new components/sections
- [ ] Update `.agent/context.md` if portfolio sections change
- [ ] Sync `figma-tokens.json` when tokens change

---

<a id="checklist-6"></a>

## 6. Security (MUST)

- [ ] No secrets, tokens, or `.env` files in diff
- [ ] No `dangerouslySetInnerHTML`
- [ ] New external links have `rel="noopener noreferrer"`
- [ ] New npm dependencies justified (run `npm audit` if non-trivial)

See `.agent/rules/security.md` (Layer 4 — Security).

---

<a id="checklist-7"></a>

## 7. Final Checks (MUST)

- [ ] `npm run typecheck` passes
- [ ] `npm run build` passes
- [ ] Tested light + dark theme
- [ ] Tested mobile nav
- [ ] PR description has what + why + screenshots (if UI)
- [ ] Self-reviewed diff

**Related:** `.agent/rules/design-system.md` · `.agent/figma-standards.md` · `.agent/AI_SOURCES.md` · `.agent/rules/pre-pr-checklist.md`
