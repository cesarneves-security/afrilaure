import type { Metadata } from "next"
import { CareersPage } from "@/components/careers-page"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Recrutamento | Afrilaure",
  description: "Consulte as oportunidades abertas e os contactos oficiais de recrutamento do Instituto Politécnico Privado Afrilaure.",
}

export default function RecruitmentPage() {
  return (
    <>
      <CareersPage />
      <Footer />
    </>
  )
}
