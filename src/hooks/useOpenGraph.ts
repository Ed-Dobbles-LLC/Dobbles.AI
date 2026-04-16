import { useEffect } from "react";

interface OpenGraphTags {
  title: string;
  description: string;
  type: string;
  url: string;
}

function upsertMeta(property: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useOpenGraph({ title, description, type, url }: OpenGraphTags) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    upsertMeta("og:title", title);
    upsertMeta("og:description", description);
    upsertMeta("og:type", type);
    upsertMeta("og:url", url);
    return () => {
      document.title = prevTitle;
    };
  }, [title, description, type, url]);
}
