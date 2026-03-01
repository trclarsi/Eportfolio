"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Github, ExternalLink, Star, ArrowRight } from "lucide-react";
import { projects } from "@/data/portfolio";

const categories = [
  { id: "all", label: "Tous" },
  { id: "big-data", label: "Big Data" },
  { id: "ai-ml", label: "AI/ML" },
  { id: "web", label: "Web" },
  { id: "embedded", label: "Embedded" },
  { id: "data", label: "Data" },
];

const categoryColors: Record<string, string> = {
  "big-data": "accent",
  "ai-ml": "purple",
  web: "success",
  embedded: "warning",
  data: "default",
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-outfit)] mb-4">
          Mes{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
            Projets
          </span>
        </h2>
        <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
          Une sélection de projets sur lesquels j&apos;ai travaillé, allant du Big Data
          au développement web en passant par l&apos;IA.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-accent text-background"
                : "bg-white/5 text-foreground-secondary hover:bg-white/10 hover:text-foreground"
            }`}
          >
            {category.label}
          </button>
        ))}
      </motion.div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card hover className="h-full flex flex-col group">
                <div className="relative aspect-video bg-background-tertiary rounded-lg mb-4 overflow-hidden">
                  <Link href={`/projects/${project.id}`} className="absolute inset-0">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-secondary/20 flex items-center justify-center">
                        <span className="text-4xl font-bold text-white/20">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}
                  </Link>
                  {project.featured && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="accent" icon={Star}>
                        Featured
                      </Badge>
                    </div>
                  )}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-background/90 flex items-center justify-center gap-4 z-10"
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/10 hover:bg-accent text-foreground hover:text-background transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/10 hover:bg-accent text-foreground hover:text-background transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </motion.div>
                </div>

                <div className="flex-1 flex flex-col">
                  <Badge
                    variant={categoryColors[project.category] as any}
                    className="w-fit mb-2"
                  >
                    {project.category.replace("-", " ")}
                  </Badge>

                  <Link href={`/projects/${project.id}`}>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="text-foreground-secondary text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="default" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="default" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                  
                  <Link href={`/projects/${project.id}`} className="flex items-center text-accent text-sm font-medium mt-auto hover:underline">
                    <span>Voir les détails</span>
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-foreground-secondary">
            Aucun projet dans cette catégorie.
          </p>
        </motion.div>
      )}
    </Section>
  );
}
