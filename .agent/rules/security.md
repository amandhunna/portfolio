# Security Standards

**Source: Layer 4 — Security**

Portfolio-scoped security rules. Adapted from Experience upstream (cris-frontend); Auth0/httpClient/API sections removed — this is a static site.

## Data classification

- This portfolio is **public** — no confidential or internal-only data in source.
- Contact info (email, LinkedIn) is intentionally public.

## Secrets and credentials

- **No secrets in source code** — API keys, tokens, passwords must not be committed.
- Never commit `.env` files — verify `.gitignore` covers them.
- No private URLs or internal endpoints in code or docs.

## XSS prevention

- Never use `dangerouslySetInnerHTML`.
- Never use `eval()`, `new Function()`, or dynamic `import()` with user-controlled strings.
- React JSX escapes by default — keep it that way.

## External links

- All external `href` targets use `rel="noopener noreferrer"` (see `.agent/rules/accessibility.md`).
- Only link to known public profiles (LinkedIn, GitHub, Medium, product pages).

## User input

- No forms or user-generated content — contact uses `mailto:` only.
- If a form is added later: validate at boundary, never trust client-only validation.

## Supply chain (CISSP-oriented, lightweight)

- Prefer well-maintained npm packages; review new dependencies before adding.
- Run `npm audit` periodically; fix high/critical issues before deploy.
- Lock file (`package-lock.json`) committed for reproducible builds.

## PR security checks

- [ ] No secrets, tokens, or `.env` files in diff
- [ ] No `dangerouslySetInnerHTML`
- [ ] New external links have `rel="noopener noreferrer"`
- [ ] New dependencies justified and audited if non-trivial

**Not applicable here:** Auth tokens, httpClient interceptors, API key injection, user session storage.
