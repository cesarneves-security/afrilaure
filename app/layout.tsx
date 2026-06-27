import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Afrilaure - Escola Técnica de Excelência",
  description:
    "Escola Técnica Afrilaure - Formação em Informática e Electrónica em Viana, Angola",
  generator: "Cesár Neves",

  icons: {
    icon: "/logotipoafrilaure.png",
    apple: "/logotipoafrilaure.png"
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
