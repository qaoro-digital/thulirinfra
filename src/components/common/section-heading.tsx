export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div
      className={`section-heading grid gap-6 border-t pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-12 ${light ? "border-primary-foreground/20" : "border-border"}`}
    >
      <p className={`eyebrow ${light ? "text-primary-foreground/75" : "text-primary"}`}>
        {eyebrow}
      </p>
      <div>
        <h2 className="section-title max-w-4xl text-balance font-display">{title}</h2>
        {intro && (
          <p
            className={`mt-6 max-w-2xl text-base leading-7 ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}
          >
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}
