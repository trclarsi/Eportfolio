"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Lightbulb, Users, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { skills, techStack } from "@/data/portfolio";

const softSkillIcons: Record<string, React.ElementType> = {
  Lightbulb,
  Users,
};

export function Skills() {
  const allTechs = [...techStack.bigData, ...techStack.aiMl, ...techStack.programming, ...techStack.tools];
  const topTechs = allTechs.slice(0, 8);

  return (
    <Section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-outfit)] mb-4">
          Mes{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
            Compétences
          </span>
        </h2>
        <p className="text-foreground-secondary max-w-xl mx-auto">
          Expertise technique en Python, Machine Learning, Big Data et développement web.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-6 bg-accent rounded-full" />
            Technologies
          </h3>
          <Card>
            <div className="flex flex-wrap gap-2">
              {topTechs.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm"
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-6 bg-accent-secondary rounded-full" />
            Transversales
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {skills.soft.slice(0, 4).map((skill, index) => {
              const Icon = softSkillIcons[skill.icon] || Lightbulb;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover className="h-full">
                    <Icon size={20} className="text-accent mb-1" />
                    <p className="font-medium text-xs">{skill.name}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <Link href="/skills">
          <Button variant="ghost" size="sm">
            Toutes les compétences
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}