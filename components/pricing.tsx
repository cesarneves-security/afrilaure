import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, Tabs } from "lucide-react"

export function Pricing() {
  const matriculaGeral = [
    { item: "Matrícula para Iniciação", price: "Grátis" },
    { item: "Matrícula / Confirmação da 1ª à 6ª classe", price: "15.000,00 Kz" },
    { item: "Confirmação/Matrícula da 7ª à 9ª classe", price: "20.000,00 Kz" },
    { item: "Orientação Vocacional I (9ª Classe)", price: "11.000,00 Kz" },
    { item: "Cartão de Estudante", price: "3.500,00 Kz" },
    { item: "Estudo Orientado (Primário à 8ª Classe)", price: "8.300,00 Kz" },
  ]

  const matriculaTecnica = [
    { item: "Inscrição para a 10ª Classe (Técnico Médio)", price: "5.000,00 Kz" },
    { item: "Matrícula e Confirmação (10ª à 13ª Classe)", price: "20.000,00 Kz" },
    { item: "Cartão de Estudante", price: "3.500,00 Kz" },
  ]

  const matriculaSaude = [
    { item: "Inscrição para a 10ª classe", price: "5.000,00 Kz" },
    { item: "Matrícula / Confirmação", price: "20.000,00 Kz" },
    { item: "Cartão de Estudante", price: "3.500,00 Kz" },
    { item: "Cadastramento no Sistema", price: "5.000,00 Kz" },
  ]

  const propinasGeral = [
    { classe: "Iniciação", price: "20.000,00 Kz/mês" },
    { classe: "1ª, 2ª, 3ª e 4ª classes", price: "25.000,00 Kz/mês" },
    { classe: "5ª e 6ª classes", price: "27.000,00 Kz/mês" },
    { classe: "7ª, 8ª e 9ª classes", price: "29.000,00 Kz/mês" },
  ]

  const propinasTenicas = [
    { classe: "10ª Classe", price: "32.000,00 Kz/mês" },
    { classe: "11ª Classe", price: "35.000,00 Kz/mês" },
    { classe: "12ª Classe", price: "38.000,00 Kz/mês" },
    { classe: "13ª Classe", price: "40.000,00 Kz/mês" },
  ]

  const propinaSaude = [
    { classe: "10ª Classe (Farmácia, Radiologia, Fisioterapia, Estomatologia)", price: "20.000,00 Kz/mês" },
    { classe: "11ª Classe", price: "28.000,00 Kz/mês" },
    { classe: "12ª Classe", price: "35.000,00 Kz/mês" },
    { classe: "13ª Classe", price: "38.000,00 Kz/mês" },
  ]

  const multas = [
    { nivel: "Iniciação à 6ª Classe", price: "7.000,00 Kz" },
    { nivel: "7ª, 8ª e 9ª Classes", price: "9.000,00 Kz" },
    { nivel: "10ª à 13ª Classe (Técnico)", price: "10.000,00 Kz" },
    { nivel: "10ª à 13ª Classe (Saúde)", price: "10.000,00 Kz" },
  ]

  return (
    <section id="precos" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Matrículas, Propinas e Valores - 2026/2027</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Informações sobre valores para o ano lectivo 2026/2027
          </p>
        </div>

        {/* Ensino Geral */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-primary">Ensino Geral Diurno</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Matrículas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {matriculaGeral.map((item, index) => (
                  <div key={index} className="flex justify-between items-start pb-2 border-b last:border-0">
                    <span className="text-sm flex-1">{item.item}</span>
                    <span className="font-semibold text-primary text-sm">{item.price}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Propinas Mensais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {propinasGeral.map((item, index) => (
                  <div key={index} className="flex justify-between items-center pb-2 border-b last:border-0">
                    <span className="text-sm font-medium">{item.classe}</span>
                    <span className="font-semibold text-primary text-sm">{item.price}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Ensino Técnico Médio */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-primary">Ensino Técnico Médio</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Matrículas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {matriculaTecnica.map((item, index) => (
                  <div key={index} className="flex justify-between items-start pb-2 border-b last:border-0">
                    <span className="text-sm flex-1">{item.item}</span>
                    <span className="font-semibold text-primary text-sm">{item.price}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Propinas Mensais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {propinasTenicas.map((item, index) => (
                  <div key={index} className="flex justify-between items-center pb-2 border-b last:border-0">
                    <span className="text-sm font-medium">{item.classe}</span>
                    <span className="font-semibold text-primary text-sm">{item.price}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Ensino Técnico Médio de Saúde */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-primary">Ensino Técnico Médio de Saúde</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Matrículas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {matriculaSaude.map((item, index) => (
                  <div key={index} className="flex justify-between items-start pb-2 border-b last:border-0">
                    <span className="text-sm flex-1">{item.item}</span>
                    <span className="font-semibold text-primary text-sm">{item.price}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Propinas Mensais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {propinaSaude.map((item, index) => (
                  <div key={index} className="flex justify-between items-center pb-2 border-b last:border-0">
                    <span className="text-sm font-medium">{item.classe}</span>
                    <span className="font-semibold text-primary text-sm">{item.price}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Multas */}
        <div className="mb-12">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-600" />
                Multas por Atraso
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {multas.map((multa, index) => (
                  <div key={index} className="flex justify-between items-center pb-2 border-b last:border-0">
                    <span className="text-sm font-medium">{multa.nivel}</span>
                    <span className="font-semibold text-destructive text-sm">{multa.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Normas */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card className="border-orange-200 bg-orange-50/50">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-600" />
                Normas de Pagamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Pagamento até ao dia 10 de cada mês</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Via banco ou multicaixa (Não: express, BAI Directo)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Depósito assinado com nome do aluno</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Extravio de bordereau: 50% do valor da propina</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                Observações
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Merenda e Transporte: Gratuito da Iniciação à 2ª Classe</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Uniforme: Uso obrigatório desde o 1º dia</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Prémio: Melhor aluno/trimestre tem direito a estímulo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Matrícula após Julho/Agosto: +10.000,00 Kz</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
