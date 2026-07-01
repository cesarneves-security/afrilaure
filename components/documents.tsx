import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, CheckCircle } from "lucide-react"

export function Documents() {
  const documents = [
    "Certificado de Habilitações Literárias",
    "Fotocópia do Bilhete de Identidade",
    "Cartão de Vacina Actualizado",
    "Atestado Médico",
    "4 fotografias tipo passe",
  ]

  return (
    <section id="documentos" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="h-10 w-10 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Documentos Necessários</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Para efectuar a matrícula ou reconfirmação, são necessários os seguintes documentos
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Lista de Documentos</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {documents.map((doc, index) => (
                <li key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base">{doc}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="mt-8 max-w-2xl mx-auto">
          <Card className="border-orange-200 bg-orange-50/50">
            <CardContent className="pt-6">
              <p className="text-sm text-center">
                <strong>Importante:</strong> Caso se efectue a anulação da matrícula por qualquer motivo, não serão
                reembolsados os valores monetários pagos, nem a substituição por outro aluno.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
