"use client";

import { useRef } from "react";
import Link from "next/link";
import { useInView, motion } from "framer-motion";
import { Lightbulb, Users, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { skills } from "@/data/portfolio";

const softSkillIcons: Record<string, React.ElementType> = {
  Lightbulb,
  Users,
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-foreground-secondary">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-accent to-accent-secondary rounded-full"
        />
      </div>
    </div>
  );
}

export function Skills() {
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
            Techniques
          </h3>
          <Card>
            {skills.technical.slice(0, 5).map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 0.1}
              />
            ))}
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
