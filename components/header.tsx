"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigationLinks = [
  { href: "/#inicio", label: "Início" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#cursos", label: "Cursos" },
  { href: "/#ensino-geral", label: "Ensino Geral" },
  { href: "/actividades", label: "Actividades" },
  { href: "/comunicados-interno", label: "Comunicados Interno", highlighted: true },
  { href: "/recrutamento", label: "Carreiras" },
  { href: "/#precos", label: "Preços" },
  { href: "/#transportes", label: "Transportes" },
  { href: "/#contacto", label: "Contacto" },
]

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const renderLinks = (mobile = false) =>
    navigationLinks.map(({ href, label, highlighted }) => (
      <Link
        key={href}
        href={href}
        onClick={mobile ? () => setIsMenuOpen(false) : undefined}
        className={cn(
          "rounded-sm transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          mobile ? "py-1 text-base" : "whitespace-nowrap text-sm",
          highlighted ? "font-semibold text-primary hover:text-primary/80" : "text-foreground",
        )}
      >
        {label}
      </Link>
    ))

  const closeMobileMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex min-h-20 items-center gap-3">
          <Link href="/" aria-label="Afrilaure — página inicial" className="shrink-0">
            <Image
              src="/logotipoafrilaure.webp"
              alt="Logótipo do Colégio Afrilaure"
              width={120}
              height={120}
              className="size-14 object-contain"
              priority
            />
          </Link>

          {pathname !== "/" && (
            <Link
              href="/#inicio"
              className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:text-sm"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Voltar ao Início
            </Link>
          )}

          <nav aria-label="Navegação principal" className="ml-auto hidden items-center gap-x-3 xl:flex">
            {renderLinks()}
            <Button asChild size="sm">
              <Link href="/#contacto">Inscreva-se</Link>
            </Button>
          </nav>

          <button
            type="button"
            className="ml-auto inline-flex size-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 xl:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
              {isMenuOpen ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
          </button>
        </div>

        <nav
          id="mobile-navigation"
          aria-label="Navegação principal"
          className={cn(
            "max-h-[calc(100dvh-5rem)] flex-col gap-3 overflow-y-auto border-t border-border py-4 xl:hidden",
            isMenuOpen ? "flex" : "hidden",
          )}
        >
          {renderLinks(true)}
          <Button asChild className="w-full">
            <Link href="/#contacto" onClick={closeMobileMenu}>Inscreva-se</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
