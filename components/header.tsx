"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollToSection = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setIsMenuOpen(false) }
  const nav = [{ label: "Início", id: "inicio" }, { label: "Sobre", id: "sobre" }, { label: "Cursos", id: "cursos" }, { label: "Matrículas", id: "matriculas" }, { label: "Propinas", id: "propinas" }, { label: "Transportes", id: "transportes" }, { label: "Contacto", id: "contacto" }]
  return <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm"><div className="container mx-auto px-4"><div className="flex h-20 items-center justify-between"><Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}><Image src="/logotipoafrilaure.webp" alt="Logotipo Afrilaure" width={48} height={48} className="size-12 object-contain" /><span className="hidden sm:block"><strong className="block text-xl text-primary">Afrilaure</strong><small className="text-muted-foreground">Instituto Politécnico Privado</small></span></Link><nav className="hidden items-center gap-4 xl:flex">{nav.map((item) => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-sm text-foreground transition-colors hover:text-primary">{item.label}</button>)}<Link href="/comunicados-interno" className="text-sm font-semibold text-secondary hover:text-primary">Comunicados Interno</Link><Button onClick={() => scrollToSection("contacto")} variant="secondary">Inscreva-se</Button></nav><button aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"} className="xl:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button></div>{isMenuOpen && <nav className="flex flex-col gap-4 border-t border-border py-5 xl:hidden">{nav.map((item) => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-left text-foreground">{item.label}</button>)}<Link href="/comunicados-interno" onClick={() => setIsMenuOpen(false)} className="font-semibold text-secondary">Comunicados Interno</Link><Button onClick={() => scrollToSection("contacto")} variant="secondary">Inscreva-se</Button></nav>}</div></header>
}
