import { useEffect, useRef } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getFieldGuide, FIELD_GUIDE_CSS } from "@/data/fieldGuides";

export default function FieldGuide() {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? getFieldGuide(slug) : undefined;
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    if (!guide) return;

    document.title = `${guide.shortTitle} — Field Guide ${guide.num} · Dobbles.AI`;

    // Inject the guide's CSS into <head>; remove on unmount
    const el = document.createElement("style");
    el.textContent = FIELD_GUIDE_CSS;
    document.head.appendChild(el);
    styleRef.current = el;

    // White body while this page is mounted
    const prevBg = document.body.style.background;
    document.body.style.background = "#fff";

    return () => {
      if (styleRef.current) {
        document.head.removeChild(styleRef.current);
        styleRef.current = null;
      }
      document.body.style.background = prevBg;
    };
  }, [guide]);

  // Attach copy-button handlers after HTML is in the DOM
  useEffect(() => {
    if (!guide) return;
    const buttons = document.querySelectorAll<HTMLButtonElement>(".copybtn");
    const handlers: Array<() => void> = [];

    buttons.forEach((btn) => {
      const handler = () => {
        const pre = btn.parentElement?.querySelector("pre");
        if (!pre) return;
        navigator.clipboard.writeText(pre.innerText).then(() => {
          btn.textContent = "Copied ✓";
          btn.classList.add("done");
          setTimeout(() => {
            btn.textContent = "Copy";
            btn.classList.remove("done");
          }, 2200);
        });
      };
      btn.addEventListener("click", handler);
      handlers.push(() => btn.removeEventListener("click", handler));
    });

    return () => handlers.forEach((off) => off());
  }, [guide]);

  if (!guide) return <Navigate to="/field-guides" replace />;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: guide.body }}
    />
  );
}
