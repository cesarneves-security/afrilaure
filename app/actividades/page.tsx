"use client"

import { useState, useMemo, Suspense } from "react"
import Image from "next/image"
import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import dynamic from "next/dynamic"
import { activitiesData, sectionLabels, sectionColors, type ActivitySection, type ActivityMedia } from "@/lib/activities-data"
import { GallerySkeleton } from "@/components/gallery-skeleton"

const ActivitiesLightbox = dynamic(() => import("@/components/activities-lightbox").then((mod) => ({ default: mod.ActivitiesLightbox })), {
  ssr: false,
  loading: () => <div />,
})

const sections: ActivitySection[] = ["defesas", "eventos", "festivais", "visitas", "formaturas"]

const allCategories = ["todos", ...sections] as const
type FilterCategory = (typeof allCategories)[number]

export default function ActivitiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("todos")
  const [selectedMedia, setSelectedMedia] = useState<ActivityMedia | null>(null)
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0)

  // Filter and search
  const filteredMedia = useMemo(() => {
    let result = activitiesData

    // Category filter
    if (selectedCategory !== "todos") {
      result = result.filter((item) => item.category === selectedCategory)
    }

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(term) ||
          item.description?.toLowerCase().includes(term) ||
          item.category.toLowerCase().includes(term),
      )
    }

    return result
  }, [searchTerm, selectedCategory])

  const handleMediaClick = (media: ActivityMedia) => {
    setSelectedMedia(media)
    setSelectedMediaIndex(filteredMedia.indexOf(media))
  }

  const handleLightboxClose = () => {
    setSelectedMedia(null)
  }

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white py-16 mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Galeria de Actividades</h1>
          <p className="text-xl text-white/90 max-w-2xl text-pretty">
            Descubra os eventos, festivais, defesas e momentos especiais que fazem parte da vida em Afrilaure. Explore nossa galeria completa de actividades e celebrações.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Search Bar */}
        <div className="mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Procure por evento, título, descrição ou categoria..."
              className="pl-12 py-6 text-base rounded-full border-2 border-border focus:border-primary transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {searchTerm && filteredMedia.length === 0 && (
            <p className="text-center text-muted-foreground mt-4">
              Nenhuma actividade encontrada com "{searchTerm}". Tente outro termo.
            </p>
          )}
        </div>

        {/* Filter Buttons */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-foreground" />
            <h2 className="text-lg font-semibold">Filtrar por Categoria</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              variant={selectedCategory === "todos" ? "default" : "outline"}
              onClick={() => setSelectedCategory("todos")}
              className="rounded-full"
              size="lg"
            >
              Todas as Actividades
            </Button>
            {sections.map((section) => (
              <Button
                key={section}
                variant={selectedCategory === section ? "default" : "outline"}
                onClick={() => setSelectedCategory(section)}
                className="rounded-full"
                size="lg"
              >
                {sectionLabels[section]}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            Mostrando <span className="font-semibold text-foreground">{filteredMedia.length}</span> de{" "}
            <span className="font-semibold text-foreground">{activitiesData.length}</span> actividades
          </p>
        </div>

        {/* Gallery Sections */}
        <Suspense fallback={<GallerySkeleton />}>
          {filteredMedia.length > 0 ? (
            <div className="space-y-16">
              {/* When filtering by category, show flat grid */}
              {selectedCategory !== "todos" ? (
                <div>
                  <h3 className="text-3xl font-bold mb-8 text-foreground">{sectionLabels[selectedCategory as ActivitySection]}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredMedia.map((media, index) => (
                      <MediaCard
                        key={media.id}
                        media={media}
                        onClick={() => handleMediaClick(media)}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                // When showing all, group by section
                sections.map((section) => {
                  const sectionMedia = filteredMedia.filter((m) => m.category === section)
                  if (sectionMedia.length === 0) return null

                  return (
                    <div key={section}>
                      <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
                        {sectionLabels[section]}
                        <Badge className={`${sectionColors[section].bg} ${sectionColors[section].text}`}>
                          {sectionMedia.length}
                        </Badge>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sectionMedia.map((media) => (
                          <MediaCard
                            key={media.id}
                            media={media}
                            onClick={() => handleMediaClick(media)}
                          />
                        ))}
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">Nenhuma actividade encontrada.</p>
            </div>
          )}
        </Suspense>
      </div>

      {/* Lightbox Viewer */}
      {selectedMedia && (
        <ActivitiesLightbox media={filteredMedia} initialIndex={selectedMediaIndex} onClose={handleLightboxClose} />
      )}
    </div>
  )
}

function MediaCard({ media, onClick, index = 0 }: { media: ActivityMedia; onClick: () => void; index?: number }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={media.thumbnail || media.url}
          alt={media.altText}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onLoad={() => setIsLoading(false)}
        />

        {/* Video Badge */}
        {media.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white/100 transition-all">
              <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Overlay with category */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <Badge className={`${sectionColors[media.category].bg} ${sectionColors[media.category].text} w-fit`}>
            {sectionLabels[media.category]}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {media.title}
        </h3>
        {media.description && <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{media.description}</p>}
        <p className="text-xs text-foreground/60">{media.date}</p>
      </div>
    </div>
  )
}
