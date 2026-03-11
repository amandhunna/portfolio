# AI-First Coding Org — Talking Points

## 1. AI-first doesn't mean "AI writes everything" — it means AI is in the workflow by default

- AI-first = every developer has AI tooling as part of their daily loop, not as an opt-in experiment.
- Think of it like version control. Nobody asks "should we use git?" anymore. AI should reach that level of default.
- The goal isn't replacing engineers — it's removing the friction between thinking and shipping.

---

## 2. Immediate impact starts with project-level context, not org-level strategy

From hands-on experience building the portfolio:

- **Rules** (design system rules, coding standards) written in a doc the AI reads before every session. Immediate effect: AI stops guessing your conventions.
- **Skills** (a table mapping task types to AI behaviors). Immediate effect: AI uses the right approach for architecture vs implementation vs review.
- **Context** (one folder with who/what/where/status). Immediate effect: every AI session starts informed, not cold.

The takeaway: you don't need a 6-month transformation. You need a `docs/ai/` folder in each repo. That's week-one impact.

---

## 3. The three layers of an AI-first org

- **Layer 1 — Developer tooling** (week 1-2): Cursor/Copilot in every IDE. Standardize which tools. Remove procurement friction.
- **Layer 2 — Project-level AI context** (week 2-4): Rules, skills, context docs per repo. This is where most orgs skip and then wonder why AI output is generic.
- **Layer 3 — Workflow integration** (month 2+): AI in PR reviews, CI pipelines, incident triage, documentation. This is where compounding starts.

Most orgs jump to Layer 3 without Layer 2. That's why they get mediocre results.

---

## 4. What creates immediate impact (week 1 checklist)

- Write a CONTEXT.md for your top 3 repos. Who, what, stack, structure, conventions.
- Write coding rules in a format AI can read (markdown, not Confluence wikis behind auth).
- Pick one team as a pilot. Measure: PRs per week, time-to-first-commit on new features, rework rate.
- Standardize the prompt: "Read CONTEXT.md before making changes." That single sentence changes output quality dramatically.

---

## 5. What doesn't work

- Buying tools without writing context. AI without project rules = fast but wrong.
- Mandating AI usage without training. Engineers need to learn prompting, context setup, and when NOT to use AI.
- Measuring lines of code. Measure cycle time, rework rate, and developer satisfaction instead.
- One-size-fits-all. Backend services, frontend apps, data pipelines — each needs different AI context and skills.

---

## 6. The cultural shift

- Engineers become editors and architects, not just writers. Code review skills become more important, not less.
- Documentation becomes a first-class engineering artifact — because AI reads it. Bad docs = bad AI output. This naturally improves team knowledge sharing.
- Junior engineers accelerate faster (AI fills knowledge gaps), senior engineers leverage harder (AI handles boilerplate, they focus on design).

---

## 7. How to make it regular (sustaining momentum)

- Weekly "AI wins" in standups — 2 minutes, someone shares a workflow that saved time.
- Maintain the context docs like you maintain tests. Stale context = stale AI output.
- Rotate an "AI champion" per team who keeps tooling and context current.
- Quarterly review: what rules/context/skills exist per repo, what's missing.

---

## 8. Proof point

Built a portfolio site with a full design system — 13 rules, Figma token parity, Three.js globe, light/dark theming, mobile-first responsive layout — in a single day. Not because AI is magic, but because the AI was given a playbook (rules), a role sheet (skills), and a brief (context). That's the model for any team.

---

## 9. AI performs better with simpler, self-contained stacks

Built two versions of the same portfolio:
- **v1: Native HTML, CSS, JS** — developed quickly, very few errors, minimal iterations.
- **v2: React + TypeScript + Vite** — more iterations, more back-and-forth, more corrections needed.

**Why native was faster and cleaner for AI:**

- **Lower abstraction surface.** HTML/CSS/JS is what AI models were trained on the most. There's one way to write a `<section>`, one way to write `background-color`. With React, the AI has to juggle JSX, component boundaries, props, hooks, state, build tooling, and TypeScript types — all at once. More moving parts = more places to get it wrong.
- **No toolchain friction.** Native code runs in the browser as-is. No bundler config, no TypeScript compiler errors, no module resolution issues.
- **Single-file reasoning vs multi-file reasoning.** In native HTML, a section's markup, style, and behavior often live in one or two files. In React, a single section touches App.tsx, a component file, a token file, a CSS file, and possibly a hook — 4-5 files in context simultaneously.
- **Fewer API choices.** In vanilla JS there's `document.querySelector` and `addEventListener`. In React there's useState, useEffect, useRef, useCallback, useMemo, context, portals, refs — the AI has to pick the right one every time.

**Implication for teams:**
- AI thrives on constraints. The simpler and more opinionated the stack, the fewer mistakes.
- Rules and context matter more in complex stacks. React needed the 13 rules, the skills table, and the context doc to get AI output to the same quality that native HTML got out of the box.
- Start AI adoption on simpler projects first. Let teams build confidence on lower-abstraction work, then move to complex stacks with proper context docs in place.

---

## 10. Token economics: native is cheaper to run through AI

**Native HTML/CSS/JS uses fewer model tokens per task.** A section in vanilla HTML might be 40-60 lines in one file. The same section in React touches a component file, a token file, a CSS file, and a barrel export — easily 150-200 lines across 4-5 files that all need to be in the AI's context window.

**More files in context = more input tokens = higher cost.**
- AI models charge per token (input + output).
- Every time you ask the AI to edit a React component, it needs to read the component, the tokens it imports, the CSS it references, the types it uses, and the parent that renders it — just to make one change.
- In native HTML, it reads one file, makes the change, done. Fewer input tokens, fewer output tokens, lower bill.

**Complex frameworks also cause more rounds of iteration.**
- React + TypeScript: AI generates code, TypeScript compiler throws an error, AI reads the error, generates a fix, new error surfaces, another round. Each round is a fresh set of input + output tokens.
- Native HTML: AI generates code, it works in the browser. One round, one cost.

**Rough comparison for the same task (e.g. "add a new section"):**

| | Native HTML/CSS/JS | React + TS + Tokens |
|---|---|---|
| Files AI needs to read | 1-2 | 4-6 |
| Avg input tokens per task | ~2K-4K | ~8K-15K |
| Iterations to get it right | 1-2 | 3-5 |
| Total tokens consumed | ~5K-10K | ~25K-50K |
| Relative cost | 1x | 3-5x |

**Why this matters for an AI-first org:**
- If your teams use complex stacks (React, Next.js, Angular + TypeScript + monorepo), your AI token costs will be significantly higher. Plan for it.
- Context docs reduce tokens too. A well-written CONTEXT.md means the AI doesn't need to read 10 files to understand the project. Rules mean fewer correction rounds. Skills mean fewer wrong approaches. Each of those saves tokens.
- ROI calculation should include token cost. "AI saved us 2 hours" sounds great, but if it cost $15 in tokens for a task that would have taken $0 without AI, the math changes.

---

## 11. Do we still need frameworks in the age of AI-assisted coding?

**Short answer: yes — but the reason has shifted.**

Frameworks were originally built to solve two problems:
1. **Developer productivity** — don't repeat yourself, abstractions save time.
2. **Consistency at scale** — teams need shared patterns so 10 engineers don't write 10 different ways to fetch data.

AI is now solving problem #1 faster than frameworks ever did. The boilerplate argument is weakening by the month.

**Where frameworks still win:**
- **Runtime behavior** — React's virtual DOM for complex state-heavy UIs, Next.js for SSR/ISR/routing, state management across hundreds of components.
- **Ecosystem and integration** — Auth libraries, form validators, testing frameworks, component libraries are built for React/Vue/Angular.
- **Team coordination at scale** — 50 engineers on vanilla JS with no framework = 50 different patterns. Frameworks enforce structure.

**Where frameworks are becoming overhead:**
- Content-heavy sites, portfolios, landing pages, blogs.
- Prototypes and MVPs where the goal is to validate an idea.
- Simple CRUD apps — a form that submits to an API doesn't need React.

**The decision tree:**
- Complex client-side state? → Framework.
- SSR/SEO/routing needed? → Framework.
- Content-first with minimal interactivity? → Native HTML/CSS/JS.
- Prototype or MVP? → Native first, migrate later if it survives.
- 10+ engineers? → Framework for consistency.
- One person shipping fast with AI? → Native might be faster and cheaper.

**What this means for an AI-first org:**
- Don't default to frameworks. Ask "does this project actually need React?" before every new repo.
- Frameworks need better AI context to justify their cost. Without rules/skills/context, you're paying 3-5x more tokens for worse output.
- Hybrid is the future. Marketing site in native HTML. Dashboard in React. API in Node/Python. AI handles all three — but handles simpler ones faster and cheaper.
- Frameworks may evolve to become AI-friendly. The ones that survive will reduce files, abstractions, and decisions AI has to navigate.

**The takeaway:** Frameworks aren't dead. But their default status is under threat. AI has made the "productivity boost" argument weaker because AI itself is the productivity boost now. The orgs that win will ask "what's the simplest stack that solves this problem?" — and then give AI the right context to work within it.
