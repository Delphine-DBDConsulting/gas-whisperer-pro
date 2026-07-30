import { z } from "zod";

export const OFFER_OPTIONS = [
  { value: "sante-environnement", label: "Santé & Environnement (campagne ponctuelle)" },
  { value: "emissions-performance", label: "Émissions & Performance (monitoring continu)" },
  { value: "indecis", label: "Je ne sais pas encore" },
] as const;

export const contactRequestSchema = z.object({
  fullName: z.string().trim().min(2, "Indiquez votre nom").max(100, "100 caractères maximum"),
  company: z.string().trim().min(2, "Indiquez votre société").max(120, "120 caractères maximum"),
  jobTitle: z.string().trim().max(120, "120 caractères maximum").optional().or(z.literal("")),
  email: z
    .string()
    .trim()
    .min(1, "Indiquez votre email professionnel")
    .email("Adresse email invalide")
    .max(255, "255 caractères maximum"),
  phone: z.string().trim().max(40, "40 caractères maximum").optional().or(z.literal("")),
  siteLocation: z.string().trim().max(160, "160 caractères maximum").optional().or(z.literal("")),
  offer: z.enum(["sante-environnement", "emissions-performance", "indecis"]),
  message: z
    .string()
    .trim()
    .min(10, "Décrivez votre besoin en quelques mots")
    .max(2000, "2000 caractères maximum"),
  // Anti-spam : champ masqué qui doit rester vide.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactRequestInput = z.infer<typeof contactRequestSchema>;

export const brochureLeadSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name").max(100, "100 characters max"),
  company: z.string().trim().min(2, "Please enter your company").max(120, "120 characters max"),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your work email")
    .email("Invalid email address")
    .max(255, "255 characters max"),
  website: z.string().max(0).optional().or(z.literal("")),
});

export type BrochureLeadInput = z.infer<typeof brochureLeadSchema>;