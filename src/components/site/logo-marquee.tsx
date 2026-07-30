import { Container } from "@/components/site/container";

const placeholders = [
  "Client à venir",
  "Votre logo ici",
  "Client à venir",
  "Votre logo ici",
  "Client à venir",
  "Votre logo ici",
  "Client à venir",
  "Votre logo ici",
];

export function LogoMarquee() {
  return (
    <section className="border-y border-border/40 bg-[color:var(--footer)] py-12 md:py-16">
      <Container>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Ils nous font confiance — logos à venir
        </p>
      </Container>

      <div className="group relative overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-8 hover:[animation-play-state:paused]">
          {[...placeholders, ...placeholders].map((label, i) => (
            <div
              key={`${label}-${i}`}
              className="flex h-20 w-52 items-center justify-center rounded-lg border border-dashed border-border bg-card px-6 text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors group-hover/item:border-accent/50"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
