import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bus, MapPin } from "lucide-react"

export function Transport() {
  const transportZones = [
    { zone: "Vila-Sede, Prédios dos Cubanos e Vila Nova", paragem: "7.500,00 Kz", porta: "8.500,00 Kz" },
    {
      zone: "Luanda-sul, Zona Verde, Bº Esperança, 1º de Maio, S. Francisco, Imbondeiro 50, Cazombo e Comarca",
      paragem: "9.500,00 Kz",
      porta: "10.500,00 Kz",
    },
    { zone: "Vila Chinesa, Kikuxi e Ginga Isabel", paragem: "—", porta: "11.500,00 Kz" },
    { zone: "500 Casas e Sanzala", paragem: "10.500,00 Kz", porta: "11.500,00 Kz" },
    { zone: "Jacinto Tchipa (Pastelaria Nice)", paragem: "13.000,00 Kz", porta: "15.500,00 Kz" },
    {
      zone: "Caop A, Fata, Piaget até ao Hospital Municipal do Capalanga",
      paragem: "13.000,00 Kz",
      porta: "15.500,00 Kz",
    },
    { zone: "Caop B, C, Boa-Fé, Tenda Azul e Instituto General Yoba", paragem: "13.000,00 Kz", porta: "15.500,00 Kz" },
    { zone: "Cometa, Estalagem, Inter-Transportes, Coelho e Mª Luisa", paragem: "13.000,00 Kz", porta: "16.500,00 Kz" },
    { zone: "Grafanil Bar e Calemba II (Farmácia)", paragem: "14.000,00 Kz", porta: "—" },
    { zone: "Zango I, II e Ondjo-Yetu", paragem: "13.000,00 Kz", porta: "15.000,00 Kz" },
    { zone: "Zango III e IV", paragem: "13.000,00 Kz", porta: "15.500,00 Kz" },
    { zone: "Bca", paragem: "15.000,00 Kz", porta: "—" },
    { zone: "Centralidade do Kilamba", paragem: "—", porta: "16.000,00 Kz" },
    { zone: "Centralidade do Sequele", paragem: "—", porta: "16.000,00 Kz" },
  ]

  return (
    <section id="transportes" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Bus className="h-10 w-10 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Serviço de Transportes</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Oferecemos transporte escolar para diversas zonas de Luanda
          </p>
        </div>

        <Card className="max-w-6xl mx-auto mb-8">
          <CardHeader>
            <CardTitle>Zonas de Recolha e Preços</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2 font-semibold">Zona</th>
                    <th className="text-center py-3 px-2 font-semibold">Paragem</th>
                    <th className="text-center py-3 px-2 font-semibold">Porta a Porta</th>
                  </tr>
                </thead>
                <tbody>
                  {transportZones.map((zone, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-2 text-sm">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{zone.zone}</span>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-center font-semibold text-primary">{zone.paragem}</td>
                      <td className="py-3 px-2 text-center font-semibold text-primary">{zone.porta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="text-lg">Nota Importante</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>
                Nas áreas de difícil acesso, no tempo chuvoso, os encarregados deverão concentrar os alunos nas paragens
                indicadas pelo motorista, para permitir a circulação das viaturas com segurança.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50/50">
            <CardHeader>
              <CardTitle className="text-lg">Em Caso de Avaria</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p>
                Em caso de avaria da viatura e não se efectivar a recolha do aluno neste dia, o encarregado de educação
                deve dirigir-se à instituição para o possível desconto no mês seguinte.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6">
              <p className="font-semibold mb-2">Contacto do Responsável dos Transportes</p>
              <p className="text-primary text-lg font-bold">923 525 994 / 912 375 337</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
