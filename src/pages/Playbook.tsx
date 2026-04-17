import { Link } from "react-router-dom";
import { SiteNav } from "@/components/site/SiteNav";
import { PLAYBOOK_DOCS } from "@/data/playbook";

export default function Playbook() {
  return (
    <div style={{ background: "#0D0D0D", minHeight: "100vh" }}>
      <SiteNav />

      <header
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "64px 24px 32px",
        }}
      >
        <div
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "11px",
            color: "#DB5461",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: "20px",
          }}
        >
          Playbook
        </div>
        <h1
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(32px, 5vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            color: "#F7FBFE",
            margin: 0,
            marginBottom: "16px",
          }}
        >
          How I work with AI.
        </h1>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            color: "rgba(247,251,254,0.72)",
            lineHeight: 1.65,
            maxWidth: "720px",
            margin: 0,
          }}
        >
          The annotated operating documents I drop into every Claude project.
          Not best practices — my practices. Each section explains what the
          rule is and why it exists.
        </p>
      </header>

      <main
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 24px 56px",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gap: "12px",
          }}
        >
          {PLAYBOOK_DOCS.map((doc) => (
            <li key={doc.slug}>
              <Link
                to={`/playbook/${doc.slug}`}
                className="playbook-card"
                style={{
                  display: "block",
                  background: "#1D1D1D",
                  border: "1px solid rgba(247,251,254,0.08)",
                  borderRadius: "8px",
                  padding: "24px 28px",
                  textDecoration: "none",
                  transition: "border-color 150ms ease, transform 150ms ease",
                }}
              >
                <h2
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: 1.3,
                    color: "#F7FBFE",
                    margin: 0,
                    marginBottom: "8px",
                    letterSpacing: "-0.005em",
                  }}
                >
                  {doc.title}
                </h2>
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 400,
                    fontSize: "14.5px",
                    color: "rgba(247,251,254,0.70)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {doc.subtitle}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <section
          style={{
            marginTop: "48px",
            background: "#1D1D1D",
            border: "1px solid rgba(247,251,254,0.08)",
            borderRadius: "8px",
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "16px",
          }}
        >
          <h3
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              color: "#F7FBFE",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            Want the whole package?
          </h3>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
              fontSize: "14.5px",
              color: "rgba(247,251,254,0.72)",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            All five annotated documents in one zip. Drop them into any Claude
            Code project.
          </p>
          <a
            href="/doctrine/dobbles-ai-doctrine.zip"
            className="plausible-event-name=Download+Playbook"
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
            Download the .zip package
          </a>
        </section>
      </main>

      <style>{`
        .playbook-card:hover {
          border-color: rgba(219,84,97,0.4) !important;
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}
