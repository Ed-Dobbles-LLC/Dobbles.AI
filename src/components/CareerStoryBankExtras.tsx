import { useState } from "react";

const PROMPT_TEXT = `You're going to interview me to build my Career Story Bank — a structured record of my real accomplishments that I'll use to write my resume, cover letters, and prep for interviews. I was recently part of a layoff, so I'm building this from scratch and my head is full of years of work I haven't had to summarize before.

THE ONE RULE THAT MATTERS MOST: Ask exactly one question per message. If you ever put more than one question in a single message, you've broken the rule. This is a conversation, not a form. Wait for my answer before the next question.

Here's how to run it:

WORK ROLE BY ROLE. Start by asking me to list my roles (company, title, rough dates). Then go through them one at a time, most recent first. Don't move to the next role until we've pulled the stories out of the current one.

DIG FOR STORIES, NOT "ACCOMPLISHMENTS." Don't ask me to list achievements — I'll blank. Ask me about moments. Good openers: "What was broken or stuck when you walked into this role?" "What's something you fixed that nobody asked you to?" "What were you known for on that team?" "What's a project you'd still bring up in an interview?" Pull the accomplishment out of the story I tell you.

FOR EACH STORY, GET ME TO FIVE THINGS — conversationally, not as a checklist:
1. The situation as I found it — what was broken, stuck, or underperforming
2. What I specifically did — my move, not my team's
3. The number — what moved (revenue, cost, time, headcount, error rate, adoption, NPS — anything measurable)
4. Who noticed — the stakeholder, the recognition, the promotion trigger
5. What it cost or taught me — the friction, the lesson, what I'd do differently

RESCUE ME ON NUMBERS. This is the one I'll struggle with. If I say "I don't have a number," do NOT move on. Help me reconstruct a defensible one: "Was it a budget you managed? A team size? A percent change? A before-and-after? Even a rough range you'd defend in an interview is worth more than nothing." Only move on once we've found something or genuinely confirmed there's no metric.

KEEP ME MOVING WHEN I STALL. If I give a thin or vague answer, ask one sharpening follow-up — then accept what I've got and move on. Don't interrogate me into exhaustion. Momentum matters more than completeness.

ONE SPECIAL PASS — THE LAYOFF. Near the end, help me build one clean, truthful, unapologetic line for how I explain why I left my last role. Brief. No over-explaining, no bitterness. A line I can say out loud without flinching when an interviewer asks.

WHAT TO HAND ME AT THE END:
A clean Career Story Bank, organized by role, with each accomplishment as a block:
• TITLE — a short name for the story
• SITUATION — what I walked into
• ACTION — what I did
• RESULT — the number / outcome
• RECOGNITION — who noticed
• LESSON — what it taught me
Plus my one-line layoff explanation at the top.

Format it so I can paste the whole thing into a project as my source-of-truth document. Tell me explicitly that this Bank is the foundation — my resume gets carved from the ACTION and RESULT lines, my cover letters pull from SITUATION and LESSON, and my interview answers are the full blocks.

Before you start: ask me how many roles I want to cover today, so we can pace it. We don't have to do everything in one sitting — tell me I can stop anytime and you'll hand me what we've built so far.

Start by asking me to list my roles.`;

const STEPS = [
  {
    num: "1",
    title: "Build the project",
    body: 'Open a Project (Claude / ChatGPT) or a Space (Perplexity). Name it for the job — "Job Search 2026," not "Stuff."',
  },
  {
    num: "2",
    title: "Run the interview, then drop the Bank in the files",
    body: "Paste the prompt below into a chat, answer its questions, and take the Career Story Bank it hands you. Add that one document to the project's files. It's now the source of truth every chat carves from.",
  },
  {
    num: "3",
    title: "Render the three uses",
    body: 'Resume — "Using my Bank, draft resume bullets from the Action and Result lines." Match a job — paste a posting and ask which of your stories map to its real requirements, and where the honest gap is. Cover letter — "Pull the Situation and Lesson that fits this job\'s pain point." Minutes each.',
  },
];

export function CareerStoryBankExtras() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(PROMPT_TEXT).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  }

  return (
    <div
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "0 24px 48px",
      }}
    >
      {/* How it works */}
      <section style={{ marginBottom: "48px" }}>
        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "22px",
            color: "#F7FBFE",
            marginTop: 0,
            marginBottom: "20px",
            lineHeight: 1.3,
          }}
        >
          <span
            style={{
              display: "block",
              width: "32px",
              height: "3px",
              background: "#DB5461",
              marginBottom: "12px",
            }}
          />
          Put it to work — the project setup
        </h2>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: "15.5px",
            color: "rgba(247,251,254,0.78)",
            lineHeight: 1.78,
            marginBottom: "28px",
            marginTop: 0,
          }}
        >
          The Bank is the source. A project is where you keep it and render from
          it. Same move on every platform — a Project on Claude and ChatGPT, a
          Space on Perplexity.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "28px" }}>
          {STEPS.map((step) => (
            <div key={step.num} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
              <div
                style={{
                  flexShrink: 0,
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: "24px",
                  color: "#DB5461",
                  minWidth: "36px",
                  lineHeight: 1.2,
                }}
              >
                {step.num}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    fontSize: "17px",
                    color: "#F7FBFE",
                    marginBottom: "6px",
                  }}
                >
                  {step.title}
                </div>
                <div
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    color: "rgba(247,251,254,0.72)",
                    lineHeight: 1.7,
                  }}
                >
                  {step.body}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Limit callout */}
        <div
          style={{
            background: "rgba(219,84,97,0.08)",
            border: "1px solid rgba(219,84,97,0.3)",
            borderRadius: "10px",
            padding: "24px 28px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "17px",
              color: "#F7FBFE",
              marginBottom: "10px",
            }}
          >
            The limit that holds it together
          </div>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              color: "rgba(247,251,254,0.78)",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            The AI owns the phrasing. You own what's true. Every number traces
            back to the Bank — if it's not in the Bank, it doesn't go in the
            resume. When the model is tempted to round 12% up to "~15%" or
            upgrade "helped lead" to "led," it flags it and you decide. AI
            doesn't replace your judgment about what's true. It requires it.
          </p>
        </div>

        {/* Curated shelf note */}
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: "rgba(247,251,254,0.50)",
            lineHeight: 1.75,
            margin: 0,
          }}
        >
          One more limit: keep the project's file library a curated shelf, not a
          storage closet. The Bank earns its place. Almost nothing else does —
          every extra file dilutes the model's attention and can push it from
          reading your Bank in full to retrieving only fragments. If a file
          doesn't change the output, it's noise. Pull it.
        </p>
      </section>

      {/* Prompt section */}
      <section>
        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "22px",
            color: "#F7FBFE",
            marginTop: 0,
            marginBottom: "16px",
            lineHeight: 1.3,
          }}
        >
          <span
            style={{
              display: "block",
              width: "32px",
              height: "3px",
              background: "#DB5461",
              marginBottom: "12px",
            }}
          />
          Build the source — the interview prompt
        </h2>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: "15.5px",
            color: "rgba(247,251,254,0.78)",
            lineHeight: 1.78,
            marginBottom: "20px",
            marginTop: 0,
          }}
        >
          You don't write your Career Story Bank by hand. You paste this into a
          fresh AI chat and let it interview you — role by role, one question at
          a time. Thirty minutes, once. Copy it whole.
        </p>

        <div
          style={{
            background: "#12132B",
            border: "1px solid #2A2C52",
            borderLeft: "5px solid #DB5461",
            borderRadius: "12px",
            padding: "28px 30px",
            position: "relative",
          }}
        >
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#85E4FD",
              marginBottom: "16px",
            }}
          >
            Paste into a fresh chat
          </div>

          <button
            onClick={handleCopy}
            style={{
              position: "absolute",
              top: "22px",
              right: "22px",
              background: copied ? "#00B98E" : "#DB5461",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "13px",
              padding: "9px 16px",
              cursor: "pointer",
              letterSpacing: "0.02em",
              transition: "background 150ms ease",
            }}
          >
            {copied ? "Copied ✓" : "Copy"}
          </button>

          <pre
            style={{
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "14px",
              lineHeight: 1.65,
              color: "#D9DCF2",
              margin: 0,
            }}
          >
            {PROMPT_TEXT}
          </pre>
        </div>
      </section>
    </div>
  );
}
