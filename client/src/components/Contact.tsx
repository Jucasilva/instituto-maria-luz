import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Instagram, Linkedin } from "lucide-react";

/**
 * Design Humanista - Contact Component
 * Seção de contato com informações e formulário
 * Tipografia: Poppins Bold para título, Inter para conteúdo
 * Cores: Verde Esperança como primária
 * Layout: Grid 2 colunas com informações à esquerda, formulário à direita
 */
export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(21) 97069-9007",
      href: "tel:+5521970699007",
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "Rua Estela Pinto, 264 - Casa 2, Ponto Chic",
      href: "#",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@institutomarialuz",
      href: "https://instagram.com/institutomarialuz",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Instituto Maria Luz",
      href: "#",
    },
  ];

  return (
    <section id="contato" className="py-12 md:py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Informações de Contato - Esquerda */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="space-y-4">
              <h2
                className="text-3xl md:text-4xl font-bold text-foreground"
                style={{ fontFamily: "Poppins" }}
              >
                Entre em Contato
              </h2>
              <p className="text-lg text-muted-foreground" style={{ fontFamily: "Inter" }}>
                Queremos ouvir você! Entre em contato conosco para saber mais sobre nossos projetos,
                fazer doações ou se voluntariar.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a key={index} href={info.href} className="block">
                    <Card className="bg-white p-4 hover:shadow-lg hover:border-primary transition-all duration-300 cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground" style={{ fontFamily: "Poppins" }}>
                            {info.label}
                          </p>
                          <p className="text-sm text-muted-foreground" style={{ fontFamily: "Inter" }}>
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Formulário - Direita */}
          <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <Card className="bg-white p-6 md:p-8 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "Inter" }}>
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "Inter" }}>
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "Inter" }}>
                    Assunto
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "Inter" }}>
                    Mensagem
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    rows={5}
                    placeholder="Sua mensagem aqui..."
                  ></textarea>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
