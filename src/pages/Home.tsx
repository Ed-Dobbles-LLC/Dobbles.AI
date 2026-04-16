import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { SiteNav } from "@/components/site/SiteNav";

/* ── Brand tokens ── */
const C = {
  bg: "#1D1D1D",
  card: "#252525",
  text: "#F7FBFE",
  muted: "rgba(247,251,254,0.55)",
  red: "#DB5461",
  teal: "#00B98E",
  sky: "#85E4FD",
  navy: "#060A57",
  steel: "#225A8E",
  bright: "#3273DB",
  divider: "rgba(255,255,255,0.06)",
  border: "rgba(255,255,255,0.10)",
} as const;

const font = "'Montserrat', 'Segoe UI', sans-serif";

/* ── KPI data ── */
const PROOF = [
  { value: "$300M+", label: "Enterprise value created" },
  { value: "25+", label: "Years in analytics leadership" },
  { value: "60 FTE", label: "Largest team led · $17M budget" },
  { value: "4", label: "Enterprise transformations delivered" },
];

/* ── Intersection Observer hook for fade-in ── */
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
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

/* ── Shared styles ── */
const sectionPad = { padding: "120px 24px", maxWidth: 1080, margin: "0 auto" } as const;
const sectionHeader: React.CSSProperties = {
  fontFamily: font,
  fontWeight: 700,
  fontSize: 12,
  letterSpacing: "0.14em",
  color: C.red,
  textTransform: "uppercase",
  marginBottom: 20,
};
const h2Style: React.CSSProperties = {
  fontFamily: font,
  fontWeight: 700,
  fontSize: "clamp(26px, 3.5vw, 38px)",
  letterSpacing: "0.04em",
  color: C.text,
  lineHeight: 1.3,
  marginBottom: 24,
};
const divider: React.CSSProperties = {
  height: 1,
  backgroundColor: C.divider,
  border: "none",
  margin: 0,
};

/* ── Logo strip data ── */
const LOGOS = [
  { src: "/logo-diageo.png", alt: "Diageo" },
  { src: "/logo-bestbuy.png", alt: "Best Buy" },
  { src: "/logo-hrblock.png", alt: "H&R Block" },
  { src: "/logo-supervalu.png", alt: "SuperValu" },
  { src: "/logo-michigan-state.png", alt: "Michigan State University" },
  { src: "/logo-wisconsin.png", alt: "University of Wisconsin-Madison" },
  { src: "/logo-rutgers.png", alt: "Rutgers University" },
];

/* ── LinkedIn SVG ── */
function LinkedInIcon({ size = 20, color = C.muted }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ══════════════════════════════════════════════════ */
/*  HOME PAGE                                        */
/* ══════════════════════════════════════════════════ */

export default function Home() {
  return (
    <div style={{ backgroundColor: C.bg, minHeight: "100vh", fontFamily: font, color: C.text, overflowX: "hidden" }}>
      <SiteNav />

      {/* ═══ SECTION 1: HERO ═══ */}
      <section>
        <div style={{ ...sectionPad, paddingTop: 80, paddingBottom: 128 }}>
          {/* Identity — left-aligned with headshot */}
          <FadeIn>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "clamp(32px, 5vw, 56px)", flexWrap: "wrap" }}>
              {/* Text block */}
              <div style={{ flex: "1 1 400px", minWidth: 0 }}>
                <h1 style={{ fontFamily: font, fontWeight: 700, fontSize: "clamp(44px, 7vw, 76px)", letterSpacing: "0.03em", lineHeight: 1.08, marginBottom: 20, color: C.text }}>
                  Ed Dobbles
                </h1>
                <p style={{ fontFamily: font, fontWeight: 700, fontSize: "clamp(13px, 1.8vw, 16px)", letterSpacing: "0.10em", textTransform: "uppercase", color: C.red, marginBottom: 12 }}>
                  Chief Analytics Officer&ensp;|&ensp;Chief Data Officer&ensp;|&ensp;VP of Analytics
                </p>
                <p style={{ fontFamily: font, fontWeight: 400, fontSize: 13, color: C.sky, marginBottom: 24, letterSpacing: "0.02em" }}>
                  DBA, Rutgers University
                </p>
                <p style={{ fontFamily: font, fontWeight: 700, fontSize: "clamp(17px, 2.2vw, 21px)", lineHeight: 1.65, color: C.text, maxWidth: 620, marginBottom: 10 }}>
                  25 years turning analytics teams into competitive weapons for Fortune 500 companies.
                </p>
                <p style={{ fontFamily: font, fontWeight: 700, fontSize: "clamp(13px, 1.6vw, 15px)", letterSpacing: "0.04em", color: C.red }}>
                  The Geek that can Speak
                </p>
              </div>
              {/* Headshot */}
              <div style={{ flex: "0 0 auto", alignSelf: "center" }}>
                <img
                  src="/headshot.jpg"
                  alt="Ed Dobbles"
                  style={{
                    width: "clamp(140px, 18vw, 200px)",
                    height: "clamp(140px, 18vw, 200px)",
                    borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "center 20%",
                    border: `3px solid ${C.border}`,
                    flexShrink: 0,
                  }}
                />
              </div>
            </div>
          </FadeIn>

          {/* KPI strip */}
          <FadeIn>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: 32,
              marginTop: 64,
              paddingTop: 48,
              borderTop: `1px solid ${C.divider}`,
            }}>
              {PROOF.map((p) => (
                <div key={p.value}>
                  <div style={{ fontFamily: font, fontWeight: 700, fontSize: "clamp(28px, 4vw, 38px)", color: C.text, lineHeight: 1, marginBottom: 8 }}>
                    {p.value}
                  </div>
                  <div style={{ fontFamily: font, fontWeight: 400, fontSize: 12, color: C.muted, letterSpacing: "0.03em" }}>
                    {p.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <div style={divider} />

      {/* ═══ LOGO STRIP ═══ */}
      <section>
        <div style={{ ...sectionPad, paddingTop: 56, paddingBottom: 56 }}>
          <FadeIn>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(20px, 3vw, 36px)",
              rowGap: 20,
            }}>
              {LOGOS.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    height: "clamp(26px, 3.5vw, 38px)",
                    width: "auto",
                    maxWidth: 140,
                    objectFit: "contain",
                    opacity: 0.4,
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "0.7"; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "0.4"; }}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <div style={divider} />

      {/* ═══ SECTION 2: THE THESIS ═══ */}
      <section>
        <div style={sectionPad}>
          <FadeIn>
            <p style={sectionHeader}>THE PROBLEM EVERY ANALYTICS ORG FACES</p>
          </FadeIn>
          <FadeIn>
            <blockquote style={{
              fontFamily: font, fontWeight: 700,
              fontSize: "clamp(22px, 3.2vw, 32px)",
              lineHeight: 1.4, color: C.text,
              borderLeft: `3px solid ${C.red}`,
              paddingLeft: 24, margin: "0 0 36px 0",
              maxWidth: 820,
            }}>
              Analytics teams burn ~60% of capacity on data plumbing, project management, and documentation instead of strategic analysis and storytelling.
            </blockquote>
          </FadeIn>
          <FadeIn>
            <p style={{ fontFamily: font, fontWeight: 700, fontSize: 19, color: C.sky, marginBottom: 28 }}>
              I'm building the operating system that flips that ratio.
            </p>
          </FadeIn>
          <FadeIn>
            <p style={{ fontFamily: font, fontWeight: 400, fontSize: 16, lineHeight: 1.85, color: C.muted, maxWidth: 820 }}>
              After 25 years leading analytics organizations at Diageo, H&R Block, SuperValu, and Best Buy — managing teams of 60+, budgets of $17M+, and delivering $300M+ in enterprise value — I've systematized what works into a portable, AI-powered framework spanning eight layers of the analytics lifecycle. Enterprise-grade governance included. Adaptable to any modern analytics environment, any IT stack, any industry.
            </p>
          </FadeIn>
        </div>
      </section>

      <div style={divider} />

      {/* ═══ SECTION 3: TWO PATHS ═══ */}
      <section>
        <div style={sectionPad}>
          <FadeIn>
            <p style={sectionHeader}>THREE WAYS IN</p>
            <h2 style={h2Style}>The model, the playbook, and the field notes.</h2>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
              gap: 20,
              marginTop: 40,
            }}
          >
            <FadeIn>
              <Link
                to="/operating-system"
                className="home-path-card"
                style={{
                  display: "block",
                  backgroundColor: C.card,
                  border: `1px solid ${C.border}`,
                  borderRadius: 8,
                  padding: 36,
                  height: "100%",
                  textDecoration: "none",
                  transition: "border-color 150ms ease, transform 150ms ease",
                }}
              >
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
                  Operating System
                </p>
                <h3
                  style={{
                    fontFamily: font,
                    fontWeight: 700,
                    fontSize: 24,
                    color: C.text,
                    margin: 0,
                    marginBottom: 14,
                    lineHeight: 1.25,
                  }}
                >
                  Eight layers. One operating model.
                </h3>
                <p
                  style={{
                    fontFamily: font,
                    fontWeight: 400,
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: C.muted,
                    margin: 0,
                    marginBottom: 20,
                  }}
                >
                  The framework for an AI-native analytics org — from data plumbing
                  through governance. How I think about building analytics
                  organizations.
                </p>
                <span
                  style={{
                    fontFamily: font,
                    fontWeight: 600,
                    fontSize: 13,
                    color: C.sky,
                    letterSpacing: "0.02em",
                  }}
                >
                  Explore the model →
                </span>
              </Link>
            </FadeIn>

            <FadeIn>
              <Link
                to="/playbook"
                className="home-path-card"
                style={{
                  display: "block",
                  backgroundColor: C.card,
                  border: `1px solid ${C.border}`,
                  borderRadius: 8,
                  padding: 36,
                  height: "100%",
                  textDecoration: "none",
                  transition: "border-color 150ms ease, transform 150ms ease",
                }}
              >
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
                  Playbook
                </p>
                <h3
                  style={{
                    fontFamily: font,
                    fontWeight: 700,
                    fontSize: 24,
                    color: C.text,
                    margin: 0,
                    marginBottom: 14,
                    lineHeight: 1.25,
                  }}
                >
                  How I work with AI.
                </h3>
                <p
                  style={{
                    fontFamily: font,
                    fontWeight: 400,
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: C.muted,
                    margin: 0,
                    marginBottom: 20,
                  }}
                >
                  The annotated operating documents behind every project.
                </p>
                <span
                  style={{
                    fontFamily: font,
                    fontWeight: 600,
                    fontSize: 13,
                    color: C.sky,
                    letterSpacing: "0.02em",
                  }}
                >
                  Open the playbook →
                </span>
              </Link>
            </FadeIn>

            <FadeIn>
              <Link
                to="/field-notes"
                className="home-path-card"
                style={{
                  display: "block",
                  backgroundColor: C.card,
                  border: `1px solid ${C.border}`,
                  borderRadius: 8,
                  padding: 36,
                  height: "100%",
                  textDecoration: "none",
                  transition: "border-color 150ms ease, transform 150ms ease",
                }}
              >
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
                  Field Notes
                </p>
                <h3
                  style={{
                    fontFamily: font,
                    fontWeight: 700,
                    fontSize: 24,
                    color: C.text,
                    margin: 0,
                    marginBottom: 14,
                    lineHeight: 1.25,
                  }}
                >
                  Writing from the field.
                </h3>
                <p
                  style={{
                    fontFamily: font,
                    fontWeight: 400,
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: C.muted,
                    margin: 0,
                    marginBottom: 20,
                  }}
                >
                  Essays, experiments, and notes on analytics, AI, and the craft of
                  building — including the doctrine I drop into every Claude project.
                </p>
                <span
                  style={{
                    fontFamily: font,
                    fontWeight: 600,
                    fontSize: 13,
                    color: C.sky,
                    letterSpacing: "0.02em",
                  }}
                >
                  Read the notes →
                </span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <style>{`
        .home-path-card:hover {
          border-color: rgba(219,84,97,0.5) !important;
          transform: translateY(-2px);
        }
      `}</style>

      <div style={divider} />

      {/* ═══ SECTION 4: EXECUTIVE INTELLIGENCE TOOLS ═══ */}
      <section>
        <div style={sectionPad}>
          <FadeIn>
            <p style={sectionHeader}>WHAT I BUILD WHEN I SEE A GAP</p>
            <h2 style={h2Style}>I don't just identify operational bottlenecks. I eliminate them.</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 460px), 1fr))", gap: 20 }}>
            <FadeIn>
              <div style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: 32, height: "100%" }}>
                <h3 style={{ fontFamily: font, fontWeight: 700, fontSize: 19, letterSpacing: "0.03em", color: C.text, marginBottom: 14 }}>
                  Pre-Call Intelligence Briefing Engine
                </h3>
                <p style={{ fontFamily: font, fontWeight: 400, fontSize: 13, lineHeight: 1.65, color: C.sky, fontStyle: "italic", marginBottom: 12 }}>
                  Built to solve a problem I've seen at every company: leaders walking into meetings unprepared because nobody had time to pull the research.
                </p>
                <p style={{ fontFamily: font, fontWeight: 400, fontSize: 15, lineHeight: 1.75, color: C.muted }}>
                  AI-powered research automation that builds comprehensive briefing documents before every meeting — company background, key players, organizational structure, recent news, strategic context. Transforms hours of manual prep into minutes of structured intelligence.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: 32, height: "100%" }}>
                <h3 style={{ fontFamily: font, fontWeight: 700, fontSize: 19, letterSpacing: "0.03em", color: C.text, marginBottom: 14 }}>
                  AR Intelligence Dashboard
                </h3>
                <p style={{ fontFamily: font, fontWeight: 400, fontSize: 13, lineHeight: 1.65, color: C.sky, fontStyle: "italic", marginBottom: 12 }}>
                  Built because competitive intelligence was always the first thing cut when analyst capacity got tight.
                </p>
                <p style={{ fontFamily: font, fontWeight: 400, fontSize: 15, lineHeight: 1.75, color: C.muted }}>
                  Continuous competitive and market intelligence monitoring. Automated analysis of market signals, competitive moves, and strategic indicators that keep leadership informed without dedicating analyst headcount to monitoring.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div style={divider} />

      {/* ═══ SECTION 5: CTA ═══ */}
      <section>
        <div style={{ ...sectionPad, textAlign: "center" }}>
          <FadeIn>
            <p style={{ ...sectionHeader, textAlign: "center" }}>EXPLORING SENIOR LEADERSHIP OPPORTUNITIES</p>
            <p style={{ fontFamily: font, fontWeight: 400, fontSize: 17, lineHeight: 1.75, color: C.muted, maxWidth: 620, margin: "0 auto 48px" }}>
              I'm looking for my next enterprise analytics leadership role — CAO, CDO, or VP Analytics — where 25 years of transformation experience and a proven operating model can drive measurable impact from Day 1.
            </p>
          </FadeIn>
          <FadeIn>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginBottom: 36 }}>
              <a
                href="/Ed_Dobbles_Resume.pdf"
                download
                style={{
                  fontFamily: font, fontWeight: 700, fontSize: 14,
                  backgroundColor: C.red, color: C.text,
                  padding: "14px 36px", borderRadius: 4,
                  textDecoration: "none",
                  transition: "filter 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.filter = "brightness(1.12)")}
                onMouseLeave={e => (e.currentTarget.style.filter = "brightness(1)")}
              >
                Download Resume
              </a>
              <a
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1CHTVn9Jc_7eFYIpfJJSFQoTsaejUtT3WgR4iymHpyhikUZPMmVLTYtFed2VLZzhcEwW4fjq8o?gv=true"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: font, fontWeight: 700, fontSize: 14,
                  backgroundColor: "transparent", color: C.red,
                  border: `2px solid ${C.red}`,
                  padding: "12px 36px", borderRadius: 4,
                  textDecoration: "none",
                  transition: "background-color 0.2s, color 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = C.red; e.currentTarget.style.color = C.text; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = C.red; }}
              >
                Schedule Time with Me
              </a>
              <a
                href="mailto:Ed@Dobbles.AI"
                style={{
                  fontFamily: font, fontWeight: 700, fontSize: 14,
                  backgroundColor: "transparent", color: C.red,
                  border: `2px solid ${C.red}`,
                  padding: "12px 36px", borderRadius: 4,
                  textDecoration: "none",
                  transition: "background-color 0.2s, color 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = C.red; e.currentTarget.style.color = C.text; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = C.red; }}
              >
                Send an Email
              </a>
            </div>
            <a
              href="https://linkedin.com/in/ed-dobbles"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", opacity: 0.35, transition: "opacity 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "0.35")}
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={22} color={C.text} />
            </a>
          </FadeIn>
        </div>
      </section>

      <div style={divider} />

      {/* ═══ SECTION 6: FOOTER ═══ */}
      <footer style={{ padding: "56px 24px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: font, fontWeight: 700, fontSize: 14, color: C.text, marginBottom: 6 }}>
            Ed Dobbles
          </p>
          <p style={{ fontFamily: font, fontWeight: 400, fontSize: 13, color: C.muted, marginBottom: 28 }}>
            Minneapolis-St. Paul Metro
          </p>
          <p style={{ fontFamily: font, fontWeight: 400, fontSize: 11, color: "rgba(247,251,254,0.25)" }}>
            &copy; 2026 Dobbles.AI
          </p>
        </div>
      </footer>
    </div>
  );
}
