"use client"

import { useState, useMemo } from "react"
import dynamic from "next/dynamic"
import ActivitySearchFilter from "@/components/activity-search-filter"
import ActivitySection from "@/components/activity-section"
import type { MediaItem } from "@/components/media-lightbox"

const MediaLightbox = dynamic(() => import("@/components/media-lightbox"), {
  ssr: false,
})

// Extended media data with all items for each section
const activitySections = [
  {
    id: "defesas",
    title: "Defesas de Cursos",
    description: "Apresentações finais dos trabalhos de conclusão de curso",
    icon: "🎓",
    category: "Académica",
    media: [
      {
        id: "d1",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop",
        title: "Defesa de Informática 2024",
        description: "Apresentação do projeto final de redes de computadores",
        date: "Março 2024",
        category: "Defesas",
        alt: "Student presenting final project",
      },
      {
        id: "d2",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop",
        title: "Defesa de Electrónica",
        description: "Projeto de circuitos eletrônicos avançados",
        date: "Março 2024",
        category: "Defesas",
        alt: "Electronics project presentation",
      },
      {
        id: "d3",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop",
        title: "Apresentação de Banco de Dados",
        description: "Sistema de gestão desenvolvido pelos alunos",
        date: "Abril 2024",
        category: "Defesas",
        alt: "Database project demonstration",
      },
      {
        id: "d4",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop",
        title: "Defesa de Aplicação Mobile",
        description: "App desenvolvido para a comunidade local",
        date: "Abril 2024",
        category: "Defesas",
        alt: "Mobile app presentation",
      },
      {
        id: "d5",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop",
        title: "Projecto de Automação",
        description: "Sistema de automação industrial",
        date: "Maio 2024",
        category: "Defesas",
        alt: "Automation system project",
      },
      {
        id: "d6",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop",
        title: "Defesa de Cibersegurança",
        description: "Análise de vulnerabilidades e segurança de redes",
        date: "Maio 2024",
        category: "Defesas",
        alt: "Cybersecurity project",
      },
    ],
  },
  {
    id: "eventos",
    title: "Eventos Escolares",
    description: "Momentos especiais e celebrações da comunidade escolar",
    icon: "🎉",
    category: "Eventos",
    media: [
      {
        id: "e1",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop",
        title: "Dia da Escola",
        description: "Comemoração do aniversário da instituição com atividades especiais",
        date: "Fevereiro 2024",
        category: "Eventos",
        alt: "School anniversary celebration",
      },
      {
        id: "e2",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=800&fit=crop",
        title: "Mostra de Talentos",
        description: "Alunos apresentam seus talentos artísticos e musicais",
        date: "Março 2024",
        category: "Eventos",
        alt: "Talent show performance",
      },
      {
        id: "e3",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop",
        title: "Palestra de Inovação",
        description: "Especialista em tecnologia compartilha conhecimentos com alunos",
        date: "Abril 2024",
        category: "Eventos",
        alt: "Innovation lecture",
      },
      {
        id: "e4",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=800&fit=crop",
        title: "Noite de Cinema",
        description: "Sessão de cinema com alunos e comunidade",
        date: "Abril 2024",
        category: "Eventos",
        alt: "Movie night event",
      },
      {
        id: "e5",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop",
        title: "Conferência Tecnológica",
        description: "Apresentação de tendências em tecnologia e inovação",
        date: "Maio 2024",
        category: "Eventos",
        alt: "Technology conference",
      },
      {
        id: "e6",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=800&fit=crop",
        title: "Workshop de Programação",
        description: "Oficina prática de programação web avançada",
        date: "Junho 2024",
        category: "Eventos",
        alt: "Programming workshop",
      },
    ],
  },
  {
    id: "festivais",
    title: "Festivais",
    description: "Festas e celebrações culturais do colégio",
    icon: "🎭",
    category: "Cultural",
    media: [
      {
        id: "f1",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop",
        title: "Festival de Música",
        description: "Apresentações musicais de diferentes gêneros",
        date: "Julho 2024",
        category: "Festivais",
        alt: "Music festival performance",
      },
      {
        id: "f2",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=800&fit=crop",
        title: "Festa das Culturas",
        description: "Celebração da diversidade cultural da comunidade",
        date: "Julho 2024",
        category: "Festivais",
        alt: "Cultural diversity festival",
      },
      {
        id: "f3",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop",
        title: "Festival de Teatro",
        description: "Apresentações teatrais dos alunos",
        date: "Agosto 2024",
        category: "Festivais",
        alt: "Theater festival",
      },
      {
        id: "f4",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=800&fit=crop",
        title: "Festa de Dança",
        description: "Apresentação de dança tradicional e moderna",
        date: "Agosto 2024",
        category: "Festivais",
        alt: "Dance festival",
      },
      {
        id: "f5",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop",
        title: "Festival de Arte",
        description: "Exposição de obras de arte dos alunos",
        date: "Setembro 2024",
        category: "Festivais",
        alt: "Art festival exhibition",
      },
      {
        id: "f6",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=800&fit=crop",
        title: "Festival de Cinema",
        description: "Exibição de documentários e filmes produzidos pelos alunos",
        date: "Setembro 2024",
        category: "Festivais",
        alt: "Film festival",
      },
    ],
  },
  {
    id: "visitas",
    title: "Visitas de Estudo",
    description: "Viagens educacionais e experiências de aprendizagem prática",
    icon: "🚌",
    category: "Educação",
    media: [
      {
        id: "v1",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=800&h=800&fit=crop",
        title: "Visita ao Parque de Tecnologia",
        description: "Conhecer empresas de tecnologia e inovação",
        date: "Outubro 2024",
        category: "Visitas",
        alt: "Technology park visit",
      },
      {
        id: "v2",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe3e?w=800&h=800&fit=crop",
        title: "Museu de Ciência",
        description: "Exploração interativa de conceitos científicos",
        date: "Novembro 2024",
        category: "Visitas",
        alt: "Science museum",
      },
      {
        id: "v3",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=800&h=800&fit=crop",
        title: "Fábrica de Eletrónicos",
        description: "Conhecer o processo de fabricação de componentes eletrônicos",
        date: "Dezembro 2024",
        category: "Visitas",
        alt: "Electronics factory tour",
      },
      {
        id: "v4",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe3e?w=800&h=800&fit=crop",
        title: "Estação de Telecomunicações",
        description: "Visita técnica à infraestrutura de comunicações",
        date: "Janeiro 2025",
        category: "Visitas",
        alt: "Telecom station visit",
      },
      {
        id: "v5",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=800&h=800&fit=crop",
        title: "Universidade Local",
        description: "Conhecer programas de educação superior e carreiras",
        date: "Fevereiro 2025",
        category: "Visitas",
        alt: "University visit",
      },
      {
        id: "v6",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe3e?w=800&h=800&fit=crop",
        title: "Centro de Investigação",
        description: "Viagem de pesquisa e aprendizagem avançada",
        date: "Março 2025",
        category: "Visitas",
        alt: "Research center visit",
      },
    ],
  },
  {
    id: "formaturas",
    title: "Formaturas",
    description: "Cerimônias de conclusão e celebração dos formandos",
    icon: "👨‍🎓",
    category: "Celebração",
    media: [
      {
        id: "g1",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1523050854058-7992c7924571?w=800&h=800&fit=crop",
        title: "Formatura 2024 - Cerimónia",
        description: "Cerimônia oficial de formatura da turma 2024",
        date: "Junho 2024",
        category: "Formaturas",
        alt: "Graduation ceremony",
      },
      {
        id: "g2",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1523050854058-7992c7924571?w=800&h=800&fit=crop",
        title: "Fotos de Turma",
        description: "Registro fotográfico oficial dos formandos",
        date: "Junho 2024",
        category: "Formaturas",
        alt: "Class photo",
      },
      {
        id: "g3",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1523050854058-7992c7924571?w=800&h=800&fit=crop",
        title: "Baile de Gala",
        description: "Festas e celebração dos formandos",
        date: "Junho 2024",
        category: "Formaturas",
        alt: "Graduation gala ball",
      },
      {
        id: "g4",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1523050854058-7992c7924571?w=800&h=800&fit=crop",
        title: "Homenagem aos Professores",
        description: "Agradecimento especial aos mestres",
        date: "Junho 2024",
        category: "Formaturas",
        alt: "Teacher appreciation",
      },
      {
        id: "g5",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1523050854058-7992c7924571?w=800&h=800&fit=crop",
        title: "Entrega de Diplomas",
        description: "Momento solene da entrega dos diplomas",
        date: "Junho 2024",
        category: "Formaturas",
        alt: "Diploma ceremony",
      },
      {
        id: "g6",
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1523050854058-7992c7924571?w=800&h=800&fit=crop",
        title: "Formatura 2023 - Recordação",
        description: "Cerimônia de formatura do ano anterior",
        date: "Junho 2023",
        category: "Formaturas",
        alt: "Previous graduation",
      },
    ],
  },
]

const categories = [
  { id: "defesas", label: "Defesas de Cursos", icon: "🎓" },
  { id: "eventos", label: "Eventos Escolares", icon: "🎉" },
  { id: "festivais", label: "Festivais", icon: "🎭" },
  { id: "visitas", label: "Visitas de Estudo", icon: "🚌" },
  { id: "formaturas", label: "Formaturas", icon: "👨‍🎓" },
]

export default function ActivitiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [currentSection, setCurrentSection] = useState(0)

  // Flatten all media items for lightbox navigation
  const allMediaItems: MediaItem[] = useMemo(() => {
    return activitySections.flatMap((section) => section.media)
  }, [])

  // Filter sections and media based on search and category
  const filteredSections = useMemo(() => {
    return activitySections
      .map((section) => ({
        ...section,
        media: section.media.filter((item) => {
          const matchesCategory =
            !selectedCategory || section.id === selectedCategory
          const matchesSearch =
            !searchQuery ||
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase())
          return matchesCategory && matchesSearch
        }),
      }))
      .filter((section) => section.media.length > 0)
  }, [searchQuery, selectedCategory])

  const handleMediaClick = (sectionIndex: number, mediaIndex: number) => {
    // Calculate the global index in the flattened array
    let globalIndex = 0
    for (let i = 0; i < sectionIndex; i++) {
      globalIndex += filteredSections[i].media.length
    }
    globalIndex += mediaIndex

    setCurrentMediaIndex(globalIndex)
    setCurrentSection(sectionIndex)
    setLightboxOpen(true)
  }

  const handleReset = () => {
    setSearchQuery("")
    setSelectedCategory(null)
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/70 text-white py-16 md:py-24 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-40 h-40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-20 w-60 h-60 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              Atividades e Eventos
            </h1>
            <p className="text-lg md:text-xl text-white/90 text-pretty leading-relaxed">
              Explore uma galeria completa das atividades, eventos, defesas de curso, festivais e momentos especiais que definem a vida em Afrilaure. Conheça as experiências que enriquecem nossa comunidade educacional.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        {/* Search and Filter Section */}
        <ActivitySearchFilter
          categories={categories}
          onSearchChange={setSearchQuery}
          onCategoryChange={setSelectedCategory}
          onReset={handleReset}
        />

        {/* Activity Sections */}
        {filteredSections.length > 0 ? (
          <div className="space-y-16">
            {filteredSections.map((section, sectionIndex) => (
              <ActivitySection
                key={section.id}
                title={section.title}
                category={section.category}
                description={section.description}
                icon={section.icon}
                media={section.media}
                onMediaClick={(mediaIndex) =>
                  handleMediaClick(sectionIndex, mediaIndex)
                }
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-4">
              Nenhuma atividade encontrada com esses critérios.
            </p>
            <button
              onClick={handleReset}
              className="text-primary hover:underline font-medium"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && filteredSections.length > 0 && (
        <MediaLightbox
          items={filteredSections[currentSection].media}
          currentIndex={currentMediaIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={(index) => setCurrentMediaIndex(index)}
        />
      )}
    </div>
  )
}
