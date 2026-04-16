import { useEffect, useState } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

interface ArticleRendererProps {
  filePath: string;
}

const components: Components = {
  h1: ({ children }) => (
    <h1
      style={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 700,
        fontSize: "32px",
        color: "#F7FBFE",
        marginTop: "2.5rem",
        marginBottom: "1.25rem",
        lineHeight: 1.2,
      }}
    >
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2
      style={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 700,
        fontSize: "22px",
        color: "#F7FBFE",
        marginTop: "2.5rem",
        marginBottom: "1rem",
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
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      style={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 700,
        fontSize: "18px",
        color: "#F7FBFE",
        marginTop: "2rem",
        marginBottom: "0.75rem",
        lineHeight: 1.35,
      }}
    >
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p
      style={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 400,
        fontSize: "15.5px",
        color: "rgba(247,251,254,0.78)",
        lineHeight: 1.78,
        marginBottom: "1.25rem",
      }}
    >
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      style={{ color: "#85E4FD", textDecoration: "none" }}
      onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
      onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote
      style={{
        borderLeft: "3px solid #DB5461",
        background: "rgba(219,84,97,0.05)",
        padding: "16px 20px",
        margin: "1.5rem 0",
        fontFamily: "Montserrat, sans-serif",
        fontSize: "15.5px",
        color: "rgba(247,251,254,0.78)",
        lineHeight: 1.78,
      }}
    >
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul
      style={{
        listStyle: "none",
        paddingLeft: "1.25rem",
        marginBottom: "1.25rem",
      }}
    >
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol
      style={{
        paddingLeft: "1.5rem",
        marginBottom: "1.25rem",
        fontFamily: "Montserrat, sans-serif",
        fontSize: "15.5px",
        color: "rgba(247,251,254,0.78)",
        lineHeight: 1.78,
      }}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => {
    const ordered = (props as { ordered?: boolean }).ordered;
    if (ordered) {
      return (
        <li style={{ marginBottom: "0.5rem", paddingLeft: "0.25rem" }}>
          {children}
        </li>
      );
    }
    return (
      <li
        style={{
          position: "relative",
          paddingLeft: "1.25rem",
          marginBottom: "0.5rem",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "15.5px",
          color: "rgba(247,251,254,0.78)",
          lineHeight: 1.78,
        }}
      >
        <span
          style={{
            position: "absolute",
            left: 0,
            top: "0.7em",
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: "#DB5461",
          }}
        />
        {children}
      </li>
    );
  },
  strong: ({ children, node }) => {
    const parentName = (node as unknown as { position?: unknown; parent?: { tagName?: string } })?.parent?.tagName;
    const inOrderedListItem = parentName === "li";
    return (
      <strong
        style={{
          fontWeight: 700,
          color: inOrderedListItem ? "#85E4FD" : "#F7FBFE",
        }}
      >
        {children}
      </strong>
    );
  },
  code: ({ children, className }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <code
          className={className}
          style={{
            display: "block",
            background: "rgba(247,251,254,0.05)",
            padding: "16px",
            borderRadius: "6px",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: "14px",
            color: "#F7FBFE",
            overflowX: "auto",
            lineHeight: 1.6,
          }}
        >
          {children}
        </code>
      );
    }
    return (
      <code
        style={{
          background: "rgba(247,251,254,0.08)",
          padding: "2px 6px",
          borderRadius: "4px",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: "0.9em",
          color: "#F7FBFE",
        }}
      >
        {children}
      </code>
    );
  },
  hr: () => (
    <hr
      style={{
        border: 0,
        borderTop: "1px solid rgba(247,251,254,0.1)",
        margin: "2.5rem 0",
      }}
    />
  ),
};

export function ArticleRenderer({ filePath }: ArticleRendererProps) {
  const [markdown, setMarkdown] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(filePath)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load article (${res.status})`);
        return res.text();
      })
      .then((text) => {
        if (!cancelled) {
          setMarkdown(text);
          setLoading(false);
        }
      })
      .catch((err: Error) => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [filePath]);

  return (
    <div style={{ background: "#0D0D0D" }}>
      <article
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "16px 24px 48px",
        }}
      >
        {loading && (
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "rgba(247,251,254,0.5)",
              fontSize: "15.5px",
            }}
          >
            Loading…
          </p>
        )}
        {error && (
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#DB5461",
              fontSize: "15.5px",
            }}
          >
            {error}
          </p>
        )}
        {!loading && !error && (
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {markdown}
          </ReactMarkdown>
        )}
      </article>
    </div>
  );
}
