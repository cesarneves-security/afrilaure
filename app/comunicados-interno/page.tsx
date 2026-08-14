import Link from "next/link"
import { ArrowLeft, CalendarDays, Download, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const communication = { pdf: "/comunicados/comunicado-esclarecimento-comunidade-escolar.pdf", title: "COMUNICADO OFICIAL — ESCLARECIMENTO À COMUNIDADE ESCOLAR", date: "14 de Agosto de 2026", category: "Esclarecimento", intro: "A Direção do Instituto Politécnico Privado Afrilaure tomou conhecimento de uma publicação que circula nas redes sociais contendo diversas acusações relacionadas ao funcionamento da nossa instituição e ao tratamento dos seus colaboradores.", content: `A Direção do Instituto Politécnico Privado Afrilaure tomou conhecimento de uma publicação que circula nas redes sociais contendo diversas acusações relacionadas ao funcionamento da nossa instituição e ao tratamento dos seus colaboradores.

Por respeito aos nossos professores, funcionários, estudantes, encarregados de educação e à comunidade em geral, entendemos ser necessário prestar este esclarecimento.

O Instituto Politécnico Privado Afrilaure não reconhece como verdadeira a narrativa apresentada na referida publicação.

Algumas afirmações divulgadas apresentam uma realidade que não corresponde ao funcionamento da nossa instituição e podem transmitir ao público uma imagem injusta e distorcida do trabalho que diariamente desenvolvemos.

É importante esclarecer que a instituição valoriza profundamente os seus professores e demais colaboradores, reconhecendo que são parte fundamental da qualidade do processo de ensino e aprendizagem.

Não é nossa política desvalorizar o trabalho dos professores, muito menos considerar os seus direitos ou o seu esforço como algo sem importância.

Da mesma forma, não corresponde à postura institucional promover o desrespeito, a intimidação ou a perseguição de qualquer trabalhador que apresente uma preocupação ou procure dialogar sobre questões relacionadas ao seu trabalho.

A Direção está aberta ao diálogo e acredita que eventuais dificuldades devem ser apresentadas pelos canais adequados, permitindo que sejam analisadas e esclarecidas com responsabilidade.

Lamentamos, por isso, que questões internas sejam apresentadas publicamente através de acusações generalizadas, sem que seja dada à instituição a oportunidade de prestar os devidos esclarecimentos.

Também rejeitamos a ideia de que a nossa instituição seja indiferente às preocupações dos estudantes e encarregados de educação.

Temos consciência de que nenhuma instituição é perfeita e que existem sempre aspectos que podem ser melhorados.

Entretanto, reconhecer que existem desafios não significa aceitar como verdadeiras todas as acusações que circulam nas redes sociais.

A nossa prioridade continua sendo garantir um ambiente de ensino digno, organizado e comprometido com a formação dos nossos estudantes.

A Direção continuará a trabalhar para melhorar os serviços prestados, fortalecer a relação com os encarregados de educação e valorizar os profissionais que fazem parte da nossa comunidade escolar.

Aos nossos professores e colaboradores, reafirmamos o nosso respeito e reconhecimento pelo trabalho realizado.

Aos estudantes e encarregados de educação, pedimos que não tirem conclusões exclusivamente com base em publicações de redes sociais.

Informações relacionadas à instituição devem ser verificadas junto das fontes oficiais e responsáveis.

O Afrilaure continuará a defender a transparência, o diálogo, o respeito e a responsabilidade na comunicação.

Não pretendemos transformar este esclarecimento numa disputa nas redes sociais.

Pretendemos apenas impedir que informações que não correspondem à realidade da instituição sejam tomadas como verdadeiras sem o devido esclarecimento.

Continuaremos concentrados naquilo que realmente importa: os nossos estudantes, os nossos professores, os nossos colaboradores e a qualidade do ensino que oferecemos.

Instituto Politécnico Privado Afrilaure
Direção` }

export default function ComunicadosInternoPage() { return <main className="min-h-screen bg-background"><Header /><div className="container mx-auto px-4 pb-20 pt-32"><Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-primary hover:underline"><ArrowLeft />Voltar ao site</Link><div className="mx-auto max-w-4xl"><div className="mb-10"><p className="mb-3 font-mono text-sm font-semibold uppercase tracking-widest text-secondary">Arquivo institucional</p><h1 className="text-balance text-4xl font-bold text-primary md:text-5xl">Comunicados Interno</h1><p className="mt-4 max-w-2xl text-lg text-muted-foreground">Publicações oficiais da Direção para a comunidade escolar.</p></div><Card className="overflow-hidden"><CardHeader className="border-b bg-primary text-primary-foreground"><div className="flex flex-wrap items-center gap-3"><Badge variant="secondary">Mais recente</Badge><span className="flex items-center gap-2 text-sm"><CalendarDays />{communication.date}</span></div><CardTitle className="mt-4 text-2xl leading-tight md:text-3xl">{communication.title}</CardTitle><CardDescription className="text-primary-foreground/80">{communication.category}</CardDescription></CardHeader><CardContent className="p-6 md:p-10"><p className="mb-8 text-lg font-medium leading-relaxed">{communication.intro}</p><div className="flex flex-wrap gap-3 border-y border-border py-5"><Button asChild><a href={communication.pdf} download><Download data-icon="inline-start" />Baixar comunicado em PDF</a></Button><Button asChild variant="outline"><a href="#comunicado"><FileText data-icon="inline-start" />Ler comunicado</a></Button></div><article id="comunicado" className="mt-8 space-y-5 text-base leading-8 text-foreground">{communication.content.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</article></CardContent></Card></div></div><Footer /></main> }
