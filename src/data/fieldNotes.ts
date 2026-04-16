export type FieldNoteType = "Article" | "Post" | "Article + Download" | "Article (The Table)";

export interface FieldNote {
  slug: string;
  title: string;
  date: string;
  type: FieldNoteType;
  file: string;
}

export const FIELD_NOTES: FieldNote[] = [
  {
    slug: "doctrine",
    title: "The 3 Pages of Rules I Wrote Because Claude Kept Pissing Me Off",
    date: "April 2026",
    type: "Article + Download",
    file: "doctrine.md",
  },
  {
    slug: "ai-mistakes-managerial",
    title: "The AI Mistakes That Will Hurt You Aren't Technical. They're Managerial.",
    date: "March 31, 2026",
    type: "Article",
    file: "ai-mistakes-managerial.md",
  },
  {
    slug: "10x-nothing",
    title: "10X Nothing Is Still Nothing",
    date: "March 2026",
    type: "Post",
    file: "10x-nothing.md",
  },
  {
    slug: "claude-and-chatgpt",
    title: "Claude and ChatGPT Hate Each Other. Good. I Use That to My Advantage.",
    date: "March 2026",
    type: "Post",
    file: "claude-and-chatgpt.md",
  },
  {
    slug: "what-running-out-of-analysts-taught-me",
    title: "What Running Out of Analysts Taught Me About AI",
    date: "March 17, 2026",
    type: "Article",
    file: "what-running-out-of-analysts-taught-me.md",
  },
  {
    slug: "fixing-biased-leadership-systems",
    title: "Fixing Biased Leadership Systems with Data: Male Allyship in Action",
    date: "March 2, 2026",
    type: "Article (The Table)",
    file: "fixing-biased-leadership-systems.md",
  },
  {
    slug: "i-built-a-podcast",
    title: "I Had a Problem. So I Built a Podcast.",
    date: "March 2026",
    type: "Post",
    file: "i-built-a-podcast.md",
  },
];

export function getFieldNote(slug: string): FieldNote | undefined {
  return FIELD_NOTES.find((n) => n.slug === slug);
}
