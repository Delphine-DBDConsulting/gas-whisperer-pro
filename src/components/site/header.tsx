import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Container } from "./container";
import logoAsset from "@/assets/clm-logo.svg.asset.json";


const navLinks = [
  { to: "/offres", label: "Solutions" },
  { to: "/technologie", label: "Technologie" },
  { to: "/references", label: "Cas clients" },
  { to: "/contact", label: "Contact" },
] as const;

const solutionLinks = [
  { to: "/sante-environnement", label: "Santé & Environnement" },
  { to: "/offres/emissions-performance", label: "Émissions & Performance" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoAsset.url}
            alt="CLM Industry"
            width="40"
            height="40"
            className="h-8 w-auto md:h-9"
          />
          <span className="text-lg font-extrabold uppercase tracking-wider text-foreground">
            CLM Industry
          </span>
        </Link>


        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) =>
            l.label === "Solutions" ? (
              <div key={l.to} className="group relative">
                <Link
                  to={l.to}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
                  activeProps={{ className: "text-accent" }}
                >
                  {l.label}
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-lg border border-border bg-card p-2 shadow-xl">
                    {solutionLinks.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent"
                        activeProps={{ className: "text-accent" }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
              activeProps={{ className: "text-accent" }}
            >
              {l.label}
            </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/en/brochure"
            aria-label="English brochure"
            title="English brochure"
            className="rounded border border-border px-2 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            EN
          </Link>
          <Link to="/contact" className="cta-primary hidden sm:inline-flex">
            Prendre rendez-vous
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <div key={l.to}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-muted-foreground transition-colors hover:text-accent"
                activeProps={{ className: "text-accent" }}
              >
                {l.label}
              </Link>
              {l.label === "Solutions"
                ? solutionLinks.slice(0, 2).map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
                      activeProps={{ className: "text-accent" }}
                    >
                      {s.label}
                    </Link>
                  ))
                : null}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="cta-primary mt-3 sm:hidden"
            >
              Prendre rendez-vous
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}