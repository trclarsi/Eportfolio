"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import { personalInfo, navLinks } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-2xl font-bold font-[var(--font-outfit)] inline-block mb-4"
            >
              <span className="text-accent">C</span>
              <span className="text-foreground">TL</span>
            </a>
            <p className="text-foreground-secondary mb-4 max-w-sm">
              {personalInfo.title} basé à {personalInfo.location}.
              Passionné par la transformation des données en solutions innovantes.
            </p>
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-accent/20 text-foreground-secondary hover:text-accent transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-accent/20 text-foreground-secondary hover:text-accent transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-full bg-white/5 hover:bg-accent/20 text-foreground-secondary hover:text-accent transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground-secondary hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-foreground-secondary">
              <li>{personalInfo.email}</li>
              <li>{personalInfo.phone}</li>
              <li>{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-foreground-secondary text-sm mb-4 md:mb-0">
            © {currentYear} {personalInfo.name}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2 text-sm text-foreground-secondary">
            <span>Built with</span>
            <span className="text-accent">Next.js</span>
            <span>+</span>
            <span className="text-accent">Tailwind</span>
            <span className="text-red-500">
              <Heart size={14} className="inline" />
            </span>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent text-background flex items-center justify-center shadow-lg hover:shadow-accent/30 transition-shadow"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
