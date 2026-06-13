# Commit and push

**Source: Layer 1 — Portfolio**

Run from the repository root. Stop with a clear message if there is nothing staged.

## 1. Preconditions

- Ensure there are staged changes: `git diff --cached --quiet` must be non-zero. If nothing is staged, tell the user and do not commit or push.

## 2. Branch name

- `BRANCH=$(git branch --show-current)`

## 3. Commit message

Build a concise summary after the branch name describing what is staged.

Format: `"${BRANCH} ${summary}"`

Prefer HEREDOC for multi-line messages when the change needs a why.

## 4. Commands

```bash
git commit -m "<summary>"
git push origin "<BRANCH>"
```

> **Do NOT add `--no-verify`**. If a hook blocks the commit, fix the underlying issue — do not bypass it.

## 5. After push

Report success or paste relevant git error output if commit or push fails.
