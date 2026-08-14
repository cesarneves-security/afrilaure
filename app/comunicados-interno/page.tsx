import Link from "next/link"
import { ArrowLeft, Download, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const comunicado = {
  title: "COMUNICADO OFICIAL — ESCLARECIMENTO À COMUNIDADE ESCOLAR",
  date: "14 de Agosto de 2026",
  category: "Esclarecimento institucional",
  paragraphs: [
    "A Direção do Instituto Politécnico Privado Afrilaure tomou conhecimento de uma publicação que circula nas redes sociais contendo diversas acusações relacionadas ao funcionamento da nossa instituição e ao tratamento dos seus colaboradores.",
    "Por respeito aos nossos professores, funcionários, estudantes, encarregados de educação e à comunidade em geral, entendemos ser necessário prestar este esclarecimento.",
    "O Instituto Politécnico Privado Afrilaure não reconhece como verdadeira a narrativa apresentada na referida publicação.",
    "Algumas afirmações divulgadas apresentam uma realidade que não corresponde ao funcionamento da nossa instituição e podem transmitir ao público uma imagem injusta e distorcida do trabalho que diariamente desenvolvemos.",
    "É importante esclarecer que a instituição valoriza profundamente os seus professores e demais colaboradores, reconhecendo que são parte fundamental da qualidade do processo de ensino e aprendizagem.",
    "Não é nossa política desvalorizar o trabalho dos professores, muito menos considerar os seus direitos ou o seu esforço como algo sem importância.",
    "Da mesma forma, não corresponde à postura institucional promover o desrespeito, a intimidação ou a perseguição de qualquer trabalhador que apresente uma preocupação ou procure dialogar sobre questões relacionadas ao seu trabalho.",
    "A Direção está aberta ao diálogo e acredita que eventuais dificuldades devem ser apresentadas pelos canais adequados, permitindo que sejam analisadas e esclarecidas com responsabilidade.",
    "Lamentamos, por isso, que questões internas sejam apresentadas publicamente através de acusações generalizadas, sem que seja dada à instituição a oportunidade de prestar os devidos esclarecimentos.",
    "Também rejeitamos a ideia de que a nossa instituição seja indiferente às preocupações dos estudantes e encarregados de educação.",
    "Temos consciência de que nenhuma instituição é perfeita e que existem sempre aspectos que podem ser melhorados.",
    "Entretanto, reconhecer que existem desafios não significa aceitar como verdadeiras todas as acusações que circulam nas redes sociais.",
    "A nossa prioridade continua sendo garantir um ambiente de ensino digno, organizado e comprometido com a formação dos nossos estudantes.",
    "A Direção continuará a trabalhar para melhorar os serviços prestados, fortalecer a relação com os encarregados de educação e valorizar os profissionais que fazem parte da nossa comunidade escolar.",
    "Aos nossos professores e colaboradores, reafirmamos o nosso respeito e reconhecimento pelo trabalho realizado.",
    "Aos estudantes e encarregados de educação, pedimos que não tirem conclusões exclusivamente com base em publicações de redes sociais.",
    "Informações relacionadas à instituição devem ser verificadas junto das fontes oficiais e responsáveis.",
    "O Afrilaure continuará a defender a transparência, o diálogo, o respeito e a responsabilidade na comunicação.",
    "Não pretendemos transformar este esclarecimento numa disputa nas redes sociais.",
    "Pretendemos apenas impedir que informações que não correspondem à realidade da instituição sejam tomadas como verdadeiras sem o devido esclarecimento.",
    "Continuaremos concentrados naquilo que realmente importa: os nossos estudantes, os nossos professores, os nossos colaboradores e a qualidade do ensino que oferecemos.",
  ],
}

export default function ComunicadosInternoPage() {
  return (
    <main className="min-h-screen bg-muted/20">
      <Header />
      <div className="container mx-auto flex max-w-5xl flex-col gap-8 px-4 pb-20 pt-32">
        <div className="flex flex-col gap-4">
          <Button asChild variant="ghost" className="w-fit px-0"><Link href="/"><ArrowLeft data-icon="inline-start" />Voltar ao início</Link></Button>
          <div className="flex flex-col gap-4">
            <Badge className="w-fit">Comunicados Interno</Badge>
            <h1 className="max-w-4xl text-balance text-3xl font-bold text-primary md:text-5xl">Informações oficiais da Direcção</h1>
            <p className="max-w-3xl text-pretty leading-6 text-muted-foreground">Esta é a área permanente para comunicados oficiais, esclarecimentos, avisos e informações institucionais destinadas à comunidade escolar.</p>
          </div>
        </div>
        <Separator />
        <Card className="overflow-hidden">
          <CardHeader className="gap-4 bg-primary text-primary-foreground md:p-8">
            <div className="flex flex-wrap items-center gap-2"><Badge variant="secondary">{comunicado.category}</Badge><span className="text-sm text-primary-foreground/80">{comunicado.date}</span></div>
            <CardTitle className="text-2xl leading-tight md:text-3xl">{comunicado.title}</CardTitle>
            <Button asChild variant="secondary" className="w-fit"><a href="/comunicado-oficial-2026.pdf" download><Download data-icon="inline-start" />Baixar comunicado em PDF</a></Button>
          </CardHeader>
          <CardContent className="flex flex-col gap-5 p-6 md:p-10">
            {comunicado.paragraphs.map((paragraph) => <p key={paragraph} className="text-pretty text-base leading-8 text-foreground">{paragraph}</p>)}
            <Separator />
            <div className="flex flex-col gap-1 text-base font-semibold"><p>Instituto Politécnico Privado Afrilaure</p><p>Direcção</p></div>
          </CardContent>
        </Card>
        <Card className="border-border bg-background"><CardContent className="flex items-start gap-4 p-6"><FileText className="mt-1 shrink-0 text-primary" /><div><h2 className="font-semibold">Arquivo de comunicados</h2><p className="mt-1 text-sm leading-6 text-muted-foreground">Novos comunicados serão adicionados nesta mesma página, mantendo o arquivo organizado por data e categoria.</p></div></CardContent></Card>
      </div>
      <Footer />
    </main>
  )
}
