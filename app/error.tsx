'use client'

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[v0] Erro ao renderizar a página:", error)
  }, [error])

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16 text-center">
      <div className="flex max-w-md flex-col items-center gap-5">
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-secondary">Afrilaure</p>
        <h1 className="text-3xl font-bold text-primary">Não foi possível carregar esta página</h1>
        <p className="text-muted-foreground">Actualize a página ou tente novamente. Se o problema continuar, volte ao início.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button onClick={() => reset()}>Tentar novamente</Button>
          <Button asChild variant="outline"><a href="/">Voltar ao início</a></Button>
        </div>
      </div>
    </main>
  )
}
