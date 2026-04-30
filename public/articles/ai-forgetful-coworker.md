# The Reason Your AI Is a Forgetful Co-Worker (And What You Can Do About It)

*April 30, 2026*

I expect Claude to be a smarter, more on top of things version of me. It's not. And that's not fair. Here's why, and what you can do to get closer to that nirvana.

Think of your AI like a brilliant new senior hire on day one. It has four kinds of memory, and only one of them is yours to control.

- **Model weights (their schooling)** — frozen the day they graduated. Useful, but it doesn't include this morning's board meeting.
- **Context window (the whiteboard in front of them)** — finite. Erase it or run out of room, it's gone.
- **Curated memory (the briefing your assistant gave them on the way in)** — useful, secondhand, and you wouldn't make a $40M call based on it without checking the source.
- **External state (the filing cabinet they pull from when accuracy matters)** — the only authoritative source. Doesn't care who's in the room.

The first three are the AI vendor's job. The fourth is yours.

## Two examples that cost me real time before I figured this out

Claude had access to my database. It still guessed at column names. The fix: give it the data dictionary — same thing I'd hand a new analyst on day one.

I spent weeks turning a messy database into a clean, curated version. Claude kept reaching for the messy source. The fix: write the rule down. "Use the curated tables, not the source tables." One line in the project brief. Problem solved.

I've written before about doctrine — the rules that govern how the AI works. Project memory is the what it's working on. You need both.

## Build the filing cabinet this week

One file per active project. Thirty minutes of work. Five sections:

- **Data dictionary** — what every important field means, and which source is authoritative.
- **Decision log** — what you've already decided and don't want to re-litigate every session. Pro tip: have the AI capture decisions at the end of every session and update the log itself. Tell it once: *"before we close, list any decisions we made today and append them to the decision log."* Now the discipline lives in the system, not in your willpower.
- **Voice and brand rules** — how it sounds when it's right.
- **Hard no's** — what never to do. *"Don't use the source tables. Don't hallucinate metrics. Don't change tone."*
- **Source map** — where truth lives, with trigger phrases: *"When I ask about brand voice, read this file. When I ask about column names, read that one."* The AI pulls the right file without being asked.

Paste the brief at the top of every important session. The AI handles the rest.

*Pro tip: re-read the brief with the AI monthly. Ask "what's contradicted, stale, or missing." It'll find conflicts you didn't know you'd created.*

It's the same playbook we used to scale analytics teams. Don't ask people (or models) to remember. Give them the system that knows.

---

*If you're running AI in production and feeling like a copy-paste monkey between tools, it's solvable. DM me if you want to compare architectures.*
