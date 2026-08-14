import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Courses } from "@/components/courses"
import { EnsinoGeralSection } from "@/components/ensino-geral-section"
import { Documents } from "@/components/documents"
import { Pricing } from "@/components/pricing"
import { Transport } from "@/components/transport"
import { Activities } from "@/components/activities"
import { Carousel } from "@/components/carousel"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { InternalCommunicationHighlight } from "@/components/internal-communication-highlight"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <InternalCommunicationHighlight />
      <About />
      <Courses />
      <EnsinoGeralSection />
      <Documents />
      <Pricing />
      <Transport />
      <Activities />
      <Carousel />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
