"use client"

import { ExternalLink, Utensils, FlaskConical, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { link } from "fs"

const projects = [
  {
    icon: FlaskConical,
    title: "Edelbyte",
    description:
      "Mi página personal. Todos mis proyectos para que los veas en un solo lugar.",
    tags: ["Next.js", "Tailwind", "React"],
    link:"https://edelbyte.com.ar/",
  },
  {
    icon: Utensils,
    title: "TuResto",
    description:
      "Sistema integral de gestión para gastronomía (SaaS) para cargar menús y poder cargar la carta escaneando el código QR.",
    tags: ["React", "Next.js", "Supabase", "Mercado Pago"],
    link:"https://turesto.edelbyte.com.ar",
  },
  {
    icon: BookOpen,
    title: "Publicaciones",
    description:
      'Autor de "Aprender programación después de los 40", una guía práctica para desarrolladores modernos que comienzan en edad adulta con este fascinante mundo.',
    tags: ["Libro", "Educación", "Desarrollo"],
    link:"https://www.amazon.com/dp/B0GCNWKNF3",
  },
]

export function PortfolioSection() {
  return (
    <section id="muestras" className="relative py-24 md:py-32 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('/servicios-001.avif')",
        }}
      >
        <div className="absolute inset-0 bg-card/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            En el radar
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4">
            Proyectos Destacados
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-secondary/50 border-border backdrop-blur-sm hover:bg-secondary/70 transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  <Link href={project.link}>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
                  </Link>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
