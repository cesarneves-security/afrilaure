import { getCourseBySlug, getAllSlugs } from "@/lib/courses-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, BookOpen, DollarSign, Clock, Briefcase, CheckCircle, FileText } from "lucide-react"

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = getCourseBySlug(slug)
  if (!course) return {}
  return {
    title: `${course.name} - Colégio Afrilaure`,
    description: course.description,
  }
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = getCourseBySlug(slug)

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-12 mb-12">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-6 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
          <div className="max-w-4xl">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-4">
                {course.categoryLabel}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.name}</h1>
            <p className="text-lg text-white/90">{course.description}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Key Information Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Duração</p>
                  <p className="font-semibold">{course.duration}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Matrícula</p>
                  <p className="font-semibold text-sm">{course.enrollmentFee}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Propina</p>
                  <p className="font-semibold text-sm">{course.monthlyFee}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Classes</p>
                  <p className="font-semibold text-sm">{course.classes.join(", ")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Highlights */}
        <Card className="mb-12 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Características do Curso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid md:grid-cols-2 gap-3">
              {course.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{highlight}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Topics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Disciplinas e Tópicos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {course.topics.map((topic, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">{topic}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Career Path */}
        {course.jobMarket.length > 0 && (
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Oportunidades de Carreira
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-foreground mb-4">
                  <strong>Caminho Profissional:</strong> {course.careerPath}
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {course.jobMarket.map((job, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 bg-secondary/5 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{job}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Requirements */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Requisitos de Admissão
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {course.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">{requirement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Documents Required */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Documentos Necessários
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {course.documents.map((doc, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">{doc}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="bg-primary/5 rounded-lg p-8 text-center border border-primary/20">
          <h3 className="text-2xl font-bold mb-3">Interessado em {course.name}?</h3>
          <p className="text-foreground mb-6 max-w-2xl mx-auto">
            Contacte-nos para mais informações sobre o processo de inscrição e vagas disponíveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="/#contacto">Contacte-nos</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Voltar</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
