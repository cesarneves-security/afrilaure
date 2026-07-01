import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "João Mateus",
      course: "Informática - Turma 2023",
      text: "A Afrilaure mudou a minha vida. Hoje trabalho como programador numa empresa internacional graças à formação de qualidade que recebi.",
      image: "/young-african-male-student-smiling-portrait.webp",
    },
    {
      name: "Maria Silva",
      course: "Electrónica - Turma 2022",
      text: "Os professores são excelentes e as instalações são modernas. Aprendi muito e hoje tenho o meu próprio negócio de manutenção electrónica.",
      image: "/young-african-female-student-smiling-portrait.webp",
    },
    {
      name: "Carlos Neto",
      course: "Informática - Turma 2023",
      text: "A escola preparou-me não só tecnicamente, mas também para o mercado de trabalho. Consegui emprego antes mesmo de terminar o curso.",
      image: "/young-african-male-student-professional-portrait.webp",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Dizem os Nossos Alunos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Histórias de sucesso dos nossos formandos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
