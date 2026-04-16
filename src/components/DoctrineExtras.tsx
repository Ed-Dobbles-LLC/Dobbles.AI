import { useState } from "react";

interface FileCard {
  badge: string;
  badgeColor: string;
  badgeTextColor: string;
  filename: string;
  description: string;
}

const FILES: FileCard[] = [
  {
    badge: "CORE",
    badgeColor: "#DB5461",
    badgeTextColor: "#F7FBFE",
    filename: "DOCTRINE_ANNOTATED.md",
    description:
      "Behavioral contract, quality gate, risk gates, precedence rules, prompt injection defense, confidence rubric.",
  },
  {
    badge: "BRAND",
    badgeColor: "#00B98E",
    badgeTextColor: "#0D0D0D",
    filename: "BRAND_ANNOTATED.md",
    description:
      "Semantic color roles, typography, chart defaults, CSS variables.",
  },
  {
    badge: "STACK",
    badgeColor: "#3273DB",
    badgeTextColor: "#F7FBFE",
    filename: "STACK_ANNOTATED.md",
    description:
      "Tech stack declarations, env var verification, deployment guardrails.",
  },
  {
    badge: "SKILLS",
    badgeColor: "#85E4FD",
    badgeTextColor: "#0D0D0D",
    filename: "SKILLS_ANNOTATED.md",
    description:
      "Tool catalog, connector permissions, skill chaining workflows.",
  },
  {
    badge: "PROJ",
    badgeColor: "#225A8E",
    badgeTextColor: "#F7FBFE",
    filename: "PROJECT_EXAMPLE.md",
    description:
      "Per-project scaffold. Architecture notes, scar-tissue rules.",
  },
];

export function DoctrineExtras() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <div
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "16px 24px 48px",
      }}
    >
      {/* Download section */}
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
          Download the full doctrine package
        </h2>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: "15.5px",
            color: "rgba(247,251,254,0.78)",
            lineHeight: 1.78,
            marginBottom: "24px",
          }}
        >
          Five annotated files. Drop them into any Claude Code project to get the
          same behavioral contract I run.
        </p>

        <div
          style={{
            display: "grid",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          {FILES.map((f) => (
            <div
              key={f.filename}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                background: "#1D1D1D",
                border: "1px solid rgba(247,251,254,0.08)",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  background: f.badgeColor,
                  color: f.badgeTextColor,
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  padding: "6px 10px",
                  borderRadius: "4px",
                  minWidth: "60px",
                  textAlign: "center",
                }}
              >
                {f.badge}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                    fontSize: "13.5px",
                    color: "#F7FBFE",
                    marginBottom: "6px",
                    fontWeight: 500,
                    wordBreak: "break-word",
                  }}
                >
                  {f.filename}
                </div>
                <div
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "14px",
                    color: "rgba(247,251,254,0.70)",
                    lineHeight: 1.6,
                  }}
                >
                  {f.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <a
          href="/doctrine/dobbles-ai-doctrine.zip"
          className="plausible-event-name=Download+Bottom"
          download
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#DB5461",
            color: "#F7FBFE",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "15px",
            padding: "14px 28px",
            borderRadius: "6px",
            textDecoration: "none",
            letterSpacing: "0.01em",
          }}
        >
          Download .zip package
        </a>
      </section>

      {/* Email signup */}
      <section
        style={{
          background: "#1D1D1D",
          border: "1px solid rgba(247,251,254,0.08)",
          borderRadius: "8px",
          padding: "32px",
        }}
      >
        <h3
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            color: "#F7FBFE",
            margin: 0,
            marginBottom: "10px",
            lineHeight: 1.3,
          }}
        >
          Get updates when the doctrine evolves.
        </h3>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: "14.5px",
            color: "rgba(247,251,254,0.72)",
            lineHeight: 1.65,
            marginBottom: "20px",
          }}
        >
          I revise this when things break. Leave your email — no spam.
        </p>

        {submitted ? (
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 500,
              fontSize: "14.5px",
              color: "#85E4FD",
              margin: 0,
            }}
          >
            Thanks — you'll hear from me when the doctrine changes.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={{
                flex: "1 1 220px",
                background: "#0D0D0D",
                border: "1px solid rgba(247,251,254,0.12)",
                borderRadius: "6px",
                padding: "12px 14px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14.5px",
                color: "#F7FBFE",
                outline: "none",
              }}
            />
            <button
              type="submit"
              className="plausible-event-name=Email+Signup"
              style={{
                background: "#DB5461",
                color: "#F7FBFE",
                border: "none",
                borderRadius: "6px",
                padding: "12px 24px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "14.5px",
                cursor: "pointer",
                letterSpacing: "0.01em",
              }}
            >
              Notify Me
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
