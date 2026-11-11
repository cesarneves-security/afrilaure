"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function HashScrollHandler() {
  const pathname = usePathname()

  useEffect(() => {
    const scrollToCurrentHash = () => {
      const id = window.location.hash.slice(1)
      if (!id) return

      const target = document.getElementById(id)
      if (!target) return

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      })
    }

    const frameId = window.requestAnimationFrame(scrollToCurrentHash)
    window.addEventListener("hashchange", scrollToCurrentHash)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener("hashchange", scrollToCurrentHash)
    }
  }, [pathname])

  return null
}
