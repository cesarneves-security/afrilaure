import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe2, BookOpen, Users, Award } from "lucide-react"

const languages = [
  {
    name: "Inglês",
    description: "A língua global dos negócios e tecnologia",
    icon: "🇬🇧",
    color: "from-orange-500/10 to-orange-600/10",
    image: "/african-students-learning-english-language.webp",
  },
  {
    name: "Francês",
    description: "A língua da diplomacia e cultura",
    icon: "🇫🇷",
    color: "from-orange-400/10 to-orange-500/10",
    image: "/african-students-learning-french-language.webp",
  },
  {
    name: "Espanhol",
    description: "Conecta-te com mais de 500 milhões de pessoas",
    icon: "🇪🇸",
    color: "from-orange-600/10 to-orange-700/10",
    image: "/african-students-learning-spanish-language.webp",
  },
  {
    name: "Português",
    description: "A língua de Angola, Brasil e Portugal",
    icon: "🇵🇹",
    color: "from-orange-500/10 to-green-600/10",
    image: "/african-students-learning-portuguese-language.webp",
  },
  {
    name: "Vietnamita",
    description: "Descobre a cultura do Sudeste Asiático",
    icon: "🇻🇳",
    color: "from-amber-500/10 to-amber-600/10",
    image: "/african-students-learning-vietnamese-language.webp",
  },
  {
    name: "Mandarim",
    description: "A língua mais falada do mundo",
    icon: "🇨🇳",
    color: "from-orange-500/10 to-red-600/10",
    image: "/african-students-learning-mandarin-chinese-languag.webp",
  },
]

const features = [
  {
    icon: Globe2,
    title: "Professores Nativos",
    description: "Aprende com falantes nativos experientes",
  },
  {
    icon: BookOpen,
    title: "Material Moderno",
    description: "Recursos atualizados e interativos",
  },
  {
    icon: Users,
    title: "Turmas Pequenas",
    description: "Atenção personalizada para cada aluno",
  },
  {
    icon: Award,
    title: "Certificação",
    description: "Certificados reconhecidos internacionalmente",
  },
]

export function Languages() {
  return (
    <section id="languages" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Línguas Internacionais Disponíveis</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolhe o idioma que queres dominar e começa a tua jornada linguística hoje
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {languages.map((language) => (
            <Card key={language.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={language.image || "/placeholder.svg"}
                  alt={`Aprender ${language.name}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{language.icon}</span>
                  <CardTitle className="text-2xl text-card-foreground">{language.name}</CardTitle>
                </div>
                <CardDescription className="text-base">{language.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center bg-card">
              <CardHeader>
                <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-card-foreground">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
