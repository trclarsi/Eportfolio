"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Phone, Github, Linkedin, Send, Loader2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/data/portfolio";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const socialLinks = [
  {
    icon: Github,
    href: personalInfo.github,
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: personalInfo.linkedin,
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
    label: "Email",
  },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      toast.success("Message envoyé avec succès !");
      reset();
    } catch (error) {
      toast.error("Erreur lors de l'envoi. Veuillez réessayer.");
      console.error("Erreur:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <Toaster position="top-right" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-outfit)] mb-4">
          Me{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
            Contact
          </span>
        </h2>
        <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
          Vous avez un projet en tête ou une question ? N&apos;hésitez pas à me
          contacter.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card>
            <h3 className="text-xl font-semibold mb-6">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  id="name"
                  label="Nom complet"
                  placeholder="Votre nom"
                  error={errors.name?.message}
                  {...register("name", {
                    required: "Le nom est requis",
                    minLength: {
                      value: 2,
                      message: "Le nom doit contenir au moins 2 caractères",
                    },
                  })}
                />
                <Input
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="votre@email.com"
                  error={errors.email?.message}
                  {...register("email", {
                    required: "L'email est requis",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email invalide",
                    },
                  })}
                />
              </div>

              <Input
                id="subject"
                label="Sujet"
                placeholder="Sujet de votre message"
                error={errors.subject?.message}
                {...register("subject", {
                  required: "Le sujet est requis",
                  minLength: {
                    value: 3,
                    message: "Le sujet doit contenir au moins 3 caractères",
                  },
                })}
              />

              <Textarea
                id="message"
                label="Message"
                placeholder="Votre message..."
                rows={5}
                error={errors.message?.message}
                {...register("message", {
                  required: "Le message est requis",
                  minLength: {
                    value: 10,
                    message: "Le message doit contenir au moins 10 caractères",
                  },
                })}
              />

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Envoyer le message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <Card>
            <h3 className="text-xl font-semibold mb-6">Informations de contact</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-foreground-secondary">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-accent transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-foreground-secondary">Téléphone</p>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="hover:text-accent transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-foreground-secondary">Localisation</p>
                  <p>{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold mb-6">Réseaux sociaux</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-white/5 hover:bg-accent/20 flex items-center justify-center text-foreground-secondary hover:text-accent transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-accent-secondary/10 border-accent/20">
            <p className="text-foreground-secondary text-center">
              Je suis disponible pour des discussions sur des projets passionnants.
              N&apos;hésitez pas à me contacter !
            </p>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
