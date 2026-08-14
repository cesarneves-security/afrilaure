import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16 text-center">
      <div className="flex max-w-md flex-col items-center gap-5">
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-secondary">Afrilaure</p>
        <h1 className="text-3xl font-bold text-primary">Página não encontrada</h1>
        <p className="text-muted-foreground">A página que procura não existe ou foi movida.</p>
        <Button asChild><Link href="/">Voltar ao início</Link></Button>
      </div>
    </main>
  )
}
