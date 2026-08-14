import { AlertCircle, Banknote, CalendarDays, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const general = [
  ["Iniciação com Transporte", "20.000 Kz"], ["Iniciação sem Transporte", "16.000 Kz"],
  ["1.ª e 2.ª Classes com Transporte", "27.000 Kz"], ["1.ª, 2.ª e 3.ª Classes", "18.630 Kz"],
  ["4.ª, 5.ª e 6.ª Classes", "22.000 Kz"], ["7.ª, 8.ª e 9.ª Classes", "24.100 Kz"],
]
const technical = [["10.ª Classe — Todos os cursos", "26.720 Kz"], ["11.ª Classe — Todos os cursos", "30.700 Kz"], ["Estágio interno — 11.ª Classe", "4.300 Kz"], ["12.ª Classe — Todos os cursos", "32.050 Kz"], ["Estágio interno — 12.ª Classe", "4.950 Kz"], ["13.ª Classe — Todos os cursos", "34.700 Kz"], ["Estágio interno — 13.ª Classe", "5.300 Kz"]]
const health = [["10.ª — Farmácia, Radiologia, Fisioterapia e Estomatologia", "16.000 Kz"], ["11.ª Classe", "29.400 Kz"], ["12.ª Classe", "32.050 Kz"], ["Estágio interno — 12.ª Classe", "2.950 Kz"], ["13.ª Classe", "34.700 Kz"], ["Estágio interno — 13.ª Classe", "3.300 Kz"]]

function FeeGroup({ title, rows, multa }: { title: string; rows: string[][]; multa: string }) {
  return <Card className="overflow-hidden"><CardHeader className="bg-primary text-primary-foreground"><CardTitle className="text-xl">{title}</CardTitle></CardHeader><CardContent className="p-0"><div className="divide-y divide-border">{rows.map(([label, value]) => <div key={label} className="flex items-center justify-between gap-4 px-5 py-4"><span className="text-sm leading-relaxed">{label}</span><span className="shrink-0 font-bold text-secondary">{value}</span></div>)}</div><div className="flex justify-between gap-4 bg-muted/50 px-5 py-4 text-sm"><span>Multa aplicável</span><strong>{multa}</strong></div></CardContent></Card>
}

export function Fees() {
  return <section id="propinas" className="bg-background py-20"><div className="container mx-auto px-4"><div className="mx-auto mb-12 max-w-3xl text-center"><p className="mb-3 font-mono text-sm font-semibold uppercase tracking-widest text-secondary">Ano lectivo 2026/2027</p><h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Propinas e pagamentos</h2><p className="text-muted-foreground">Valores mensais, estágios e multas organizados por nível de ensino.</p></div><div className="grid gap-8 lg:grid-cols-3"><FeeGroup title="Ensino Geral" rows={general} multa="7.000 Kz (Iniciação à 6.ª) · 9.000 Kz (7.ª à 9.ª)" /><FeeGroup title="Ensino Técnico Médio" rows={technical} multa="10.000 Kz" /><FeeGroup title="Ensino Técnico Médio de Saúde" rows={health} multa="10.000 Kz" /></div><div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3"><Card><CardContent className="flex gap-3 p-5"><CalendarDays className="text-primary" /><p className="text-sm">Fora de Julho e Agosto: acréscimo de <strong>10.000 Kz</strong> na matrícula/confirmação.</p></CardContent></Card><Card><CardContent className="flex gap-3 p-5"><Banknote className="text-primary" /><p className="text-sm">Pagamento até ao dia <strong>10 de cada mês</strong>, por banco ou Multicaixa.</p></CardContent></Card><Card><CardContent className="flex gap-3 p-5"><Star className="text-secondary" /><p className="text-sm">O melhor aluno do quadro de honra de cada nível, por trimestre, terá direito a um estímulo.</p></CardContent></Card></div><div className="mx-auto mt-6 max-w-5xl"><Card className="border-destructive/30 bg-destructive/10"><CardContent className="flex gap-3 p-5 text-sm"><AlertCircle className="shrink-0 text-destructive" /><p><strong>Atenção:</strong> Não são aceites transferências via Express e BAI Directo.</p></CardContent></Card></div></div></section>
}

export { FeeGroup }
export const feeData = { general, technical, health }
