import { Link } from "@tanstack/react-router";
import { ArrowRight, Atom, Check, ShieldAlert, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "./container";
import analyzer from "@/assets/design-v2/xflr9-analyseur-detoure.png.asset.json";
import factory from "@/assets/usine-filigrane.jpg.asset.json";
import report from "@/assets/design-v2/graphique-rapport-sante-environnement.svg.asset.json";
import process from "@/assets/design-v2/schema-processus-mesure-amont-aval.svg.asset.json";
import multi from "@/assets/design-v2/graphique-multi-especes-vlep.svg.asset.json";
import plan from "@/assets/design-v2/plan-atelier-points-prelevement.svg.asset.json";
import content from "@/content/solutions.json";

export const designVisuals = { analyzer: analyzer.url, factory: factory.url, report: report.url, process: process.url, multi: multi.url, plan: plan.url };

export function MolecularScanner() {
  return <div className="molecular-scanner" role="img" aria-label="Balayage spectral et identification de la molécule de benzène">
    <div className="flex items-center justify-between text-xs text-muted-foreground"><span>SCAN SPECTRAL · OPO LASER</span><span className="text-accent-light">XFLR-9®</span></div>
    <svg viewBox="0 0 400 220" className="scanner-molecule" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="2"><polygon points="200,35 265,73 265,148 200,185 135,148 135,73"/><circle cx="200" cy="110" r="43" strokeDasharray="5 5"/>{[[200,35],[265,73],[265,148],[200,185],[135,148],[135,73]].map(([x,y])=><circle key={`${x}-${y}`} cx={x} cy={y} r="9" fill="currentColor"/>)}</g></svg>
    <div className="scanner-beam" aria-hidden="true" />
    <div className="flex items-center justify-between border-t border-border pt-4 text-xs"><span className="text-muted-foreground">C₆H₆ · Benzène</span><span className="text-accent-light">Empreinte identifiée <Check className="ml-1 inline h-3 w-3" /></span></div>
  </div>;
}

export function SolutionCards() {
  return <div className="grid gap-6 lg:grid-cols-2">{content.forks.map((o,i)=>{
    const Icon=i===0?ShieldAlert:TrendingUp;
    return <article key={o.title} className="card-hover flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card">
      <div className="h-52 overflow-hidden border-b border-border bg-footer"><img src={i===0?analyzer.url:factory.url} alt={i===0?"Analyseur XFLR-9®":"Site industriel et installations d'abattage"} className={`h-full w-full ${i===0?"object-contain p-5":"object-cover"}`} loading="lazy" /></div>
      <div className="flex flex-1 flex-col p-7"><div className="flex items-center gap-2 text-xs font-semibold uppercase text-accent-light"><Icon className="h-5 w-5" strokeWidth={1.5}/>{o.trigger}</div><h3 className="mt-4 text-2xl font-bold">{o.title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{o.text}</p><div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-7"><div><p className="text-xs uppercase text-muted-foreground">{o.statLabel}</p><p className="mt-1 text-2xl font-bold">{o.stat}</p></div><Button variant="discover" asChild><Link to={i===0?"/sante-environnement":"/emissions-performance"}>Découvrir <ArrowRight/></Link></Button></div></div>
    </article>;
  })}</div>;
}

export function SavingsBand({ kind="filters" }: { kind?: "filters"|"rto" }) {
  return <div className="savings-band"><div className="text-xs font-semibold uppercase text-accent-light">{kind==="filters"?"Industrie pharmaceutique · Charbons actifs":"Industrie chimique · Oxydateur thermique RTO"}</div><div className="mt-5 grid items-center gap-6 sm:grid-cols-[1fr_auto_1fr_auto]"><div><p className="text-xs text-muted-foreground">Avant la campagne</p><strong className="mt-1 block text-2xl text-muted-foreground line-through">{kind==="filters"?"520 000 €":"50 m³/h"}</strong></div><ArrowRight className="h-5 w-5 text-accent"/><div><p className="text-xs text-muted-foreground">Après la campagne</p><strong className="mt-1 block text-2xl">{kind==="filters"?"390 000 €":"−25 %"}</strong></div><div className="rounded-md bg-accent px-5 py-4 text-accent-foreground"><strong className="block text-2xl">{kind==="filters"?"130 000 €":"164 250 €"}</strong><span className="text-xs">d'économie par an</span></div></div></div>;
}

export function SectorExplorer({ items }: { items: {title:string; desc:string; Icon: typeof Atom}[] }) {
  const [active,setActive]=useState(0);
  return <><div className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-4 xl:grid-cols-8">{items.map((s,i)=><Button key={s.title} variant="ghost" className={`h-auto min-h-28 flex-col whitespace-normal px-2 py-4 text-center text-xs ${active===i?"bg-card text-accent-light":"text-muted-foreground"}`} onMouseEnter={()=>setActive(i)} onFocus={()=>setActive(i)} onClick={()=>setActive(i)}><s.Icon className="mb-2 h-6 w-6"/>{s.title}</Button>)}</div><div className="mt-4 min-h-20 border-l-2 border-accent bg-footer p-5 text-sm text-muted-foreground" aria-live="polite"><strong className="mr-2 text-foreground">{items[active]?.title}</strong>{items[active]?.desc}</div></>;
}

export function LegalTabs() {
  return <Container className="py-5"><nav aria-label="Informations légales" className="flex flex-wrap gap-3"><Button asChild variant="discover"><Link to="/mentions-legales" activeProps={{className:"bg-accent text-accent-foreground"}}>Mentions légales</Link></Button><Button asChild variant="discover"><Link to="/politique-de-confidentialite" activeProps={{className:"bg-accent text-accent-foreground"}}>Politique de confidentialité</Link></Button></nav></Container>;
}

export function LegalContents({ titles }: {titles:string[]}) {
  return <nav aria-label="Sommaire" className="legal-contents"><p className="mb-4 text-xs font-semibold uppercase text-accent-light">Sommaire</p>{titles.map((t,i)=><a key={t} href={`#legal-${i}`} className="block border-l border-border px-3 py-2 text-sm text-muted-foreground hover:border-accent hover:text-accent-light">{t}</a>)}</nav>;
}