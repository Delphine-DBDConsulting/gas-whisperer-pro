import { createFileRoute } from "@tanstack/react-router";

import { Container, PageHeader } from "@/components/site/container";
import { COMPANY } from "@/lib/company";

const DESCRIPTION =
  "Politique de confidentialité de CLM Industry : données collectées via les formulaires, finalités, durée de conservation et exercice de vos droits RGPD.";

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — CLM Industry" },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Politique de confidentialité — CLM Industry" },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHeader title="Politique de confidentialité" />
      <Container className="max-w-3xl py-16 md:py-24">
        <div className="space-y-10 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-foreground">Responsable de traitement</h2>
            <p className="mt-3">
              {COMPANY.legalName}, {COMPANY.address}. Contact : {COMPANY.email}.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">Données collectées</h2>
            <p className="mt-3">
              Via le formulaire de contact : nom, société, fonction, email professionnel, téléphone,
              site industriel concerné, solution concernée et contenu du message. Via le formulaire de
              téléchargement de la brochure : nom, société et email professionnel. L'adresse IP de
              l'envoi est conservée à des fins de lutte contre les envois automatisés.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">Finalités et base légale</h2>
            <p className="mt-3">
              Ces données servent exclusivement à traiter votre demande, vous adresser la
              documentation sollicitée et assurer le suivi commercial associé. La base légale est
              l'intérêt légitime de CLM Industry à répondre aux demandes entrantes, ainsi que les
              mesures précontractuelles prises à votre demande.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">Destinataires et sous-traitants</h2>
            <p className="mt-3">
              Les données sont accessibles aux seules équipes commerciales et techniques de CLM
              Industry. Elles sont hébergées au sein de l'Union européenne par notre prestataire
              d'hébergement applicatif et de base de données. Aucune donnée n'est cédée ni vendue à
              des tiers.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">Durée de conservation</h2>
            <p className="mt-3">
              Les demandes sont conservées trois ans à compter du dernier contact, puis supprimées.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">Vos droits</h2>
            <p className="mt-3">
              Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et
              d'opposition sur vos données, ainsi que du droit d'introduire une réclamation auprès
              de la CNIL. Pour exercer ces droits, écrivez à {COMPANY.email}.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">Cookies</h2>
            <p className="mt-3">
              Ce site ne dépose aucun cookie de mesure d'audience ni de publicité. Seuls les
              mécanismes strictement nécessaires à son fonctionnement sont utilisés.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}