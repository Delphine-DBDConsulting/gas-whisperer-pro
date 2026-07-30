import { Container } from "@/components/site/container";

import airLiquide from "@/assets/logos/air-liquide.svg.asset.json";
import arkema from "@/assets/logos/arkema.png.asset.json";
import basf from "@/assets/logos/basf.webp.asset.json";
import engie from "@/assets/logos/engie.png.asset.json";
import sanofi from "@/assets/logos/sanofi.png.asset.json";
import totalEnergies from "@/assets/logos/totalenergies.svg.asset.json";

const logos = [
  { name: "Air Liquide", src: airLiquide.url },
  { name: "TotalEnergies", src: totalEnergies.url },
  { name: "Arkema", src: arkema.url },
  { name: "BASF", src: basf.url },
  { name: "Sanofi", src: sanofi.url },
  { name: "Engie", src: engie.url },
];

export function LogoMarquee() {
  return (
    <section className="border-y border-border/40 bg-[color:var(--footer)] py-12 md:py-16">
      <Container>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Ils nous font confiance
        </p>
      </Container>

      <div className="group relative overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-8 hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex h-20 w-52 shrink-0 items-center justify-center rounded-lg border border-border bg-white px-6 transition-colors"
            >
              <img
                src={logo.src}
                alt={`Logo ${logo.name}`}
                loading="lazy"
                className="max-h-10 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
