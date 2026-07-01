import { GraduationCap, Facebook, Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8" />
              <span className="text-xl font-bold">AFRILAURE</span>
            </div>
            <p className="text-primary-foreground/80 text-pretty">
              Ensino Técnico Médio de Saúde. Formação de excelência em Enfermagem e Análises Clínicas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#inicio" className="hover:text-primary-foreground transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-primary-foreground transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-primary-foreground transition-colors">
                  Cursos
                </a>
              </li>
              <li>
                <a href="#precos" className="hover:text-primary-foreground transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#transportes" className="hover:text-primary-foreground transition-colors">
                  Transportes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Cursos</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Enfermagem</li>
              <li>Análises Clínicas</li>
              <li>Ensino Primário</li>
              <li>Ensino Secundário</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">923 335 126</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">colegioafrilaure@gmail.com</span>
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2025 Instituto Politécnico Privado AFRILAURE. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
