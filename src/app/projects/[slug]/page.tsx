"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, Target, Lightbulb, TrendingUp, BookOpen } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
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

type BadgeVariant = "default" | "accent" | "success" | "warning" | "purple";

const categoryColors: Record<string, BadgeVariant> = {
  "big-data": "accent",
  "ai-ml": "purple",
  web: "success",
  embedded: "warning",
  data: "default",
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const router = useRouter();
  const resolvedParams = use(params);
  const project = projects.find((p) => p.id === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pt-24">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-foreground-secondary hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Retour
          </button>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="relative aspect-video bg-background-tertiary rounded-xl mb-6 overflow-hidden">
                {project.image ? (
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-secondary/20 flex items-center justify-center">
                    <span className="text-8xl font-bold text-white/20">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              <div>
                <div className="flex flex-wrap gap-3 mb-4">
                  <Badge
                    variant={categoryColors[project.category] || "default"}
                    icon={Tag}
                  >
                    {project.category.replace("-", " ")}
                  </Badge>
                  {project.featured && (
                    <Badge variant="accent">Featured</Badge>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold font-[var(--font-outfit)] mb-4">
                  {project.title}
                </h1>

                <p className="text-foreground-secondary text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

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

              {project.problem && (
                <Card className="bg-accent/5 border-accent/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Target size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Contexte & Problématique</h3>
                      <p className="text-foreground-secondary text-sm leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                  </div>
                </Card>
              )}

              {project.solution && (
                <Card className="bg-purple-500/5 border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Lightbulb size={20} className="text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Solution Technique</h3>
                      <p className="text-foreground-secondary text-sm leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </Card>
              )}

              {project.challenges && project.challenges.length > 0 && (
                <Card>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <span className="w-2 h-6 bg-warning rounded-full" />
                    Défis rencontrés
                  </h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-warning mt-2 flex-shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {project.results && project.results.length > 0 && (
                <Card className="bg-success/5 border-success/20">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp size={20} className="text-success" />
                    Résultats obtenus
                  </h3>
                  <ul className="space-y-2">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {project.leconsApprises && project.leconsApprises.length > 0 && (
                <Card className="bg-blue-500/5 border-blue-500/20">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <BookOpen size={20} className="text-blue-500" />
                    Leçons apprises
                  </h3>
                  <ul className="space-y-2">
                    {project.leconsApprises.map((lecon, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        {lecon}
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
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

              <Card className="bg-background-tertiary">
                <h3 className="font-semibold mb-3">Liens rapides</h3>
                <div className="space-y-2">
                  <Link
                    href="/projects"
                    className="block text-sm text-foreground-secondary hover:text-accent transition-colors"
                  >
                    ← Tous les projets
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      </Section>
    </main>
  );
}
