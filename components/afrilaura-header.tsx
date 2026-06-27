"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src="/logotipoafrilaure.png"
                alt="Colégio Afrilaure Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Afrilaure</h1>
              <p className="text-xs text-muted-foreground">Instituto Politécnico Privado</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("cursos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Cursos
            </button>
            <button
              onClick={() => scrollToSection("matriculas")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Matrículas
            </button>
            <button
              onClick={() => scrollToSection("propinas")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Propinas
            </button>
            <button
              onClick={() => scrollToSection("transportes")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Transportes
            </button>
            <Button onClick={() => scrollToSection("contactos")} className="bg-secondary hover:bg-secondary/90">
              Contactar
            </Button>
          </nav>

          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("cursos")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Cursos
              </button>
              <button
                onClick={() => scrollToSection("matriculas")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Matrículas
              </button>
              <button
                onClick={() => scrollToSection("propinas")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Propinas
              </button>
              <button
                onClick={() => scrollToSection("transportes")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Transportes
              </button>
              <Button
                onClick={() => scrollToSection("contactos")}
                className="bg-secondary hover:bg-secondary/90 w-full"
              >
                Contactar
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
