import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { SiteNav } from "@/components/site/SiteNav";
import { ArticleRenderer } from "@/components/ArticleRenderer";
import { AuthorBio } from "@/components/AuthorBio";
import { DoctrineExtras } from "@/components/DoctrineExtras";
import { getFieldNote } from "@/data/fieldNotes";
import { useOpenGraph } from "@/hooks/useOpenGraph";

function estimateReadTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 225));
}

export default function FieldNoteArticle() {
  const { slug } = useParams<{ slug: string }>();
  const note = slug ? getFieldNote(slug) : undefined;
  const [readMins, setReadMins] = useState<number | null>(null);

  const filePath = note ? `/articles/${note.file}` : "";

  useEffect(() => {
    if (!filePath) return;
    let cancelled = false;
    fetch(filePath)
      .then((res) => (res.ok ? res.text() : ""))
      .then((text) => {
        if (!cancelled && text) setReadMins(estimateReadTime(text));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [filePath]);

  useOpenGraph({
    title: note ? `${note.title} — Dobbles.AI` : "Field Notes — Dobbles.AI",
    description: note?.subtitle ?? "",
    type: "article",
    url: note ? `https://dobbles.ai/field-notes/${note.slug}` : "https://dobbles.ai/field-notes",
  });

  if (!note) return <Navigate to="/field-notes" replace />;

  return (
    <div style={{ background: "#0D0D0D", minHeight: "100vh" }}>
      <SiteNav />

      <header
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "128px 24px 32px",
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
            fontSize: "clamp(28px, 5vw, 42px)",
            lineHeight: 1.15,
            color: "#F7FBFE",
            margin: 0,
            marginBottom: "20px",
            letterSpacing: "-0.01em",
          }}
        >
          {note.title}
        </h1>
        <div
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "13px",
            color: "rgba(247,251,254,0.55)",
            display: "flex",
            gap: "12px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <span>{note.date}</span>
          {readMins !== null && (
            <>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>{readMins} min read</span>
            </>
          )}
          {note.type === "Article (The Table)" && (
            <>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>Published in The Table</span>
            </>
          )}
        </div>
      </header>

      <ArticleRenderer filePath={filePath} />

      {note.slug === "doctrine" && <DoctrineExtras />}

      <AuthorBio />
    </div>
  );
}
