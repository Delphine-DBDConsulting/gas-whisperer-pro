import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";

import brochureAsset from "@/assets/clm-industry-brochure-en.pdf.asset.json";
import xflr9 from "@/assets/xflr9-analyzer.png.asset.json";
import { BookingButton } from "@/components/site/booking";
import { Container } from "@/components/site/container";
import { COMPANY } from "@/lib/company";
import { submitBrochureLead } from "@/lib/leads.functions";
import { brochureLeadSchema } from "@/lib/leads.schema";

const DESCRIPTION =
  "Download the CLM Industry brochure: OPO laser gas measurement campaigns identifying 500+ gas species down to ppb level on industrial sites.";

export const Route = createFileRoute("/en/brochure")({
  head: () => ({
    meta: [
      { title: "Industrial gas measurement — English brochure | CLM Industry" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Industrial gas measurement — English brochure" },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: BrochurePage,
});

const fieldClass =
  "mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent";

const BROCHURE_URL = brochureAsset.url;

function BrochurePage() {
  const send = useServerFn(submitBrochureLead);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const parsed = brochureLeadSchema.safeParse(
      Object.fromEntries(new FormData(form).entries()),
    );

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setPending(true);
    try {
      await send({ data: parsed.data });
      setDone(true);
      form.reset();
      toast.success("Thank you — your brochure is ready.");
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setPending(false);
    }
  }

  return (
    <Container className="grid items-start gap-12 py-16 md:py-24 lg:grid-cols-2">
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-accent">
          English brochure
        </div>
        <h1 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl">
          What you can't measure, you can't control.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          CLM Industry identifies, measures and monitors industrial gas emissions on your site.
          Our proprietary XFLR-9 analyser reads the infrared fingerprint of each molecule, covering
          500+ gas species down to ppb level.
        </p>
        <ul className="mt-8 space-y-3 text-base text-muted-foreground">
          {[
            "500+ identifiable gas species, up to 10 measured simultaneously",
            "ppb-level detection accuracy, no consumables required",
            "On-site deployment in under one hour, no production downtime",
            "Occupational exposure compliance and abatement performance reporting",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden className="font-bold text-accent">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Speak with a gas measurement expert and see how the XFLR-9 fits your site.
          </p>
          <BookingButton className="mt-3">Book a call</BookingButton>
        </div>
        <img
          src={xfi9}
          alt="XFLR-9 analyser — OPO laser industrial gas measurement"
          width={1024}
          height={1024}
          loading="lazy"
          className="mt-10 w-full rounded-lg border border-border/60"
        />
      </div>

      <div className="rounded-lg border-2 border-accent bg-card p-8 lg:sticky lg:top-24">
        {done ? (
          <div className="py-6 text-center">
            <h2 className="text-2xl font-bold text-accent">Your brochure is ready</h2>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Click below to download the CLM Industry brochure. Our team will also reach out if you
              would like a technical discussion.
            </p>
            <a href={BROCHURE_URL} download className="cta-primary mt-6">
              Download the PDF
            </a>
            <div className="mt-6 border-t border-border/60 pt-6">
              <p className="text-sm font-medium text-foreground">
                Want to discuss your application?
              </p>
              <BookingButton className="mt-3 w-full justify-center">Book a call</BookingButton>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="grid gap-5">
            <h2 className="text-xl font-bold text-foreground">Get the brochure</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Tell us who you are and download the PDF right away.
            </p>

            <label className="block text-sm font-medium text-foreground">
              Last Name *
              <input type="text" name="lastName" required className={fieldClass} />
              {errors.lastName ? (
                <span className="mt-1 block text-xs text-destructive">{errors.lastName}</span>
              ) : null}
            </label>
            <label className="block text-sm font-medium text-foreground">
              Company *
              <input type="text" name="company" required className={fieldClass} />
              {errors.company ? (
                <span className="mt-1 block text-xs text-destructive">{errors.company}</span>
              ) : null}
            </label>
            <label className="block text-sm font-medium text-foreground">
              Number
              <input
                type="tel"
                name="phone"
                inputMode="numeric"
                placeholder="33612345678"
                className={fieldClass}
              />
              <span className="mt-1 block text-xs text-muted-foreground">
                6 to 19 digits, country code included, without + or 0 (e.g. 33612345678 for France).
              </span>
              {errors.phone ? (
                <span className="mt-1 block text-xs text-destructive">{errors.phone}</span>
              ) : null}
            </label>
            <label className="block text-sm font-medium text-foreground">
              Work email *
              <input type="email" name="email" required className={fieldClass} />
              {errors.email ? (
                <span className="mt-1 block text-xs text-destructive">{errors.email}</span>
              ) : null}
              <span className="mt-1 block text-xs text-muted-foreground">
                Please provide your email address to sign up. Ex: abc@xyz.com
              </span>
            </label>

            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <button type="submit" className="cta-primary" disabled={pending}>
              {pending ? "Sending…" : "Download the brochure"}
            </button>
            <p className="text-xs leading-relaxed text-muted-foreground">
              We only use your details to send you the brochure and follow up on your request.
              Questions? {COMPANY.email}
            </p>
          </form>
        )}
      </div>
    </Container>
  );
}