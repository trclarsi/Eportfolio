"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Award, Lightbulb, Users, MessageSquare, RefreshCw, Kanban, BarChart, LayoutGrid, List } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { skills, certifications, techStack } from "@/data/portfolio";

const softSkillIcons: Record<string, React.ElementType> = {
  Lightbulb,
  Users,
  MessageSquare,
  RefreshCw,
  Kanban,
  BarChart,
};

const categoryLabels = {
  bigData: "Big Data & Data Engineering",
  aiMl: "Intelligence Artificielle & Machine Learning",
  programming: "Programmation & Development",
  tools: "Outils & Logiciels",
};

function TechLogo({ name, image, delay }: { name: string; image: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.4 }}
      className="group"
    >
      <Card hover className="h-full flex flex-col items-center justify-center p-4 min-h-[100px]">
        <div className="relative w-12 h-12 mb-3 flex items-center justify-center">
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            style={{ width: 'auto', height: 'auto' }}
            className="object-contain max-w-full max-h-full group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <p className="text-sm font-medium text-center">{name}</p>
      </Card>
    </motion.div>
  );
}

function TechCategory({ title, items }: { title: string; items: { name: string; image: string }[] }) {
  return (
    <div className="mb-10">
      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-foreground">
        <span className="w-1 h-6 bg-accent rounded-full" />
        {title}
      </h4>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {items.map((item, index) => (
          <TechLogo key={item.name} name={item.name} image={item.image} delay={index * 0.05} />
        ))}
      </div>
    </div>
  );
}

export function SkillsContent() {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [viewMode, setViewMode] = useState<"logos" | "compact">("logos");

  const techCategories = [
    { key: "bigData", items: techStack.bigData },
    { key: "aiMl", items: techStack.aiMl },
    { key: "programming", items: techStack.programming },
    { key: "tools", items: techStack.tools },
  ];

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
            Mes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
              Compétences
            </span>
          </h1>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            Une expertise technique approfondie et des compétences transversales développées au fil de mes expériences.
          </p>
        </motion.div>

        <div className="flex justify-end mb-8">
          <div className="flex gap-2 bg-background-secondary rounded-lg p-1">
            <button
              onClick={() => setViewMode("logos")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-all ${
                viewMode === "logos" ? "bg-accent text-background" : "text-foreground-secondary hover:text-foreground"
              }`}
            >
              <LayoutGrid size={16} />
              Logos
            </button>
            <button
              onClick={() => setViewMode("compact")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-all ${
                viewMode === "compact" ? "bg-accent text-background" : "text-foreground-secondary hover:text-foreground"
              }`}
            >
              <List size={16} />
              Compact
            </button>
          </div>
        </div>

        {viewMode === "logos" ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
              <span className="w-2 h-8 bg-accent rounded-full" />
              Technologies
            </h3>
            {techCategories.map((category) => (
              <TechCategory
                key={category.key}
                title={categoryLabels[category.key as keyof typeof categoryLabels]}
                items={category.items}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-accent rounded-full" />
              Compétences Techniques
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.bigData.map((tech) => (
                <span key={tech.name} className="px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm">
                  {tech.name}
                </span>
              ))}
              {techStack.aiMl.map((tech) => (
                <span key={tech.name} className="px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm">
                  {tech.name}
                </span>
              ))}
              {techStack.programming.map((tech) => (
                <span key={tech.name} className="px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm">
                  {tech.name}
                </span>
              ))}
              {techStack.tools.map((tech) => (
                <span key={tech.name} className="px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm">
                  {tech.name}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-accent-secondary rounded-full" />
            Compétences Transversales
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.soft.map((skill, index) => {
              const Icon = softSkillIcons[skill.icon] || Lightbulb;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Card hover className="h-full">
                    <Icon size={24} className="text-accent mb-2" />
                    <p className="font-medium text-sm">{skill.name}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Award size={24} className="text-accent" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Card hover className="h-full">
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="block">
                    <Badge variant="accent" icon={Award} className="mb-2">
                      {cert.issuer}
                    </Badge>
                    <p className="font-medium text-sm mb-1">{cert.name}</p>
                    <p className="text-xs text-foreground-secondary">{cert.year}</p>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </main>
  );
}