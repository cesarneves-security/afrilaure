"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface SearchFilterProps {
  categories: Array<{ id: string; label: string; icon?: string }>
  onSearchChange: (query: string) => void
  onCategoryChange: (categoryId: string | null) => void
  onReset: () => void
}

export default function ActivitySearchFilter({
  categories,
  onSearchChange,
  onCategoryChange,
  onReset,
}: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hasFilters, setHasFilters] = useState(false)

  useEffect(() => {
    setHasFilters(!!searchQuery || !!selectedCategory)
  }, [searchQuery, selectedCategory])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    onSearchChange(value)
  }

  const handleCategoryClick = (categoryId: string) => {
    const newCategory = selectedCategory === categoryId ? null : categoryId
    setSelectedCategory(newCategory)
    onCategoryChange(newCategory)
  }

  const handleReset = () => {
    setSearchQuery("")
    setSelectedCategory(null)
    onReset()
  }

  return (
    <div className="mb-12 space-y-6 animate-in fade-in duration-500">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <input
          type="text"
          placeholder="Search activities by name, title, description, or category..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery("")
              onSearchChange("")
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Category Filters */}
      <div className="space-y-3">
        <label className="text-sm font-semibold text-foreground">
          Filter by Category:
        </label>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedCategory === null ? "default" : "outline"}
            className="cursor-pointer px-4 py-2 hover:bg-primary/90 transition-colors"
            onClick={() => handleCategoryClick("")}
          >
            All Activities
          </Badge>

          {categories.map((category) => (
            <Badge
              key={category.id}
              variant={
                selectedCategory === category.id ? "default" : "outline"
              }
              className="cursor-pointer px-4 py-2 hover:bg-primary/90 transition-colors"
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.icon && <span className="mr-1">{category.icon}</span>}
              {category.label}
            </Badge>
          ))}
        </div>
      </div>

      {/* Active Filters Display */}
      {hasFilters && (
        <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg border border-primary/20">
          <span className="text-sm text-foreground">
            {searchQuery && (
              <>
                Searching for &quot;{searchQuery}&quot;
                {selectedCategory && " in "}
              </>
            )}
            {selectedCategory &&
              `category: ${categories.find((c) => c.id === selectedCategory)?.label}`}
          </span>
          <button
            onClick={handleReset}
            className="ml-auto text-sm font-medium text-primary hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}
