"use client";

import { motion } from "framer-motion";
import { MapPin, Download, Lightbulb, Zap, Users } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { personalInfo, education } from "@/data/portfolio";

const stats = [
  { value: "3+", label: "Années d'expérience" },
  { value: "7+", label: "Projets réalisés" },
  { value: "15+", label: "Technologies maîtrisées" },
  { value: "4", label: "Certifications" },
];

const highlights = [
  {
    icon: Lightbulb,
    title: "Vision Analytique",
    description:
      "Capacité à transformer des données complexes en insights actionnables",
  },
  {
    icon: Zap,
    title: "Innovation Technique",
    description:
      "Recherche constante des solutions les plus modernes et efficaces",
  },
  {
    icon: Users,
    title: "Adaptabilité",
    description:
      "Flexibilité face aux nouveaux défis et environnements technologiques",
  },
];

export function About() {
  return (
    <Section id="about" className="bg-background-secondary/50">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-64 h-64 mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-secondary rounded-full blur-2xl opacity-30" />
            <div className="relative w-full h-full rounded-full bg-background-tertiary border-4 border-accent flex items-center justify-center overflow-hidden">
              <div className="text-center p-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/30 to-accent-secondary/30 flex items-center justify-center mb-2 mx-auto">
                  <span className="text-4xl font-bold font-[var(--font-outfit)] text-accent">
                    CTL
                  </span>
                </div>
                <p className="text-sm text-foreground-secondary">{personalInfo.name}</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-4 -right-4 lg:right-0 bg-background-tertiary rounded-lg p-4 border border-accent/20"
          >
            <p className="text-accent font-bold text-2xl">{personalInfo.title}</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-outfit)] mb-6">
            À propos de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
              moi
            </span>
          </h2>

          <p className="text-foreground-secondary text-lg mb-6 leading-relaxed">
            Passionné par les données et l'intelligence artificielle, je suis
            actuellement en formation d'Ingénieur en Systèmes Industriels à l'EIGSI
            Casablanca. Mon parcours m'a permis de développer une expertise solide en
            Big Data, Machine Learning et développement web.
          </p>

          <div className="flex items-center gap-2 text-foreground-secondary mb-8">
            <MapPin size={18} className="text-accent" />
            <span>{personalInfo.location}</span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background-tertiary rounded-lg p-4 text-center"
              >
                <p className="text-2xl font-bold text-accent">{stat.value}</p>
                <p className="text-sm text-foreground-secondary">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <a href={personalInfo.cv} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">
              <Download size={18} className="mr-2" />
              Télécharger mon CV
            </Button>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <h3 className="text-2xl font-bold font-[var(--font-outfit)] mb-8 text-center">
          Mes{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
            points forts
          </span>
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-accent" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-foreground-secondary text-sm">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
