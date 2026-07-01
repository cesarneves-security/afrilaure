import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Banknote, Calendar, Gift, AlertCircle } from "lucide-react"

export function Fees() {
  const generalEducationFees = [
    { level: "Iniciação", amount: "20.000,00 Kz" },
    { level: "1ª, 2ª, 3ª e 4ª classes", amount: "25.000,00 Kz" },
    { level: "5ª e 6ª classes", amount: "27.000,00 Kz" },
    { level: "7ª, 8ª e 9ª classes", amount: "29.000,00 Kz" },
  ]

  const technicalFees = [
    { grade: "10ª Classe", amount: "32.000,00 Kz" },
    { grade: "11ª Classe", amount: "35.000,00 Kz" },
    { grade: "12ª Classe", amount: "38.000,00 Kz" },
    { grade: "13ª Classe", amount: "40.000,00 Kz" },
  ]

  const healthCourseFees = [
    { grade: "10ª Classe (Farmácia, Radiologia, Fisioterapia, Estomatologia)", amount: "20.000,00 Kz" },
    { grade: "11ª Classe", amount: "28.000,00 Kz" },
    { grade: "12ª Classe", amount: "35.000,00 Kz" },
    { grade: "13ª Classe", amount: "38.000,00 Kz" },
  ]

  return (
    <section id="propinas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Propinas e Pagamentos</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Ano Lectivo 2026/2027 - Valores mensais
          </p>
        </div>

        {/* General Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Ensino Geral Diurno</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
            {generalEducationFees.map((fee, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Banknote className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-sm text-primary">{fee.level}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-secondary">{fee.amount}</p>
                  <p className="text-xs text-muted-foreground mt-2">por mês</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Ensino Técnico Médio</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
            {technicalFees.map((fee, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Banknote className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-sm text-primary">{fee.grade}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-secondary">{fee.amount}</p>
                  <p className="text-xs text-muted-foreground mt-2">por mês</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Health Courses */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Ensino Técnico Médio de Saúde</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
            {healthCourseFees.map((fee, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Banknote className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xs text-primary">{fee.grade}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-secondary">{fee.amount}</p>
                  <p className="text-xs text-muted-foreground mt-2">por mês</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Payment Rules */}
        <div className="max-w-5xl mx-auto mt-16">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl text-primary">Normas de Pagamento</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-foreground">
                  Pagamento até ao dia <strong>10 de cada mês</strong> via banco ou multicaixa (Não transferências via express e BAI Directo)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-foreground">
                  O depósito deverá ser assinado com o <strong>nome do aluno em referência</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                <p className="text-foreground">
                  Pagamento fora do prazo: <strong className="text-secondary">sujeito a multa fixada</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                <p className="text-foreground">
                  Extravio do bordereau: <strong className="text-secondary">pagará 50% do valor da propina</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 space-y-4">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-sm text-foreground">
                  <strong>Prémio:</strong> O melhor aluno do quadro de honra de cada nível por trimestre terá direito a um estímulo.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-destructive/10 border-destructive/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-sm text-foreground">
                    <strong>Atenção:</strong> Alunos com direito a desconto que atrasarem na liquidação da propina perderão este privilégio e sujeitar-se-ão ao pagamento normal acrescido da respectiva multa.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
