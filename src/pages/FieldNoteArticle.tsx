import { useParams, Link } from "react-router-dom";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ArrowLeft } from "lucide-react";

export default function FieldNoteArticle() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-8">
        <Link
          to="/field-notes"
          className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> All Field Notes
        </Link>

        <h1 className="font-serif text-4xl md:text-5xl tracking-tight mb-6">{slug}</h1>
        <p className="font-sans text-base text-muted-foreground leading-relaxed">
          Article content coming soon.
        </p>
      </div>

      <SiteFooter />
    </div>
  );
}
