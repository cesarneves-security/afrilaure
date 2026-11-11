import type { Metadata } from "next"
import { CareersPage } from "@/components/careers-page"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Recrutamento | Afrilaure",
  description: "Conheça as oportunidades profissionais e faça parte do Instituto Politécnico Privado Afrilaure.",
}

export default function RecruitmentPage() {
  return (
    <>
      <CareersPage />
      <Footer />
    </>
  )
}
