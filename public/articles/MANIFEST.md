# Field Notes — Article Manifest

All articles for dobbles.ai/field-notes, in reverse chronological order. Use this to build the index page and routing.

| # | Slug | Title | Date | Type | File |
|---|------|-------|------|------|------|
| 1 | `chatgpt-goblin-obsession` | What ChatGPT's Goblin Obsession Can Tell You About AIs | May 1, 2026 | Article | `chatgpt-goblin-obsession.md` |
| 2 | `ai-forgetful-coworker` | The Reason Your AI Is a Forgetful Co-Worker (And What You Can Do About It) | April 30, 2026 | Article | `ai-forgetful-coworker.md` |
| 3 | `doctrine` | The 3 Pages of Rules I Wrote Because Claude Kept Pissing Me Off | April 2026 | Article + Download | `doctrine.md` |
| 4 | `ai-mistakes-managerial` | The AI Mistakes That Will Hurt You Aren't Technical. They're Managerial. | March 31, 2026 | Article | `ai-mistakes-managerial.md` |
| 5 | `10x-nothing` | 10X Nothing Is Still Nothing | March 2026 | Post | `10x-nothing.md` |
| 6 | `claude-and-chatgpt` | Claude and ChatGPT Hate Each Other. Good. I Use That to My Advantage. | March 2026 | Post | `claude-and-chatgpt.md` |
| 7 | `what-running-out-of-analysts-taught-me` | What Running Out of Analysts Taught Me About AI | March 17, 2026 | Article | `what-running-out-of-analysts-taught-me.md` |
| 8 | `fixing-biased-leadership-systems` | Fixing Biased Leadership Systems with Data: Male Allyship in Action | March 2, 2026 | Article (The Table) | `fixing-biased-leadership-systems.md` |
| 9 | `i-built-a-podcast` | I Had a Problem. So I Built a Podcast. | March 2026 | Post | `i-built-a-podcast.md` |

## Notes for implementation

- **Articles** get full-page rendering at `/field-notes/{slug}` with the same typographic treatment as the doctrine page
- **Posts** are shorter — still get their own pages but may render differently (no hero section, more compact)
- The doctrine article is unique — it also has the download package section and email signup
- The Table article should credit "Published in The Table" in the metadata
- All articles load from markdown files via react-markdown, same rendering pipeline as the doctrine page
- Index page shows cards for all entries, reverse chronological, with title/date/type badge
