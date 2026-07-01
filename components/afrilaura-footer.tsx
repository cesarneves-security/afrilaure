import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AFRILAURE</h3>
                <p className="text-sm text-white/80">Instituto Politécnico</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Excelência em educação técnica e académica em Angola desde 2008.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="text-white/80 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#cursos" className="text-white/80 hover:text-white transition-colors">
                  Cursos
                </a>
              </li>
              <li>
                <a href="#matriculas" className="text-white/80 hover:text-white transition-colors">
                  Matrículas
                </a>
              </li>
              <li>
                <a href="#propinas" className="text-white/80 hover:text-white transition-colors">
                  Propinas
                </a>
              </li>
              <li>
                <a href="#transportes" className="text-white/80 hover:text-white transition-colors">
                  Transportes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Cursos</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Ensino Primário</li>
              <li>Ensino Secundário</li>
              <li>Curso de Enfermagem</li>
              <li>Análises Clínicas</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-white/80">923 335 126</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-white/80">colegioafrilaure@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-white/80">Rua 17 de Setembro nº 35, Viana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/80">
              © 2025 Instituto Politécnico Privado AFRILAURE. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
