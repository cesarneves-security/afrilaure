import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Award as IdCard, Syringe, Camera } from "lucide-react"

export function Enrollment() {
  const documents = [
    { icon: FileText, text: "Certificado de Habilitações Literárias" },
    { icon: IdCard, text: "Fotocópia da Cédula/Bilhete de Identidade" },
    { icon: Syringe, text: "Cartão de Vacina Actualizado" },
    { icon: FileText, text: "Atestado Médico, 4 fotografias tipo passe" },
    { icon: IdCard, text: "Cópia do B.I do Encarregado de Educação" },
  ]

  const enrollmentFees = [
    { label: "Matrícula para Iniciação", value: "Grátis" },
    { label: "Matrícula / Confirmação da 1ª à 6ª classe", value: "15.000,00 Kz" },
    { label: "Estudo Orientado do Primário à 8ª Classe", value: "8.300,00 Kz" },
    { label: "Confirmação/Matrícula da 7ª à 9ª classe", value: "20.000,00 Kz" },
    { label: "Orientação Vocacional I (9ª Classe)", value: "11.000,00 Kz" },
    { label: "Cartão de Estudante", value: "3.500,00 Kz" },
  ]

  return (
    <section id="matriculas" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Matrículas e Reconfirmações</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Ensino Geral Diurno - Ano Lectivo 2026/2027
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Documentos Necessários</CardTitle>
              <CardDescription>Prepare os seguintes documentos para a matrícula</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <doc.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground pt-2">{doc.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Valores de Matrícula</CardTitle>
              <CardDescription>Taxas para o ano lectivo 2026/2027</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {enrollmentFees.map((fee, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-border last:border-0"
                  >
                    <span className="text-foreground text-sm">{fee.label}</span>
                    <span className="font-bold text-secondary">{fee.value}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                <p className="text-sm text-foreground">
                  <strong className="text-secondary">Material Iniciação e 1ª Classe:</strong> 8.000,00 Kz/trimestre (Total: 24.000,00 Kz/ano)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 max-w-5xl mx-auto space-y-4">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-sm text-foreground">
                <strong>Merenda e Transporte:</strong> Gratuito da Iniciação até à 2ª Classe
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-sm text-foreground">
                <strong>Nota Importante:</strong> O aluno que não efectuar a Matrícula/Confirmação nos meses de Julho e Agosto, pagará mais 10.000,00 Kz.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-destructive/10 border-destructive/20">
            <CardContent className="pt-6">
              <p className="text-sm text-foreground">
                <strong>Cancelamento:</strong> Caso se efectue a anulação da matrícula por qualquer motivo, não serão reembolsados os valores monetários pagos, nem a substituição por outro aluno.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
