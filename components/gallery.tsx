export function Gallery() {
  const images = [
    {
      src: "/african-students-in-computer-class-learning-progra.webp",
      alt: "Aula de Informática",
    },
    {
      src: "/african-students-working-with-electronics-and-circ.webp",
      alt: "Laboratório de Electrónica",
    },
    {
      src: "/african-students-collaborating-on-technology-proje.webp",
      alt: "Trabalho em Equipa",
    },
    {
      src: "/african-students-in-modern-computer-lab-with-monit.webp",
      alt: "Laboratório de Informática",
    },
    {
      src: "/african-students-presenting-technology-project.webp",
      alt: "Apresentação de Projetos",
    },
    {
      src: "/african-students-graduation-ceremony-celebrating-s.webp",
      alt: "Cerimónia de Formatura",
    },
  ]

  return (
    <section id="galeria" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Galeria</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conheça as nossas instalações e veja os nossos alunos em acção.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold p-4">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
