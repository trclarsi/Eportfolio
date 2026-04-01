"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { experiences } from "@/data/portfolio";

export function Experience() {
  const recentExperiences = experiences.slice(0, 2);

  return (
    <Section id="experience">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-outfit)] mb-4">
          Mon{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
            Expérience
          </span>
        </h2>
        <p className="text-foreground-secondary max-w-xl mx-auto">
          Stages et projets qui ont façonné mon expertise en data et IA.
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent-secondary to-transparent" />

        <div className="space-y-8">
          {recentExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-6 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="flex-1">
                <Card className="text-left md:text-right">
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <Calendar size={14} />
                    <span className="text-xs">{exp.period}</span>
                  </div>
                  <h3 className="text-base font-semibold mb-1">{exp.role}</h3>
                  <p className="text-sm text-foreground-secondary mb-2">{exp.company}</p>
                  <p className="text-xs text-foreground-secondary mb-3 line-clamp-2">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {exp.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="default" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background z-10" />

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <Link href="/experience">
          <Button variant="ghost" size="sm">
            Voir tout mon parcours
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}
