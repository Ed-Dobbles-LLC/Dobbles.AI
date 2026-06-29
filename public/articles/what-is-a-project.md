The job hunt is the clearest example of what an AI project actually is — a source, the things you use it for, and the limits that keep it honest. Here's the prompt that builds the source, the setup that puts it to work, and the full piece behind it.

## Every Recurring Task You Rebuild From Scratch Is a Project Waiting to Happen — A Job Hunt Is Just the Clearest One

Friends of mine at Diageo are going through job cuts right now. So I built them the thing I'd have wanted the last time the ground moved under me — not a resume template, a system. And in building it I realized it's the cleanest example I know of something most people get wrong about AI: what a project actually is, and why the good ones have a shape.

Most people only ever ask AI a question. They open a chat, paste the problem, take the answer, and start cold again next time. A project is the other thing — you teach the model a job once and it keeps it. But "saved context" undersells it, because the projects that actually work aren't just memory. They're governed. Every one worth building has the same three parts: a **source** (the one true thing everything else is built from), **uses** (the things you render from that source, again and again), and **limits** (the rules that keep the renders honest). Source, uses, limits. Get those three right and you've built something real. Get them vague and you've built a folder.

A job hunt makes all three impossible to ignore — which is exactly why it's the example.

## The source: one true thing, not three documents

Most people treat the resume, the cover letter, and the interview answer as three separate writing jobs, re-excavating the same career history from a cold start each time. They aren't three jobs. They're three renders of one underlying thing — and almost nobody builds the thing.

The thing is a Career Story Bank. The distinction that does the work: a resume tells you *what* you did; the Bank tells you what you did, the situation you walked into, the move you specifically made, the number that moved, who noticed, and what it taught you. A resume is a render — the Action-and-Result lines, tightened, with everything else stripped for space. The stripped part is exactly what the other two documents run on. Throw it away to tighten a bullet and you'll reconstruct it later, badly, under pressure.

You don't write the Bank by hand. You make the AI interview you — role by role, asking for moments ("what was broken when you walked in?") instead of achievements ("list your accomplishments," which makes everyone blank, especially after a layoff). The accomplishment falls out of the story sideways. A good interview prompt also refuses to let the number go — "I don't have metrics" is almost never true, you've just never been forced to reconstruct it — and it builds the one line you'd never build yourself: a clean, truthful, unapologetic sentence for why you left, ready before an interviewer asks. Thirty minutes, once, and the source exists.

## The uses: extract once, deploy many

With the source built, the uses are fast. Build the resume — render the Action and Result lines into tight bullets. Tailor the cover letter — pull the matching Situation-and-Lesson story for that job's pain point. And the one most people run backwards: match the job. The instinct is to read a posting and ask "how do I bend myself to fit this?" Invert it. Hand the AI the job description *and* the Bank and ask which of your actual stories map to the role's real requirements, and where's the honest gap you'd have to invent to cover. Strong overlap, chase it. Mostly gaps, skip it — or apply knowing exactly what's thin. That's triage, not spray-and-pray, and it tells the cover letter which stories to pull.

One source. Three uses. Minutes each, instead of hours re-deriving the same history from a blank page. You never re-excavate your own career again.

## The limits: the AI owns the phrasing, you own what's true

Here's the part every "use AI for your job search" post skips, and it's the part that actually matters — because it's where the whole system lives or dies. The uses are convenience. The limits are the reason you can trust the output enough to send it.

Start with the limit the whole thing rests on. Ask a model to "make this resume stronger" and it leans toward embellishment — nudging an accurate "12%" toward "~15%," softening "helped lead" into "led," and, if you let it, padding in an impressive metric you never gave it. Researchers have a name for this — faithfulness hallucination — and the honest framing is that it's a documented tendency, not a guarantee. Sometimes the same model does the opposite and hedges your real numbers into mush. Either direction, it's editing your truth, and on a job hunt the cost of that edit isn't a clumsy sentence. It's the moment an interviewer asks you to walk through the number you don't actually have.

So the limit has to be bright, and it has to be set before the first bullet is written: **every number traces back to the Bank. If it's not in the Bank, it doesn't go in the resume.** When the model is tempted to make a story bigger than it was, it flags the temptation and you decide — keep it, kill it, or go find out whether it's true. The model is fast at the phrasing and useless at the truth. The truth stays yours. The phrasing is the AI's job. That split is the whole design — not a constraint bolted onto the system, but the thing that makes the system safe to use at all.

There's a second limit, quieter but real: the library is a curated shelf, not a storage closet. Once the Bank exists, the instinct is to pile in forty more files "so the AI has everything." It makes the project dumber. It drowns your best document in noise — and on some platforms, a crowded library shifts the model from reading your files in full to retrieving only the chunks it judges relevant, which means a thin, true Bank can quietly lose to a louder, longer file. On Claude, large projects automatically switch to that retrieval mode as project knowledge grows; its own help docs describe Claude searching for the most relevant pieces instead of loading every file whole. Perplexity is retrieval-first by design — it selectively extracts from long files rather than reading them word for word. Same failure mode, same fix: the Bank earns its place, almost nothing else does, and if a file doesn't change the output, it's noise — pull it.

Both limits are the same principle wearing two hats: **AI doesn't replace your judgment — it requires it.** The judgment about what's true, and about what belongs in front of the model, stays human. The AI is faster at the phrasing and worse than useless at the truth. That isn't a limitation you tolerate. It's the line you design the whole project around.

## Every project has this shape

The resume is the most vivid example, not the only one. The same three parts run anything you rebuild from a cold start. The monthly board deck: source is the numbers plus last month's narrative; the limit is don't let it invent a trend that isn't in the data. The team's weekly reporting: source is the metric definitions; the limit is one agreed way to count, so the same question doesn't get answered two ways. The client memo: source is the engagement facts; the limit is nothing leaves the room that isn't true.

Source, uses, limits. Name all three and you've designed a real project instead of a folder you dump chats into. Skip the limits and you've built something that will eventually embarrass you — a deck that invented a trend, a report that counted two ways, a resume that rounded up. The job hunt just makes the stakes legible, because the cost of getting the limit wrong isn't an awkward slide. It's getting caught, in the one conversation you couldn't afford to lose.

If you're job-hunting — or you know someone who is — start with one role this week. Build the source. Run the uses. Hold the limit. Then point the same shape at the next thing you rebuild cold.
