import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";

export function ButtonLink({
  to,
  children,
  variant = "solid",
  className = "",
}: {
  to: "/" | "/about" | "/services" | "/projects" | "/products" | "/packages" | "/contact";
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  return (
    <Button
      asChild
      size="architectural"
      variant={
        variant === "outline"
          ? "architecturalOutline"
          : variant === "light"
            ? "architecturalLight"
            : "architectural"
      }
      className={className}
    >
      <Link to={to}>
        {children}
        <ArrowRight
          size={15}
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </Button>
  );
}
