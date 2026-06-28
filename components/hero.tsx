"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/5 via-background to-secondary/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Excelência em Educação</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              Instituto Politécnico Privado <span className="gradient-text">AFRILAURE</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Ensino Técnico Médio de Saúde, Formação de excelência em Enfermagem, Análises Clínicas, Farmácia Radiologia, Fisioterapia, e Estomatologia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("cursos")}
                className="group bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg"
              >
                Conheça os Cursos
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contacto")}
                className="border-2 hover:bg-muted/50"
              >
                Entre em Contacto
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-30"></div>
            <img
              src="/african-nursing-students-in-medical-training-class.jpg"
              alt="Estudantes do Instituto Politécnico Privado AFRILAURE"
              className="rounded-2xl shadow-2xl w-full relative z-10 border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
