"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Database, Brain, Cloud, Code, Check, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/portfolio";

const serviceIcons: Record<string, React.ElementType> = {
  Database,
  Brain,
  Cloud,
  Code,
};

const whyChooseMe = [
  { text: "Réactivité et respect des délais" },
  { text: "Expertise technique approfondie" },
  { text: "Support et maintenance post-projet" },
  { text: "Communication claire et transparente" },
];

export function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (title: string) => {
    setExpandedService(expandedService === title ? null : title);
  };

  return (
    <Section id="services">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-outfit)] mb-4">
          Mes{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
            Services
          </span>
        </h2>
        <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
          Des solutions techniques adaptées à vos besoins, de la conception à la
          mise en production.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => {
          const Icon = serviceIcons[service.icon] || Code;
          const isExpanded = expandedService === service.title;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                hover
                className={`h-full cursor-pointer transition-all duration-300 ${
                  isExpanded ? "border-accent" : ""
                }`}
                onClick={() => toggleService(service.title)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-foreground-secondary text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-4 border-t border-white/5">
                    <p className="text-sm font-medium mb-3">Livrables inclus :</p>
                    <ul className="space-y-2">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-foreground-secondary"
                        >
                          <Check size={16} className="text-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <div className="flex items-center justify-between mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-accent"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleService(service.title);
                    }}
                  >
                    {isExpanded ? "Voir moins" : "En savoir plus"}
                    <ArrowRight
                      size={16}
                      className={`ml-2 transition-transform ${
                        isExpanded ? "rotate-90" : ""
                      }`}
                    />
                  </Button>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <Card className="bg-gradient-to-r from-accent/10 to-accent-secondary/10 border-accent/20">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2">Pourquoi me choisir ?</h3>
            <p className="text-foreground-secondary text-sm">
              Des engagements clairs pour des résultats concrets
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChooseMe.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2"
              >
                <Check size={18} className="text-accent flex-shrink-0" />
                <span className="text-sm">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}
