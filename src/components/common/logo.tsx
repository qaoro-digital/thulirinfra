import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/thulir-logo-transparent.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="Thulir Infra home"
      className="inline-flex h-16 w-[94px] shrink-0 items-center justify-center"
    >
      <img
        src={logoImg}
        alt="Thulir Infra"
        width={1140}
        height={820}
        className={`h-full w-full object-contain ${light ? "logo-on-dark" : ""}`}
      />
    </Link>
  );
}
