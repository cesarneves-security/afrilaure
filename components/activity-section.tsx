"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { MediaItem } from "./media-lightbox"

interface ActivitySectionProps {
  title: string
  category: string
  description?: string
  icon?: string
  media: MediaItem[]
  onMediaClick: (index: number) => void
  isExpanded?: boolean
  previewLimit?: number
}

export default function ActivitySection({
  title,
  category,
  description,
  icon,
  media,
  onMediaClick,
  isExpanded: initialExpanded = true,
  previewLimit,
}: ActivitySectionProps) {
  const [isExpanded, setIsExpanded] = useState(initialExpanded)
  const [showAllMedia, setShowAllMedia] = useState(false)
  const visibleMedia = previewLimit && !showAllMedia ? media.slice(0, previewLimit) : media
  const hasHiddenMedia = Boolean(previewLimit && media.length > previewLimit)

  if (!media.length) return null

  return (
    <section className="mb-16 animate-in fade-in duration-500">
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              {icon && <span className="text-3xl">{icon}</span>}
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {title}
              </h2>
            </div>
            {description && (
              <p className="text-muted-foreground text-base md:text-lg max-w-3xl">
                {description}
              </p>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-4"
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-sm">
            {media.length} {media.length === 1 ? "item" : "items"}
          </Badge>
          <Badge variant="secondary" className="text-sm">
            {category}
          </Badge>
        </div>
      </div>

      {/* Gallery Grid */}
      {isExpanded && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-in fade-in duration-300">
          {visibleMedia.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg aspect-square bg-muted cursor-pointer"
              onClick={() => onMediaClick(index)}
            >
              {/* Image/Video Thumbnail */}
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <>
                  <video
                    src={item.src}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-semibold text-sm line-clamp-2">
                  {item.title}
                </h3>
                {item.date && (
                  <p className="text-xs text-gray-300 mt-1">{item.date}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {isExpanded && hasHiddenMedia && (
        <div className="flex justify-center mt-6">
          <Button
            variant="outline"
            onClick={() => setShowAllMedia(!showAllMedia)}
            aria-expanded={showAllMedia}
          >
            {showAllMedia ? "Ver menos" : `Ver mais (${media.length - (previewLimit ?? 0)} fotos)`}
            {showAllMedia ? <ChevronUp data-icon="inline-end" /> : <ChevronDown data-icon="inline-end" />}
          </Button>
        </div>
      )}
    </section>
  )
}
