import type { Metadata } from "next";
import { ExperienceContent } from "./ExperienceContent";

export const metadata: Metadata = {
  title: "Expérience",
  description:
    "Mon parcours professionnel : stages, missions et expériences en Data Science, Machine Learning et développement.",
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
