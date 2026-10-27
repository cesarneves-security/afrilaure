"use client"

import { useMemo, useState } from "react"
import { ArrowRight, BriefcaseBusiness, CheckCircle2, ChevronRight, Search, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const categories = ["Todas as áreas", "Docência", "Secretaria", "Administração", "Contabilidade"]

const opportunities = [
  {
    id: "professor-eletronica",
    title: "Professor de Eletrónica e Telecomunicações",
    category: "Docência",
    course: "Curso de Eletrónica e Telecomunicações",
    description: "Recrutamento de um professor para assegurar duas disciplinas integradas no curso, com rigor técnico e capacidade pedagógica.",
    status: "Aberta",
    openings: "1 vaga",
    disciplines: ["Electricidade e Electrónica", "Telecomunicações"],
    responsibilities: [
      "Planificar e leccionar as disciplinas de acordo com o programa curricular.",
      "Acompanhar o progresso dos alunos e promover uma aprendizagem prática.",
      "Colaborar com a coordenação pedagógica na melhoria do processo de ensino.",
    ],
    requirements: [
      "Formação técnica ou superior em Electricidade, Electrónica, Telecomunicações ou Engenharia.",
      "Competência para leccionar as duas disciplinas.",
      "Boa comunicação, organização e compromisso com a aprendizagem.",
      "Experiência de docência será valorizada.",
    ],
  },
]

function JobDetails({ opportunity }: { opportunity: (typeof opportunities)[number] }) {
  return (
    <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
      <DialogHeader>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <Badge>{opportunity.category}</Badge>
          <Badge variant="outline">{opportunity.openings}</Badge>
        </div>
        <DialogTitle className="text-2xl leading-tight">{opportunity.title}</DialogTitle>
        <DialogDescription>{opportunity.course}</DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-6 py-3">
        <section className="flex flex-col gap-2">
          <h3 className="font-semibold">Sobre a oportunidade</h3>
          <p className="text-sm leading-6 text-muted-foreground">{opportunity.description}</p>
        </section>
        <section className="flex flex-col gap-3">
          <h3 className="font-semibold">Disciplinas a leccionar</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {opportunity.disciplines.map((discipline) => (
              <div key={discipline} className="rounded-lg border bg-muted/40 p-4 text-sm font-medium">{discipline}</div>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-3">
          <h3 className="font-semibold">Responsabilidades</h3>
          <ul className="flex flex-col gap-2 text-sm leading-6 text-muted-foreground">
            {opportunity.responsibilities.map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 shrink-0 text-primary" />{item}</li>)}
          </ul>
        </section>
        <section className="flex flex-col gap-3">
          <h3 className="font-semibold">Perfil pretendido</h3>
          <ul className="flex flex-col gap-2 text-sm leading-6 text-muted-foreground">
            {opportunity.requirements.map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 shrink-0 text-primary" />{item}</li>)}
          </ul>
        </section>
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm leading-6 text-muted-foreground">
          <strong className="text-foreground">Como candidatar-se:</strong> envie o seu Curriculum Vitae e uma breve apresentação para <a className="font-semibold text-primary underline underline-offset-4" href="mailto:colegioafrilaure@gmail.com?subject=Candidatura%20-%20Professor%20de%20Eletr%C3%B3nica%20e%20Telecomunica%C3%A7%C3%B5es">colegioafrilaure@gmail.com</a>. A candidatura será recebida pela instituição através do correio electrónico oficial.
        </div>
      </div>
      <Button asChild className="w-full sm:w-auto">
        <a href="mailto:colegioafrilaure@gmail.com?subject=Candidatura%20-%20Professor%20de%20Eletr%C3%B3nica%20e%20Telecomunica%C3%A7%C3%B5es">Enviar candidatura <ArrowRight data-icon="inline-end" /></a>
      </Button>
    </DialogContent>
  )
}

export function CareersPage() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState(categories[0])
  const filteredOpportunities = useMemo(() => opportunities.filter((opportunity) => {
    const matchesQuery = `${opportunity.title} ${opportunity.category} ${opportunity.course}`.toLowerCase().includes(query.toLowerCase())
    const matchesCategory = category === categories[0] || opportunity.category === category
    return matchesQuery && matchesCategory
  }), [category, query])

  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b bg-muted/30 pt-32">
        <div className="pointer-events-none absolute -right-24 -top-32 size-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative mx-auto grid gap-12 px-4 pb-16 md:grid-cols-[1.15fr_0.85fr] md:items-end md:pb-24">
          <div className="flex flex-col gap-6">
            <Badge variant="outline" className="w-fit gap-2 border-primary/30 bg-background/80 px-3 py-1.5 text-primary"><Sparkles data-icon="inline-start" /> Recrutamento Afrilaure</Badge>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">Construa o futuro connosco.</h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">Descubra as oportunidades profissionais da AfriLaure e faça parte de uma instituição comprometida com a educação, a formação e o desenvolvimento de talentos.</p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild><a href="#oportunidades">Explorar oportunidades <ArrowRight data-icon="inline-end" /></a></Button>
              <Button size="lg" variant="outline" asChild><a href="mailto:colegioafrilaure@gmail.com">Contactar a instituição</a></Button>
            </div>
          </div>
          <Card className="border-primary/15 bg-background/80 shadow-xl shadow-primary/5 backdrop-blur">
            <CardContent className="flex flex-col gap-6 p-6 md:p-8">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground"><BriefcaseBusiness /></div>
              <div className="flex flex-col gap-2"><p className="text-sm font-medium text-primary">Uma carreira com propósito</p><p className="text-2xl font-semibold tracking-tight">Educar. Inspirar. Transformar.</p></div>
              <p className="text-sm leading-6 text-muted-foreground">Junte-se a uma comunidade que acredita no potencial de cada estudante e no valor de profissionais dedicados.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="oportunidades" className="container mx-auto flex flex-col gap-8 px-4 py-16 md:py-24">
        <div className="flex flex-col gap-3"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Oportunidades profissionais</p><h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Encontre o seu próximo desafio.</h2><p className="max-w-2xl text-muted-foreground">Pesquise por função ou filtre pela área profissional. Novas oportunidades serão adicionadas nesta página à medida que forem confirmadas pela Direcção.</p></div>
        <div className="grid gap-3 rounded-xl border bg-card p-3 md:grid-cols-[1fr_240px]">
          <div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Pesquisar oportunidades..." className="pl-10" aria-label="Pesquisar oportunidades" /></div>
          <Select value={category} onValueChange={setCategory}><SelectTrigger aria-label="Filtrar por categoria"><SelectValue /></SelectTrigger><SelectContent>{categories.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {filteredOpportunities.map((opportunity) => (
            <Dialog key={opportunity.id}>
              <Card className="flex h-full flex-col border-border/80 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <CardHeader className="gap-4"><div className="flex items-start justify-between gap-4"><Badge>{opportunity.status}</Badge><span className="text-sm text-muted-foreground">{opportunity.openings}</span></div><div><CardTitle className="text-xl leading-tight">{opportunity.title}</CardTitle><CardDescription className="mt-2">{opportunity.category} · {opportunity.course}</CardDescription></div></CardHeader>
                <CardContent className="flex-1"><p className="text-sm leading-6 text-muted-foreground">{opportunity.description}</p></CardContent>
                <CardFooter><DialogTrigger asChild><Button variant="outline" className="w-full justify-between">Ver detalhes <ChevronRight data-icon="inline-end" /></Button></DialogTrigger></CardFooter>
              </Card>
              <JobDetails opportunity={opportunity} />
            </Dialog>
          ))}
        </div>
        {filteredOpportunities.length === 0 && <Card><CardContent className="p-8 text-center text-muted-foreground">Não encontrámos oportunidades com esses critérios.</CardContent></Card>}
      </section>
    </main>
  )
}
