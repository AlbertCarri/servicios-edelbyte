"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/servicios-001.avif')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
          <span className="text-balance">
            Te ayudo a{" "}
            <span className="text-primary italic">optimizar tu negocio</span>{" "}
            con software a medida.
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
          La gente está buscando algo que seguro tenés, pero
          <strong className="text-foreground italic">
            {" "}
            no entiende lo que ofreces.
          </strong>
          <br />
           Te ayudo a mostrar tus servicios o productos 

          <strong className="text-foreground">
            {" "}
            pero de una manera clara.
          </strong>
          .
        </p>

        <Button
          asChild
          size="lg"
          className="bg-primary mt-4 text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full"
        >
          <a href="#contacto">
            Quiero mejorar cómo vendo
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
