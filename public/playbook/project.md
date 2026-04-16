# PROJECT_EXAMPLE.md

This is a generic scaffold for the per-project `PROJECT.md` file that lives alongside each repo's README. Fill in your own specifics. The point of this file is to hold the context and constraints that matter for *this* project and don't belong in global doctrine.

> **Why this file exists:** Global doctrine covers how you work. `PROJECT.md` covers what you're building. Mixing them pollutes global doctrine with noise that only matters for one repo — and that noise degrades the model's response quality on unrelated work. Every project gets its own. Use this scaffold as a starting point.

---

# PROJECT.md — [Project Name]

**Repo:** `your-repo-name`
**Stack:** [key technologies — FastAPI on Railway, Postgres, etc.]
**Status:** [In development / Production / Handoff / Deprecated]
**Primary stakeholder:** [Who this is for]

## What This Project Does

[Two or three sentences. What problem does it solve, who's the user, what's the unit of value. If you can't explain it in three sentences, you don't understand it well enough to hand it to a model.]

> **Why this matters:** The model will pattern-match on this paragraph every time you ask a question about the project. If it's vague, the model's answers will be vague. If it's specific about the user and the value, the model's suggestions will be specific about the user and the value.

## Current Focus

- [Milestone 1 — what you're actively working on]
- [Milestone 2]
- [Known gap or blocker]

> **Why this matters:** When you ask an ambiguous question — "what should I do next?" — the model resolves it against this list. Keep it short and keep it current. Stale focus lists are worse than none at all.

## Architecture Notes

[Critical architectural decisions the model needs to know about. Not a full diagram — just the things that shape how code should be written.]

Examples:
- "All API routes live in `app/routes/`; handlers in `app/handlers/`"
- "State machine lives in `app/fsm.py`; all state transitions must go through `transition()`"
- "Database migrations are managed with Alembic; never write raw `ALTER TABLE` in code"

> **Why this matters:** The model will try to infer structure from the file tree, but inference fails on non-obvious conventions. Naming them explicitly prevents the model from violating them.

## Project-Specific Risk Rules (Scar Tissue)

This is the most important section of any `PROJECT.md`. These are the rules that came from things going wrong. They override nothing; they add specificity. All of them qualify as **risky actions** under the global risk gate — state the exact command first and wait for approval.

Examples from real projects:
- "Never restart the service while background jobs are running — check the job queue first"
- "Never run a full data refresh against production — always start with a dry-run"
- "Never modify the `users` table without a backup and a rollback script"
- "Never delete old branches without checking whether they're merged into release/*"

> **Why this matters:** Every time something breaks in production, write the rule that would have prevented it and add it here. Over time, this section becomes the most valuable institutional knowledge in the repo. It's also the section that separates hobbyist projects from production ones — hobbyist projects have no scar tissue because nothing has broken yet. When yours does, write it down.

## Environment

- **Deployed:** [Railway service name, Vercel project, etc.]
- **Database:** [Neon project ID, Supabase project ID, RDS instance name]
- **Monitoring:** [Where logs live, where alerts fire]
- **Key env vars specific to this project:** [List, but don't include values]

> **Why this matters:** When you ask "why is this broken?", the model needs to know where to look. Naming the deployment target, the database, and where logs live gives it a starting point instead of forcing it to ask.

## Data Conventions

[If the project has non-obvious data conventions — canonical IDs, join keys, naming patterns, dedup rules — document them here.]

Examples:
- "Primary key for customers is `customer_id` (UUID); never use `email` as a join key"
- "Timestamps are stored in UTC; convert to local at the presentation layer"
- "Currency fields are integers in minor units (cents); never store as floats"

> **Why this matters:** Data conventions are invisible in the schema but critical at query time. The model will invent reasonable-looking conventions if you don't state yours, and then generate code that silently breaks things.

## Current State / Outstanding Work

[What's in flight right now. Update this when you start a new session so the model knows where you left off.]

> **Why this matters:** The model doesn't remember previous sessions. This section is how you give it context at the start of each one without re-explaining everything. Keep it current.

## Doctrine Sync

The version of `DOCTRINE.md` synced into this repo may lag the canonical version. If there's a discrepancy, check [wherever you keep canonical doctrine — a central repo, a specific path, an API endpoint].

---

**Takeaway:** Per-project files are where the dirty, specific, project-shaped rules live. They're what makes the model feel like it knows *your* project instead of just Python. The highest-value section in every one is "Project-Specific Risk Rules" — start writing them the first time something breaks.
