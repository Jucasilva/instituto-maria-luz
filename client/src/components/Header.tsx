import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Design Humanista - Header Component
 * Tipografia: Poppins Bold para logo, Inter Regular para nav
 * Cores: Verde Esperança (#2D7A4A) como primária
 * Layout: Assimétrico com logo à esquerda, nav à direita
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Missão", href: "#missao" },
    { label: "Projetos", href: "#projetos" },
    { label: "Visita", href: "#visita" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">ML</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-bold text-lg text-foreground" style={{ fontFamily: "Poppins" }}>
              Maria Luz
            </h1>
            <p className="text-xs text-muted-foreground">Educação para um mundo melhor</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300"
              style={{ fontFamily: "Inter" }}
            >
              {item.label}
            </a>
          ))}
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => {
              const contactSection = document.getElementById("contato");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ajude-nos
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="absolute top-full left-0 right-0 bg-white border-b border-border md:hidden">
            <div className="container py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Ajude-nos
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
