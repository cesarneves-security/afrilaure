import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bus, MapPin } from "lucide-react"

export function Transport() {
  const routes = [
    { zone: "Vila-Sede, Prédios dos Cubanos e Vila Nova", stopPrice: "7.500,00 Kz", doorPrice: "8.500,00 Kz" },
    { zone: "Luanda-sul, Zona Verde, Bº Esperança, 1º de Maio", stopPrice: "9.500,00 Kz", doorPrice: "10.500,00 Kz" },
    { zone: "Vila Chinesa, Kikuxi e Ginga Isabel", stopPrice: "—", doorPrice: "11.500,00 Kz" },
    { zone: "500 Casas e Sanzala", stopPrice: "10.500,00 Kz", doorPrice: "11.500,00 Kz" },
    { zone: "Jacinto Tchipa (Pastelaria Nice)", stopPrice: "13.000,00 Kz", doorPrice: "15.500,00 Kz" },
    { zone: "Caop A, Fata, Piaget até Hospital Municipal", stopPrice: "13.000,00 Kz", doorPrice: "15.500,00 Kz" },
    { zone: "Caop B, C, Boa-Fé, Tenda Azul", stopPrice: "13.000,00 Kz", doorPrice: "15.500,00 Kz" },
    { zone: "Cometa, Estalagem, Inter-Transportes", stopPrice: "13.000,00 Kz", doorPrice: "16.500,00 Kz" },
    { zone: "Grafanil Bar e Calemba II", stopPrice: "14.000,00 Kz", doorPrice: "—" },
    { zone: "Zango I, II e Ondjo-Yetu", stopPrice: "13.000,00 Kz", doorPrice: "15.000,00 Kz" },
    { zone: "Zango III e IV", stopPrice: "13.000,00 Kz", doorPrice: "15.500,00 Kz" },
    { zone: "Bca", stopPrice: "15.000,00 Kz", doorPrice: "—" },
    { zone: "Centralidade do Kilamba", stopPrice: "—", doorPrice: "16.000,00 Kz" },
    { zone: "Centralidade do Sequele", stopPrice: "—", doorPrice: "16.000,00 Kz" },
  ]

  return (
    <section id="transportes" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Serviço de Transportes</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Oferecemos transporte escolar seguro para diversas zonas de Luanda
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Bus className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Zonas de Recolha e Preços</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-primary/20">
                      <th className="text-left py-4 px-4 text-foreground font-semibold">Zona</th>
                      <th className="text-center py-4 px-4 text-foreground font-semibold">Paragem</th>
                      <th className="text-center py-4 px-4 text-foreground font-semibold">Porta</th>
                    </tr>
                  </thead>
                  <tbody>
                    {routes.map((route, index) => (
                      <tr key={index} className="border-b border-border hover:bg-primary/5 transition-colors">
                        <td className="py-4 px-4">
                          <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                            <span className="text-foreground">{route.zone}</span>
                          </div>
                        </td>
                        <td className="text-center py-4 px-4 font-semibold text-primary">{route.stopPrice}</td>
                        <td className="text-center py-4 px-4 font-semibold text-secondary">{route.doorPrice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 space-y-4">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-sm text-foreground">
                      <strong>Nota:</strong> Nas áreas de difícil acesso, no tempo chuvoso, os encarregados deverão
                      concentrar os alunos nas paragens a indicar pelo motorista, para permitir a circulação das
                      viaturas com segurança.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/5 border-secondary/20">
                  <CardContent className="pt-6">
                    <p className="text-sm text-foreground">
                      <strong>Importante:</strong> Em caso de avaria da viatura e não se efectivar a recolha do aluno
                      neste dia, deve o encarregado de educação dirigir-se à instituição para o possível desconto no mês
                      seguinte.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
