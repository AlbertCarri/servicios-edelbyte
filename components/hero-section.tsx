"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
  
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('/servicios-001.avif')",
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
          <span className="text-balance">
            Desarrollo de <span className="text-primary">Software</span> a
            medida y Estrategia Digital
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
          Ayudo a empresas y emprendedores a construir productos digitales,{" "}
          <strong className="text-foreground">escalables</strong> y con una
          buena experiencia de usuario. De la idea al código, con{" "}
          <strong className="text-foreground">mentalidad profesional</strong>.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full"
        >
          <a href="#contacto">
            Hablemos de tu proyecto
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
