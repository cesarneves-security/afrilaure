"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Image
              src="/logotipoafrilaure.png"
              alt="Colégio Afrilaure Logo"
              width={50}
              height={50}
              className="h-8 w-8 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("cursos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Cursos
            </button>
            <Link href="/actividades" className="text-foreground hover:text-primary transition-colors">
              Actividades
            </Link>
            <button
              onClick={() => scrollToSection("precos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Preços
            </button>
            <button
              onClick={() => scrollToSection("transportes")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Transportes
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
            <Button onClick={() => scrollToSection("contacto")}>Inscreva-se</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("cursos")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Cursos
            </button>
            <Link href="/actividades" className="text-left text-foreground hover:text-primary transition-colors">
              Actividades
            </Link>
            <button
              onClick={() => scrollToSection("precos")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Preços
            </button>
            <button
              onClick={() => scrollToSection("transportes")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Transportes
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
            <Button onClick={() => scrollToSection("contacto")} className="w-full">
              Inscreva-se
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
