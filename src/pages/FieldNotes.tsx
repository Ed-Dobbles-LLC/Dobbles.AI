import { Link } from "react-router-dom";
import { SiteNav } from "@/components/site/SiteNav";
import { FIELD_NOTES, type FieldNoteType } from "@/data/fieldNotes";

function shortType(t: FieldNoteType): "Article" | "Post" {
  return t === "Post" ? "Post" : "Article";
}

const BADGE_COLORS: Record<"Article" | "Post", { bg: string; fg: string }> = {
  Article: { bg: "rgba(219,84,97,0.12)", fg: "#DB5461" },
  Post:    { bg: "rgba(133,228,253,0.12)", fg: "#85E4FD" },
};

export default function FieldNotes() {
  return (
    <div style={{ background: "#0D0D0D", minHeight: "100vh" }}>
      <SiteNav />

      <header
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "128px 24px 40px",
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
          Field Notes
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
          Writing from the field
        </h1>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            color: "rgba(247,251,254,0.72)",
            lineHeight: 1.65,
            maxWidth: "620px",
            margin: 0,
          }}
        >
          Essays, experiments, and notes on analytics, AI, and the craft of
          building.
        </p>
      </header>

      <main
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 24px 96px",
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
          {FIELD_NOTES.map((note) => {
            const badge = BADGE_COLORS[shortType(note.type)];
            return (
              <li key={note.slug}>
                <Link
                  to={`/field-notes/${note.slug}`}
                  className="field-note-card"
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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 700,
                        fontSize: "10.5px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: badge.fg,
                        background: badge.bg,
                        padding: "4px 10px",
                        borderRadius: "4px",
                      }}
                    >
                      {shortType(note.type)}
                    </span>
                    <span
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 500,
                        fontSize: "13px",
                        color: "rgba(247,251,254,0.55)",
                      }}
                    >
                      {note.date}
                    </span>
                    {note.type === "Article (The Table)" && (
                      <span
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: 500,
                          fontSize: "13px",
                          color: "rgba(247,251,254,0.45)",
                        }}
                      >
                        · Published in The Table
                      </span>
                    )}
                  </div>
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
                    {note.title}
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
                    {note.subtitle}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>

      <style>{`
        .field-note-card:hover {
          border-color: rgba(219,84,97,0.4) !important;
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}
