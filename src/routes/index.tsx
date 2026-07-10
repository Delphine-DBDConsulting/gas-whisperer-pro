import { createFileRoute } from "@tanstack/react-router";
import xfi9 from "@/assets/xfi9-analyzer.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CLM Industry — Mesure de gaz industriels par laser OPO" },
      {
        name: "description",
        content:
          "CLM Industry identifie, mesure et surveille les émissions de gaz industriels sur votre site pour assurer la conformité VLEP/CMR et optimiser vos installations.",
      },
      { property: "og:title", content: "CLM Industry — Mesure de gaz industriels par laser OPO" },
      {
        property: "og:description",
        content:
          "CLM Industry identifie, mesure et surveille les émissions de gaz industriels sur votre site pour assurer la conformité VLEP/CMR et optimiser vos installations.",
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#sante", label: "Santé & Environnement" },
  { href: "#emissions", label: "Émissions & Performance" },
  { href: "#techno", label: "Notre technologie" },
  { href: "#roi", label: "ROI & Cas clients" },
  { href: "#contact", label: "Contact" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Regulatory />
        <Problem />
        <Solution />
        <Offers />
        <References />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-6 ${className}`}>{children}</div>;
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#" className="text-lg font-extrabold uppercase tracking-wider text-foreground">
          CLM Industry
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="/en"
            aria-label="English version"
            className="text-lg leading-none transition-opacity hover:opacity-80"
          >
            🇬🇧
          </a>
          <a href="#contact" className="cta-primary hidden sm:inline-flex">
            Prendre rendez-vous
          </a>
        </div>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section className="border-b border-border/40">
      <Container className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Ce qui ne se mesure pas ne se maîtrise pas.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            CLM Industry identifie, mesure et surveille les émissions de gaz industriels sur votre
            site — pour vous permettre de respecter vos obligations VLEP et CMR, et d'optimiser vos
            installations.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="cta-primary">
              Prendre rendez-vous
            </a>
            <a href="#offres" className="cta-outline">
              Découvrir nos offres
            </a>
          </div>
        </div>
        <div className="relative">
          <div
            className="absolute inset-0 -z-10 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(33,150,182,0.35), transparent 70%)",
            }}
          />
          <img
            src={xfi9}
            alt="Analyseur XFi-9 — laser OPO pour la mesure de gaz industriels"
            width={1024}
            height={1024}
            className="relative w-full rounded-lg border border-border/60 shadow-2xl"
          />
        </div>
      </Container>
    </section>
  );
}

function Regulatory() {
  return (
    <section id="sante" className="border-b border-border/40">
      <Container className="py-20 md:py-28">
        <h2 className="max-w-3xl text-3xl font-bold leading-tight text-accent md:text-4xl">
          Les gaz industriels, une obligation légale que vous ne pouvez pas ignorer
        </h2>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Dans tout environnement industriel, des composés organiques volatils (COV) s'évaporent
              dans l'air. Benzène, formaldéhyde, fréons — ces molécules sont invisibles, mais leurs
              effets sur la santé des travailleurs sont documentés et leurs seuils d'exposition
              strictement encadrés par la loi.
            </p>
            <p>
              Le Code du travail impose à tout employeur de mesurer régulièrement l'exposition de
              ses salariés aux agents chimiques dangereux. Pour les substances CMR (Cancérogènes,
              Mutagènes et Reprotoxiques), un contrôle par organisme accrédité est obligatoire au
              moins une fois par an.
            </p>
            <p className="text-foreground">
              En cas de dépassement d'une VLEP contraignante : arrêt immédiat des postes de travail
              concernés.
            </p>
          </div>
          <div className="rounded-lg border-2 border-accent bg-card p-8 shadow-lg">
            <div className="text-5xl font-extrabold leading-none text-accent md:text-6xl">
              0,2 ppm
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Valeur limite d'exposition au benzène — abaissée en avril 2024.{" "}
              <span className="text-foreground">Votre site est-il en conformité ?</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Problem() {
  const rows = [
    ["Identification des molécules", "✗ Mesure globale uniquement", "✓ 500+ espèces identifiées"],
    ["Précision", "Ordre du ppm", "Ordre du ppb"],
    ["Différenciation CMR", "✗ Impossible", "✓ Instantanée"],
    ["Consommables", "Gaz vecteurs, tubes, filtres", "Zéro consommable"],
    ["Déploiement", "Lourd et intrusif", "< 1 heure sur site"],
  ];
  return (
    <section className="border-b border-border/40 bg-[color:var(--footer)]">
      <Container className="py-20 md:py-28">
        <h2 className="max-w-3xl text-3xl font-bold leading-tight text-foreground md:text-4xl">
          Pourquoi les méthodes de mesure classiques ne suffisent plus
        </h2>
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Les capteurs FID et PID traditionnels mesurent le carbone organique total présent dans
            l'air. Ils détectent une présence de gaz — mais sont incapables d'identifier précisément
            quelle molécule ils mesurent.
          </p>
          <p>
            Résultat : vous savez qu'il y a quelque chose dans l'air. Vous ne savez pas si c'est du
            benzène à 0,2 ppm ou un solvant inoffensif. Sans identification précise, la conformité
            VLEP ne peut pas être garantie avec certitude.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-accent text-accent-foreground">
                <th className="px-5 py-4 font-semibold">Critère</th>
                <th className="px-5 py-4 font-semibold">Capteurs classiques FID/PID</th>
                <th className="px-5 py-4 font-semibold">CLM Industry OPO Laser</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([c, a, b], i) => (
                <tr
                  key={c}
                  className={i % 2 === 0 ? "bg-background" : "bg-card"}
                >
                  <td className="px-5 py-4 font-medium text-foreground">{c}</td>
                  <td className="px-5 py-4 text-muted-foreground">{a}</td>
                  <td className="px-5 py-4 text-accent">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

function Solution() {
  const stats = [
    ["500+", "espèces gazeuses identifiables"],
    ["< 1h", "déploiement sur site, sans interruption de production"],
    ["ppb", "niveau de précision de détection"],
  ];
  return (
    <section id="techno" className="border-b border-border/40">
      <Container className="py-20 md:py-28">
        <h2 className="max-w-3xl text-3xl font-bold leading-tight text-accent md:text-4xl">
          CLM Industry : la mesure de gaz industriels à la résolution spectrale
        </h2>
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            CLM Industry réalise des campagnes de mesure de gaz sur site industriel, en s'appuyant
            sur un analyseur propriétaire unique en France : le XFi-9, basé sur la technologie OPO
            Laser (Oscillateur Paramétrique Optique), issue de l'aérospatial.
          </p>
          <p>
            Contrairement aux capteurs classiques, le XFi-9 lit l'empreinte infrarouge de chaque
            molécule présente dans l'air. Il identifie et mesure simultanément jusqu'à 10 gaz
            différents en temps réel, parmi plus de 500 espèces gazeuses.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stats.map(([n, l]) => (
            <div key={l} className="card-hover rounded-lg border border-border bg-card p-8">
              <div className="text-5xl font-extrabold leading-none text-accent">{n}</div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Offers() {
  const offers = [
    {
      tag: "Offre 1",
      title: "Santé & Environnement",
      subtitle: "Pour connaître précisément ce que respirent vos équipes",
      text:
        "Campagne de mesure ponctuelle — identification exhaustive des gaz présents sur votre site à un instant T. Rapport de conformité VLEP remis en fin de mission.",
    },
    {
      tag: "Offre 2",
      title: "Émissions & Performance",
      subtitle: "Pour piloter vos émissions dans la durée et optimiser vos installations",
      text:
        "Monitoring continu sur 1 à 2 mois — mesures amont/aval de vos systèmes d'abattage, reporting régulier, données pour piloter vos cycles de production.",
    },
  ];
  return (
    <section id="offres" className="border-b border-border/40 bg-[color:var(--footer)]">
      <Container className="py-20 md:py-28">
        <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
          Deux offres adaptées à votre situation
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {offers.map((o) => (
            <article
              key={o.title}
              className="card-hover relative overflow-hidden rounded-lg border border-border bg-card p-8"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-accent" />
              <div className="text-xs font-semibold uppercase tracking-widest text-accent">
                {o.tag}
              </div>
              <h3 className="mt-4 text-2xl font-bold text-foreground">{o.title}</h3>
              <p className="mt-2 italic text-muted-foreground">{o.subtitle}</p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{o.text}</p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
              >
                Découvrir l'offre <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function References() {
  const logos = [
    "Air Liquide",
    "TotalEnergies",
    "Arkema",
    "BASF",
    "Sanofi",
    "Engie",
    "—",
    "—",
  ];
  return (
    <section id="roi" className="border-b border-border/40">
      <Container className="py-20 md:py-28">
        <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
          Ils nous font confiance
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          CLM Industry intervient sur les sites industriels des plus grands groupes français et
          internationaux.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {logos.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="card-hover flex h-24 items-center justify-center rounded-lg border border-border bg-card px-4 text-center text-sm font-semibold uppercase tracking-wider text-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="border-t-2 border-accent">
      <Container className="py-20 text-center md:py-28">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-foreground md:text-4xl">
          Prêt à prendre le contrôle de vos émissions invisibles ?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Nos experts analysent votre situation et vous proposent la campagne de mesure adaptée à
          votre site, vos contraintes réglementaires et vos objectifs d'optimisation.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="mailto:contact@clm-industry.fr" className="cta-primary">
            Prendre rendez-vous
          </a>
          <a href="mailto:contact@clm-industry.fr" className="cta-outline">
            Nous contacter
          </a>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[color:var(--footer)]">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-1 text-sm text-muted-foreground">
            <div className="text-base font-extrabold uppercase tracking-wider text-foreground">
              CLM Industry
            </div>
            <div>C.L.M.I. S.A.R.L.</div>
            <div>5 rue du Général Leclerc, 78000 Versailles</div>
          </div>
          <nav className="flex flex-wrap items-start gap-6 text-sm md:justify-center">
            <a href="#" className="text-muted-foreground hover:text-accent">Accueil</a>
            <a href="#offres" className="text-muted-foreground hover:text-accent">Offres</a>
            <a href="#techno" className="text-muted-foreground hover:text-accent">Technologie</a>
            <a href="#contact" className="text-muted-foreground hover:text-accent">Contact</a>
          </nav>
          <div className="space-y-1 text-sm text-muted-foreground md:text-right">
            <a
              href="mailto:contact@clm-industry.fr"
              className="block text-foreground hover:text-accent"
            >
              contact@clm-industry.fr
            </a>
            <div>+33 (0)1 00 00 00 00</div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div className="flex flex-wrap gap-5">
            <a href="#" className="hover:text-accent">Mentions légales</a>
            <a href="#" className="hover:text-accent">Politique de confidentialité</a>
          </div>
          <div>© 2026 CLM Industry</div>
        </div>
      </Container>
    </footer>
  );
}
