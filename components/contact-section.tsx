"use client"

import { useState } from "react"
import { MessageCircle, Calendar, ArrowRight, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    consulta: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    alert("Gracias por tu mensaje. Te contactaremos pronto.")
    setFormData({ nombre: "", email: "", consulta: "" })
    setShowForm(false)
  }

  return (
    <section id="contacto" className="relative py-24 md:py-32 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-primary text-sm font-semibold tracking-wider uppercase">
          Conversemos
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
          ¿Listo para llevar tu idea al siguiente nivel?
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-8" />

        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          Si buscas un desarrollador que entienda el negocio y aporte{" "}
          <strong className="text-foreground">soluciones reales</strong>, estás en el
          lugar correcto.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full w-full sm:w-auto"
          >
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Enviar mensaje por WhatsApp
            </a>
          </Button>

          <Button
            onClick={() => setShowForm(!showForm)}
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 rounded-full w-full sm:w-auto"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Agendar consulta técnica
            <ArrowRight
              className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                showForm ? "rotate-90" : ""
              }`}
            />
          </Button>
        </div>

        {/* Contact Form */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showForm ? "max-h-[500px] opacity-100 mt-12" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 max-w-xl mx-auto text-left"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nombre
                </label>
                <Input
                  id="nombre"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="consulta"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Consulta
                </label>
                <Textarea
                  id="consulta"
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                  value={formData.consulta}
                  onChange={(e) =>
                    setFormData({ ...formData, consulta: e.target.value })
                  }
                  required
                  rows={4}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 rounded-full"
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
