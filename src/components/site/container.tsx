export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[1200px] px-6 ${className}`}>{children}</div>;
}

export function Section({
  children,
  id,
  className = "",
  containerClassName = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={className}>
      <Container className={`py-12 md:py-20 ${containerClassName}`}>{children}</Container>
    </section>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border/40 bg-[color:var(--footer)]">
      <Container className="py-16 md:py-24">
        {eyebrow ? (
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            {eyebrow}
          </div>
        ) : null}
        <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
        ) : null}
      </Container>
    </section>
  );
}