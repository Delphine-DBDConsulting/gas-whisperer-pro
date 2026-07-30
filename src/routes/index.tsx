import { createFileRoute, Link } from "@tanstack/react-router";

import xfi9 from "@/assets/xfi9-analyzer.jpg";
import { BookingButton } from "@/components/site/booking";
import { Container } from "@/components/site/container";
import { LogoMarquee } from "@/components/site/logo-marquee";


const DESCRIPTION =
  "CLM Industry réalise des campagnes de mesure de gaz industriels sur site. Identification de 500+ espèces gazeuses, conformité VLEP/CMR garantie, rapport remis en fin de mission. Analyseur XFLR-9 technologie OPO Laser.";

const TITLE = "Mesure de gaz industriels | Conformité VLEP et CMR | CLM Industry";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gas-whisperer-pro.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://gas-whisperer-pro.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "CLM Industry",
          legalName: "C.L.M.I. S.A.R.L.",
          description: DESCRIPTION,
          email: "sales@clm-industry.fr",
          address: {
            "@type": "PostalAddress",
            streetAddress: "5 rue du Général Leclerc",
            postalCode: "78000",
            addressLocality: "Versailles",
            addressCountry: "FR",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Regulatory />
      <Solution />
      <Offers />
      <References />
      <LogoMarquee />
      <FinalCta />
    </>
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
            <BookingButton />
            <Link to="/offres" className="cta-outline">
              Découvrir nos offres
            </Link>
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
            alt="Analyseur XFLR-9 — technologie OPO Laser pour la mesure de gaz industriels"
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
    <section className="border-b border-border/40">
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
              Valeur limite d'exposition au benzène, abaissée en avril 2024.{" "}
              <span className="text-foreground">Votre site est-il en conformité ?</span>
            </p>
          </div>
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
    <section className="border-b border-border/40 bg-[color:var(--footer)]">
      <Container className="py-20 md:py-28">
        <h2 className="max-w-3xl text-3xl font-bold leading-tight text-accent md:text-4xl">
          CLM Industry : la mesure de gaz industriels à la résolution spectrale
        </h2>
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            CLM Industry réalise des campagnes de mesure de gaz sur site industriel, en s'appuyant
            sur un analyseur propriétaire unique en France : le XFLR-9, basé sur la technologie OPO
            Laser (Oscillateur Paramétrique Optique), issue de l'aérospatial.
          </p>
          <p>
            Contrairement aux capteurs classiques, le XFLR-9 lit l'empreinte infrarouge de chaque
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

        <Link
          to="/technologie"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
        >
          Comprendre la technologie OPO Laser <span aria-hidden>→</span>
        </Link>
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
      to: "/offres/sante-environnement" as const,
    },
    {
      tag: "Offre 2",
      title: "Émissions & Performance",
      subtitle: "Pour piloter vos émissions dans la durée et optimiser vos installations",
      text:
        "Monitoring continu sur 1 à 2 mois — mesures amont/aval de vos systèmes d'abattage, reporting régulier, données pour piloter vos cycles de production.",
      to: "/offres/emissions-performance" as const,
    },
  ];
  return (
    <section className="border-b border-border/40">
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
              <Link
                to={o.to}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
              >
                Découvrir l'offre <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function References() {
  const sectors = [
    "Chimie & pétrochimie",
    "Pharmacie & cosmétique",
    "Traitement de surface",
    "Agroalimentaire",
  ];
  return (
    <section className="border-b border-border/40 bg-[color:var(--footer)]">
      <Container className="py-20 md:py-28">
        <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
          Des secteurs où chaque molécule compte
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          CLM Industry intervient sur des sites industriels soumis à des obligations VLEP et CMR
          strictes, en France et en Europe.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((name) => (
            <div
              key={name}
              className="card-hover flex h-24 items-center justify-center rounded-lg border border-border bg-card px-4 text-center text-sm font-semibold uppercase tracking-wider text-foreground"
            >
              {name}
            </div>
          ))}
        </div>
        <Link
          to="/references"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
        >
          Voir nos cas clients <span aria-hidden>→</span>
        </Link>
      </Container>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="border-t-2 border-accent">
      <Container className="py-20 text-center md:py-28">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-foreground md:text-4xl">
          Prêt à prendre le contrôle de vos émissions invisibles ?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Nos experts analysent votre situation et vous proposent la campagne de mesure adaptée à
          votre site, vos contraintes réglementaires et vos objectifs d'optimisation.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <BookingButton />
          <a href="mailto:sales@clm-industry.fr" className="cta-outline">
            Nous contacter
          </a>
        </div>
      </Container>
    </section>
  );
}
