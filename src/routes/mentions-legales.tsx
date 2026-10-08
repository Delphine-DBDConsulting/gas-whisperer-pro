import { createFileRoute } from "@tanstack/react-router";

import { Container, PageHeader } from "@/components/site/container";
import { COMPANY } from "@/lib/company";

const DESCRIPTION =
  "Mentions légales du site CLM Industry : éditeur, directeur de publication, hébergement et propriété intellectuelle.";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — CLM Industry" },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Mentions légales — CLM Industry" },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: MentionsLegales,
});

function MentionsLegales() {
  return (
    <>
      <PageHeader title="Mentions légales" />
      <Container className="max-w-3xl py-16 md:py-24">
        <div className="space-y-10 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-foreground">Éditeur du site</h2>
            <p className="mt-3">
              {COMPANY.legalName} — {COMPANY.address}
              <br />
              Email : {COMPANY.email}
              <br />
              SIRET : {COMPANY.siret}
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">Directeur de la publication</h2>
            <p className="mt-3">{COMPANY.publicationDirector}</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">Hébergement</h2>
            <p className="mt-3">{COMPANY.host}</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">Propriété intellectuelle</h2>
            <p className="mt-3">
              L'ensemble des contenus de ce site (textes, images, schémas, marques) est la propriété
              de {COMPANY.legalName}, sauf mention contraire. Toute reproduction ou représentation,
              totale ou partielle, sans autorisation écrite préalable est interdite.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">Responsabilité</h2>
            <p className="mt-3">
              Les informations techniques et réglementaires publiées sur ce site sont fournies à
              titre indicatif et ne se substituent pas à une analyse de conformité réalisée sur
              votre site industriel.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}