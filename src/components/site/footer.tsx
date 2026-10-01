import { Link } from "@tanstack/react-router";
import { Linkedin, Mail } from "lucide-react";

import { Container } from "./container";
import { COMPANY } from "@/lib/company";
import logoAsset from "@/assets/clm-logo.svg.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-[color:var(--footer)]">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <img
                src={logoAsset.url}
                alt="CLM Industry"
                width="40"
                height="40"
                className="h-8 w-auto"
              />
              <span className="text-base font-extrabold uppercase tracking-wider text-foreground">
                CLM Industry
              </span>
            </div>
            <div>{COMPANY.legalName}</div>

            <div>{COMPANY.address}</div>
          </div>
          <nav className="flex flex-wrap items-start gap-x-6 gap-y-3 text-sm md:justify-center">
            <Link to="/" className="text-muted-foreground hover:text-accent">
              Accueil
            </Link>
            <Link to="/offres" className="text-muted-foreground hover:text-accent">
              Solutions
            </Link>
            <Link to="/technologie" className="text-muted-foreground hover:text-accent">
              Technologie
            </Link>
            <Link to="/cas-clients" className="text-muted-foreground hover:text-accent">
              Cas clients
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-accent">
              Contact
            </Link>
            <Link to="/faq" className="text-muted-foreground hover:text-accent">
              FAQ
            </Link>
            <Link to="/en/brochure" className="text-muted-foreground hover:text-accent">
              English brochure
            </Link>
          </nav>
          <div className="space-y-1 text-sm text-muted-foreground md:text-right">
            <a
              href={`mailto:${COMPANY.email}`}
              className="block text-foreground hover:text-accent"
            >
              {COMPANY.email}
            </a>
            <div className="flex gap-3 pt-3 md:justify-end">
              <a href={`mailto:${COMPANY.email}`} aria-label="Nous écrire" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground hover:border-accent hover:text-accent">
                <Mail className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/c-l-m-industry/" target="_blank" rel="noopener noreferrer" aria-label="CLM Industry sur LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground hover:border-accent hover:text-accent">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div className="flex flex-wrap gap-5">
            <Link to="/mentions-legales" className="hover:text-accent">
              Mentions légales
            </Link>
            <Link to="/politique-de-confidentialite" className="hover:text-accent">
              Politique de confidentialité
            </Link>
          </div>
          <div>© {new Date().getFullYear()} CLM Industry</div>
        </div>
      </Container>
    </footer>
  );
}