import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, BookOpen, Target } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Award,
      title: "Excelência Académica",
      description: "Professores qualificados e metodologias modernas de ensino na área da saúde",
    },
    {
      icon: Users,
      title: "Comunidade Forte",
      description: "Formação de profissionais de saúde competentes e dedicados",
    },
    {
      icon: BookOpen,
      title: "Currículo Actualizado",
      description: "Programas alinhados com as necessidades do sector da saúde",
    },
    {
      icon: Target,
      title: "Foco no Futuro",
      description: "Preparação para o mercado de trabalho na área da saúde",
    },
  ]

  return (
    <section id="sobre" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre o Instituto Politécnico Privado AFRILAURE</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            O Instituto Politécnico Privado AFRILAURE é um estabelecimento de ensino vocacionado para leccionar o Ensino
            Primário, Iº e IIº Ciclos do Ensino Secundário e os Cursos Médios de Saúde: Enfermagem e Análises Clínicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
                <p className="text-pretty leading-relaxed">
                  Proporcionar educação técnica de qualidade na área da saúde, formando profissionais competentes e
                  éticos, capazes de contribuir para o desenvolvimento do sector da saúde em Angola.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
                <p className="text-pretty leading-relaxed">
                  Ser o instituto de referência em Angola na formação de técnicos de saúde, reconhecido pela excelência
                  na preparação de enfermeiros e técnicos de análises clínicas.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
