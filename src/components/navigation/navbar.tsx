import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/common/button-link";
import { Logo } from "@/components/common/logo";
import { SocialLinks } from "@/components/common/social-links";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/site-data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const overlay = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    const timer = window.setTimeout(() => {
      document
        .querySelectorAll(
          "main section:not(:first-child) .site-container, main section:not(:first-child) figure",
        )
        .forEach((element) => {
          element.classList.add("scroll-reveal");
          observer.observe(element);
        });
    }, 80);
    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${overlay ? "border-primary-foreground/20 bg-transparent" : "border-border bg-background shadow-sm"}`}
    >
      <nav
        className="site-container grid h-24 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex lg:justify-between"
        aria-label="Main navigation"
      >
        <Logo light={overlay} />
        <div
          className={`hidden items-center gap-5 xl:gap-8 lg:flex ${overlay ? "text-primary-foreground" : "text-foreground"}`}
        >
          {navItems.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              activeOptions={{ exact: to === "/" }}
              className="border-b border-transparent py-2 text-[11px] font-semibold uppercase transition-colors hover:border-current"
              activeProps={{ className: "border-current" }}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-5 lg:flex">
          <SocialLinks light={overlay} />
          <ButtonLink to="/contact" variant={overlay ? "light" : "solid"}>
            Free consultation
          </ButtonLink>
        </div>
        <Button
          variant="architecturalPlain"
          size="icon"
          type="button"
          onClick={() => setOpen(!open)}
          className={`size-11 lg:hidden ${overlay ? "text-primary-foreground" : "text-foreground"}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </nav>
      {open && (
        <div className="fixed inset-0 top-24 z-40 overflow-y-auto bg-background px-6 py-6 lg:hidden">
          <div className="flex h-full flex-col justify-between">
            <div>
              {navItems.map(([to, label], index) => (
                <Link
                  key={to}
                  to={to}
                  className="flex items-center justify-between border-b border-border py-5 font-display text-4xl"
                >
                  <span>{label}</span>
                  <span className="font-sans text-xs text-muted-foreground">0{index + 1}</span>
                </Link>
              ))}
            </div>
            <div>
              <SocialLinks className="mb-6 justify-center" />
              <ButtonLink to="/contact" className="w-full">
                Get free consultation
              </ButtonLink>
              <p className="mt-5 text-center text-xs text-muted-foreground">
                Madurai · Virudhunagar · Namakkal · Trichy · Salem
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
