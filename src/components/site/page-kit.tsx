import { Link, type LinkProps } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronRight, ImageIcon } from "lucide-react";

import { Container } from "./container";
import skyline from "@/assets/usine-skyline.png.asset.json";

/* ---------- Fil d'Ariane (+ données structurées) ---------- */
export type Crumb = { label: string; to?: LinkProps["to"] };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "Accueil", to: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.to ? { item: `https://gas-whisperer-pro.lovable.app${c.to}` } : {}),
    })),
  };
  return (
    <nav aria-label="Fil d'Ariane" className="border-b border-border/40 bg-background">
      <Container className="py-3">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
          {all.map((c, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 ? <ChevronRight className="h-3 w-3" aria-hidden /> : null}
              {c.to && i < all.length - 1 ? (
                <Link to={c.to} className="hover:text-accent">
                  {c.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-foreground">
                  {c.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}

/* ---------- Parallax léger ---------- */
export function Parallax({ children, strength = 40, className = "" }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      el.style.transform = `translate3d(0, ${(-p * strength).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);
  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

/* ---------- Emplacement visuel (illustration à venir) ---------- */
export function VisualSlot({ label = "Visuel à venir", className = "" }: { label?: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg border border-dashed border-accent/40 bg-[color:var(--footer)] text-muted-foreground ${className}`}
    >
      <span className="flex items-center gap-2 text-xs uppercase tracking-widest">
        <ImageIcon className="h-4 w-4 text-accent" aria-hidden />
        {label}
      </span>
    </div>
  );
}

/* ---------- Bandeau d'arrivée : chiffres clés + preuve + visuel ---------- */
export type KeyFigure = { value: string; label: string };

export function PageIntro({
  crumbs,
  figures,
  proof,
  image,
  imageAlt = "Site industriel",
}: {
  crumbs: Crumb[];
  figures: KeyFigure[];
  proof: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <section className="border-b border-border/40 bg-card">
        <Container className="grid items-center gap-8 py-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="grid gap-6 sm:grid-cols-3">
              {figures.map((f) => (
                <div key={f.label} className="border-l-2 border-accent pl-4">
                  <div className="text-3xl font-extrabold leading-none text-foreground">{f.value}</div>
                  <p className="mt-2 text-xs leading-snug text-muted-foreground">{f.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">{proof}</p>
          </div>
          <div className="relative h-44 overflow-hidden rounded-lg border border-border bg-[color:var(--footer)] md:h-52">
            <Parallax strength={24} className="absolute -inset-y-8 inset-x-0">
              <img
                src={image ?? skyline.url}
                alt={imageAlt}
                loading="lazy"
                className="h-full w-full object-cover opacity-80"
              />
            </Parallax>
          </div>
        </Container>
      </section>
    </>
  );
}

/* ---------- Carrousel de témoignages anonymisés ---------- */
export type Testimonial = { firstName: string; initial: string; role: string; sector: string; quote: string };

export const TESTIMONIALS: Testimonial[] = [
  { firstName: "Claire", initial: "M", role: "Responsable HSE", sector: "Chimie de spécialités", quote: "Pour la première fois, nous savions exactement quelle molécule posait problème et à quel poste. Nous avons corrigé avant le contrôle." },
  { firstName: "Julien", initial: "R", role: "Directeur de site", sector: "Industrie pharmaceutique", quote: "La mesure amont/aval a prouvé que nous changions nos charbons actifs trop tôt. L'économie a financé la campagne plusieurs fois." },
  { firstName: "Sophie", initial: "L", role: "Ingénieure environnement", sector: "Pétrochimie", quote: "Installation en moins d'une heure, aucun arrêt de production, et des données exploitables directement pour notre dossier ICPE." },
];

export function TestimonialCarousel({ items = TESTIMONIALS, title = "Ils témoignent" }: { items?: Testimonial[]; title?: string }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [paused, items.length]);
  return (
    <section className="border-b border-border/40 bg-[color:var(--footer)]">
      <Container className="py-16 md:py-24">
        <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
        <div
          className="relative mx-auto mt-10 max-w-3xl overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${i * 100}%)` }}>
            {items.map((t, idx) => (
              <figure key={idx} className="w-full shrink-0 px-2" aria-hidden={idx !== i}>
                <div className="rounded-lg border border-border bg-card p-8">
                  <span className="inline-flex rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                    {t.sector}
                  </span>
                  <blockquote className="mt-5 text-lg leading-relaxed text-foreground">« {t.quote} »</blockquote>
                  <figcaption className="mt-6 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {t.firstName} {t.initial}.
                    </span>{" "}
                    — {t.role}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Témoignage ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all ${idx === i ? "w-6 bg-accent" : "w-2 bg-border"}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Frise 3 étapes ---------- */
export function StepTimeline({ steps, title }: { steps: { title: string; text: string }[]; title?: string }) {
  return (
    <div>
      {title ? <h2 className="text-2xl font-bold text-foreground md:text-3xl">{title}</h2> : null}
      <ol className="relative mt-10 grid gap-10 md:grid-cols-3">
        <span aria-hidden className="absolute left-[12%] right-[12%] top-6 hidden border-t-2 border-dashed border-accent/50 md:block" />
        {steps.map((s, i) => (
          <li key={s.title} className="relative text-center">
            <span className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-background text-lg font-bold text-accent">
              {i + 1}
            </span>
            <h3 className="mt-4 text-lg font-bold text-foreground">{s.title}</h3>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---------- Liste numérotée à puces rondes ---------- */
export function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-4">
      {items.map((t, i) => (
        <li key={i} className="flex items-start gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
            {i + 1}
          </span>
          <span className="pt-1 text-base text-foreground">{t}</span>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Jauges : limite de détection vs seuil ---------- */
export function ProgressStats({ rows }: { rows: { name: string; lod: number; limit: number; unit: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="space-y-6">
      {rows.map((r) => {
        const pct = Math.max(2, (r.lod / r.limit) * 100);
        return (
          <div key={r.name}>
            <div className="flex justify-between text-sm">
              <span className="font-semibold text-foreground">{r.name}</span>
              <span className="text-muted-foreground">
                XFLR-9 : <strong className="text-accent">{r.lod.toLocaleString("fr-FR")} {r.unit}</strong> · VLEP : {r.limit.toLocaleString("fr-FR")} {r.unit}
              </span>
            </div>
            <div className="relative mt-2 h-3 overflow-hidden rounded-full bg-[color:var(--footer)]">
              <div
                className="h-full rounded-full bg-accent transition-[width] duration-1000 ease-out"
                style={{ width: visible ? `${pct}%` : "0%" }}
              />
            </div>
          </div>
        );
      })}
      <p className="text-xs text-muted-foreground">Barre pleine = seuil VLEP. Plus la barre est courte, plus la marge de détection est grande.</p>
    </div>
  );
}

/* ---------- Encart « Solution concernée » ---------- */
export type SolutionKey = "sante" | "emissions";
const SOLUTIONS = {
  sante: { to: "/sante-environnement", label: "Santé & Environnement", text: "Campagne ponctuelle : identification des gaz et rapport de conformité VLEP." },
  emissions: { to: "/emissions-performance", label: "Émissions & Performance", text: "Monitoring continu amont/aval de vos systèmes d'abattage." },
} as const;

export function RelatedSolution({ solution }: { solution: SolutionKey }) {
  const s = SOLUTIONS[solution];
  return (
    <Link to={s.to} className="card-hover block rounded-lg border border-border bg-card p-5">
      <div className="text-[11px] font-semibold uppercase tracking-widest text-accent">Solution concernée</div>
      <div className="mt-2 font-bold text-foreground">{s.label} →</div>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.text}</p>
    </Link>
  );
}

/* ---------- Carrousel horizontal de cartes numérotées ---------- */
export function NumberedCarousel({ items }: { items: { title: string; text: string; sub?: string }[] }) {
  return (
    <div className="-mx-6 overflow-x-auto px-6 pb-4 [scroll-snap-type:x_mandatory]">
      <ul className="flex w-max gap-5">
        {items.map((it, i) => (
          <li key={it.title} className="w-72 shrink-0 [scroll-snap-align:start]">
            <article className="card-hover h-full rounded-lg border border-border bg-card p-6">
              <div className="text-3xl font-extrabold text-accent/70">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-3 text-lg font-bold text-foreground">{it.title}</h3>
              {it.sub ? <p className="mt-1 text-xs font-medium text-accent">{it.sub}</p> : null}
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Carrousel vertical avec menu latéral (tout le contenu reste dans la page) ---------- */
export function VerticalTabs({ items }: { items: { title: string; content: ReactNode }[] }) {
  const [i, setI] = useState(0);
  return (
    <div className="grid gap-6 md:grid-cols-[240px_1fr]">
      <div role="tablist" aria-orientation="vertical" className="flex gap-2 overflow-x-auto md:flex-col">
        {items.map((it, idx) => (
          <button
            key={it.title}
            role="tab"
            type="button"
            aria-selected={idx === i}
            onClick={() => setI(idx)}
            className={`shrink-0 rounded-md border-l-2 px-4 py-3 text-left text-sm font-semibold transition-colors ${
              idx === i ? "border-accent bg-card text-foreground" : "border-transparent text-muted-foreground hover:text-accent"
            }`}
          >
            {it.title}
          </button>
        ))}
      </div>
      <div className="relative">
        {items.map((it, idx) => (
          <div
            key={it.title}
            role="tabpanel"
            className={`rounded-lg border border-border bg-card p-6 transition-opacity duration-300 ${
              idx === i ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
            }`}
          >
            <h3 className="text-lg font-bold text-foreground">{it.title}</h3>
            <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Pastilles de réassurance ---------- */
export function Reassurance({ items = ["Conforme RGPD", "Jamais de spam", "Réponse sous 48 h"] }: { items?: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-3">
      {items.map((t) => (
        <li key={t} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
          ✓ {t}
        </li>
      ))}
    </ul>
  );
}
