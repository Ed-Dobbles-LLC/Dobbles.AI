export type FieldNoteType = "Article" | "Post" | "Article + Download" | "Article (The Table)";

export interface FieldNote {
  slug: string;
  title: string;
  date: string;
  type: FieldNoteType;
  file: string;
  subtitle: string;
}

export const FIELD_NOTES: FieldNote[] = [
  {
    slug: "chatgpt-goblin-obsession",
    title: "What ChatGPT's Goblin Obsession Can Tell You About AIs",
    date: "May 1, 2026",
    type: "Article",
    file: "chatgpt-goblin-obsession.md",
    subtitle:
      "ChatGPT got hooked on goblins. OpenAI patched it with duct tape. That patch is the governance layer you should be building anyway.",
  },
  {
    slug: "ai-forgetful-coworker",
    title: "The Reason Your AI Is a Forgetful Co-Worker (And What You Can Do About It)",
    date: "April 30, 2026",
    type: "Article",
    file: "ai-forgetful-coworker.md",
    subtitle:
      "AI has four kinds of memory. Only one is yours to control. Here's how to build the filing cabinet.",
  },
  {
    slug: "doctrine",
    title: "The 3 Pages of Rules I Wrote Because Claude Kept Pissing Me Off",
    date: "April 2026",
    type: "Article + Download",
    file: "doctrine.md",
    subtitle:
      "The behavioral contract I drop into every Claude project. Includes the full downloadable package.",
  },
  {
    slug: "ai-mistakes-managerial",
    title: "The AI Mistakes That Will Hurt You Aren't Technical. They're Managerial.",
    date: "March 31, 2026",
    type: "Article",
    file: "ai-mistakes-managerial.md",
    subtitle:
      "Twelve mistakes, roughly $2,300 of waste, and what they taught me about managing AI.",
  },
  {
    slug: "10x-nothing",
    title: "10X Nothing Is Still Nothing",
    date: "March 2026",
    type: "Post",
    file: "10x-nothing.md",
    subtitle:
      "The triage rule I ran analytics teams by for 25 years — and why it was wrong.",
  },
  {
    slug: "claude-and-chatgpt",
    title: "Claude and ChatGPT Hate Each Other. Good. I Use That to My Advantage.",
    date: "March 2026",
    type: "Post",
    file: "claude-and-chatgpt.md",
    subtitle:
      "Two rival models, one escalation path. How I use the competition against itself.",
  },
  {
    slug: "what-running-out-of-analysts-taught-me",
    title: "What Running Out of Analysts Taught Me About AI",
    date: "March 17, 2026",
    type: "Article",
    file: "what-running-out-of-analysts-taught-me.md",
    subtitle:
      "The analytics backlog never cleared until I had no analysts left — and AI filled the gap.",
  },
  {
    slug: "fixing-biased-leadership-systems",
    title: "Fixing Biased Leadership Systems with Data: Male Allyship in Action",
    date: "March 2, 2026",
    type: "Article (The Table)",
    file: "fixing-biased-leadership-systems.md",
    subtitle:
      "If your leadership model produces biased outcomes, the model — not the people — needs fixing.",
  },
  {
    slug: "i-built-a-podcast",
    title: "I Had a Problem. So I Built a Podcast.",
    date: "March 2026",
    type: "Post",
    file: "i-built-a-podcast.md",
    subtitle:
      "I couldn't find a podcast on what I needed to know by Thursday. So I built one.",
  },
];

export function getFieldNote(slug: string): FieldNote | undefined {
  return FIELD_NOTES.find((n) => n.slug === slug);
}
