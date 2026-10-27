import { AlertCircle, ArrowRight, Check, Loader2, Mail, RotateCcw } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { services } from "@/data/site-data";
import { sendEnquiryServerFn } from "@/lib/send-enquiry";

type FormErrors = Partial<Record<"name" | "mobile" | "email" | "location" | "service", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [lastSubmission, setLastSubmission] = useState<{
    name: string;
    mobile: string;
    service: string;
    email: string;
    location: string;
    message: string;
  } | null>(null);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
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
    if (Object.keys(next).length > 0) return;

    setIsSubmitting(true);
    setStatus("idle");
    setStatusMessage("");

    setLastSubmission({ name, mobile, email, location, service, message });

    try {
      const response = await sendEnquiryServerFn({
        data: {
          name,
          mobile,
          email: email || undefined,
          location,
          service,
          message: message || undefined,
        },
      });

      if (response && response.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setStatusMessage(
          response?.error ||
            "Unable to send your enquiry via email service. Please try again or use direct email.",
        );
      }
    } catch (err: unknown) {
      console.error("Enquiry submission failed:", err);
      setStatus("error");
      setStatusMessage("Network or server connection error. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const field =
    "mt-2 w-full border border-input bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary disabled:opacity-60 disabled:cursor-not-allowed";

  const getMailtoFallback = () => {
    if (!lastSubmission) return "mailto:thulirinfraconstruction@gmail.com";
    const body = [
      `Name: ${lastSubmission.name}`,
      `Mobile: ${lastSubmission.mobile}`,
      `Email: ${lastSubmission.email || "Not provided"}`,
      `Project location: ${lastSubmission.location}`,
      `Service: ${lastSubmission.service}`,
      "",
      "Project details:",
      lastSubmission.message,
    ].join("\n");
    return `mailto:thulirinfraconstruction@gmail.com?subject=${encodeURIComponent(`Project enquiry — ${lastSubmission.service}`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="border-t border-border pt-6">
      {status === "success" ? (
        <div className="border border-primary/30 bg-secondary/50 p-8 text-foreground">
          <div className="flex items-center gap-3 text-primary">
            <Check size={28} className="shrink-0" />
            <h3 className="font-display text-2xl md:text-3xl">Enquiry Received!</h3>
          </div>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Thank you, <strong className="text-foreground">{lastSubmission?.name}</strong>. Your enquiry
            for <strong className="text-foreground">{lastSubmission?.service}</strong> has been sent to{" "}
            <span className="font-medium text-foreground">thulirinfraconstruction@gmail.com</span>.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Our qualified civil engineers will review your project details and contact you shortly at{" "}
            <strong className="text-foreground">{lastSubmission?.mobile}</strong>.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 border-t border-border pt-6">
            <Button
              type="button"
              variant="architectural"
              onClick={() => {
                setStatus("idle");
                setLastSubmission(null);
              }}
              className="inline-flex items-center gap-2"
            >
              <RotateCcw size={15} /> Send Another Enquiry
            </Button>
            <a
              href="tel:+918667394901"
              className="inline-flex items-center justify-center border border-input bg-background px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-accent"
            >
              Call Engineers Directly
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={submit} noValidate>
          {status === "error" && (
            <div className="mb-6 border border-destructive/30 bg-destructive/10 p-5 text-sm">
              <div className="flex items-start gap-3">
                <AlertCircle className="mt-0.5 shrink-0 text-destructive" size={18} />
                <div>
                  <p className="font-semibold text-destructive">{statusMessage}</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    You can retry submitting or use our instant email link to send directly:
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <a
                      href={getMailtoFallback()}
                      className="inline-flex items-center gap-2 rounded bg-foreground px-3.5 py-1.5 text-xs font-medium text-background hover:bg-foreground/90"
                    >
                      <Mail size={13} /> Send via Email Client
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid gap-x-6 gap-y-7 md:grid-cols-2">
            <label className="text-xs font-semibold uppercase">
              Full Name *
              <input
                name="name"
                disabled={isSubmitting}
                maxLength={100}
                className={field}
                aria-invalid={!!errors.name}
              />
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
              <select
                name="service"
                defaultValue=""
                disabled={isSubmitting}
                className={field}
                aria-invalid={!!errors.service}
              >
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
              <textarea
                name="message"
                disabled={isSubmitting}
                maxLength={1500}
                rows={5}
                className={field}
              />
            </label>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="architectural"
            size="architectural"
            className="mt-6 w-full"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Submitting enquiry...
              </>
            ) : (
              <>
                Submit enquiry <ArrowRight size={15} />
              </>
            )}
          </Button>
          <div className="mt-5 flex gap-3 text-xs leading-5 text-muted-foreground">
            <Check size={15} className="mt-0.5 shrink-0 text-primary" />
            <p>
              Your enquiry is delivered directly to our engineering team at{" "}
              <span className="font-medium text-foreground">thulirinfraconstruction@gmail.com</span>. We
              ensure complete confidentiality of your information.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
