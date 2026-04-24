"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Download, Lightbulb, Zap, Users, Award, BarChart } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { personalInfo, education, certifications, interests, transcripts } from "@/data/portfolio";

const stats = [
  { value: "1+", label: "Années d’expérience" },
  { value: "9+", label: "Projets réalisés" },
  { value: "15+", label: "Technologies maîtrisées" },
  { value: "5+", label: "Certifications" },
];

const interestIcons: Record<string, React.ElementType> = {
  Chess: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M8 18c0-2 2-4 4-4s4 2 4 4"/><path d="M10 22h4"/></svg>
  ),
  Soccer: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c-4.2 0-7.5-2.9-7.9-6.8-.3-2.8.7-5.4 2.5-7.2 1.7-1.7 4.1-2.5 6.4-2.5s4.7.8 6.4 2.5c1.8 1.8 2.8 4.4 2.5 7.2-.4 3.9-3.7 6.8-7.9 6.8Z"/><path d="M12 13.5c-1.3-.8-2.8-1.2-4.2-1.2"/><path d="M16.2 12.3c1.3-.8 2.8-1.2 4.2-1.2"/><path d="M9 10c0-1.5-.5-3-1.2-4.2"/><path d="M15 10c0 1.5.5 3 1.2 4.2"/><path d="M7.8 6.8C8.5 5.6 9.7 5 11 5s2.5.6 3.2 1.8"/></svg>
  ),
  Film: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="2.18" ry="2.18"/><line x1="7" x2="7" y1="2" y2="22"/><line x1="17" x2="17" y1="2" y2="22"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="2" x2="7" y1="7" y2="7"/><line x1="2" x2="7" y1="17" y2="17"/><line x1="17" x2="22" y1="17" y2="17"/><line x1="17" x2="22" y1="7" y2="7"/></svg>
  ),
  Gamepad2: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><circle cx="15" cy="10" r="1"/><circle cx="18" cy="13" r="1"/><path d="M17 16c.7 0 1.4-.3 1.9-.8"/><path d="M19.4 13c.4.4.6.9.6 1.5 0 .5-.2 1-.6 1.4"/><path d="M21 16c.7.7 1.2 1.5 1.2 2.5 0 1.4-.8 2.5-2 3-.5.2-1.1.2-1.6 0-1.2-.5-2-1.6-2-3 0-1 .5-1.8 1.2-2.5"/><rect width="8" height="10" x="2" y="6" rx="2"/></svg>
  ),
  Dices: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="2" y="2" rx="1"/><rect width="8" height="8" x="14" y="14" rx="1"/><path d="M6 6h.01M16 6h.01M6 16h.01M16 16h.01"/><path d="M12 10v4M10 12h4"/></svg>
  ),
};

const highlights = [
  {
    icon: BarChart,
    title: "Approche Data-Driven",
    description:
      "Décisions et solutions pilotées par l’analyse rigoureuse des données pour un impact maximal",
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

export function AboutContent() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-background pt-24">
      <Section>
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-foreground-secondary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Retour
        </button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-outfit)] mb-4">
            À{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
              propos
            </span>
          </h1>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            Passionné par les données et l’intelligence artificielle, je transforme
            les chiffres en solutions innovantes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-secondary rounded-full blur-2xl opacity-30" />
              <div className="relative w-full h-full rounded-full bg-background-tertiary border-4 border-accent flex items-center justify-center overflow-hidden">
                <Image
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 -right-4 lg:right-0 bg-background-tertiary rounded-lg p-4 border border-accent/20"
            >
              <p className="text-accent font-bold text-2xl">{personalInfo.title}</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-outfit)] mb-6">
              Mon{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
                parcours
              </span>
            </h2>

            <p className="text-foreground-secondary text-lg mb-6 leading-relaxed">
              {personalInfo.description}
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
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold font-[var(--font-outfit)] mb-8">
            Ma{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
              formation
            </span>
          </h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Card>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <p className="text-foreground-secondary">{edu.school}</p>
                      <p className="text-sm text-foreground-secondary mt-1">{edu.description}</p>
                    </div>
                    <Badge variant="default">{edu.period}</Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >

          <h3 className="text-2xl font-bold font-[var(--font-outfit)] mb-8 flex items-center gap-2">
            <Award size={28} className="text-accent" />
            Certifications
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <Card hover className="h-full">
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="block">
                    <Badge variant="accent" icon={Award} className="mb-2">
                      {cert.issuer}
                    </Badge>
                    <p className="font-medium mb-1">{cert.name}</p>
                    <p className="text-sm text-foreground-secondary">{cert.year}</p>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold font-[var(--font-outfit)] mb-8">
            Mes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
              Intérêts
            </span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {interests.map((interest, index) => {
              const IconComponent = interestIcons[interest.icon] || Lightbulb;
              return (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                >
                  <Card hover className="h-full text-center">
                    <IconComponent />
                    <p className="font-medium text-sm mt-2">{interest.name}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold font-[var(--font-outfit)] mb-8">
            Profil{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
              Personnalité
            </span>
          </h3>

          <Card>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <p className="text-sm text-foreground-secondary mb-2">MBTI</p>
                <p className="text-2xl font-bold text-accent">{personalInfo.mbti}</p>
              </div>
              <div className="text-center p-4">
                <p className="text-sm text-foreground-secondary mb-2">Profil VAK</p>
                <p className="text-2xl font-bold text-accent">{personalInfo.vakProfile}</p>
              </div>
              <div className="text-center p-4">
                <p className="text-sm text-foreground-secondary mb-2">Drivers</p>
                <div className="flex flex-col gap-1">
                  {personalInfo.drivers.map((driver) => (
                    <p key={driver} className="text-lg font-semibold text-foreground">{driver}</p>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold font-[var(--font-outfit)] mb-8">
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold font-[var(--font-outfit)] mb-8">
            Relevés de notes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
              Académiques
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h4 className="font-semibold mb-2">{transcripts.engineering.degree}</h4>
              <p className="text-sm text-foreground-secondary mb-4">{transcripts.engineering.school}</p>
              <div className="flex flex-wrap gap-2">
                {transcripts.engineering.semesters.map((sem) => (
                  <a
                    key={sem.name}
                    href={sem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                  >
                    {sem.name}
                  </a>
                ))}
              </div>
            </Card>
            <Card>
              <h4 className="font-semibold mb-2">{transcripts.prep.degree}</h4>
              <p className="text-sm text-foreground-secondary mb-4">{transcripts.prep.school}</p>
              <div className="flex flex-wrap gap-2">
                {transcripts.prep.semesters.map((sem) => (
                  <a
                    key={sem.name}
                    href={sem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                  >
                    {sem.name}
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </Section>
    </main>
  );
}
