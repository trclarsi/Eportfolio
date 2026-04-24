"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  "big-data": "accent",
  "ai-ml": "purple",
  web: "success",
  embedded: "warning",
  data: "default",
};

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4);

  return (
    <Section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-outfit)] mb-4">
          Mes{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
            Projets
          </span>
        </h2>
        <p className="text-foreground-secondary max-w-xl mx-auto">
          Projets marquants en Intelligence Artificielle, Big Data et développement web.
        </p>
      </motion.div>

      <motion.div className="grid md:grid-cols-2 gap-6">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card hover className="h-full flex flex-col group relative">
              {/* Overlay Link for the whole card */}
              <Link 
                href={`/projects/${project.id}`} 
                className="absolute inset-0 z-0"
                aria-label={`Voir les détails du projet ${project.title}`}
              />

              <div className="flex-1 relative z-10 pointer-events-none">
                <div className="flex items-center gap-2 mb-3">
                  <Badge
                    variant={categoryColors[project.category] as any}
                    className="w-fit"
                  >
                    {project.category.replace("-", " ")}
                  </Badge>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-foreground-secondary mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="default" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/5 relative z-10">
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-accent/20 text-foreground-secondary hover:text-accent transition-all"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-accent/20 text-foreground-secondary hover:text-accent transition-all"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                
                <Link href={`/projects/${project.id}`} className="flex items-center text-accent text-sm font-medium hover:underline">
                  <span>Détails</span>
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <Link href="/projects">
          <Button variant="ghost" size="sm">
            Tous les projets
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}
