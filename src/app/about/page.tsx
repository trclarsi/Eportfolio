import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez mon parcours, mes formations et certifications. Ingénieur Big Data & IA basé à Casablanca, Maroc.",
};

export default function AboutPage() {
  return <AboutContent />;
}
