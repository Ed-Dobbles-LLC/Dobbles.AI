import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavLinkDef {
  label: string;
  to: string;
  external?: boolean;
}

const NAV_LINKS: NavLinkDef[] = [
  { label: "Operating System", to: "/operating-system" },
  { label: "Field Notes", to: "/field-notes" },
  { label: "LinkedIn", to: "https://www.linkedin.com/in/eddobbles/", external: true },
  { label: "Login", to: "/login" },
];

const linkBase: React.CSSProperties = {
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 600,
  fontSize: "13px",
  letterSpacing: "0.01em",
  color: "rgba(247,251,254,0.55)",
  textDecoration: "none",
  transition: "color 150ms ease",
};

function NavItem({ link, onClick }: { link: NavLinkDef; onClick?: () => void }) {
  const commonProps = {
    className: "site-nav-link",
    style: linkBase,
    onClick,
  };

  if (link.external) {
    return (
      <a href={link.to} target="_blank" rel="noopener noreferrer" {...commonProps}>
        {link.label}
      </a>
    );
  }
  return (
    <Link to={link.to} {...commonProps}>
      {link.label}
    </Link>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#0D0D0D",
        borderBottom: "1px solid rgba(247,251,254,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "18px",
            letterSpacing: "0.02em",
          }}
          onClick={() => setOpen(false)}
        >
          <span style={{ color: "#F7FBFE" }}>Dobbles</span>
          <span style={{ color: "#DB5461" }}>.AI</span>
        </Link>

        <nav className="hidden md:flex" style={{ gap: "28px", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <NavItem key={link.to} link={link} />
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          style={{
            background: "transparent",
            border: "none",
            color: "#F7FBFE",
            padding: "6px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden"
          style={{
            borderTop: "1px solid rgba(247,251,254,0.08)",
            background: "#0D0D0D",
          }}
        >
          <div
            style={{
              maxWidth: "1080px",
              margin: "0 auto",
              padding: "12px 24px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {NAV_LINKS.map((link) => (
              <div key={link.to} style={{ padding: "10px 0" }}>
                <NavItem link={link} onClick={() => setOpen(false)} />
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .site-nav-link:hover { color: #F7FBFE !important; }
      `}</style>
    </header>
  );
}
