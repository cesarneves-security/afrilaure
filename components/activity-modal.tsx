"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

type ActivityCategory = "desporto" | "cultural" | "academica" | "social"

interface Activity {
  id: string
  title: string
  category: ActivityCategory
  description: string
  image: string
  date?: string
}

interface ActivityModalProps {
  activity: Activity | null
  categoryLabels: Record<ActivityCategory, string>
  categoryColors: Record<ActivityCategory, string>
  onClose: () => void
}

export default function ActivityModal({
  activity,
  categoryLabels,
  categoryColors,
  onClose,
}: ActivityModalProps) {
  if (!activity) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="aspect-video overflow-hidden relative">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <div className="mb-3">
            <Badge className={categoryColors[activity.category]}>
              {categoryLabels[activity.category]}
            </Badge>
          </div>
          <h2 className="text-2xl font-bold mb-2">{activity.title}</h2>
          <p className="text-muted-foreground mb-4">{activity.description}</p>
          {activity.date && (
            <p className="text-sm text-foreground/60 mb-4">
              <strong>Frequência:</strong> {activity.date}
            </p>
          )}
          <Button onClick={onClose} variant="outline" className="w-full">
            Fechar
          </Button>
        </div>
      </div>
    </div>
  )
}
