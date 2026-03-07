"use client"

import { Globe, Code2, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Globe,
    title: "Diseño y Desarrollo Web Pro",
    description:
      "No solo creo páginas, construyo herramientas de venta. Utilizo tecnologías de última generación como Next.js 15 para garantizar una velocidad de carga instantánea y un SEO técnico impecable.",
    features: [
      "Sitios corporativos y Landing Pages con dominio propio de tu marca",
      "Optimización de rendimiento para lograr una velocidad adecuada",
    ],
    highlight: "Next.js 15",
  },
  {
    icon: Code2,
    title: "Desarrollo de Software & SaaS",
    description:
      "Especializado en crear soluciones complejas que automatizan procesos. Si necesitas un panel de administración, una plataforma de gestión o un sistema con bases de datos en tiempo real (Supabase), puedo construirlo desde cero.",
    features: [
      "Aplicaciones web interactivas y personalizadas",
      "Integración de APIs y sistemas de autenticación seguros",
      "Integración con pasarelas de pago (Mercado Libre)",
    ],
    highlight: "SaaS",
  },
  {
    icon: Users,
    title: "Consultoría Técnica y Social Media",
    description:
      "El código es solo una parte del éxito. Te asesoro en la arquitectura de tu proyecto y en cómo potenciar tu presencia digital para que la tecnología trabaje a favor de tu negocio.",
    features: [],
    highlight: "Consultoría",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="relative py-24 md:py-32 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-card/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Lo que ofrezco
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4">
            Servicios
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
                  {service.description.split(service.highlight).map((part, i, arr) =>
                    i < arr.length - 1 ? (
                      <span key={i}>
                        {part}
                        <strong className="text-primary">{service.highlight}</strong>
                      </span>
                    ) : (
                      part
                    )
                  )}
                </p>
                {service.features.length > 0 && (
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2 text-muted-foreground text-sm"
                      >
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
