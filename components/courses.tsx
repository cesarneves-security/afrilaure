import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Activity, CheckCircle, Laptop, Users, Calculator, Radio, Pill, Stethoscope, Smile } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Courses() {
  const courses = [
    {
      icon: Heart,
      title: "Enfermagem",
      slug: "enfermagem",
      duration: "3 Anos",
      classLevel: "10ª à 13ª Classe",
      description:
        "Formação completa em cuidados de enfermagem, preparando profissionais qualificados para atuar em hospitais, clínicas e centros de saúde.",
      topics: [
        "Anatomia e Fisiologia",
        "Cuidados de Enfermagem",
        "Farmacologia",
        "Enfermagem Materno-Infantil",
        "Enfermagem Cirúrgica",
        "Primeiros Socorros",
      ],
    },
    {
      icon: Activity,
      title: "Análises Clínicas",
      slug: "analises-clinicas",
      duration: "3 Anos",
      classLevel: "10ª à 13ª Classe",
      description: "Formação técnica em análises laboratoriais, microbiologia e diagnóstico clínico.",
      topics: [
        "Hematologia",
        "Bioquímica Clínica",
        "Microbiologia",
        "Parasitologia",
        "Imunologia",
        "Técnicas Laboratoriais",
      ],
    },
    {
      icon: Pill,
      title: "Farmácia",
      slug: "farmacia",
      duration: "3 Anos",
      description:
        "Formação em gestão farmacêutica e medicamentos, preparando profissionais para atuar em farmácias e serviços de saúde.",
      topics: [
        "Farmacologia Aplicada",
        "Gestão Farmacêutica",
        "Medicamentos",
        "Boas Práticas Farmacêuticas",
        "Legislação Farmacêutica",
        "Atendimento ao Cliente",
      ],
    },
    {
      icon: Stethoscope,
      title: "Fisioterapia",
      slug: "fisioterapia",
      duration: "3 Anos",
      description:
        "Formação em técnicas de reabilitação física e tratamento de lesões, preparando profissionais para promover a saúde e bem-estar.",
      topics: [
        "Anatomia Funcional",
        "Cinesiologia",
        "Técnicas Manuais",
        "Reabilitação Física",
        "Fisioterapia Desportiva",
        "Terapias Especializadas",
      ],
    },
    {
      icon: Smile,
      title: "Estomatologia",
      slug: "estomatologia",
      duration: "3 Anos",
      description:
        "Formação em saúde oral e técnicas odontológicas, preparando profissionais para atuar em clínicas dentárias e centros de saúde.",
      topics: [
        "Anatomia Oral",
        "Higiene Oral",
        "Técnicas de Assistência Dentária",
        "Prevenção Oral",
        "Radiologia Dentária",
        "Materiais Dentários",
      ],
    },
    {
      icon: Laptop,
      title: "Informática",
      slug: "tecnico-informatica",
      duration: "3 Anos",
      description: "Formação em tecnologias da informação, programação e gestão de sistemas computacionais.",
      topics: [
        "Programação",
        "Redes de Computadores",
        "Bases de Dados",
        "Desenvolvimento Web",
        "Sistemas Operacionais",
        "Segurança Informática",
      ],
    },
    {
      icon: Users,
      title: "Recursos Humanos",
      slug: "gestao-recursos-humanos",
      duration: "3 Anos",
      description: "Formação em gestão de pessoas, recrutamento e desenvolvimento organizacional.",
      topics: [
        "Gestão de Pessoas",
        "Recrutamento e Seleção",
        "Legislação Laboral",
        "Psicologia Organizacional",
        "Desenvolvimento de Talentos",
        "Administração de Pessoal",
      ],
    },
    {
      icon: Radio,
      title: "Electrónica",
      slug: "tecnico-electronica",
      duration: "3 Anos",
      description: "Formação técnica em sistemas electrónicos, automação e instalações eléctricas.",
      topics: [
        "Circuitos Electrónicos",
        "Automação Industrial",
        "Instalações Eléctricas",
        "Electrónica Digital",
        "Manutenção de Equipamentos",
        "Segurança Profissional",
      ],
    },
    {
      icon: Radio,
      title: "Radiologia",
      slug: "radiologia",
      duration: "3 Anos",
      description: "Formação especializada em técnicas de imagiologia médica e diagnóstico por imagem.",
      topics: [
        "Física das Radiações",
        "Técnicas Radiográficas",
        "Ecografia",
        "Ressonância Magnética",
        "Protecção Radiológica",
        "Anatomia Radiológica",
      ],
    },
  ]

  return (
    <section id="cursos" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Ensino Técnico Médio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Oferecemos cursos técnicos de nível médio com duração de 3 anos, preparando os alunos para o mercado de
            trabalho e ensino superior.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="border-2 hover:shadow-2xl hover:scale-105 transition-all duration-300 shine-effect bg-gradient-to-br from-card to-muted/20"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg">
                    <course.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription className="text-base font-semibold text-secondary">
                      {course.duration}
                    </CardDescription>
                    {course.classLevel && (
                      <Badge
                        variant="secondary"
                        className="mt-2 bg-accent/20 text-accent-foreground border border-accent/30"
                      >
                        {course.classLevel}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-pretty text-sm">{course.description}</p>
                <div>
                  <h4 className="font-semibold mb-3 text-sm">Disciplinas Principais:</h4>
                  <ul className="space-y-2">
                    {course.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild className="w-full mt-4 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  <Link href={`/cursos/${course.slug}`}>
                    Saiba Mais
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
