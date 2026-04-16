# STACK.md — Annotated Edition

This module describes the tech stack and general deployment rules. It loads when the session involves building, deploying, or debugging production systems.

> **Module trigger:** Load for any coding, data engineering, or deployment work. Skip for writing, research, strategy, or communication tasks.

---

# STACK.md — Tech Stack & Environment

General platform reference. Project-specific infrastructure lives in each project's `PROJECT.md`.

> **Why this separation:** Project-specific rules ("never do X on this repo because it broke once") belong with the project. General rules ("we deploy to Railway, we use Python") belong here. Mixing them is how global doctrine gets polluted with irrelevant specifics.

## Data Platform

| Layer | Technology |
|-------|-----------|
| Cloud Data Warehouse | Snowflake |
| Transformation | dbt |
| BI / Reporting | PowerBI |

**Snowflake conventions:**
- Use `LIMIT` during development; never unbounded queries without intent
- Large tables — query efficiency matters, always consider cost

> **Why this is here:** Telling the model "consider cost" changes its default behavior on Snowflake queries. Without that nudge, it happily generates `SELECT *` against warehouse-scale tables. With it, the model reaches for `LIMIT` and column lists automatically. Cost awareness is a behavioral nudge, not an enforcement mechanism, but it works.

## Application Stack

| Layer | Technology |
|-------|-----------|
| Backend / APIs | Python (FastAPI or Flask) |
| Hosting / Deployment | Railway |
| AI / LLM | Anthropic Claude (primary), OpenAI (secondary) |
| Auth | Google OAuth |
| Automation / Queues | Inngest |
| TTS / Audio | ElevenLabs |
| Databases | Neon Postgres, Supabase |
| Frontend (hub) | React / TypeScript / Vite |

> **Why this is here:** The stack list eliminates architecture debates the model would otherwise start. If I say "build me a webhook endpoint," the model doesn't ask whether I want Flask or Express — it knows. This is one of the highest-leverage things you can put in a doctrine: declared technology choices that remove the "which framework" dialogue from every session.

## Environment Variables

Expected to exist in the Railway environment:

- `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`
- `RAILWAY_TOKEN`, `GAMMA_API_KEY`
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`
- `INNGEST_SIGNING_KEY`, `INNGEST_EVENT_KEY`
- other platform-specific keys

**Verification rule.** Expected to exist, but *verify programmatically at runtime*. If a required var is missing or empty, fail fast with:
1. The exact missing var name(s)
2. Which component needs them
3. Where to check next

Never hardcode values. Never print or log actual key values.

> **Why this is here:** This is one of the most important rules in the whole doctrine. The original version said "these are always present, never ask me to set them up." That's a production trap — vars get rotated, mismatched across services, or missing entirely from new environments. The fix is to tell the model the vars are *expected* but require it to verify and fail fast with actionable diagnostics. This single rule converts silent runtime failures into instant-debug situations. If your doctrine has any assumptions about infrastructure being in a certain state, flip them into "verify and fail fast" rules instead.

## Development Philosophy

- **Build on Railway first** — it's fast, cheap, already configured
- **Python for backend** — no Node unless there's a compelling reason
- **AI-first architecture** — assume Claude or OpenAI is available for any intelligent processing layer
- **Iterate, don't architect** — get a working version shipped, then refine
- **No over-engineering** — if a script solves it, write a script, don't build a platform

> **Why this is here:** The "iterate, don't architect" bullet stops the model from proposing elaborate multi-service architectures when I need a 200-line script. Without it, the model is biased toward ambitious designs because ambitious designs show expertise. With it, the model reaches for the smallest thing that could work. "No over-engineering" is the same idea stated differently. These two bullets reliably prevent me from burning three hours on an architecture discussion when I wanted a working prototype in twenty minutes.

## General Deployment Rules

- All apps deploy to Railway
- Environment variables only — never hardcode keys
- **Never `git add -A`** — always `git add <specific paths>` or `git add app/`
- Every deploy kills in-memory queue processors — design startup handlers to auto-resume queued work
- Deploys that touch production data or external side effects are **risky actions** — state the exact action first

Project-specific deployment constraints live in the relevant `PROJECT.md`.

> **Why this is here:** The `git add -A` ban is scar tissue. I once committed a node_modules directory and spent thirty minutes reverting. Now the doctrine prohibits it globally. That's the pattern for scar-tissue rules: when something bad happens, write the rule that prevents it, and put it somewhere the model will actually apply it. If you're building your own doctrine, start keeping a list of "things that went wrong" and translate each one into a rule. That's how a doctrine grows teeth.

---

**Takeaway:** A stack module should declare technology choices (so the model stops debating them), name infrastructure assumptions but require verification (to catch drift), bias toward simplicity (so the model doesn't over-architect), and accumulate scar-tissue rules as they're earned.
