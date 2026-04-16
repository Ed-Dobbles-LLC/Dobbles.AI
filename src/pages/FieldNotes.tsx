import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export default function FieldNotes() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <div className="max-w-6xl mx-auto px-6 pt-36 pb-8">
        <p className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-4">Field Notes</p>
        <h1 className="font-serif text-5xl md:text-6xl tracking-tight mb-6">Writing from the field</h1>
        <p className="font-sans text-base text-muted-foreground max-w-xl leading-relaxed mb-16">
          Essays, experiments, and notes on analytics, AI, and the craft of building.
        </p>

        <p className="font-sans text-sm text-muted-foreground">
          No articles yet. Check back soon.
        </p>
      </div>

      <SiteFooter />
    </div>
  );
}
