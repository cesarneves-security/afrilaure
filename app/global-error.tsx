'use client'

import { useEffect } from "react"

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[v0] Erro global da aplicação:", error)
  }, [error])

  return (
    <html lang="pt">
      <body>
        <main style={{ display: "grid", minHeight: "100vh", placeItems: "center", padding: "2rem", fontFamily: "system-ui", textAlign: "center" }}>
          <div>
            <h1>Ocorreu um erro inesperado</h1>
            <p>Actualize a página para tentar novamente.</p>
            <button onClick={() => reset()} style={{ cursor: "pointer", padding: "0.7rem 1rem" }}>Tentar novamente</button>
          </div>
        </main>
      </body>
    </html>
  )
}
