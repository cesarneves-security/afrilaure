import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shirt, Music, Landmark, Trophy, Ship, Trees, Waves } from "lucide-react"

export function Activities() {
  const activities = [
    { icon: Landmark, title: "Visitas a Locais Históricos", description: "Conhecer a história de Angola" },
    { icon: Trophy, title: "Concurso Quem Sabe... Sabe", description: "Competições académicas" },
    { icon: Music, title: "Informática e Música", description: "Aulas extracurriculares" },
    { icon: Landmark, title: "Jornadas Científicas", description: "Eventos educativos" },
    { icon: Ship, title: "Passeio de Comboio e Barco", description: "Experiências únicas" },
    { icon: Trees, title: "Safari - Parque da Kissama", description: "Contacto com a natureza" },
    { icon: Waves, title: "Piscina", description: "Actividades aquáticas" },
  ]

  const uniforms = [
    { item: "Bata", price: "12.000,00 Kz" },
    { item: "Uniforme de Ed. Física", price: "9.000,00 Kz" },
  ]

  return (
    <section id="actividades" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Actividades e Uniformes</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">Experiências educativas além da sala de aula</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Actividades Extra-Escolares</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-card rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <activity.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{activity.title}</h3>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Shirt className="w-6 h-6 text-secondary" />
                  <CardTitle className="text-2xl text-primary">Uniformes</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-6">
                  O uso do uniforme é de <strong>carácter obrigatório</strong>. Os alunos devem adquiri-lo no acto de
                  matrícula.
                </p>
                <div className="space-y-4">
                  {uniforms.map((uniform, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-secondary/10 rounded-lg">
                      <span className="font-semibold text-foreground">{uniform.item}</span>
                      <span className="text-xl font-bold text-secondary">{uniform.price}</span>
                    </div>
                  ))}
                </div>
                <Card className="mt-6 bg-destructive/10 border-destructive/20">
                  <CardContent className="pt-6">
                    <p className="text-sm text-foreground">
                      <strong>Importante:</strong> Alunos que se apresentarem mal uniformizados (bata suja ou manchada)
                      serão impedidos de assistir às aulas.
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Localização</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  Depois da Comarca de Viana, por detrás às bombas de combustíveis dos Montes Claros
                  <br />
                  <strong>Rua 17 de Setembro nº 35, zona 10</strong>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
