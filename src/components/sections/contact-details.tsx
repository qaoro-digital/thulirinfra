import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { OfficeAddress } from "@/components/common/office-address";
import { SocialLinks } from "@/components/common/social-links";
import { leadership } from "@/data/site-data";

export function ContactDetails() {
  return (
    <div className="space-y-9">
      <div className="space-y-7">
        {leadership.map((person) => (
          <div key={person.name}>
            <p className="eyebrow text-muted-foreground">{person.role}</p>
            <h3 className="mt-2 font-display text-2xl">Er. {person.name}</h3>
            <p className="mt-2 text-xs text-muted-foreground">BE (Civil)</p>
            <a
              href={`tel:${person.phone}`}
              className="mt-3 inline-flex items-center gap-3 text-sm text-primary"
            >
              <Phone size={15} className="shrink-0" />
              {person.displayPhone}
            </a>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-8">
        <p className="eyebrow text-primary">Our Office</p>
        <div className="mt-4 grid grid-cols-[1.25rem_1fr] gap-x-3 text-sm leading-7">
          <MapPin size={16} className="mt-1.5 shrink-0 text-primary" />
          <p>
            <OfficeAddress />
          </p>
        </div>
      </div>

      <div className="border-t border-border pt-8">
        <p className="eyebrow text-primary">Email & Website</p>
        <div className="mt-4 grid grid-cols-[1.25rem_1fr] gap-x-3 gap-y-3 text-sm">
          <Mail size={16} className="mt-0.5 shrink-0 text-primary" />
          <a href="mailto:thulirinfraconstruction@gmail.com" className="break-all">
            thulirinfraconstruction@gmail.com
          </a>
          <ArrowRight size={16} className="mt-0.5 shrink-0 text-primary" />
          <a href="https://thulirinfra.com">thulirinfra.com</a>
        </div>
      </div>

      <div className="border-t border-border pt-8">
        <p className="eyebrow text-primary">Follow Us</p>
        <SocialLinks className="mt-4" />
      </div>
    </div>
  );
}
