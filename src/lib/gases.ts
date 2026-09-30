// Données des gaz mesurables. Chaque molécule a un slug stable :
// permet d'ajouter plus tard une section ancrée (#slug) ou une page /gaz-mesurables/$slug
// sans refonte (hub SEO, non commandé pour l'instant).
export type Gas = {
  slug: string;
  name: string;
  lod: string;
  unit: string;
  family: string;
};

export const GASES: Gas[] = [
  { slug: "formaldehyde", name: "Formaldéhyde", lod: "0,03", unit: "ppm (0,04 mg/m³)", family: "cmr-aldehydes" },
  { slug: "cyclohexane", name: "Cyclohexane", lod: "0,005", unit: "ppm (0,02 mg/m³)", family: "cov-btex" },
  { slug: "chlorure-hydrogene", name: "Chlorure d'hydrogène (HCl)", lod: "0,04", unit: "ppm (0,06 mg/m³)", family: "inorganiques" },
  { slug: "benzene", name: "Benzène", lod: "0,05", unit: "ppm", family: "cov-btex" },
  { slug: "toluene", name: "Toluène", lod: "0,3", unit: "ppm (1 mg/m³)", family: "cov-btex" },
  { slug: "acetone", name: "Acétone", lod: "0,1", unit: "ppm (0,3 mg/m³)", family: "cov-btex" },
  { slug: "cyanure-hydrogene", name: "Cyanure d'hydrogène (HCN)", lod: "0,6", unit: "ppm (0,6 mg/m³)", family: "inorganiques" },
];

export function getGas(slug: string) {
  return GASES.find((g) => g.slug === slug);
}
