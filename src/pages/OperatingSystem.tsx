import { useEffect, useRef } from "react";
import { SiteNav } from "@/components/site/SiteNav";

const C = {
  bg: "#0D0D0D",
  card: "#1D1D1D",
  text: "#F7FBFE",
  muted: "rgba(247,251,254,0.65)",
  dim: "rgba(247,251,254,0.55)",
  red: "#DB5461",
  teal: "#00B98E",
  sky: "#85E4FD",
  steel: "#225A8E",
  border: "rgba(247,251,254,0.08)",
  divider: "rgba(247,251,254,0.08)",
} as const;

const font = "'Montserrat', 'Segoe UI', sans-serif";

const LAYERS = [
  {
    n: 1,
    name: "DATA FOUNDATION & PLUMBING",
    pct: "40-60%",
    desc: "The invisible tax on every analytics org. AI handles profiling, data dictionaries, quality monitoring, and lineage mapping so analysts focus on what the data means, not where it lives.",
  },
  {
    n: 2,
    name: "DEMAND MANAGEMENT",
    pct: "10-15%",
    desc: "The work-about-work that fragments focus. AI automates intake triage, prioritization, capacity planning, and status updates so humans focus on the analysis, not the admin.",
  },
  {
    n: 3,
    name: "ANALYSIS & DEVELOPMENT",
    pct: "15-20%",
    desc: "AI as a thought partner — automated exploratory analysis, hypothesis generation, code review, and pattern detection that makes good analysts faster without replacing their judgment.",
  },
  {
    n: 4,
    name: "INSIGHT SYNTHESIS & STORYTELLING",
    pct: "5-10%",
    desc: "The last mile where insights become decisions. Narrative generation, executive summaries, and multi-audience versioning — where 'Geek that can Speak' becomes an operating principle.",
  },
  {
    n: 5,
    name: "KNOWLEDGE MANAGEMENT",
    pct: "5-10%",
    desc: "Institutional memory that doesn't walk out the door. Semantic search across past analyses, methodology docs, and decision logs so nobody solves the same problem twice.",
  },
  {
    n: 6,
    name: "OPERATIONS & IMPROVEMENT",
    pct: "5-10%",
    desc: "The continuous improvement loop most teams never get to. SLA monitoring, skills gap analysis, and stakeholder feedback synthesis — making the analytics function itself better over time.",
  },
  {
    n: 7,
    name: "AI GOVERNANCE & QA",
    pct: "new layer",
    desc: "Enterprise AI without enterprise risk. Code audit, hallucination detection, cost tracking, and full interaction logging — the layer that separates responsible AI from 'hope for the best.'",
  },
  {
    n: 8,
    name: "ONBOARDING & ENABLEMENT",
    pct: "new layer",
    desc: "Compressing months of ramp-up into weeks. Guided data tours, role-based learning paths, and tribal knowledge capture — because nobody should figure out the data landscape alone.",
  },
];

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeIn({ children }: { children: React.ReactNode }) {
  const ref = useFadeIn();
  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {children}
    </div>
  );
}

export default function OperatingSystem() {
  return (
    <div style={{ backgroundColor: C.bg, minHeight: "100vh", fontFamily: font, color: C.text }}>
      <SiteNav />

      {/* Hero */}
      <section>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 24px 64px" }}>
          <FadeIn>
            <p
              style={{
                fontFamily: font,
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: C.red,
                marginBottom: 20,
              }}
            >
              AI Analytics Operating System
            </p>
            <h1
              style={{
                fontFamily: font,
                fontWeight: 800,
                fontSize: "clamp(36px, 6vw, 60px)",
                letterSpacing: "-0.01em",
                lineHeight: 1.08,
                color: C.text,
                margin: 0,
                marginBottom: 24,
                maxWidth: 900,
              }}
            >
              Eight layers. One operating model.
            </h1>
            <p
              style={{
                fontFamily: font,
                fontWeight: 400,
                fontSize: "clamp(16px, 1.8vw, 19px)",
                lineHeight: 1.65,
                color: C.muted,
                maxWidth: 760,
                margin: 0,
              }}
            >
              After building analytics functions at four Fortune 500 companies, I kept
              solving the same problems. So I mapped the entire analytics lifecycle
              into an eight-layer operating model — identifying exactly where AI
              amplifies human judgment and where it doesn't. This isn't a product.
              It's how I think about building analytics organizations.
            </p>
          </FadeIn>
        </div>
      </section>

      <hr style={{ height: 1, backgroundColor: C.divider, border: "none", margin: 0 }} />

      {/* Thesis block */}
      <section>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "72px 24px" }}>
          <FadeIn>
            <blockquote
              style={{
                fontFamily: font,
                fontWeight: 700,
                fontSize: "clamp(20px, 2.8vw, 28px)",
                lineHeight: 1.4,
                color: C.text,
                borderLeft: `3px solid ${C.red}`,
                paddingLeft: 24,
                margin: "0 0 28px 0",
                maxWidth: 820,
              }}
            >
              Analytics teams burn ~60% of capacity on data plumbing, project
              management, and documentation instead of strategic analysis and
              storytelling.
            </blockquote>
          </FadeIn>
          <FadeIn>
            <p
              style={{
                fontFamily: font,
                fontWeight: 700,
                fontSize: 18,
                color: C.sky,
                margin: 0,
              }}
            >
              I'm building the operating system that flips that ratio.
            </p>
          </FadeIn>
        </div>
      </section>

      <hr style={{ height: 1, backgroundColor: C.divider, border: "none", margin: 0 }} />

      {/* 8-layer cards */}
      <section>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "72px 24px 96px" }}>
          <FadeIn>
            <p
              style={{
                fontFamily: font,
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: C.red,
                marginBottom: 16,
              }}
            >
              The Eight Layers
            </p>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 460px), 1fr))",
              gap: 16,
              marginTop: 32,
            }}
          >
            {LAYERS.map((layer) => (
              <FadeIn key={layer.n}>
                <div
                  style={{
                    backgroundColor: C.card,
                    border: `1px solid ${C.border}`,
                    borderRadius: 8,
                    padding: 28,
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 12,
                      marginBottom: 8,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: font,
                        fontWeight: 700,
                        fontSize: 32,
                        color: C.steel,
                        lineHeight: 1,
                        opacity: 0.5,
                      }}
                    >
                      {String(layer.n).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        fontFamily: font,
                        fontWeight: 700,
                        fontSize: 13,
                        letterSpacing: "0.06em",
                        color: C.text,
                      }}
                    >
                      {layer.name}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: font,
                      fontWeight: 700,
                      fontSize: 11,
                      color: layer.pct.startsWith("new") ? C.teal : C.red,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: 14,
                    }}
                  >
                    {layer.pct.startsWith("new") ? layer.pct : `${layer.pct} of team time`}
                  </p>
                  <p
                    style={{
                      fontFamily: font,
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: C.dim,
                    }}
                  >
                    {layer.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p
              style={{
                fontFamily: font,
                fontWeight: 400,
                fontSize: 15,
                lineHeight: 1.8,
                color: C.dim,
                marginTop: 56,
                fontStyle: "italic",
                maxWidth: 820,
              }}
            >
              The framework travels with me — adaptable to your data, your stack,
              your governance requirements.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
