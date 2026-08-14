import { AlertCircle, Award, CheckCircle, CreditCard } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const formatKz = (value: string) => value === "Grátis" ? value : `${value} Kz`

function PriceList({ title, items }: { title: string; items: { item: string; price: string }[] }) {
  return (
    <Card className="h-full">
      <CardHeader><CardTitle className="text-lg">{title}</CardTitle></CardHeader>
      <CardContent className="flex flex-col gap-3">
        {items.map((entry) => (
          <div key={entry.item} className="flex items-start justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0">
            <span className="text-sm leading-6">{entry.item}</span>
            <span className="shrink-0 text-right text-sm font-bold text-primary">{formatKz(entry.price)}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

function LevelSection({ title, courses, enrollment, tuition }: { title: string; courses?: string[]; enrollment: { item: string; price: string }[]; tuition: { item: string; price: string }[] }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 border-l-4 border-primary pl-4">
        <Badge className="w-fit">Ano Lectivo 2026/2027</Badge>
        <h3 className="text-2xl font-bold text-primary md:text-3xl">{title}</h3>
        {courses && <p className="max-w-3xl text-sm leading-6 text-muted-foreground">{courses.join(" · ")}</p>}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <PriceList title="Matrículas e reconfirmações" items={enrollment} />
        <PriceList title="Propinas" items={tuition} />
      </div>
    </div>
  )
}

export function Pricing() {
  return (
    <section id="precos" className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto flex flex-col gap-12 px-4">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 text-center">
          <Badge variant="secondary" className="mx-auto">Informação oficial</Badge>
          <h2 className="text-balance text-3xl font-bold md:text-4xl">Matrículas, propinas e valores</h2>
          <p className="text-pretty leading-6 text-muted-foreground">Consulte os valores oficiais do Instituto Politécnico Privado Afrilaure para 2026/2027.</p>
        </div>

        <LevelSection title="Ensino Geral" enrollment={[
          { item: "Matrícula para Iniciação", price: "Grátis" },
          { item: "Matrícula / confirmação da 1.ª à 6.ª classe", price: "15.000" },
          { item: "Estudo orientado do Primário à 8.ª classe", price: "8.300" },
          { item: "Confirmação / matrícula da 7.ª à 9.ª classe", price: "20.000" },
          { item: "Orientação Vocacional I (9.ª classe)", price: "11.000" },
          { item: "Cartão de estudante", price: "3.500" },
          { item: "Material de Iniciação e 1.ª classe (trimestral)", price: "8.000" },
          { item: "Material de Iniciação e 1.ª classe (total anual)", price: "24.000" },
        ]} tuition={[
          { item: "Iniciação com transporte", price: "20.000" },
          { item: "Iniciação sem transporte", price: "16.000" },
          { item: "1.ª e 2.ª classes com transporte", price: "27.000" },
          { item: "1.ª, 2.ª e 3.ª classes", price: "18.630" },
          { item: "4.ª, 5.ª e 6.ª classes", price: "22.000" },
          { item: "7.ª, 8.ª e 9.ª classes", price: "24.100" },
        ]} />

        <LevelSection title="Ensino Técnico Médio" courses={["Informática", "Electrónica e Telecomunicações", "Electrónica e Automação Industrial", "Energia e Instalações Eléctricas", "Gestão de Recursos Humanos", "Contabilidade e Gestão"]} enrollment={[
          { item: "Inscrição para a 10.ª classe", price: "5.000" },
          { item: "Matrícula e confirmação da 10.ª à 13.ª classe", price: "20.000" },
          { item: "Cartão de estudante", price: "3.500" },
        ]} tuition={[
          { item: "10.ª classe — todos os cursos", price: "26.720" },
          { item: "11.ª classe — todos os cursos", price: "30.700" },
          { item: "Estágio interno — 11.ª classe", price: "4.300" },
          { item: "12.ª classe — todos os cursos", price: "32.050" },
          { item: "Estágio interno — 12.ª classe", price: "4.950" },
          { item: "13.ª classe — todos os cursos", price: "34.700" },
          { item: "Estágio interno — 13.ª classe", price: "5.300" },
        ]} />

        <LevelSection title="Ensino Técnico Médio de Saúde" courses={["Farmácia", "Radiologia", "Fisioterapia", "Estomatologia"]} enrollment={[
          { item: "Inscrição para a 10.ª classe", price: "5.000" },
          { item: "Matrícula / confirmação", price: "20.000" },
          { item: "Cartão de estudante", price: "3.500" },
          { item: "Cadastramento no sistema", price: "5.000" },
        ]} tuition={[
          { item: "10.ª classe — Farmácia, Radiologia, Fisioterapia e Estomatologia", price: "16.000" },
          { item: "11.ª classe", price: "29.400" },
          { item: "12.ª classe", price: "32.050" },
          { item: "Estágio interno — 12.ª classe", price: "2.950" },
          { item: "13.ª classe", price: "34.700" },
          { item: "Estágio interno — 13.ª classe", price: "3.300" },
        ]} />

        <div className="grid gap-6 lg:grid-cols-3">
          <Card><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><AlertCircle data-icon="inline-start" />Multas</CardTitle></CardHeader><CardContent className="flex flex-col gap-3 text-sm"><p>Iniciação até à 6.ª classe: <strong>7.000 Kz</strong></p><p>7.ª à 9.ª classe: <strong>9.000 Kz</strong></p><p>10.ª à 13.ª classe: <strong>10.000 Kz</strong></p></CardContent></Card>
          <Card><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><CreditCard data-icon="inline-start" />Matrícula fora do prazo</CardTitle></CardHeader><CardContent className="text-sm leading-6 text-muted-foreground">Acréscimo de <strong className="text-foreground">10.000 Kz</strong> para matrículas/confirmações fora de Julho e Agosto. No Ensino Técnico Médio de Saúde, aplica-se após o final de Agosto.</CardContent></Card>
          <Card><CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Award data-icon="inline-start" />Quadro de honra</CardTitle></CardHeader><CardContent className="text-sm leading-6 text-muted-foreground">O melhor aluno do quadro de honra de cada nível, por trimestre, terá direito a um estímulo.</CardContent></Card>
        </div>

        <Card className="border-primary/30 bg-primary/5"><CardContent className="flex items-start gap-3 pt-6 text-sm leading-6"><CheckCircle className="mt-1 shrink-0 text-primary" /><p><strong>Merenda escolar:</strong> grátis da Iniciação até à 2.ª classe. O material de Iniciação e 1.ª classe inclui aulas de Inglês e Umbundo.</p></CardContent></Card>
      </div>
    </section>
  )
}
