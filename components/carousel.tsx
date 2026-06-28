"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const images = [
    {
      src: "/african-nursing-students-in-medical-training-class.jpg",
      alt: "Local de lazer escolar",
      title: "Jardim escolar",
    },
    {
      src: "/african-teacher-teaching-language-class-with-stude.jpg",
      alt: "Local de lazer escolar",
      title: "Jardim escolar",
    },
    {
      src: "/african-students-in-computer-class-learning-progra.jpg",
      alt: "Laboratório de análises clínicas",
      title: "Laboratório de Microscopia",
    },
    {
      src: "/african-students-learning-portuguese-language.jpg",
      alt: "Laboratório de análises clínicas",
      title: "Laboratório de Microscopia",
    },
    {
      src: "/african-students-studying-together-in-language-cen.jpg",
      alt: "Laboratório de Fisoterapia",
      title: "Fisoterapia Equipamento",
    },
    {
      src: "/african-students-working-with-electronics-and-circ.jpg",
      alt: "Laboratório de Fisoterapia",
      title: "Fisoterapia",
    },
    {
      src: "/african-students-collaborating-on-technology-proje.jpg",
      alt: "Trabalho em Equipa",
      title: "Laboratório de Microscopia",
    },
    {
      src: "/african-students-in-modern-computer-lab-with-monit.jpg",
      alt: "Laboratório Moderno",
      title: "Instalações Modernas",
    },
    {
      src: "/african-students-in-computer-lab-learning-technolo.jpg",
      alt: "Laboratório Moderno",
      title: "Instalações Modernas",
    },
    {
      src: "/african-students-presenting-technology-project.jpg",
      alt: "Apresentação de Projetos",
      title: "Apresentações Académicas",
    },
    {
      src: "/african-students-graduation-ceremony-celebrating-s.jpg",
      alt: "Cerimónia de Entrada",
      title: "Pátio escolar",
    },
  ]

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return
    const autoplay = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)

    return () => clearInterval(autoplay)
  }, [emblaApi])

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galeria de Fotos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conheça as nossas instalações e veja os nossos alunos em acção no Instituto Politécnico Privado AFRILAURE.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2">
                  <div className="relative overflow-hidden rounded-lg shadow-xl group">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                      <div className="p-6 w-full">
                        <h3 className="text-white font-bold text-xl mb-1">{image.title}</h3>
                        <p className="text-white/90 text-sm">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
