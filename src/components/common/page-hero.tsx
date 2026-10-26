import heroVilla from "@/assets/thulir-hero-villa.jpg";

export function PageHero({
  eyebrow,
  title,
  intro,
  image = heroVilla,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
}) {
  return (
    <section className="page-hero relative bg-foreground text-primary-foreground">
      <img
        src={image}
        alt="Representative architecture and engineering visual"
        width={1920}
        height={1200}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="site-container page-hero-layout relative flex flex-col justify-end">
        <p className="eyebrow text-primary-foreground/75">{eyebrow}</p>
        <h1 className="page-hero-heading mt-6 max-w-4xl text-balance font-display">{title}</h1>
        <p className="mt-7 max-w-2xl border-t border-primary-foreground/25 pt-6 text-base leading-7 text-primary-foreground/75">
          {intro}
        </p>
      </div>
    </section>
  );
}
