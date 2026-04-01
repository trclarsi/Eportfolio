import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez-moi pour discuter de vos projets en Data Science, Machine Learning, Big Data ou développement web.",
};

export default function ContactPage() {
  return <ContactContent />;
}
