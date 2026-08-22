import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { IconMail } from "@tabler/icons-react";

import { BookingButton } from "@/components/site/booking";
import { Container } from "@/components/site/container";
import { COMPANY } from "@/lib/company";
import { getPost, posts, type BlogBlock } from "@/lib/blog";

const DOMAIN = "https://gas-whisperer-pro.lovable.app";
const VLEP_URL = "https://www.inrs.fr/publications/bdd/vlep.html";
const VLEP_LABEL = "Valeurs Limites d'Exposition Professionnelle";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article introuvable | CLM Industry" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    const title = `${post.title} | CLM Industry`;
    return {
      meta: [
        { title },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${DOMAIN}/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `${DOMAIN}/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            author: { "@type": "Organization", name: "CLM Industry" },
          }),
        },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: ArticlePage,
});

function PostNotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-3xl font-bold text-foreground">Article introuvable</h1>
      <Link to="/blog" className="mt-6 inline-block text-sm font-semibold text-accent">
        ← Retour au blog
      </Link>
    </Container>
  );
}

/** Insère le lien INRS sur la première occurrence de « VLEP » dans l'article. */
function useVlepRenderer() {
  let used = false;
  return function renderText(text: string) {
    if (used) return text;
    const idx = text.indexOf("Valeurs Limites d'Exposition Professionnelle");
    const short = text.indexOf("VLEP");
    if (idx === -1 && short === -1) return text;
    used = true;
    const link = (
      <a
        key="vlep"
        href={VLEP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent underline underline-offset-2 hover:text-foreground"
      >
        {VLEP_LABEL} (VLEP)
      </a>
    );
    if (idx !== -1) {
      return (
        <>
          {text.slice(0, idx)}
          {link}
          {text.slice(idx + VLEP_LABEL.length)}
        </>
      );
    }
    return (
      <>
        {text.slice(0, short)}
        {link}
        {text.slice(short + 4)}
      </>
    );
  };
}

function ArticlePage() {
  const { post } = Route.useLoaderData();
  const renderText = useVlepRenderer();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-[minmax(0,7fr)_minmax(0,3fr)]">
        <article>
          <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
            {post.category}
          </span>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            {post.date} · {post.readingTime}
          </p>
          <div className="mt-8 border-t border-border/60" />

          <div className="mt-8 space-y-5">
            {post.body.map((block, i) => (
              <Block key={i} block={block} renderText={renderText} />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-10 border-t border-border/60" />
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
          >
            <span aria-hidden>←</span> Retour au blog
          </Link>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-base font-bold text-foreground">Une question sur votre site ?</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Nos experts analysent votre situation.
            </p>
            <BookingButton className="mt-5 w-full justify-center" />
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-base font-bold text-foreground">À lire aussi</h2>
            <ul className="mt-4 space-y-4">
              {related.map((p) => (
                <li key={p.slug}>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                    {p.category}
                  </span>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="mt-1 block text-sm font-medium leading-snug text-foreground transition-colors hover:text-accent"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <a
              href={`mailto:${COMPANY.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              <IconMail className="h-4 w-4 text-accent" aria-hidden />
              {COMPANY.email}
            </a>
          </div>
        </aside>
      </Container>

      <section className="border-t-2 border-accent">
        <Container className="py-20 text-center md:py-28">
          <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Cet article vous a été utile ?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Découvrez comment CLM Industry peut vous aider à identifier et mesurer les gaz présents
            sur votre site.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <BookingButton />
            <Link to="/sante-environnement" className="cta-outline">
              Découvrir nos solutions
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

function Block({
  block,
  renderText,
}: {
  block: BlogBlock;
  renderText: (text: string) => React.ReactNode;
}) {
  if (block.type === "h2")
    return <h2 className="pt-4 text-2xl font-bold text-foreground">{block.text}</h2>;
  if (block.type === "h3")
    return <h3 className="pt-2 text-lg font-bold text-foreground">{block.text}</h3>;
  if (block.type === "ul")
    return (
      <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground">
        {block.items.map((it) => (
          <li key={it}>{renderText(it)}</li>
        ))}
      </ul>
    );
  if (block.type === "callout")
    return (
      <div
        className={`rounded-lg border-l-4 p-5 ${
          block.tone === "warning"
            ? "border-l-[color:var(--warning,#E0A24A)] bg-[color:var(--warning,#E0A24A)]/10"
            : "border-l-accent bg-accent/10"
        }`}
      >
        <p className="text-sm font-bold text-foreground">{block.title}</p>
        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
          {renderText(block.text)}
        </p>
      </div>
    );
  if (block.type === "table")
    return (
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[color:var(--footer)]">
              {block.headers.map((h) => (
                <th key={h} className="px-4 py-3 font-semibold text-foreground">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={row[0]} className={i % 2 ? "bg-card/40" : ""}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`border-t border-border/60 px-4 py-3 ${
                      j === 0 ? "font-medium text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  return <p className="text-base leading-relaxed text-muted-foreground">{renderText(block.text)}</p>;
}

