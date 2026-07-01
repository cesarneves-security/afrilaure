import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { GraduationCap, BookOpen, Sparkles, ArrowRight } from "lucide-react"

const classes = [
  { label: "Iniciação", level: "Pré-escolar" },
  { label: "1.ª Classe", level: "Ensino Primário" },
  { label: "2.ª Classe", level: "Ensino Primário" },
  { label: "3.ª Classe", level: "Ensino Primário" },
  { label: "4.ª Classe", level: "Ensino Primário" },
  { label: "5.ª Classe", level: "Ensino Primário" },
  { label: "6.ª Classe", level: "Ensino Primário" },
  { label: "7.ª Classe", level: "I Ciclo" },
  { label: "8.ª Classe", level: "I Ciclo" },
  { label: "9.ª Classe", level: "I Ciclo" },
]

export function EnsinoGeralSection() {
  return (
    <section id="ensino-geral" className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-accent/20 text-accent-foreground border border-accent/30">
            Da Iniciação à 9.ª Classe
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Ensino Geral</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Um percurso educativo sólido e acolhedor para crianças e adolescentes, da Iniciação ao I Ciclo do Ensino
            Secundário, num ambiente moderno, seguro e orientado para o sucesso.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch">
          <Card className="lg:col-span-1 border-2 bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-xl">
            <CardContent className="p-8 flex flex-col h-full justify-between">
              <div>
                <div className="p-3 bg-white/20 rounded-xl w-fit mb-6">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Uma base para toda a vida</h3>
                <p className="text-pretty leading-relaxed text-primary-foreground/90">
                  No Ensino Geral do Colégio Afrilaure, cada criança é acompanhada de perto, com metodologias modernas,
                  ensino de inglês desde a Iniciação e foco no desenvolvimento integral.
                </p>
              </div>
              <Button asChild size="lg" variant="secondary" className="mt-8 w-full sm:w-auto">
                <Link href="/ensino-geral" className="flex items-center justify-center gap-2">
                  Conhecer o Ensino Geral
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {classes.map((item) => (
                <Card
                  key={item.label}
                  className="border-2 hover:border-primary hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-card to-muted/20"
                >
                  <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                    <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <p className="font-bold text-sm">{item.label}</p>
                    <span className="text-xs text-muted-foreground">{item.level}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/10 p-4">
              <Sparkles className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground text-pretty">
                Merenda e transporte escolar, actividades extracurriculares e acompanhamento pedagógico personalizado
                fazem parte da experiência do Ensino Geral.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
