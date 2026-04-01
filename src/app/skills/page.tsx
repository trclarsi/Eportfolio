import type { Metadata } from "next";
import { SkillsContent } from "./SkillsContent";

export const metadata: Metadata = {
  title: "Compétences",
  description:
    "Mes compétences techniques en Python, Machine Learning, Big Data, et développement web, ainsi que mes compétences transversales.",
};

export default function SkillsPage() {
  return <SkillsContent />;
}
