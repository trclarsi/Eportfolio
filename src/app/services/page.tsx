import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mes services : Data Engineering, Développement IA, Conseil Technique et Développement Web.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
