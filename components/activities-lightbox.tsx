"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { ActivityMedia, ActivitySection } from "@/lib/activities-data"
import { sectionLabels, sectionColors } from "@/lib/activities-data"

interface LightboxProps {
  media: ActivityMedia[]
  initialIndex: number
  onClose: () => void
}

export function ActivitiesLightbox({ media, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [zoom, setZoom] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const current = media[currentIndex]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex, media.length])

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % media.length)
    setZoom(1)
  }

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + media.length) % media.length)
    setZoom(1)
  }

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 3))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 1))
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all"
        aria-label="Fechar"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="w-full h-full flex flex-col items-center justify-center relative">
        {/* Main Image/Video Area */}
        <div className="flex-1 flex items-center justify-center w-full max-w-5xl relative overflow-hidden rounded-lg">
          {current.type === "image" && (
            <div className="relative w-full h-full flex items-center justify-center bg-black/50">
              <img
                src={current.url}
                alt={current.altText}
                className="max-w-full max-h-full object-contain transition-transform duration-300"
                style={{ transform: `scale(${zoom})` }}
                onLoad={() => setIsLoading(false)}
              />
            </div>
          )}

          {current.type === "video" && (
            <video
              src={current.url}
              controls
              className="max-w-full max-h-full object-contain"
              autoPlay
            />
          )}

          {/* Zoom Controls (for images only) */}
          {current.type === "image" && (
            <div className="absolute bottom-4 left-4 flex gap-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={handleZoomOut}
                disabled={zoom <= 1}
                className="rounded-full"
              >
                <ZoomOut className="w-4 h-4" />
              </Button>
              <span className="flex items-center px-3 py-2 bg-white/10 rounded-full text-white text-sm">
                {Math.round(zoom * 100)}%
              </span>
              <Button
                size="sm"
                variant="secondary"
                onClick={handleZoomIn}
                disabled={zoom >= 3}
                className="rounded-full"
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>

        {/* Info Bar */}
        <div className="w-full max-w-5xl bg-black/50 text-white p-6 rounded-b-lg">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex-1">
              <div className="mb-2">
                <Badge className={`${sectionColors[current.category].bg} ${sectionColors[current.category].text}`}>
                  {sectionLabels[current.category as ActivitySection]}
                </Badge>
              </div>
              <h2 className="text-2xl font-bold mb-2">{current.title}</h2>
              {current.description && <p className="text-white/80 mb-2">{current.description}</p>}
              <p className="text-sm text-white/60">{current.date}</p>
            </div>

            {/* Counter */}
            <div className="text-right">
              <p className="text-2xl font-bold">
                {currentIndex + 1}/{media.length}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute inset-y-0 left-0 flex items-center p-4">
          <Button
            size="lg"
            variant="ghost"
            onClick={goToPrevious}
            className="rounded-full bg-white/10 hover:bg-white/20 text-white"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center p-4">
          <Button
            size="lg"
            variant="ghost"
            onClick={goToNext}
            className="rounded-full bg-white/10 hover:bg-white/20 text-white"
            aria-label="Próxima"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}
