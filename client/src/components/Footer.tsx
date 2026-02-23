import { Heart } from "lucide-react";

/**
 * Design Humanista - Footer Component
 * Rodapé com informações da ONG e links
 * Tipografia: Inter para conteúdo
 * Cores: Verde Esperança como primária
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg" style={{ fontFamily: "Poppins" }}>
              Instituto Maria Luz
            </h3>
            <p className="text-sm text-primary-foreground/80" style={{ fontFamily: "Inter" }}>
              Educação para um mundo melhor. Transformando vidas através da alfabetização e apoio
              comunitário.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg" style={{ fontFamily: "Poppins" }}>
              Links Rápidos
            </h3>
            <ul className="space-y-2 text-sm" style={{ fontFamily: "Inter" }}>
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-white transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#visita" className="hover:text-white transition-colors">
                  Nossa Visita
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg" style={{ fontFamily: "Poppins" }}>
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/institutomarialuz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/80" style={{ fontFamily: "Inter" }}>
              &copy; {currentYear} Instituto Maria Luz. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 fill-current" />
              <span>para transformar vidas</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
