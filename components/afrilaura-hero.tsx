"use client"

import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Award } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-card to-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Instituto Politécnico Privado AFRILAURE
            </h1>
            <p className="text-xl text-foreground mb-8 leading-relaxed">
              Excelência em educação técnica e académica em Angola. Formamos profissionais qualificados para o futuro.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90"
                onClick={() => scrollToSection("matriculas")}
              >
                Fazer Matrícula
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("cursos")}>
                Ver Cursos
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-semibold text-foreground">Ensino de Qualidade</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-8 h-8 text-secondary" />
                </div>
                <p className="text-sm font-semibold text-foreground">Cursos Técnicos</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-semibold text-foreground">Certificação</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/african-students-studying-in-modern-classroom-in-a.jpg"
              alt="Estudantes AFRILAURE"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <p className="text-3xl font-bold text-primary">15+</p>
              <p className="text-sm text-foreground">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
