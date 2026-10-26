import { Check } from "lucide-react";

import { SectionHeading } from "@/components/common/section-heading";
import { ContactDetails } from "@/components/sections/contact-details";
import { ContactForm } from "@/components/sections/contact-form";

export function ContactSection() {
  return (
    <section className="section-space bg-background">
      <div className="site-container">
        <SectionHeading
          eyebrow="Contact"
          title="Talk to our engineers."
          intro="Share your requirements and our team will get in touch with you for planning, approvals, and construction guidance."
        />
        <div className="mt-16 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <ContactDetails />
            <div className="mt-12 space-y-3 border-t border-border pt-6 text-xs text-muted-foreground">
              <p className="flex gap-3">
                <Check size={15} className="text-primary" /> Professional guidance by qualified
                civil engineers
              </p>
              <p className="flex gap-3">
                <Check size={15} className="text-primary" /> Transparent process and clear
                communication
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
