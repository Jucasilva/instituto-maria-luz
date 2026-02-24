import { Instagram, Linkedin, Mail, MapPin, Phone, Facebook, Heart } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Footer Component - Instituto Maria Luz
 * Rodapé completo com informações, links e redes sociais
 */
export default function Footer() {
  const [, setLocation] = useLocation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background pt-12 md:pt-24 pb-6">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold" style={{ fontFamily: "Poppins" }}>
                  ML
                </span>
              </div>
              <div>
                <h3 className="font-bold" style={{ fontFamily: "Poppins" }}>
                  Maria Luz
                </h3>
                <p className="text-xs text-background/70">Educação para um mundo melhor</p>
              </div>
            </div>
            <p className="text-sm text-background/80">
              Transformando vidas através da educação e solidariedade.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold" style={{ fontFamily: "Poppins" }}>
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => setLocation("/")}
                  className="text-background/80 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => setLocation("/como-ajudar")}
                  className="text-background/80 hover:text-white transition-colors"
                >
                  Como Ajudar
                </button>
              </li>
              <li>
                <a
                  href="#projetos"
                  className="text-background/80 hover:text-white transition-colors"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-background/80 hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold" style={{ fontFamily: "Poppins" }}>
              Contato
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <a
                  href="https://wa.me/5521970699007"
                  className="text-background/80 hover:text-white transition-colors"
                >
                  (21) 97069-9007
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <a
                  href="mailto:institutomarialuz@gmail.com"
                  className="text-background/80 hover:text-white transition-colors"
                >
                  institutomarialuz@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <span className="text-background/80">
                  Rua Estela Pinto, 264<br />
                  Ponto Chic, Nova Iguaçu - RJ
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-bold" style={{ fontFamily: "Poppins" }}>
              Siga-nos
            </h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/institutomarialuz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/20 hover:bg-primary/40 p-3 rounded-lg transition-colors"
                title="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://www.facebook.com/share/1KLbzVf9DH/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/20 hover:bg-primary/40 p-3 rounded-lg transition-colors"
                title="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://br.linkedin.com/in/instituto-maria-luz-ong-7b963a245?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/20 hover:bg-primary/40 p-3 rounded-lg transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 my-8"></div>

        {/* Bottom Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-sm text-background/70">
          <div>
            <p>© {currentYear} Instituto Maria Luz. Todos os direitos reservados.</p>
          </div>

          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>

          <div className="text-right flex items-center justify-end gap-2">
            <span>Feito com</span>
            <Heart className="w-4 h-4 fill-current text-primary" />
            <span>para transformar vidas</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
