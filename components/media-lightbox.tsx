"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export interface MediaItem {
  id: string
  type: "image" | "video"
  src: string
  title: string
  description?: string
  date?: string
  category: string
  alt: string
}

interface MediaLightboxProps {
  items: MediaItem[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function MediaLightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: MediaLightboxProps) {
  const [zoom, setZoom] = useState(100)
  const currentItem = items[currentIndex]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft" && currentIndex > 0) onNavigate(currentIndex - 1)
      if (e.key === "ArrowRight" && currentIndex < items.length - 1)
        onNavigate(currentIndex + 1)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex, items.length, onClose, onNavigate])

  if (!currentItem) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10">
        <div className="flex-1">
          <h2 className="text-white text-lg md:text-2xl font-bold mb-2">
            {currentItem.title}
          </h2>
          {currentItem.description && (
            <p className="text-gray-300 text-sm md:text-base max-w-2xl">
              {currentItem.description}
            </p>
          )}
          <div className="flex gap-2 mt-3 flex-wrap">
            <Badge variant="outline" className="text-white">
              {currentItem.category}
            </Badge>
            {currentItem.date && (
              <Badge variant="outline" className="text-white">
                {currentItem.date}
              </Badge>
            )}
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-white hover:bg-white/10"
        >
          <X className="w-6 h-6" />
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center overflow-hidden relative">
        {currentItem.type === "image" ? (
          <div className="relative w-full h-full flex items-center justify-center overflow-auto">
            <img
              src={currentItem.src}
              alt={currentItem.alt}
              style={{ transform: `scale(${zoom / 100})` }}
              className="max-w-full max-h-full object-contain transition-transform duration-300"
            />
          </div>
        ) : (
          <video
            src={currentItem.src}
            controls
            className="max-w-full max-h-full object-contain"
            autoPlay
          />
        )}

        {/* Navigation Arrows */}
        {currentIndex > 0 && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate(currentIndex - 1)}
            className="absolute left-4 text-white hover:bg-white/20 z-20"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>
        )}

        {currentIndex < items.length - 1 && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate(currentIndex + 1)}
            className="absolute right-4 text-white hover:bg-white/20 z-20"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>
        )}
      </div>

      {/* Footer with Controls and Counter */}
      <div className="flex items-center justify-between p-4 md:p-6 border-t border-white/10 bg-black/50">
        <div className="flex gap-2">
          {currentItem.type === "image" && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setZoom(Math.max(50, zoom - 10))}
                className="text-white hover:bg-white/10"
              >
                <ZoomOut className="w-5 h-5" />
              </Button>
              <span className="text-white/70 text-sm px-2 py-1">
                {zoom}%
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setZoom(Math.min(200, zoom + 10))}
                className="text-white hover:bg-white/10"
              >
                <ZoomIn className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setZoom(100)}
                className="text-white hover:bg-white/10"
              >
                Reset
              </Button>
            </>
          )}
        </div>

        <div className="text-white/70 text-sm font-medium">
          {currentIndex + 1} / {items.length}
        </div>

        <div className="text-xs text-white/50">
          Use arrow keys to navigate • ESC to close
        </div>
      </div>
    </div>
  )
}
