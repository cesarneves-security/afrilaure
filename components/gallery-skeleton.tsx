export function GallerySkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="space-y-3 animate-pulse">
          <div className="aspect-video bg-muted rounded-lg" />
          <div className="space-y-2 px-2">
            <div className="h-4 bg-muted rounded w-1/3" />
            <div className="h-3 bg-muted rounded w-full" />
            <div className="h-3 bg-muted rounded w-2/3" />
          </div>
        </div>
      ))}
    </div>
  )
}
