"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, Download, GraduationCap, BookOpen } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { transcripts } from "@/data/portfolio";

function TranscriptGroup({
  title,
  icon: Icon,
  data,
  delay,
}: {
  title: string;
  icon: React.ElementType;
  data: { school: string; degree: string; semesters: { name: string; url: string }[] };
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <Card className="h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
            <Icon size={24} className="text-accent" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-foreground-secondary">{data.school}</p>
          </div>
        </div>

        <p className="text-sm text-foreground-secondary mb-4">{data.degree}</p>

        <div className="space-y-3">
          {data.semesters.map((semester, index) => (
            <a
              key={semester.name}
              href={semester.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg bg-background-secondary hover:bg-accent/10 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <FileText size={18} className="text-foreground-secondary group-hover:text-accent" />
                <span className="font-medium text-sm">{semester.name}</span>
              </div>
              <Download size={16} className="text-foreground-secondary group-hover:text-accent" />
            </a>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

export function TranscriptsContent() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-background pt-24">
      <Section>
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-foreground-secondary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Retour
        </button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-outfit)] mb-4">
            Mes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
              Relevés de notes
            </span>
          </h1>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            Voici mes relevés de notes académiques de mon parcours à l&apos;EIGSI et en Classes Préparatoires.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <TranscriptGroup
            title="Ingénieur en Systèmes Industriels"
            icon={GraduationCap}
            data={transcripts.engineering}
            delay={0.2}
          />
          <TranscriptGroup
            title="Classes Préparatoires MPSI"
            icon={BookOpen}
            data={transcripts.prep}
            delay={0.4}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-foreground-secondary text-sm">
            Cliquez sur un semestre pour ouvrir le PDF correspondant.
          </p>
        </motion.div>
      </Section>
    </main>
  );
}