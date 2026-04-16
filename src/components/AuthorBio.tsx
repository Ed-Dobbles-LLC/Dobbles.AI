export function AuthorBio() {
  return (
    <div
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "48px 24px 80px",
        borderTop: "1px solid rgba(247,251,254,0.1)",
      }}
    >
      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
        <div
          style={{
            flexShrink: 0,
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #225A8E 0%, #060A57 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            color: "#F7FBFE",
            letterSpacing: "0.04em",
          }}
        >
          ED
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              color: "#F7FBFE",
              marginBottom: "6px",
            }}
          >
            Ed Dobbles
          </div>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
              fontSize: "14.5px",
              color: "rgba(247,251,254,0.72)",
              lineHeight: 1.65,
              margin: 0,
              marginBottom: "10px",
            }}
          >
            25+ years of Fortune 500 analytics leadership. Building AI-native
            consulting and platform businesses at Dobbles.AI.
          </p>
          <a
            href="https://www.linkedin.com/in/ed-dobbles/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              color: "#85E4FD",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </div>
  );
}
