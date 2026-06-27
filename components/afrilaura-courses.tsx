import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Stethoscope, Microscope, GraduationCap, Code, Zap, Users, Pill } from "lucide-react"

export function Courses() {
  const generalCourses = [
    {
      icon: BookOpen,
      title: "Ensino Primário",
      description: "Educação fundamental com foco em leitura, escrita, matemática e desenvolvimento integral.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: GraduationCap,
      title: "I e II Ciclos do Ensino Secundário",
      description: "Preparação académica sólida para o ensino superior e mercado de trabalho (7º-9º classes).",
      color: "bg-secondary/10 text-secondary",
    },
  ]

  const technicalCourses = [
    {
      icon: Code,
      title: "Técnico Médio de Informática",
      description: "Formação em sistemas, programação e tecnologias da informação.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Zap,
      title: "Técnico Médio de Electrónica",
      description: "Especialização em electrónica, automação e instalações eléctricas.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Zap,
      title: "Telecomunicações",
      description: "Formação em sistemas de telecomunicações e redes.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Users,
      title: "Gestão de Recursos Humanos",
      description: "Preparação para gestão de pessoas e recursos humanos nas organizações.",
      color: "bg-secondary/10 text-secondary",
    },
  ]

  const healthCourses = [
    {
      icon: Stethoscope,
      title: "Enfermagem",
      description: "Formação técnica profissional em cuidados de saúde com prática clínica.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Microscope,
      title: "Análises Clínicas",
      description: "Capacitação em análises laboratoriais e diagnóstico clínico.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Pill,
      title: "Farmácia",
      description: "Formação em gestão farmacêutica e medicamentos.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Microscope,
      title: "Radiologia",
      description: "Especialização em técnicas de imagiologia médica.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Stethoscope,
      title: "Fisioterapia",
      description: "Formação em reabilitação e fisioterapia.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Microscope,
      title: "Estomatologia",
      description: "Especialização em saúde oral e estomatologia.",
      color: "bg-secondary/10 text-secondary",
    },
  ]

  return (
    <section id="cursos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nossos Cursos</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Oferecemos uma variedade de cursos académicos e técnicos para formar profissionais qualificados
          </p>
        </div>

        {/* General Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Ensino Geral Diurno</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {generalCourses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 ${course.color} rounded-full flex items-center justify-center mb-4`}>
                    <course.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Ensino Técnico Médio</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {technicalCourses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 ${course.color} rounded-full flex items-center justify-center mb-4`}>
                    <course.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{course.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Health Courses */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Ensino Técnico Médio de Saúde</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {healthCourses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 ${course.color} rounded-full flex items-center justify-center mb-4`}>
                    <course.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{course.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
