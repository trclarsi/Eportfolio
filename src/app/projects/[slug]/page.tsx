"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, Target, Lightbulb, TrendingUp, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/portfolio";
import { useState, useEffect } from "react";

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
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  const allImages = project?.image ? [project.image, ...(project.gallery || [])] : project?.gallery || [];
  const hasGallery = allImages.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

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
              <div className="relative max-h-[500px] bg-background-tertiary rounded-xl mb-6 overflow-hidden group">
                {allImages.length > 0 ? (
                  <>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-[400px] cursor-pointer flex items-center justify-center bg-background-tertiary rounded-xl"
                        onClick={() => setIsLightboxOpen(true)}
                      >
                        <Image 
                          src={allImages[currentImageIndex]}
                          alt={`${project.title} - Image ${currentImageIndex + 1}`}
                          width={800}
                          height={450}
                          className="max-h-full max-w-full object-contain"
                          unoptimized
                        />
                      </motion.div>
                    </AnimatePresence>
                    
                    {hasGallery && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <ChevronRight size={24} />
                        </button>
                        
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                          {allImages.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                idx === currentImageIndex ? "bg-white" : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
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

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <span className="text-2xl">&times;</span>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              key={currentImageIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full max-w-6xl max-h-[80vh] p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={allImages[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
              />
            </motion.div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {allImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
