"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/data/portfolio";

const socialLinks = [
  {
    icon: Github,
    href: personalInfo.github,
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: personalInfo.linkedin,
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
    label: "Email",
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-outfit)] mb-4">
          Me{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
            Contact
          </span>
        </h2>
        <p className="text-foreground-secondary max-w-xl mx-auto">
          Vous avez un projet en tête ? Discutons ensemble de vos besoins.
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="text-center">
            <div className="grid sm:grid-cols-3 gap-6 mb-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-2">
                  <Mail size={18} className="text-accent" />
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm hover:text-accent transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-2">
                  <Phone size={18} className="text-accent" />
                </div>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-sm hover:text-accent transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-2">
                  <MapPin size={18} className="text-accent" />
                </div>
                <p className="text-sm">{personalInfo.location}</p>
              </div>
            </div>

            <div className="flex justify-center gap-3 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-accent/20 flex items-center justify-center text-foreground-secondary hover:text-accent transition-all"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>

            <Link href="/contact">
              <Button>
                Envoyer un message
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
