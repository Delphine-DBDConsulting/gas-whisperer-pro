import { Link } from "@tanstack/react-router";

import { Container, PageHeader } from "./container";

export type OfferPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  context: string[];
  steps: { title: string; text: string }[];
  deliverables: string[];
  duration: string;
  faq: { q: string; a: string }[];
};

export function OfferPage({
  eyebrow,
  title,
  intro,
  context,
  steps,
  deliverables,
  duration,
  faq,
}: OfferPageProps) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} intro={intro} />

      <Container className="py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <h2 className="text-2xl font-bold text-accent">Le contexte</h2>
            {context.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <aside className="rounded-lg border-2 border-accent bg-card p-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent">
              Durée de la mission
            </div>
            <div className="mt-3 text-2xl font-extrabold text-foreground">{duration}</div>
            <Link to="/contact" className="cta-primary mt-8 w-full">
              Prendre rendez-vous
            </Link>
          </aside>
        </div>
      </Container>

      <section className="border-y border-border/40 bg-[color:var(--footer)]">
        <Container className="py-16 md:py-24">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Le déroulé de la mission
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="card-hover rounded-lg border border-border bg-card p-6">
                <div className="text-4xl font-extrabold leading-none text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Container className="py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Vos livrables</h2>
            <ul className="mt-8 space-y-4">
              {deliverables.map((d) => (
                <li key={d} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                  <span aria-hidden className="mt-0.5 font-bold text-accent">
                    ✓
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Questions fréquentes</h2>
            <dl className="mt-8 space-y-6">
              {faq.map((f) => (
                <div key={f.q} className="rounded-lg border border-border bg-card p-6">
                  <dt className="text-base font-semibold text-foreground">{f.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>

      <section className="border-t-2 border-accent">
        <Container className="py-16 text-center md:py-24">
          <h2 className="mx-auto max-w-3xl text-2xl font-bold text-foreground md:text-3xl">
            Parlons de votre site
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Décrivez-nous vos installations et vos obligations réglementaires : nous revenons vers
            vous sous 48 heures avec une proposition de campagne.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="cta-primary">
              Prendre rendez-vous
            </Link>
            <Link to="/technologie" className="cta-outline">
              Voir la technologie
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}