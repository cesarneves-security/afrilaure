"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

const ActivityModal = dynamic(() => import("@/components/activity-modal"), {
  ssr: false,
})

type ActivityCategory = "desporto" | "cultural" | "academica" | "social"

interface Activity {
  id: string
  title: string
  category: ActivityCategory
  description: string
  image: string
  date?: string
}

const activities: Activity[] = [
  {
    id: "1",
    title: "Torneio de Futebol Escolar",
    category: "desporto",
    description: "Competição anual entre as turmas, promovendo o espírito de equipa e saúde física.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=400&fit=crop",
    date: "Trimestral",
  },
  {
    id: "2",
    title: "Festa da Cultura Africana",
    category: "cultural",
    description: "Celebração das tradições e património cultural da Africa, com música e dança.",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=400&fit=crop",
    date: "Anual",
  },
  {
    id: "3",
    title: "Olimpíadas de Matemática",
    category: "academica",
    description: "Desafio matemático entre alunos, estimulando o pensamento lógico e criativo.",
    image: "https://images.unsplash.com/photo-1596521967514-2209e3cc8000?w=500&h=400&fit=crop",
    date: "Semestral",
  },
  {
    id: "4",
    title: "Desfile de Encerramento do Ano",
    category: "social",
    description: "Grande celebração do término do ano lectivo com famílias e comunidade.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=400&fit=crop",
    date: "Anual",
  },
  {
    id: "5",
    title: "Campeonato de Voleibol",
    category: "desporto",
    description: "Competição de voleibol entre diferentes níveis de ensino da escola.",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=500&h=400&fit=crop",
    date: "Trimestral",
  },
  {
    id: "6",
    title: "Concurso de Ensaios Literários",
    category: "cultural",
    description: "Promoção da escrita criativa com prémios para os melhores trabalhos.",
    image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=500&h=400&fit=crop",
    date: "Semestral",
  },
  {
    id: "7",
    title: "Feira de Ciências",
    category: "academica",
    description: "Apresentação de projectos científicos e experimentações práticas dos alunos.",
    image: "https://images.unsplash.com/photo-1518611505868-48510c2a735f?w=500&h=400&fit=crop",
    date: "Anual",
  },
  {
    id: "8",
    title: "Jornada de Limpeza da Comunidade",
    category: "social",
    description: "Actividade de responsabilidade social com participação de alunos e staff.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=400&fit=crop",
    date: "Trimestral",
  },
  {
    id: "9",
    title: "Torneio de Basquetebol",
    category: "desporto",
    description: "Competição de basquetebol promovendo desenvolvimento físico e trabalho em equipa.",
    image: "https://images.unsplash.com/photo-1546519638-68711109d298?w=500&h=400&fit=crop",
    date: "Trimestral",
  },
]

const categoryLabels: Record<ActivityCategory, string> = {
  desporto: "Desporto",
  cultural: "Cultural",
  academica: "Académica",
  social: "Social",
}

const categoryColors: Record<ActivityCategory, string> = {
  desporto: "bg-blue-100 text-blue-700",
  cultural: "bg-purple-100 text-purple-700",
  academica: "bg-green-100 text-green-700",
  social: "bg-amber-100 text-amber-700",
}

export default function ActivitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory | null>(null)
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null)

  const filteredActivities =
    selectedCategory === null ? activities : activities.filter((a) => a.category === selectedCategory)

  const categories: ActivityCategory[] = ["desporto", "cultural", "academica", "social"]

  return (
    <div className="min-h-screen pt-20 pb-12 bg-background">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-12 mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Actividades e Eventos</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Conheça as actividades extracurriculares e eventos que tornam a vida escolar em Afrilaure mais dinâmica e
            enriquecedora
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Filtrar por Categoria</h2>
          <div className="flex flex-wrap gap-3">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="rounded-full"
            >
              Todas
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {categoryLabels[category]}
              </Button>
            ))}
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity) => (
            <Card
              key={activity.id}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedActivity(activity)}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6">
                <div className="mb-2">
                  <Badge className={categoryColors[activity.category]}>{categoryLabels[activity.category]}</Badge>
                </div>
                <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{activity.description}</p>
                {activity.date && <p className="text-xs text-foreground/60">Frequência: {activity.date}</p>}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredActivities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Nenhuma actividade encontrada nesta categoria.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <ActivityModal
        activity={selectedActivity}
        categoryLabels={categoryLabels}
        categoryColors={categoryColors}
        onClose={() => setSelectedActivity(null)}
      />
    </div>
  )
}
