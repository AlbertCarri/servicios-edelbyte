"use client";

import { BookOpen, Lightbulb, Handshake } from "lucide-react";

const traits = [
  {
    icon: BookOpen,
    title: "Autor Técnico",
    description:
      "Entiendo que la claridad es fundamental, tanto en el código como en la comunicación.",
  },
  {
    icon: Lightbulb,
    title: "Autodidacta",
    description:
      "Prefiero las soluciones elegantes y funcionales sobre la complejidad innecesaria.",
  },
  {
    icon: Handshake,
    title: "Socio Tecnológico",
    description:
      "Mi objetivo es ser tu socio tecnológico, no solo alguien que escribe líneas de código.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre-mi" className="relative py-24 md:py-32 overflow-hidden">
      
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('/servicios-003.avif')",
        }}
      >
        <div className="absolute inset-0 bg-background/95" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              El factor humano
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Experiencia, curiosidad y compromiso
            </h2>
            <div className="w-20 h-1 bg-primary mb-8" />

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Soy un desarrollador{" "}
                <strong className="text-foreground">Full Stack</strong>. Mi
                enfoque es{" "}
                <strong className="text-primary">
                  autodidacta y pragmático
                </strong>
                : prefiero las soluciones elegantes y funcionales sobre la
                complejidad innecesaria.
              </p>
              <p>
                Como{" "}
                <strong className="text-foreground">
                  autor de libros técnicos
                </strong>
                , entiendo que la claridad es fundamental, tanto en el código
                como en la comunicación con mis clientes. Mi objetivo es ser tu{" "}
                <strong className="text-primary">socio tecnológico</strong>, no
                solo alguien que escribe líneas de código.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {traits.map((trait, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/70 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <trait.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {trait.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {trait.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
