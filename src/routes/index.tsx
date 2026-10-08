import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Brush,
  CircuitBoard,
  Factory,
  FireExtinguisher,
  FlaskConical,
  Leaf,
  Pill,
  ShieldAlert,
  Snowflake,
  TrendingUp,
} from "lucide-react";

import usineFiligrane from "@/assets/usine-filigrane.jpg.asset.json";
import xflr9 from "@/assets/xflr9-analyzer.png.asset.json";
import { BookingButton } from "@/components/site/booking";
import { Container } from "@/components/site/container";
import { LogoMarquee } from "@/components/site/logo-marquee";
import { posts } from "@/lib/blog";
import { Parallax, StepTimeline, TestimonialCarousel } from "@/components/site/page-kit";

const DESCRIPTION =
  "CLM Industry réalise des campagnes de mesure de gaz industriels sur site. Identification ad nihilo de 500+ espèces gazeuses, conformité VLEP/CMR, optimisation des systèmes d'abattage. Analyseur XFLR-9 technologie OPO Laser.";

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
      <LogoMarquee />
      <Regulatory />
      <Solution />
      <Solutions />
      <TestimonialCarousel title="Ce qu'en disent nos clients" />
      <CampaignSteps />
      <Applications />
      <BlogTeaser />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${usineFiligrane.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,17,32,0.88) 0%, rgba(10,17,32,0.6) 50%, rgba(10,17,32,0.15) 100%)",
        }}
      />
      <Container className="relative grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Révéler l'invisible.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Identification, mesure et surveillance des émissions de gaz industriels — pour la
            sécurité de vos équipes, la conformité aux Valeurs Limites d'Exposition Professionnelle
            et l'optimisation de vos installations.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <BookingButton />
            <a href="#solutions" className="cta-outline">
              Nos solutions de mesure
            </a>
          </div>
          {/* Preuve sociale — chiffres factices à faire valider par le client */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span><span className="text-accent">★★★★★</span> <strong className="text-foreground">4,9/5</strong> satisfaction client</span>
            <span><strong className="text-foreground">120+</strong> campagnes réalisées</span>
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
          <Parallax strength={30}>
          <img
            src={xflr9.url}
            alt="Analyseur XFLR-9 — technologie OPO Laser pour la mesure de gaz industriels"
            width={1148}
            height={794}
            className="relative w-full rounded-lg border border-border/60 shadow-2xl"
          />
          </Parallax>
        </div>
      </Container>
    </section>
  );
}

const BenzeneSvg = () => (
  <svg width="100%" viewBox="0 0 120 120" role="img" aria-label="Molécule de benzène C6H6">
    <g stroke="#2196B6" strokeWidth="2" fill="none">
      <polygon points="60,18 95,38 95,78 60,98 25,78 25,38" />
      <circle cx="60" cy="58" r="18" strokeDasharray="4,3" strokeWidth="1" />
      <line x1="60" y1="8" x2="60" y2="18" />
      <line x1="104" y1="33" x2="95" y2="38" />
      <line x1="104" y1="83" x2="95" y2="78" />
      <line x1="60" y1="108" x2="60" y2="98" />
      <line x1="16" y1="83" x2="25" y2="78" />
      <line x1="16" y1="33" x2="25" y2="38" />
    </g>
    <g fill="#8b98a9" fontSize="10" textAnchor="middle">
      <text x="60" y="6">H</text>
      <text x="111" y="34">H</text>
      <text x="111" y="88">H</text>
      <text x="60" y="116">H</text>
      <text x="9" y="88">H</text>
      <text x="9" y="34">H</text>
    </g>
  </svg>
);

const FormaldehydeSvg = () => (
  <svg width="100%" viewBox="0 0 120 120" role="img" aria-label="Molécule de formaldéhyde CH2O">
    <g fill="none">
      <line x1="60" y1="62" x2="60" y2="32" stroke="#2196B6" strokeWidth="2.5" />
      <line x1="64" y1="62" x2="64" y2="32" stroke="#2196B6" strokeWidth="2.5" />
      <line x1="60" y1="68" x2="35" y2="90" stroke="#8b98a9" strokeWidth="1.5" />
      <line x1="60" y1="68" x2="85" y2="90" stroke="#8b98a9" strokeWidth="1.5" />
    </g>
    <text x="62" y="28" textAnchor="middle" fontSize="14" fontWeight="500" fill="#2196B6">O</text>
    <text x="62" y="72" textAnchor="middle" fontSize="14" fontWeight="500" fill="currentColor">C</text>
    <text x="28" y="102" textAnchor="middle" fontSize="13" fill="#8b98a9">H</text>
    <text x="92" y="102" textAnchor="middle" fontSize="13" fill="#8b98a9">H</text>
  </svg>
);

const TrichloroSvg = () => (
  <svg width="100%" viewBox="0 0 120 120" role="img" aria-label="Molécule de trichloroéthylène C2HCl3">
    <g fill="none">
      <line x1="40" y1="62" x2="80" y2="62" stroke="#2196B6" strokeWidth="2.5" />
      <line x1="40" y1="57" x2="80" y2="57" stroke="#2196B6" strokeWidth="2.5" />
      <line x1="40" y1="60" x2="18" y2="85" stroke="#8b98a9" strokeWidth="1.5" />
      <line x1="40" y1="60" x2="18" y2="35" stroke="#8b98a9" strokeWidth="1.5" />
      <line x1="80" y1="60" x2="102" y2="35" stroke="#8b98a9" strokeWidth="1.5" />
      <line x1="80" y1="60" x2="92" y2="88" stroke="#8b98a9" strokeWidth="1.5" />
    </g>
    <text x="38" y="60" textAnchor="middle" fontSize="13" fontWeight="500" fill="currentColor">C</text>
    <text x="82" y="60" textAnchor="middle" fontSize="13" fontWeight="500" fill="currentColor">C</text>
    <text x="12" y="98" textAnchor="middle" fontSize="12" fill="#2196B6">Cl</text>
    <text x="10" y="30" textAnchor="middle" fontSize="12" fill="#2196B6">Cl</text>
    <text x="108" y="30" textAnchor="middle" fontSize="12" fill="#2196B6">Cl</text>
    <text x="96" y="102" textAnchor="middle" fontSize="12" fill="#8b98a9">H</text>
  </svg>
);

const molecules = [
  {
    svg: <BenzeneSvg />,
    name: "Benzène",
    formula: "C₆H₆",
    vlep: "0,2 ppm",
    badge: "CMR cat. 1A",
  },
  {
    svg: <FormaldehydeSvg />,
    name: "Formaldéhyde",
    formula: "CH₂O",
    vlep: "0,3 ppm",
    badge: "CMR cat. 1B",
  },
  {
    svg: <TrichloroSvg />,
    name: "Trichloroéthylène",
    formula: "C₂HCl₃",
    vlep: "10 ppm",
    badge: "CMR cat. 1B",
  },
];

function Regulatory() {
  return (
    <section className="border-b border-border/40">
      <Container className="py-20 md:py-28">
        <h2 className="max-w-3xl text-3xl font-bold leading-tight text-accent md:text-4xl">
          Les émissions de gaz industriels : un enjeu réglementaire et humain.
        </h2>
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Dans tout environnement industriel, des composés organiques volatils (COV) s'évaporent
            dans l'air. Benzène, formaldéhyde, fréons — ces molécules sont invisibles, mais leurs
            effets sur la santé des travailleurs sont documentés et leurs seuils d'exposition
            strictement encadrés par la loi.
          </p>
          <p>
            Le Code du travail impose à tout employeur de mesurer régulièrement l'exposition de ses
            salariés aux agents chimiques dangereux. Pour les substances Cancérogènes, Mutagènes et
            Reprotoxiques (CMR), un contrôle par organisme accrédité est obligatoire au moins une
            fois par an, et lors de tout changement susceptible d'avoir des conséquences sur
            l'exposition des travailleurs.
          </p>
          <p className="text-foreground">
            Le dépassement d'une Valeur Limite d'Exposition Professionnelle (VLEP) contraignante
            peut entraîner l'arrêt immédiat des postes de travail concernés, jusqu'à la mise en
            œuvre des mesures propres à assurer la protection des travailleurs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {molecules.map((m) => (
            <article
              key={m.name}
              className="card-hover flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center"
            >
              <div className="w-28 text-foreground">{m.svg}</div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{m.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.formula}</p>
              <div className="mt-5 text-[22px] font-medium text-accent">{m.vlep}</div>
              <p className="mt-1 text-xs text-muted-foreground">VLEP contraignante</p>
              <span className="mt-5 inline-flex rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-400">
                {m.badge}
              </span>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/offres/sante-environnement" className="cta-outline">
            Votre site est-il en conformité ? <span aria-hidden>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

function Solution() {
  const bullets = [
    [
      "Sécurité et santé sur site",
      "grâce à l'identification ad nihilo de plus de 500 espèces gazeuses (des COV aux NOx), le XFLR-9 permet de mener un véritable travail d'enquête sur votre site pour détecter et caractériser des gaz inconnus, et substances (CMR) que les capteurs classiques seraient incapables d'identifier.",
    ],
    [
      "Conformité réglementaire",
      "identification et quantification des substances CMR présentes sur vos postes de travail, pour répondre à vos obligations au regard des Valeurs Limites d'Exposition Professionnelle (VLEP).",
    ],
    [
      "Contrôle des systèmes d'abattage",
      "mesures simultanées en amont et en aval de vos installations (filtres à charbon actif, oxydateurs thermiques RTO, biofiltres, scrubbers) pour évaluer leur efficacité réelle et optimiser leur fonctionnement.",
    ],
  ];
  const stats = [
    ["500+", "espèces gazeuses identifiables"],
    ["< 1h", "déploiement sur site"],
    ["ppb", "niveau de précision"],
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
            molécule présente dans l'air — comme un scanner moléculaire. Il identifie et mesure
            simultanément jusqu'à 10 gaz différents en temps réel, parmi plus de 500 espèces
            gazeuses, avec une précision à l'ordre du ppb.
          </p>
          <p className="text-foreground">
            Ses applications couvrent l'ensemble des enjeux de la gestion des émissions
            industrielles :
          </p>
        </div>

        <ul className="mt-8 max-w-3xl space-y-5">
          {bullets.map(([label, text]) => (
            <li key={label} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
              <span aria-hidden className="mt-1 text-accent">
                —
              </span>
              <span>
                <strong className="font-semibold text-foreground">{label}</strong> — {text}
              </span>
            </li>
          ))}
        </ul>

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

function Solutions() {
  const solutions = [
    {
      title: "Santé & Environnement",
      situation: "Un contrôle est annoncé",
      text: "Identifier les molécules réellement présentes dans l'air de vos ateliers, poste par poste, et documenter votre conformité VLEP et CMR.",
      duration: "1 à 5 jours",
      image: xflr9.url,
      imageAlt: "Analyseur XFLR-9 utilisé pour les campagnes de mesure de gaz",
      Icon: ShieldAlert,
      to: "/offres/sante-environnement" as const,
    },
    {
      title: "Émissions & Performance",
      situation: "Un investissement est à arbitrer",
      text: "Mesurer le rendement réel de vos systèmes d'abattage, amont et aval, et optimiser vos cycles de production dans la durée.",
      duration: "1 à 2 mois",
      image: usineFiligrane.url,
      imageAlt: "Installations industrielles et cheminées d'usine",
      Icon: TrendingUp,
      to: "/offres/emissions-performance" as const,
    },
  ];
  return (
    <section id="solutions" className="scroll-mt-20 border-b border-border/40">
      <Container className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            Deux situations. Deux campagnes.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            On ne nous appelle pas par curiosité. On nous appelle parce qu'un contrôle est annoncé,
            ou parce qu'une installation coûte trop cher. Votre point de départ décide de la campagne.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {solutions.map((o) => (
            <article
              key={o.title}
              className="card-hover flex min-w-0 flex-col overflow-hidden border border-border bg-card"
            >
              <div className="h-48 overflow-hidden border-b border-border bg-footer md:h-56">
                <img src={o.image} alt={o.imageAlt} className={`h-full w-full ${o.Icon === ShieldAlert ? "object-contain p-5" : "object-cover"}`} loading="lazy" />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase text-accent">
                  <o.Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>{o.situation}</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">{o.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{o.text}</p>
                <div className="mt-auto flex flex-wrap items-end justify-between gap-5 pt-10">
                  <div>
                    <p className="text-xs font-semibold uppercase text-muted-foreground">Durée · Résultat</p>
                    <p className="mt-1 text-2xl font-extrabold text-foreground">{o.duration}</p>
                  </div>
                  <Link to={o.to} aria-label={`Découvrir ${o.title}`} className="inline-flex h-11 items-center gap-3 border border-accent px-5 text-sm font-semibold text-accent transition-colors hover:border-cta-hover hover:bg-cta-hover hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                    Découvrir <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            CLM Industry s'adresse essentiellement à deux types d'acteurs industriels. Les
            responsables de sites — directeurs industriels, responsables HSE et QHSE — qui doivent
            démontrer la conformité de leurs installations aux obligations réglementaires et
            garantir la sécurité de leurs équipes. Et les intégrateurs et installateurs de systèmes
            d'abattage des COV, qui souhaitent apporter à leurs clients la preuve mesurée de
            l'efficacité de leurs solutions.
          </p>
          <p className="text-foreground">
            Si vous êtes concernés ou que nos solutions répondent à vos enjeux, nous sommes
            disponibles pour en discuter.
          </p>
        </div>
        <div className="mt-10 text-center">
          <BookingButton />
        </div>
      </Container>
    </section>
  );
}

const applications = [
  {
    Icon: FlaskConical,
    title: "Chimie industrielle",
    desc: "Solvants, résines, agents de nettoyage, intermédiaires de réaction",
  },
  {
    Icon: Snowflake,
    title: "Réfrigération & transfert thermique",
    desc: "Fluides frigorigènes CFC, HCFC, HFC, ammoniac",
  },
  {
    Icon: Brush,
    title: "Peintures, revêtements & colles",
    desc: "Solvants, encres, vernis, adhésifs",
  },
  {
    Icon: Leaf,
    title: "Agroalimentaire & fragrances",
    desc: "Arômes, agents de fermentation, agrochimie",
  },
  {
    Icon: Factory,
    title: "Pétrochimie & énergie",
    desc: "Carburants, additifs, hydrocarbures, biocarburants",
  },
  {
    Icon: Pill,
    title: "Pharmacie & biotech",
    desc: "Principes actifs, solvants de synthèse, biomarqueurs",
  },
  {
    Icon: CircuitBoard,
    title: "Microélectronique",
    desc: "Gravure plasma, dépôt de couches minces, agents de fabrication",
  },
  {
    Icon: FireExtinguisher,
    title: "Sécurité incendie",
    desc: "Agents extincteurs, systèmes de suppression Halon/FM-200",
  },
];

function CampaignSteps() {
  return (
    <section className="border-b border-border/40">
      <Container className="py-16 md:py-24">
        <StepTimeline
          title="Une campagne en 3 étapes"
          steps={[
            { title: "Préparation", text: "Procédés, molécules cibles, points de mesure." },
            { title: "Mesures sur site", text: "Installation en moins d'une heure, sans arrêt de production." },
            { title: "Rapport", text: "Résultats molécule par molécule, daté et signé." },
          ]}
        />
      </Container>
    </section>
  );
}

function Applications() {
  return (
    <section className="border-b border-border/40 bg-[color:var(--footer)]">
      <Container className="py-20 md:py-28">
        <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
          Nos domaines d'application
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Le XFLR-9 identifie et mesure les émissions gazeuses dans l'ensemble des environnements
          industriels émetteurs de COV et de NOx, en France et en Europe.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {applications.map(({ Icon, title, desc }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-accent"
            >
              <span className="absolute inset-x-0 top-0 h-[2px] bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
              <Icon className="mx-auto h-7 w-7 text-accent" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-4 text-sm font-medium text-foreground">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
        <Link
          to="/cas-clients"
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
        <div className="mt-10 flex justify-center">
          <BookingButton />
        </div>
      </Container>
    </section>
  );
}

function BlogTeaser() {
  return (
    <section className="border-b border-border/40">
      <Container className="py-20 md:py-28">
        <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
          Derniers articles
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Réglementation, technologie, retours terrain — les sujets qui comptent pour les
          responsables HSE et les industriels.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <article
              key={post.slug}
              className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-xl"
            >
              <span className="absolute inset-x-0 top-0 h-[2px] bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="w-fit rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                {post.category}
              </span>
              <h3 className="mt-4 text-base font-bold leading-snug text-foreground">{post.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{post.date}</p>
              <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="mt-auto pt-5">
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="text-sm font-semibold text-accent transition-colors hover:text-foreground"
                >
                  Lire l'article <span aria-hidden>→</span>
                </Link>
                <div className="mt-5 border-t border-border/60" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
          >
            Voir tous les articles <span aria-hidden>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
