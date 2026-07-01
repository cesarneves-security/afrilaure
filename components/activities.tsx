import { Card, CardContent } from "@/components/ui/card"
import { Palmtree, Trophy, Music, Microscope, Ship, Camera } from "lucide-react"

export function Activities() {
  const activities = [
    { icon: Camera, title: "Visitas a Locais Históricos", description: "Conhecer a história de Angola" },
    { icon: Trophy, title: "Concurso Quem Sabe... Sabe", description: "Competições académicas" },
    { icon: Music, title: "Informática e Música", description: "Aulas extracurriculares" },
    { icon: Microscope, title: "Jornadas Científicas", description: "Eventos científicos e educativos" },
    { icon: Ship, title: "Passeio de Comboio e Barco", description: "Experiências únicas" },
    { icon: Palmtree, title: "Safari - Parque da Kissama", description: "Visita ao parque nacional" },
  ]

  return (
    <section id="atividades" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Atividades Extra-Escolares</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Proporcionamos experiências enriquecedoras além da sala de aula
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <activity.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{activity.title}</h3>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
