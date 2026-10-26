import { ArrowRight, Check } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { services } from "@/data/site-data";

type FormErrors = Partial<Record<"name" | "mobile" | "email" | "location" | "service", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: FormErrors = {};
    const name = String(data.get("name") ?? "").trim();
    const mobile = String(data.get("mobile") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const location = String(data.get("location") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (name.length < 2 || name.length > 100) next.name = "Enter your full name.";
    if (!/^[0-9+() -]{8,18}$/.test(mobile)) next.mobile = "Enter a valid mobile number.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email address.";
    if (location.length < 2 || location.length > 120)
      next.location = "Enter your project location.";
    if (!service) next.service = "Select a service.";

    setErrors(next);
    if (Object.keys(next).length) return;

    const body = [
      `Name: ${name}`,
      `Mobile: ${mobile}`,
      `Email: ${email || "Not provided"}`,
      `Project location: ${location}`,
      `Service: ${service}`,
      "",
      "Project details:",
      message.slice(0, 1500),
    ].join("\n");

    window.location.href = `mailto:thulirinfra.construction@gmail.com?subject=${encodeURIComponent(`Project enquiry — ${service}`)}&body=${encodeURIComponent(body)}`;
  };

  const field =
    "mt-2 w-full border border-input bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary";

  return (
    <form onSubmit={submit} noValidate className="border-t border-border pt-6">
      <div className="grid gap-x-6 gap-y-7 md:grid-cols-2">
        <label className="text-xs font-semibold uppercase">
          Full Name *
          <input name="name" maxLength={100} className={field} aria-invalid={!!errors.name} />
          {errors.name && (
            <span className="mt-1 block text-[11px] normal-case text-destructive">
              {errors.name}
            </span>
          )}
        </label>
        <label className="text-xs font-semibold uppercase">
          Mobile Number *
          <input
            name="mobile"
            inputMode="tel"
            maxLength={18}
            className={field}
            aria-invalid={!!errors.mobile}
          />
          {errors.mobile && (
            <span className="mt-1 block text-[11px] normal-case text-destructive">
              {errors.mobile}
            </span>
          )}
        </label>
        <label className="text-xs font-semibold uppercase">
          Email Address
          <input
            name="email"
            type="email"
            maxLength={255}
            className={field}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <span className="mt-1 block text-[11px] normal-case text-destructive">
              {errors.email}
            </span>
          )}
        </label>
        <label className="text-xs font-semibold uppercase">
          Project Location *
          <input
            name="location"
            maxLength={120}
            className={field}
            aria-invalid={!!errors.location}
          />
          {errors.location && (
            <span className="mt-1 block text-[11px] normal-case text-destructive">
              {errors.location}
            </span>
          )}
        </label>
        <label className="text-xs font-semibold uppercase md:col-span-2">
          Service Required *
          <select name="service" defaultValue="" className={field} aria-invalid={!!errors.service}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.number} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.service && (
            <span className="mt-1 block text-[11px] normal-case text-destructive">
              {errors.service}
            </span>
          )}
        </label>
        <label className="text-xs font-semibold uppercase md:col-span-2">
          Message / Project Details
          <textarea name="message" maxLength={1500} rows={5} className={field} />
        </label>
      </div>
      <Button type="submit" variant="architectural" size="architectural" className="mt-6 w-full">
        Submit enquiry <ArrowRight size={15} />
      </Button>
      <div className="mt-5 flex gap-3 text-xs leading-5 text-muted-foreground">
        <Check size={15} className="mt-0.5 shrink-0 text-primary" />
        <p>
          Our team will review your details and contact you shortly. We ensure complete
          confidentiality of your information.
        </p>
      </div>
    </form>
  );
}
