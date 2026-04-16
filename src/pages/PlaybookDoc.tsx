import { useParams, Navigate, Link } from "react-router-dom";
import { SiteNav } from "@/components/site/SiteNav";
import { ArticleRenderer } from "@/components/ArticleRenderer";
import { getPlaybookDoc } from "@/data/playbook";
import { useOpenGraph } from "@/hooks/useOpenGraph";
import { ArrowLeft } from "lucide-react";

export default function PlaybookDoc() {
  const { slug } = useParams<{ slug: string }>();
  const doc = slug ? getPlaybookDoc(slug) : undefined;

  const filePath = doc ? `/playbook/${doc.file}` : "";

  useOpenGraph({
    title: doc ? `${doc.title} — Dobbles.AI Playbook` : "Playbook — Dobbles.AI",
    description: doc?.subtitle ?? "",
    type: "article",
    url: doc
      ? `https://dobbles.ai/playbook/${doc.slug}`
      : "https://dobbles.ai/playbook",
  });

  if (!doc) return <Navigate to="/playbook" replace />;

  return (
    <div style={{ background: "#0D0D0D", minHeight: "100vh" }}>
      <SiteNav />

      <header
        style={{
          maxWidth: "720px",
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
            fontSize: "clamp(28px, 5vw, 42px)",
            lineHeight: 1.15,
            color: "#F7FBFE",
            margin: 0,
            marginBottom: "16px",
            letterSpacing: "-0.01em",
          }}
        >
          {doc.title}
        </h1>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: "15.5px",
            color: "rgba(247,251,254,0.72)",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {doc.subtitle}
        </p>
      </header>

      <ArticleRenderer filePath={filePath} />

      <section
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "16px 24px 64px",
        }}
      >
        <div
          style={{
            borderTop: "1px solid rgba(247,251,254,0.1)",
            paddingTop: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "24px",
          }}
        >
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
            Download the full package
          </a>

          <Link
            to="/playbook"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              color: "#85E4FD",
              textDecoration: "none",
            }}
          >
            <ArrowLeft size={16} /> Back to Playbook
          </Link>
        </div>
      </section>
    </div>
  );
}
