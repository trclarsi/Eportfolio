"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Download, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/data/portfolio";

const stats = [
  { value: "1+", label: "Années d’expérience" },
  { value: "9+", label: "Projets réalisés" },
  { value: "15+", label: "Technologies maîtrisées" },
  { value: "5+", label: "Certifications" },
];

export function About() {
  return (
    <Section id="about" className="bg-background-secondary/50">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-64 h-64 mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-secondary rounded-full blur-2xl opacity-30" />
            <div className="relative w-full h-full rounded-full bg-background-tertiary border-4 border-accent overflow-hidden group">
              <Image
                src={personalInfo.photo}
                alt={personalInfo.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-3 -right-3 lg:right-0 bg-background-tertiary rounded-lg p-3 border border-accent/20 shadow-xl"
          >
            <p className="text-accent font-bold text-lg">{personalInfo.title}</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-outfit)] mb-4">
            À propos de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
              moi
            </span>
          </h2>

          <p className="text-foreground-secondary mb-4 leading-relaxed">
            Passionné par les données et l&apos;IA, je suis Ingénieur Généraliste des Systèmes 
            Industriels à l&apos;EIGSI Casablanca. Mon expertise : Big Data, 
            Intelligence Artificielle.
          </p>

          <div className="flex items-center gap-2 text-foreground-secondary mb-6">
            <MapPin size={18} className="text-accent" />
            <span>{personalInfo.location}</span>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background-tertiary rounded-lg p-3 text-center"
              >
                <p className="text-xl font-bold text-accent">{stat.value}</p>
                <p className="text-xs text-foreground-secondary">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={personalInfo.cv} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm">
                <Download size={16} className="mr-2" />
                CV
              </Button>
            </a>
            <Link href="/about">
              <Button variant="ghost" size="sm">
                En savoir plus
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
