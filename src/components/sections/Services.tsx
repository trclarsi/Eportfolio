"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Database, Brain, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/portfolio";

const serviceIcons: Record<string, React.ElementType> = {
  Database,
  Brain,
};

export function Services() {
  const mainServices = services.slice(0, 2);

  return (
    <Section id="services">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-outfit)] mb-4">
          Mes{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
            Services
          </span>
        </h2>
        <p className="text-foreground-secondary max-w-xl mx-auto">
          Solutions techniques adaptées à vos besoins, de la conception à la mise en production.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {mainServices.map((service, index) => {
          const Icon = serviceIcons[service.icon] || Database;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-foreground-secondary">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link href="/services">
          <Button variant="ghost" size="sm">
            Tous mes services
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}
