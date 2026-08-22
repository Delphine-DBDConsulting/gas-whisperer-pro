import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { BookingButton } from "@/components/site/booking";
import { Container, PageHeader } from "@/components/site/container";
import { BLOG_CATEGORIES, posts, type BlogCategory } from "@/lib/blog";

const TITLE = "Blog — Mesure de gaz industriels, VLEP, COV | CLM Industry";
const DESCRIPTION =
  "Actualités réglementaires, technologie OPO Laser, retours terrain et cas clients. Le blog de CLM Industry pour les responsables HSE et industriels.";
const DOMAIN = "https://gas-whisperer-pro.lovable.app";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${DOMAIN}/blog` },
    ],
    links: [{ rel: "canonical", href: `${DOMAIN}/blog` }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [active, setActive] = useState<"Tous" | BlogCategory>("Tous");
  const filtered = active === "Tous" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <PageHeader
        eyebrow="BLOG"
        title="Blog & Actualités"
        intro="Réglementation, technologie, retours terrain — les sujets qui comptent pour les responsables HSE et les industriels."
      />

      <Container className="py-16 md:py-24">
        <div className="flex flex-wrap justify-center gap-3">
          {(["Tous", ...BLOG_CATEGORIES] as const).map((c) => {
            const isActive = active === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={isActive}
                className={`rounded-md px-5 py-2.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "border border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {c === "Cas clients & ROI" ? "Cas clients & ROI" : c}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>

      <section className="border-t-2 border-accent">
        <Container className="py-20 text-center md:py-28">
          <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Un sujet vous concerne ?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Nos experts sont disponibles pour répondre à vos questions et évaluer la faisabilité
            d'une campagne de mesure sur votre site.
          </p>
          <div className="mt-10 flex justify-center">
            <BookingButton />
          </div>
        </Container>
      </section>
    </>
  );
}

function ArticleCard({ post }: { post: (typeof posts)[number] }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-xl">
      <span className="absolute inset-x-0 top-0 h-[2px] bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
      <span className="w-fit rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
        {post.category}
      </span>
      <h3 className="mt-4 text-base font-bold leading-snug text-foreground">{post.title}</h3>
      <p className="mt-2 text-xs text-muted-foreground">{post.date}</p>
      <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{post.excerpt}</p>
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
  );
}
