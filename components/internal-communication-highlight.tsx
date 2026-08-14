import Link from "next/link"
import { ArrowUpRight, Megaphone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function InternalCommunicationHighlight() {
  return <section className="bg-muted/40 py-10"><div className="container mx-auto px-4"><Card className="mx-auto max-w-5xl border-primary/20"><CardContent className="flex flex-col items-start justify-between gap-6 p-6 md:flex-row md:items-center md:p-8"><div className="flex gap-4"><div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Megaphone /></div><div><Badge variant="secondary">Comunicado oficial</Badge><h2 className="mt-2 text-xl font-bold text-primary md:text-2xl">Esclarecimento à Comunidade Escolar</h2><p className="mt-2 max-w-2xl text-sm text-muted-foreground">A Direção esclarece informações que circulam nas redes sociais e reafirma o seu compromisso com a transparência e o diálogo.</p></div></div><Button asChild variant="outline"><Link href="/comunicados-interno">Ler comunicado <ArrowUpRight data-icon="inline-end" /></Link></Button></CardContent></Card></div></section>
}
