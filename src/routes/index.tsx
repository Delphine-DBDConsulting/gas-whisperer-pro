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

import { designVisuals, MolecularScanner, SolutionCards, SavingsBand, SectorExplorer } from "@/components/site/design-v2";
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
      { property: "og:image", content: designVisuals.factory },
      { name: "twitter:image", content: designVisuals.factory },
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
      <Applications />
      <HomeSavings />
      <TestimonialCarousel title="Ce qu'en disent nos clients" />
      <CampaignSteps />
      <BlogTeaser />
      <FinalCta />
    </>
  );
}

function Hero() {
 return <section className="v2-home-hero relative overflow-hidden"><img src={designVisuals.factory} alt="" aria-hidden="true" className="hero-photo absolute inset-0 h-full w-full object-cover"/><div className="hero-shade absolute inset-0" aria-hidden="true"/><Container className="relative grid min-h-[580px] items-center gap-8 py-16 lg:grid-cols-[1.05fr_1fr]"><div><h1 className="font-extrabold leading-[1.08]">Révéler l'invisible.</h1><p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">Identification, mesure et surveillance des émissions de gaz industriels — pour la sécurité de vos équipes, la conformité aux Valeurs Limites d'Exposition Professionnelle et l'optimisation de vos installations.</p><div className="mt-8 flex flex-wrap gap-4"><BookingButton/><a href="#solutions" className="cta-outline">Nos solutions de mesure</a></div><div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground"><span><span className="text-accent-light">★★★★★</span> <strong className="text-foreground">4,9/5</strong> satisfaction client</span><span><strong className="text-foreground">120+</strong> campagnes réalisées</span></div></div><Parallax strength={22}><div className="relative pb-8 pt-12"><img src={designVisuals.analyzer} alt="Analyseur XFLR-9® — technologie OPO Laser" className="hero-instrument"/><span className="hero-measure left-0 top-4">Benzène <span className="ml-2 text-muted-foreground">0,2 ppm</span></span><span className="hero-measure right-0 top-20">Formaldéhyde <span className="ml-2 text-muted-foreground">0,08 ppm</span></span><span className="hero-measure bottom-0 left-1/3">Toluène <span className="ml-2 text-muted-foreground">2,4 ppm</span></span></div></Parallax></Container></section>;
}

const BenzeneSvg = () => (
  <svg width="100%" viewBox="0 0 120 120" role="img" aria-label="Molécule de benzène C6H6">
    <g stroke="var(--accent-light)" strokeWidth="2" fill="none">
      <polygon points="60,18 95,38 95,78 60,98 25,78 25,38" />
      <circle cx="60" cy="58" r="18" strokeDasharray="4,3" strokeWidth="1" />
      <line x1="60" y1="8" x2="60" y2="18" />
      <line x1="104" y1="33" x2="95" y2="38" />
      <line x1="104" y1="83" x2="95" y2="78" />
      <line x1="60" y1="108" x2="60" y2="98" />
      <line x1="16" y1="83" x2="25" y2="78" />
      <line x1="16" y1="33" x2="25" y2="38" />
    </g>
    <g fill="var(--muted-foreground)" fontSize="10" textAnchor="middle">
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
      <line x1="60" y1="62" x2="60" y2="32" stroke="var(--accent-light)" strokeWidth="2.5" />
      <line x1="64" y1="62" x2="64" y2="32" stroke="var(--accent-light)" strokeWidth="2.5" />
      <line x1="60" y1="68" x2="35" y2="90" stroke="var(--muted-foreground)" strokeWidth="1.5" />
      <line x1="60" y1="68" x2="85" y2="90" stroke="var(--muted-foreground)" strokeWidth="1.5" />
    </g>
    <text x="62" y="28" textAnchor="middle" fontSize="14" fontWeight="500" fill="var(--accent-light)">O</text>
    <text x="62" y="72" textAnchor="middle" fontSize="14" fontWeight="500" fill="currentColor">C</text>
    <text x="28" y="102" textAnchor="middle" fontSize="13" fill="var(--muted-foreground)">H</text>
    <text x="92" y="102" textAnchor="middle" fontSize="13" fill="var(--muted-foreground)">H</text>
  </svg>
);

const TrichloroSvg = () => (
  <svg width="100%" viewBox="0 0 120 120" role="img" aria-label="Molécule de trichloroéthylène C2HCl3">
    <g fill="none">
      <line x1="40" y1="62" x2="80" y2="62" stroke="var(--accent-light)" strokeWidth="2.5" />
      <line x1="40" y1="57" x2="80" y2="57" stroke="var(--accent-light)" strokeWidth="2.5" />
      <line x1="40" y1="60" x2="18" y2="85" stroke="var(--muted-foreground)" strokeWidth="1.5" />
      <line x1="40" y1="60" x2="18" y2="35" stroke="var(--muted-foreground)" strokeWidth="1.5" />
      <line x1="80" y1="60" x2="102" y2="35" stroke="var(--muted-foreground)" strokeWidth="1.5" />
      <line x1="80" y1="60" x2="92" y2="88" stroke="var(--muted-foreground)" strokeWidth="1.5" />
    </g>
    <text x="38" y="60" textAnchor="middle" fontSize="13" fontWeight="500" fill="currentColor">C</text>
    <text x="82" y="60" textAnchor="middle" fontSize="13" fontWeight="500" fill="currentColor">C</text>
    <text x="12" y="98" textAnchor="middle" fontSize="12" fill="var(--accent-light)">Cl</text>
    <text x="10" y="30" textAnchor="middle" fontSize="12" fill="var(--accent-light)">Cl</text>
    <text x="108" y="30" textAnchor="middle" fontSize="12" fill="var(--accent-light)">Cl</text>
    <text x="96" y="102" textAnchor="middle" fontSize="12" fill="var(--muted-foreground)">H</text>
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
        <div className="grid gap-8 lg:grid-cols-2"><h2 className="max-w-3xl text-3xl font-bold leading-tight text-foreground md:text-4xl">
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

        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {molecules.map((m) => (
            <article
              key={m.name}
              className="card-hover flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center"
            >
              <div className="molecule-turn w-28 text-foreground">{m.svg}</div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{m.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.formula}</p>
              <div className="mt-5 text-[22px] font-medium text-accent">{m.vlep}</div>
              <p className="mt-1 text-xs text-muted-foreground">VLEP contraignante</p>
              <span className="mt-5 inline-flex rounded-full bg-destructive/15 px-3 py-1 text-xs font-semibold text-destructive">
                {m.badge}
              </span>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/sante-environnement" className="cta-outline">
            Votre site est-il en conformité ? <span aria-hidden>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

function Solution() {
 return <section className="bg-surface"><Container className="grid items-center gap-10 py-16 lg:grid-cols-2"><div><h2 className="font-bold">CLM Industry : la mesure de gaz industriels à la résolution spectrale</h2><p className="mt-5 text-sm leading-relaxed text-muted-foreground">CLM Industry réalise des campagnes de mesure de gaz sur site industriel, en s'appuyant sur un analyseur propriétaire unique en France : le XFLR-9®, basé sur la technologie OPO Laser (Oscillateur Paramétrique Optique), issue de l'aérospatial.</p><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Contrairement aux capteurs classiques, le XFLR-9® lit l'empreinte infrarouge de chaque molécule présente dans l'air — comme un scanner moléculaire. Il identifie et mesure simultanément jusqu'à 10 gaz différents en temps réel, parmi plus de 500 espèces gazeuses, avec une précision à l'ordre du ppb.</p><div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">{[["500+","espèces gazeuses"],["ppb","niveau de précision"],["< 1h","déploiement sur site"]].map(([n,l])=><div key={n}><strong className="text-2xl text-accent-light">{n}</strong><p className="mt-2 text-xs text-muted-foreground">{l}</p></div>)}</div><Link to="/technologie" className="cta-outline mt-8">Comprendre la technologie OPO Laser →</Link></div><MolecularScanner/></Container></section>;
}

function Solutions() {
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
        <div className="mt-10"><SolutionCards /></div>

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
        <SectorExplorer items={applications} />
        <Link
          to="/cas-clients" hash="secteurs"
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

function HomeSavings() { return <section><Container className="space-y-6 py-16"><h2 className="font-bold">La preuve en chiffres</h2><SavingsBand/><SavingsBand kind="rto"/></Container></section>; }
