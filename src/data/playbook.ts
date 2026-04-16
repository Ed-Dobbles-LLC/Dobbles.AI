export interface PlaybookDoc {
  slug: string;
  title: string;
  subtitle: string;
  file: string;
}

export const PLAYBOOK_DOCS: PlaybookDoc[] = [
  {
    slug: "doctrine",
    title: "The Operating Doctrine — Annotated",
    subtitle:
      "The Core document. Behavioral contract, quality gate, risk gates, precedence, prompt injection defense, confidence rubric.",
    file: "doctrine.md",
  },
  {
    slug: "brand",
    title: "Brand Module — Annotated",
    subtitle:
      "Visual design system. Semantic color roles, typography, chart defaults, client-deliverable carve-out.",
    file: "brand.md",
  },
  {
    slug: "stack",
    title: "Stack Module — Annotated",
    subtitle:
      "Tech stack, env var verification, deployment guardrails, development philosophy.",
    file: "stack.md",
  },
  {
    slug: "skills",
    title: "Skills Module — Annotated",
    subtitle:
      "Tool catalog, connector permissions, skill chaining workflows.",
    file: "skills.md",
  },
  {
    slug: "project",
    title: "Project Template — Annotated",
    subtitle:
      "Per-project scaffold. Scar-tissue rules, architecture notes, data conventions.",
    file: "project.md",
  },
];

export function getPlaybookDoc(slug: string): PlaybookDoc | undefined {
  return PLAYBOOK_DOCS.find((d) => d.slug === slug);
}
