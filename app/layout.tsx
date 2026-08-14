import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Afrilaure | Ano Lectivo 2026/2027",
  description:
    "Instituto Politécnico Privado Afrilaure — Ensino Geral, Ensino Técnico Médio e Ensino Técnico Médio de Saúde em Viana, Angola.",
  generator: "Cesár Neves",

  icons: {
    icon: "/logotipoafrilaure.webp",
    apple: "/logotipoafrilaure.webp"
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className="bg-background">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
