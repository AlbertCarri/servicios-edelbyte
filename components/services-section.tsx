"use client";

import { Globe, Code2, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Si te pasa esto, no sos el único",
    description: "",
    features: [
      "Te preguntan cosas básicas todo el tiempo",
      "Tenés que explicar lo mismo una y otra vez.",
      "Mostrás lo que hacés, pero no genera consultas",
      "Sentís que podrías vender más, pero no sabés por qué no pasa",
      "Tenés redes, pero no lográs convertir visitas en clientes",
    ],
    highlight: "No es falta de interés. Es falta de claridad.",
  },
  {
    icon: Code2,
    title: "No se trata solo de tener una web",
    description:
      "Se trata de que alguien entre y entienda en segundos:",
    features: [
      "qué hacés",
      "cómo lo hacés",
      "y por qué debería contactarte",
    ],
    highlight: "Trabajo en eso: en que tu negocio se entienda fácil y genere confianza.",
  },
  {
    icon: Users,
    title: "Cómo trabajo",
    description:
      "",
    features: [
      "Analizo cómo estás mostrando hoy tu negocio (web, redes, WhatsApp, lo que uses)",
      "Detecto dónde se pierde la gente (dónde se confunden o se van)",
      "Armo una solución simple para que todo sea más claro y directo",
    ],
    highlight: "Menos vueltas. Más consultas reales.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/servicios-002.avif')",
        }}
      >
        <div className="absolute inset-0 bg-card/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Lo que ofrezco
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4">
            Servicios digitales a medida
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-secondary/50 border-border backdrop-blur-sm hover:bg-secondary/70 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                {service.features.length > 0 && (
                  <>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2 text-muted-foreground text-sm"
                        >
                          <span className="text-3xl -mt-2 text-primary">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                <p className="mt-2">
                  <strong className="text-primary">{service.highlight}</strong>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
