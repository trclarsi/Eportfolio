"use client";

import { motion } from "framer-motion";
import { Calendar, Download } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { experiences, personalInfo } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-outfit)] mb-4">
          Mon{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
            Expérience
          </span>
        </h2>
        <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
          Mon parcours professionnel et mes expériences stages qui m'ont permis de
          développer mes compétences techniques.
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent-secondary to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="flex-1 md:text-right">
                <Card className="inline-block text-left md:text-right">
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{exp.role}</h3>
                  <p className="text-foreground-secondary mb-3">{exp.company}</p>
                  <p className="text-sm text-foreground-secondary mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="default" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-white/5">
                      {exp.highlights.map((highlight, i) => (
                        <p
                          key={i}
                          className="text-sm text-accent flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {highlight}
                        </p>
                      ))}
                    </div>
                  )}
                </Card>
              </div>

              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background z-10">
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-accent opacity-50"
                />
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a href={personalInfo.cv} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary">
            <Download size={18} className="mr-2" />
            Télécharger mon CV
          </Button>
        </a>
      </motion.div>
    </Section>
  );
}
