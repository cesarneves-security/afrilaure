import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  Target,
  Lightbulb,
  Baby,
  School,
  Layers,
  FileText,
  DollarSign,
  Bus,
  Utensils,
  Shirt,
  Trophy,
  CheckCircle,
  Phone,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Ensino Geral - Colégio Afrilaure",
  description:
    "Ensino Geral do Colégio Afrilaure: da Iniciação à 9.ª Classe, num ambiente moderno, acolhedor e orientado para o sucesso académico de crianças e adolescentes.",
}

const niveis = [
  {
    icon: Baby,
    title: "Iniciação",
    description: "Primeiro contacto com o ambiente escolar, focado no desenvolvimento social, motor e cognitivo.",
    classes: ["Iniciação"],
  },
  {
    icon: School,
    title: "Ensino Primário",
    description: "Base sólida em leitura, escrita, matemática e ciências, da 1.ª à 6.ª Classe.",
    classes: ["1.ª", "2.ª", "3.ª", "4.ª", "5.ª", "6.ª"],
  },
  {
    icon: Layers,
    title: "I Ciclo do Ensino Secundário",
    description: "Aprofundamento académico e orientação vocacional, da 7.ª à 9.ª Classe.",
    classes: ["7.ª", "8.ª", "9.ª"],
  },
]

const classes = [
  "Iniciação",
  "1.ª Classe",
  "2.ª Classe",
  "3.ª Classe",
  "4.ª Classe",
  "5.ª Classe",
  "6.ª Classe",
  "7.ª Classe",
  "8.ª Classe",
  "9.ª Classe",
]

const matricula = [
  "Visite a secretaria do Colégio Afrilaure ou contacte-nos por telefone.",
  "Apresente os documentos necessários do encarregado de educação e do aluno.",
  "Preencha a ficha de inscrição e realize o pagamento da matrícula.",
  "Receba a confirmação da vaga e o calendário escolar.",
]

const documentos = [
  "Certificado de habilitações literárias (quando aplicável)",
  "Fotocópia da cédula ou bilhete de identidade do aluno",
  "Cartão de vacina actualizado",
  "Atestado médico",
  "4 fotografias tipo passe",
  "Documento de identificação do encarregado de educação",
]

const extracurriculares = [
  "Educação Física e Desporto",
  "Música e Artes Plásticas",
  "Clube de Leitura",
  "Inglês desde a Iniciação",
  "Actividades culturais",
  "Visitas de estudo",
]

const faqs = [
  {
    q: "A partir de que idade as crianças podem ingressar?",
    a: "As crianças podem iniciar o percurso na Iniciação, sendo o ingresso orientado pela idade e pelo nível de desenvolvimento, com acompanhamento da nossa equipa pedagógica.",
  },
  {
    q: "O Ensino Geral inclui o ensino de inglês?",
    a: "Sim. O inglês é ensinado desde a Iniciação, preparando os alunos para um mundo cada vez mais globalizado.",
  },
  {
    q: "Existe transporte e merenda escolar?",
    a: "Sim. O colégio oferece serviço de transporte escolar e merenda, garantindo conforto, segurança e bem-estar aos alunos.",
  },
  {
    q: "Como decorre o processo de matrícula?",
    a: "A matrícula é simples: basta dirigir-se à secretaria ou contactar-nos, apresentar os documentos necessários e efectuar o pagamento da matrícula.",
  },
]

export default function EnsinoGeralPage() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-background">
      {/* Banner institucional */}
      <div className="relative overflow-hidden mb-12">
        <Image
          src="/ensino-geral-banner.png"
          alt="Sala de aula do Ensino Geral do Colégio Afrilaure"
          width={1600}
          height={600}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        <div className="relative container mx-auto px-4 py-16 md:py-20 text-primary-foreground">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
          <Badge variant="secondary" className="mb-4 bg-white/20 text-primary-foreground border border-white/30">
            Da Iniciação à 9.ª Classe
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl text-balance">Ensino Geral</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl text-pretty">
            Um percurso educativo acolhedor, moderno e organizado, que prepara crianças e adolescentes para o sucesso
            académico e pessoal.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl space-y-16">
        {/* Apresentação */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Apresentação do Ensino Geral</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            O Ensino Geral do Colégio Afrilaure abrange a Iniciação, o Ensino Primário e o I Ciclo do Ensino Secundário,
            oferecendo uma educação de qualidade num ambiente seguro, estimulante e acolhedor. Valorizamos o
            desenvolvimento integral de cada aluno, combinando rigor académico, valores e atenção individualizada.
          </p>
        </section>

        {/* Missão e Metodologia */}
        <section className="grid md:grid-cols-2 gap-6">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Missão Pedagógica
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Formar cidadãos críticos, criativos e responsáveis, proporcionando uma base académica sólida e valores
                que acompanharão os alunos ao longo de toda a vida.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                Metodologia de Ensino
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Metodologias modernas e interactivas, com turmas equilibradas, acompanhamento personalizado e o ensino
                de inglês desde a Iniciação, promovendo a aprendizagem activa.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Níveis de ensino */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Níveis de Ensino</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {niveis.map((nivel) => (
              <Card key={nivel.title} className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl w-fit mb-4">
                    <nivel.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{nivel.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty mb-4">{nivel.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {nivel.classes.map((c) => (
                      <Badge key={c} variant="secondary" className="bg-accent/20 text-accent-foreground border border-accent/30">
                        {c}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Classes disponíveis */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Classes Disponíveis</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {classes.map((c) => (
              <Card
                key={c}
                className="border-2 hover:border-primary hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-card to-muted/20"
              >
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <p className="font-bold text-sm">{c}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Processo de matrícula e Documentos */}
        <section className="grid md:grid-cols-2 gap-6">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Processo de Matrícula
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {matricula.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Documentos Necessários
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {documentos.map((doc, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{doc}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Serviços: Propinas, Transporte, Merenda, Uniforme */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Serviços e Apoio ao Aluno</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2">
              <CardContent className="pt-6">
                <DollarSign className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Propinas</h3>
                <p className="text-sm text-muted-foreground text-pretty">
                  Valores acessíveis e adaptados a cada nível de ensino. Consulte a secretaria para condições
                  actualizadas.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="pt-6">
                <Bus className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Transporte Escolar</h3>
                <p className="text-sm text-muted-foreground text-pretty">
                  Serviço de transporte seguro e confortável, facilitando a deslocação dos alunos.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="pt-6">
                <Utensils className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Merenda Escolar</h3>
                <p className="text-sm text-muted-foreground text-pretty">
                  Alimentação equilibrada que apoia a concentração e o bem-estar das crianças.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="pt-6">
                <Shirt className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Uniforme Escolar</h3>
                <p className="text-sm text-muted-foreground text-pretty">
                  Uniforme próprio que reforça a identidade e o sentido de pertença ao colégio.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Actividades extracurriculares */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Actividades Extracurriculares</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {extracurriculares.map((act) => (
              <div key={act} className="flex items-center gap-2 p-4 rounded-xl border-2 bg-card">
                <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium">{act}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA */}
        <section className="bg-primary/5 rounded-2xl p-8 text-center border border-primary/20">
          <h3 className="text-2xl font-bold mb-3">Garanta a vaga do seu educando no Ensino Geral</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
            Faça parte do Colégio Afrilaure e ofereça ao seu filho uma educação de excelência num ambiente acolhedor e
            moderno.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/#contacto" className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Fazer Matrícula
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#contacto" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Contactar
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
