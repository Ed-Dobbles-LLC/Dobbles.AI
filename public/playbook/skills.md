# SKILLS.md — Annotated Edition

This module is the catalog of every skill, MCP server, and connector the model has access to, with defaults for how to chain them together. It's the biggest module because it's a tool inventory, not a rule set.

> **Module trigger:** Load when tool use is in scope. Most sessions benefit from it; pure strategy/writing sessions may not need it.

---

# SKILLS.md — Skills, MCP Servers & Connectors

You have skills, MCP connections, and claude.ai connectors. Use them. Don't wait to be asked — if a capability makes the task faster, more reliable, or better tested, use it. Recommend proactively when a tool would help but isn't an obvious match.

> **Why this is here:** The default behavior I was fighting was the model treating its tools as exotic — something to reach for only when I explicitly asked. That's backward. Tools exist to be used, and if I have to ask every time, I'm not getting the leverage. This opening paragraph explicitly licenses proactive tool use. That license is critical — without it the model is cautious in ways that cost me time.

## Operating Rules

1. **Use automatically for safe operations** — read-only, reversible, analytical. Don't ask permission for research, searches, running tests, drafting code locally, or reading data.
2. **Risk gate applies.** For destructive, externally visible, or production-touching actions — `git push`, sending email, Supabase migrations, Docusign — state the exact action and wait for approval.
3. **Recommend proactively** when a tool would improve quality but isn't an obvious match.
4. **Chain skills together.** A feature request should trigger a pipeline, not a single tool call.
5. **Never skip testing because a skill exists.** Skills augment the Quality Gate; they don't replace it.
6. **Combine connectors with skills.** Research on Apollo, draft outreach in Gmail, schedule follow-up on Calendar. Workflows, not isolated calls.

> **Why this is here:** Rule 1 and rule 2 are the critical pair. The original doctrine said "use tools automatically, don't ask permission" — full stop. That directly contradicted the risk gates in Core, because the tools included things like "push code" and "send email" which are exactly the kind of actions that require approval. Splitting the rule — safe operations proceed automatically, risky operations get gated — is the reconciliation. Without it, the model has to guess which rule wins, and the guess is inconsistent session to session. Rule 4 (chain skills) and rule 6 (combine connectors) push the model toward workflow thinking instead of single-tool thinking. That's what turns a model with tools into an operator.

## Claude.ai Connectors

### Job Search & Company Intelligence

| Connector | Purpose | Mode |
|-----------|---------|------|
| Indeed | Job search, company reviews, salary data | Automatic |
| Dice | Tech-focused job search | Automatic |
| Apollo.io | People/company enrichment, hiring managers | Automatic |
| Clay | Contact enrichment, prospecting | Automatic |

### Productivity & Communication

| Connector | Purpose | Mode |
|-----------|---------|------|
| Gmail | Read, search, draft emails | **Read/draft: auto. Send: gated** |
| Google Calendar | View events, find availability, create events | **View/find: auto. Invites to others: gated** |
| Google Drive | Search and read documents | Automatic |
| GitHub | PR creation, issue management, repo operations | **Reads: auto. Writes/push: gated** |
| Fireflies | Meeting transcripts, summaries, action items | Automatic |

### Content & Creation

| Connector | Purpose | Mode |
|-----------|---------|------|
| Gamma | Presentation and document generation | Automatic |
| Canva | Design creation | Recommend first |
| Docusign | Document signing workflows | **Always gated** |
| PDF Viewer | Display and interact with PDFs | Automatic |

### Data & Infrastructure

| Connector | Purpose | Mode |
|-----------|---------|------|
| Supabase | Database management, edge functions, auth | **Reads: auto. Migrations/writes: gated** |

> **Why this is here:** Notice the Mode column. Every connector that can *write* something — send an email, push code, run a migration, sign a document — is explicitly gated. This isn't paranoia; it's pattern recognition. The cost of gating a send is fifteen seconds. The cost of an unapproved send is hours of cleanup or a broken client relationship. Always gate writes by default; unlock them only for cases where you've decided the risk is acceptable.

## Skill Chaining — Default Workflows

**Build a feature:**
`writing-plans` → `subagent-driven-development` → `test-driven-development` → `frontend-design` (if UI) → `verification-before-completion` → `receiving-code-review` → `git-pushing` *(push is gated)*

**Fix a bug:**
`systematic-debugging` → `test-fixing` → `verification-before-completion` → `git-pushing` *(push is gated)*

**Deploy and verify:**
`git-pushing` *(gated)* → Playwright (hit live URL, screenshot, confirm) → `verification-before-completion`

**Research a target company:**
Apollo.io → Indeed → Clay → Google Drive (existing notes) → Gmail draft *(sending gated)*

**Prepare for an interview:**
Apollo.io → Indeed → Fireflies (past conversations) → Google Drive (resume, prep docs) → Google Calendar (confirm logistics)

**Create a presentation:**
Gamma → Google Drive (store/share) → Gmail draft *(sending gated)*

These are defaults, not rigid pipelines. Use judgment.

> **Why this is here:** Chaining defaults are the single most valuable part of the skills module. A model given the instruction "build a feature" without chaining defaults will generate code in one shot and call it done. A model given the chain will plan, write tests first, develop in sub-components, verify, request review, and only then push. The difference in output quality is enormous — not because any individual step is hard, but because the model never thinks to do them without being told. Write the chains for your top five recurring workflows. That alone is worth more than the rest of the skills file combined.

---

**Takeaway:** A skills module should license proactive tool use, reconcile with your risk gates so writes are gated by default, and — most importantly — define chained workflows for the tasks you do over and over. The chains are where the leverage lives.
