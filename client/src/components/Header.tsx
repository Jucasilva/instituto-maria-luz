import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, User } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";

/**
 * Design Humanista - Header Component
 * Tipografia: Poppins Bold para logo, Inter Regular para nav
 * Cores: Verde Esperança (#2D7A4A) como primária
 * Layout: Assimétrico com logo à esquerda, nav à direita
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [, setLocation] = useLocation();
  const { user, logout } = useAuth();
  const logoutMutation = trpc.auth.logout.useMutation();

  const navItems = [
    { label: "Início", href: "/" },
    { label: "Como Ajudar", href: "/como-ajudar" },
    { label: "Quem Somos", href: "/quem-somos" },
    { label: "Notícias", href: "/noticias" },
  ];

  const handleLogout = async () => {
    await logoutMutation.mutateAsync();
    logout();
    setLocation("/");
    setIsProfileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setLocation("/")}
        >
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
          <div className="flex items-center gap-3">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <User size={18} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    Olá, {user.name || "Usuário"}
                  </span>
                </button>

                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-border rounded-lg shadow-lg z-50">
                    <div className="p-4 border-b border-border">
                      <p className="text-sm font-semibold text-foreground">{user.name || "Usuário"}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors text-left"
                    >
                      <LogOut size={16} />
                      Sair
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button
                  variant="outline"
                  onClick={() => setLocation("/login")}
                >
                  Login
                </Button>
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => setLocation("/como-ajudar")}
                >
                  Ajude-nos
                </Button>
              </>
            )}
          </div>
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
              {user ? (
                <>
                  <div className="py-3 px-4 bg-primary/10 rounded-lg">
                    <p className="text-sm font-semibold text-foreground">Olá, {user.name || "Usuário"}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <Button 
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                  >
                    <LogOut size={16} className="mr-2" />
                    Sair
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setLocation("/login");
                      setIsOpen(false);
                    }}
                  >
                    Login
                  </Button>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => {
                      setLocation("/como-ajudar");
                      setIsOpen(false);
                    }}
                  >
                    Ajude-nos
                  </Button>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
