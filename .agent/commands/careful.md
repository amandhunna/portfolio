# Careful — destructive command guard

**Source: Layer 1 — Portfolio**

Before executing any of the following, stop and warn the user. State exactly what will be destroyed and ask for explicit confirmation before proceeding.

## Commands that require confirmation

- `git push --force` / `git push -f`
- `git reset --hard`
- `git clean -f` / `git clean -fd`
- `rm -rf` any directory
- Overwriting uncommitted changes (`git checkout .`, `git restore .`)
- Deleting branches (`git branch -D`)
- Any `npm uninstall` removing more than one package

## Format for warning

```
⚠️ This will [describe what is destroyed].
Files/data affected: [list]
This cannot be undone. Confirm? (yes/no)
```

Wait for explicit "yes" before proceeding. "ok" or "sure" is not sufficient — ask again.
