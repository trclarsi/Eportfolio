"use client";

import { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/portfolio";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = use(params);
  const project = projects.find((p) => p.id === resolvedParams.slug);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!project) {
    notFound();
  }

  const categoryColors: Record<string, string> = {
    "big-data": "accent",
    "ai-ml": "purple",
    web: "success",
    embedded: "warning",
    data: "default",
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-foreground-secondary hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Retour aux projets
            </Link>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="relative aspect-video bg-background-tertiary rounded-xl mb-8 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-secondary/20 flex items-center justify-center">
                    <span className="text-8xl font-bold text-white/20">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold font-[var(--font-outfit)] mb-4">
                  {project.title}
                </h1>

                <div className="flex flex-wrap gap-4 mb-6">
                  <Badge
                    variant={categoryColors[project.category] as any}
                    icon={Tag}
                  >
                    {project.category.replace("-", " ")}
                  </Badge>
                  {project.featured && (
                    <Badge variant="accent">Featured</Badge>
                  )}
                </div>

                <p className="text-foreground-secondary text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="secondary">
                        <Github size={18} className="mr-2" />
                        Voir le code
                      </Button>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button>
                        <ExternalLink size={18} className="mr-2" />
                        Demo live
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <h3 className="font-semibold mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>

                <Card>
                  <h3 className="font-semibold mb-4">Détails</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <Calendar size={16} className="text-accent" />
                      <span className="text-foreground-secondary">2024-2025</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Tag size={16} className="text-accent" />
                      <span className="text-foreground-secondary capitalize">
                        {project.category.replace("-", " ")}
                      </span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </motion.div>
        </Section>
      </div>

      <Footer />
    </main>
  );
}
