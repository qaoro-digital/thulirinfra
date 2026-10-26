import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { ButtonLink } from "@/components/common/button-link";
import { Logo } from "@/components/common/logo";
import { OfficeAddress } from "@/components/common/office-address";
import { SocialLinks } from "@/components/common/social-links";
import { navItems, services } from "@/data/site-data";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="site-container py-20 lg:py-24">
        <div className="grid gap-12 border-b border-primary-foreground/15 pb-14 lg:grid-cols-[1.6fr_0.9fr_0.9fr_1.4fr]">
          <div>
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-7 text-primary-foreground/75">
              Professional civil engineering, planning, approvals, construction, and Project
              Management Consultancy (PMC) across growing communities in Tamil Nadu.
            </p>
            <div className="mt-8">
              <ButtonLink to="/contact" variant="light">
                Get free consultation
              </ButtonLink>
            </div>
          </div>
          <div>
            <p className="eyebrow text-primary-foreground/70">Navigate</p>
            <div className="mt-5 flex flex-col gap-3">
              {navItems.map(([to, label]) => (
                <Link
                  key={to}
                  to={to}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow text-primary-foreground/70">Services</p>
            <div className="mt-5 flex flex-col gap-3">
              {services.map((s) => (
                <Link
                  key={s.number}
                  to="/services"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow text-primary-foreground/70">Contact</p>
            <div className="mt-5 grid grid-cols-[1.25rem_1fr] gap-x-3 gap-y-3 text-sm text-primary-foreground/80">
              <Phone size={15} className="mt-1 shrink-0 text-primary" />
              <a href="tel:+918667394901">+91 86673 94901</a>
              <Phone size={15} className="mt-1 shrink-0 text-primary" />
              <a href="tel:+919790226284">+91 97902 26284</a>
              <Mail size={15} className="mt-1 shrink-0 text-primary" />
              <a href="mailto:thulirinfra.construction@gmail.com" className="break-all">
                thulirinfra.construction@gmail.com
              </a>
            </div>
            <p className="eyebrow mt-8 text-primary-foreground/70">Our Office</p>
            <div className="mt-4 grid grid-cols-[1.25rem_1fr] gap-x-3 text-sm leading-7 text-primary-foreground/80">
              <MapPin size={15} className="mt-1.5 shrink-0 text-primary" />
              <p>
                <OfficeAddress />
              </p>
            </div>
            <p className="mt-5 text-xs leading-6 text-primary-foreground/60">
              Madurai · Virudhunagar · Namakkal · Trichy · Salem
              <br />& surrounding locations
            </p>
            <p className="eyebrow mt-8 text-primary-foreground/70">Follow Us</p>
            <SocialLinks light className="mt-4" />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-6 text-[10px] uppercase text-primary-foreground/70 md:flex-row">
          <p>© 2026 Thulir Infra. All rights reserved.</p>
          <p>Engineering with responsibility</p>
        </div>
      </div>
    </footer>
  );
}
