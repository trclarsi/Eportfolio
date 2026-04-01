import type { Metadata } from "next";
import { ProjectsContent } from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Découvrez mes projets en Intelligence Artificielle, Big Data, Machine Learning et développement web.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
