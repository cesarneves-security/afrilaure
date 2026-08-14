import Link from "next/link"
import { ArrowRight, Megaphone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function NoticeHighlight() {
  return (
    <section className="container mx-auto px-4 py-8">
      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="flex flex-col items-start justify-between gap-5 p-6 md:flex-row md:items-center md:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-primary p-3 text-primary-foreground"><Megaphone /></div>
            <div className="flex flex-col gap-2">
              <Badge className="w-fit">Comunicado oficial</Badge>
              <h2 className="text-xl font-bold md:text-2xl">Esclarecimento à Comunidade Escolar</h2>
              <p className="max-w-2xl text-sm leading-6 text-muted-foreground">A Direcção do Instituto Politécnico Privado Afrilaure partilha um esclarecimento institucional com toda a comunidade escolar.</p>
            </div>
          </div>
          <Button asChild className="shrink-0"><Link href="/comunicados-interno">Ler Comunicado <ArrowRight data-icon="inline-end" /></Link></Button>
        </CardContent>
      </Card>
    </section>
  )
}
