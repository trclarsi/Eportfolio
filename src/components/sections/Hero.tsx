"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/data/portfolio";

const roles = [
  "Ingénieur Big Data",
  "Développeur IA",
  "Architecte de Solutions",
  "Data Scientist",
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(role.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-medium mb-4"
          >
            Bienvenue dans mon portfolio
          </motion.p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[var(--font-outfit)] leading-tight mb-4">
            Bonjour, je suis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
              {personalInfo.name.split(" ")[0]}
            </span>
          </h1>

          <div className="h-12 mb-6">
            <span className="text-xl md:text-2xl text-foreground-secondary">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-foreground-secondary text-lg mb-8 max-w-xl mx-auto lg:mx-0">
            {personalInfo.description}
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg font-medium bg-gradient-to-r from-accent to-accent-secondary text-background hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] px-5 py-2.5 text-base transition-all duration-300"
            >
              Voir mes projets
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg font-medium border border-accent text-accent bg-transparent hover:bg-accent/10 px-5 py-2.5 text-base transition-all duration-300"
            >
              Me contacter
            </a>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-3 ml-2"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-accent/20 text-foreground-secondary hover:text-accent transition-all duration-300 border border-white/5 hover:border-accent/30"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-accent/20 text-foreground-secondary hover:text-accent transition-all duration-300 border border-white/5 hover:border-accent/30"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-full bg-white/5 hover:bg-accent/20 text-foreground-secondary hover:text-accent transition-all duration-300 border border-white/5 hover:border-accent/30"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-full blur-3xl" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-10 border border-accent/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-20 border border-accent-secondary/20 rounded-full border-dashed"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-accent to-accent-secondary p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <span className="text-4xl font-bold font-[var(--font-outfit)]">
                    <span className="text-accent">C</span>
                    <span className="text-foreground">TL</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${i * 60}deg) translateY(-180px)`,
              }}
            >
              <div className="w-3 h-3 rounded-full bg-accent" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-foreground-secondary/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
