"use client"

import { useMemo, useState } from "react"
import { ArrowRight, BriefcaseBusiness, CheckCircle2, ChevronRight, Search, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Opportunity = {
  id: string
  title: string
  category: string
  area: string
  description: string
  status: "Aberta" | "Encerrada"
  openings: string
  isClosed: boolean
  isRecent?: boolean
  disciplines?: string[]
  responsibilities?: string[]
  requirements?: string[]
  interviewContactsLabel?: string
  interviewContacts?: string[]
  recruitmentEmail?: string
}

const opportunities: Opportunity[] = [
  {
    id: "professor-eletronica-encerrada",
    title: "Professor de Eletrónica e Telecomunicações",
    category: "Docência",
    area: "Eletrónica e Telecomunicações",
    description: "A vaga para Professor de Eletrónica e Telecomunicações já foi preenchida e encontra-se encerrada.",
    status: "Encerrada",
    openings: "Encerrada",
    isClosed: true,
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
  {
    id: "professor-portugues-emc-encerrada",
    title: "Professor de Língua Portuguesa e E.M.C.",
    category: "Docência",
    area: "Ensino Geral",
    description: "Procuramos um único professor habilitado para leccionar Língua Portuguesa e Educação Moral e Cívica (E.M.C.).",
    status: "Encerrada",
    openings: "Encerrada",
    isClosed: true,
    disciplines: ["Língua Portuguesa", "Educação Moral e Cívica (E.M.C.)"],
    responsibilities: [
      "Planificar e leccionar ambas as disciplinas de acordo com os programas curriculares.",
      "Acompanhar o progresso dos alunos e promover uma aprendizagem participativa.",
      "Colaborar com a coordenação pedagógica e participar nas actividades escolares.",
    ],
    requirements: [
      "Formação pedagógica ou habilitação adequada para leccionar Língua Portuguesa e E.M.C.",
      "Capacidade para assegurar as duas disciplinas, conforme as necessidades da instituição.",
      "Boa comunicação, organização e compromisso com a aprendizagem.",
      "Experiência de docência será valorizada.",
    ],
  },
  {
    id: "professores-primeiro-ciclo-encerrada",
    title: "Professores para o 1.º Ciclo",
    category: "Docência",
    area: "Primeiro Ciclo do Ensino Geral",
    description: "Recrutamos docentes para leccionar no Primeiro Ciclo do Ensino Geral e acompanhar o desenvolvimento dos alunos nesta etapa fundamental.",
    status: "Encerrada",
    openings: "Encerrada",
    isClosed: true,
    disciplines: ["Ensino Primário", "Primeiro Ciclo do Ensino Geral"],
    responsibilities: [
      "Planificar e leccionar conteúdos adequados ao nível do Primeiro Ciclo.",
      "Acompanhar o desenvolvimento académico, social e emocional dos alunos.",
      "Manter uma comunicação colaborativa com encarregados de educação e coordenação.",
    ],
    requirements: [
      "Formação pedagógica adequada para leccionar no Primeiro Ciclo do Ensino Geral.",
      "Boa comunicação, paciência, organização e compromisso com a aprendizagem.",
      "Experiência de docência no ensino primário será valorizada.",
    ],
  },
  {
    id: "professor-eletronica",
    title: "Professor de Eletrónica e Telecomunicações",
    category: "Docência",
    area: "Eletrónica e Telecomunicações",
    description: "O INSTITUTO POLITÉCNICO PRIVADO AFRILAURE pretende recrutar um professor com formação na área de Eletrónica e Telecomunicações.",
    status: "Aberta",
    openings: "1 vaga",
    isClosed: false,
    isRecent: true,
    interviewContactsLabel: "Contactos dos responsáveis pelas entrevistas",
    interviewContacts: ["923 536 224", "956 241 641"],
    recruitmentEmail: "afrilaurerecrutamento@gmail.com",
  },
  {
    id: "professores-farmacia",
    title: "Professores de Farmácia",
    category: "Docência",
    area: "Farmácia",
    description: "O INSTITUTO POLITÉCNICO PRIVADO AFRILAURE pretende recrutar professores com formação na área de Farmácia, com competências para lecionar as disciplinas indicadas.",
    status: "Aberta",
    openings: "Vagas disponíveis",
    isClosed: false,
    isRecent: true,
    disciplines: ["Botânica", "Farmacologia", "Bromatologia", "Técnica e Produção de Medicamentos"],
    interviewContactsLabel: "Contacto do responsável pelas entrevistas",
    interviewContacts: ["926 110 910"],
    recruitmentEmail: "afrilaurerecrutamento@gmail.com",
  },
]

const openOpportunities = opportunities.filter((opportunity) => !opportunity.isClosed)
const closedOpportunities = opportunities.filter((opportunity) => opportunity.isClosed)
const categories = ["Todas as áreas", ...new Set(openOpportunities.map((opportunity) => opportunity.category))]

function JobDetails({ opportunity }: { opportunity: Opportunity }) {
  const applicationHref = opportunity.recruitmentEmail
    ? `mailto:${opportunity.recruitmentEmail}?subject=${encodeURIComponent(`Candidatura - ${opportunity.title}`)}`
    : undefined

  return (
    <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
      <DialogHeader>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <Badge variant={opportunity.isClosed ? "secondary" : "default"}>{opportunity.status}</Badge>
          {opportunity.isRecent && <Badge variant="outline">Recente</Badge>}
          <Badge variant="outline">{opportunity.openings}</Badge>
        </div>
        <DialogTitle className="text-2xl leading-tight">{opportunity.title}</DialogTitle>
        <DialogDescription>{opportunity.category} · {opportunity.area}</DialogDescription>
      </DialogHeader>

      <div className="flex flex-col gap-6 py-3">
        <section className="flex flex-col gap-2">
          <h3 className="font-semibold">Sobre a oportunidade</h3>
          <p className="text-sm leading-6 text-muted-foreground">{opportunity.description}</p>
        </section>

        {opportunity.disciplines && opportunity.disciplines.length > 0 && (
          <section className="flex flex-col gap-3">
            <h3 className="font-semibold">Disciplinas a leccionar</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {opportunity.disciplines.map((discipline) => (
                <li key={discipline} className="rounded-lg border bg-muted/40 p-4 text-sm font-medium">{discipline}</li>
              ))}
            </ul>
          </section>
        )}

        {opportunity.responsibilities && opportunity.responsibilities.length > 0 && (
          <section className="flex flex-col gap-3">
            <h3 className="font-semibold">Responsabilidades</h3>
            <ul className="flex flex-col gap-2 text-sm leading-6 text-muted-foreground">
              {opportunity.responsibilities.map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 shrink-0 text-primary" />{item}</li>
              ))}
            </ul>
          </section>
        )}

        {opportunity.requirements && opportunity.requirements.length > 0 && (
          <section className="flex flex-col gap-3">
            <h3 className="font-semibold">Perfil pretendido</h3>
            <ul className="flex flex-col gap-2 text-sm leading-6 text-muted-foreground">
              {opportunity.requirements.map((item) => (
                <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 shrink-0 text-primary" />{item}</li>
              ))}
            </ul>
          </section>
        )}

        {!opportunity.isClosed && (
          <section className="flex flex-col gap-3">
            <h3 className="font-semibold">Contactos para entrevistas e candidaturas</h3>
            <div className="flex flex-col gap-3 rounded-xl border bg-muted/40 p-4 text-sm">
              {opportunity.interviewContactsLabel && <p className="font-medium">{opportunity.interviewContactsLabel}</p>}
              {opportunity.interviewContacts && opportunity.interviewContacts.length > 0 && (
                <ul className="flex flex-col gap-2">
                  {opportunity.interviewContacts.map((phone) => (
                    <li key={phone}>
                      <a className="font-semibold text-primary underline underline-offset-4" href={`tel:${phone.replace(/\D/g, "")}`} aria-label={`Ligar para ${phone}`}>
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {opportunity.recruitmentEmail && (
                <p>
                  E-mail de recrutamento: <a className="font-semibold text-primary underline underline-offset-4" href={applicationHref}>{opportunity.recruitmentEmail}</a>
                </p>
              )}
            </div>
          </section>
        )}

        {opportunity.isClosed && (
          <div className="rounded-xl border border-muted-foreground/20 bg-muted/50 p-4 text-sm leading-6 text-muted-foreground" role="status">
            <strong className="text-foreground">Oportunidade encerrada.</strong> Esta vaga já não está a aceitar candidaturas.
          </div>
        )}
      </div>

      {!opportunity.isClosed && applicationHref && (
        <Button asChild className="w-full sm:w-auto">
          <a href={applicationHref}>Enviar candidatura por e-mail <ArrowRight data-icon="inline-end" /></a>
        </Button>
      )}
    </DialogContent>
  )
}

function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <Dialog>
      <Card className="flex h-full flex-col border-border/80 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
        <CardHeader className="gap-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={opportunity.isClosed ? "secondary" : "default"}>{opportunity.status}</Badge>
              {opportunity.isRecent && <Badge variant="outline">Recente</Badge>}
            </div>
            <span className="text-sm text-muted-foreground">{opportunity.openings}</span>
          </div>
          <div>
            <CardTitle className="text-xl leading-tight">{opportunity.title}</CardTitle>
            <CardDescription className="mt-2">{opportunity.category} · {opportunity.area}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm leading-6 text-muted-foreground">{opportunity.description}</p>
        </CardContent>
        <CardFooter>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full justify-between">Ver detalhes <ChevronRight data-icon="inline-end" /></Button>
          </DialogTrigger>
        </CardFooter>
      </Card>
      <JobDetails opportunity={opportunity} />
    </Dialog>
  )
}

export function CareersPage() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState(categories[0])
  const filteredOpportunities = useMemo(() => openOpportunities.filter((opportunity) => {
    const matchesQuery = `${opportunity.title} ${opportunity.category} ${opportunity.area}`.toLowerCase().includes(query.toLowerCase())
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
              <Button size="lg" variant="outline" asChild><a href="mailto:afrilaurerecrutamento@gmail.com">Contactar recrutamento</a></Button>
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
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Oportunidades profissionais</p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Encontre o seu próximo desafio.</h2>
          <p className="max-w-2xl text-muted-foreground">Consulte as vagas abertas, filtre por área e veja os contactos oficiais nos detalhes de cada oportunidade.</p>
        </div>

        <div className="grid gap-3 rounded-xl border bg-card p-3 md:grid-cols-[1fr_240px]">
          <div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Pesquisar oportunidades..." className="pl-10" aria-label="Pesquisar oportunidades" /></div>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger aria-label="Filtrar por categoria"><SelectValue /></SelectTrigger>
            <SelectContent>{categories.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {filteredOpportunities.map((opportunity) => <OpportunityCard key={opportunity.id} opportunity={opportunity} />)}
        </div>

        {filteredOpportunities.length === 0 && <Card><CardContent className="p-8 text-center text-muted-foreground">Não encontrámos oportunidades com esses critérios.</CardContent></Card>}

        {closedOpportunities.length > 0 && (
          <details className="group rounded-xl border bg-card">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
              <span>Consultar oportunidades encerradas ({closedOpportunities.length})</span>
              <ChevronRight className="size-4 shrink-0 transition-transform group-open:rotate-90" aria-hidden="true" />
            </summary>
            <div className="flex flex-col gap-4 border-t p-5">
              <p className="text-sm text-muted-foreground">Estas oportunidades anteriores foram encerradas e já não aceitam candidaturas.</p>
              <div className="grid gap-6 lg:grid-cols-2">
                {closedOpportunities.map((opportunity) => <OpportunityCard key={opportunity.id} opportunity={opportunity} />)}
              </div>
            </div>
          </details>
        )}
      </section>
    </main>
  )
}
