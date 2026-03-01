"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Award, Lightbulb, Users, MessageSquare, RefreshCw, Kanban, BarChart } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { skills, certifications } from "@/data/portfolio";

const softSkillIcons: Record<string, React.ElementType> = {
  Lightbulb,
  Users,
  MessageSquare,
  RefreshCw,
  Kanban,
  BarChart,
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-foreground-secondary">{level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-accent to-accent-secondary rounded-full"
        />
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-outfit)] mb-4">
          Mes{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
            Compétences
          </span>
        </h2>
        <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
          Une expertise technique approfondie et des compétences transversales
          développées au fil de mes expériences.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-accent rounded-full" />
            Compétences Techniques
          </h3>
          <Card>
            {skills.technical.map((skill, index) => (
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
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-accent-secondary rounded-full" />
            Compétences Transversales
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.soft.map((skill, index) => {
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
                    <Icon size={24} className="text-accent mb-2" />
                    <p className="font-medium text-sm">{skill.name}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mt-16"
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <Badge variant="accent" icon={Award} className="mb-2">
                  {cert.issuer}
                </Badge>
                <p className="font-medium text-sm mb-1">{cert.name}</p>
                <p className="text-xs text-foreground-secondary">{cert.year}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
