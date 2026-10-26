import { socialLinks } from "@/data/site-data";

export function SocialLinks({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} (opens in a new tab)`}
          className={`flex size-10 items-center justify-center border transition-colors ${
            light
              ? "border-primary-foreground/25 text-primary-foreground/80 hover:border-primary-foreground/50 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              : "border-border text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground"
          }`}
        >
          <Icon size={17} />
        </a>
      ))}
    </div>
  );
}
