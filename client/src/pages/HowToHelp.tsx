import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Package, Building2, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Página "Como Ajudar" - Instituto Maria Luz
 * Apresenta formas de ajudar: Doações PIX, Voluntariado, Doações Físicas, Parcerias
 */
export default function HowToHelp() {
  const [copiedPix, setCopiedPix] = useState(false);
  const pixKey = "21970699007"; // Chave PIX (telefone)

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopiedPix(true);
    toast.success("Chave PIX copiada!");
    setTimeout(() => setCopiedPix(false), 2000);
  };

  const handleWhatsAppDonation = () => {
    const message = "Olá! Gostaria de fazer uma doação para o Instituto Maria Luz. Como posso ajudar?";
    window.open(`https://wa.me/5521970699007?text=${encodeURIComponent(message)}`);
  };

  const handleVolunteerForm = () => {
    // Link para Google Forms (você precisa criar o formulário)
    window.open("https://forms.gle/seu-formulario-aqui", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container text-center space-y-6">
          <h1
            className="text-4xl md:text-5xl font-bold text-foreground"
            style={{ fontFamily: "Poppins" }}
          >
            Como Ajudar
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Existem várias formas de fazer a diferença na vida de pessoas e famílias.
            Escolha a melhor forma para você!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-24">
        <div className="container space-y-16">
          {/* 1. Doações PIX */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h2
                    className="text-3xl font-bold text-foreground"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Faça uma Doação
                  </h2>
                </div>
              </div>

              <p className="text-lg text-muted-foreground">
                Sua doação, por menor que seja, transforma vidas! Com R$50 você oferece
                material escolar para uma criança. Com R$100 você fornece alimentos para
                uma família por uma semana.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">💳 Chave PIX (Telefone)</h3>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-muted p-4 rounded-lg font-mono text-sm">
                      {pixKey}
                    </div>
                    <Button
                      onClick={handleCopyPix}
                      className="bg-primary hover:bg-primary/90"
                    >
                      {copiedPix ? (
                        <>
                          <Check className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                  <p className="text-sm text-muted-foreground">
                    ℹ️ <strong>PIX Instantâneo:</strong> Escaneie o QR code ou copie a chave PIX
                    e transfira qualquer valor pelo seu banco ou app de pagamento.
                  </p>
                </div>

                <Button
                  onClick={handleWhatsAppDonation}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  💬 Conversar pelo WhatsApp
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 rounded-2xl flex items-center justify-center min-h-96">
              <div className="text-center space-y-4">
                <div className="text-6xl">💝</div>
                <p className="text-muted-foreground">
                  QR Code do PIX será exibido aqui
                </p>
                <p className="text-sm text-muted-foreground">
                  (Integração com gerador de QR code)
                </p>
              </div>
            </div>
          </div>

          {/* 2. Seja Voluntário */}
          <div id="voluntario" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 p-8 rounded-2xl flex items-center justify-center min-h-96 order-2 md:order-1">
              <div className="text-center space-y-4">
                <div className="text-6xl">🤝</div>
                <p className="text-muted-foreground">
                  Sua dedicação faz a diferença!
                </p>
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h2
                    className="text-3xl font-bold text-foreground"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Seja Voluntário
                  </h2>
                </div>
              </div>

              <p className="text-lg text-muted-foreground">
                Procuramos pessoas apaixonadas por educação! Você pode ajudar como
                professor, auxiliar em atividades, organizar eventos ou contribuir
                com suas habilidades profissionais.
              </p>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Oportunidades:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✅ Professor de alfabetização</li>
                  <li>✅ Auxiliar de atividades</li>
                  <li>✅ Logística e distribuição</li>
                  <li>✅ Organização de eventos</li>
                  <li>✅ Consultoria profissional</li>
                </ul>
              </div>

              <Button
                onClick={handleVolunteerForm}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Preencher Formulário de Voluntariado
              </Button>
            </div>
          </div>

          {/* 3. Doe Alimentos e Roupas */}
          <Card className="p-8 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Package className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-orange-900"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Doações Físicas
                  </h3>
                </div>
                <p className="text-orange-800">
                  Você pode entregar pessoalmente alimentos, roupas e materiais escolares
                  em nosso endereço.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-orange-900">📍 Endereço</h4>
                <p className="text-sm text-orange-800">
                  Rua Estela Pinto, 264 - Casa 2<br />
                  Ponto Chic, Nova Iguaçu - RJ
                </p>
                <h4 className="font-semibold text-orange-900">⏰ Horário</h4>
                <p className="text-sm text-orange-800">
                  Seg-Sex: 8h às 17h<br />
                  Sab: 9h às 13h
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-orange-900">🛒 Mais Precisamos</h4>
                <ul className="text-sm text-orange-800 space-y-2">
                  <li>✓ Alimentos não-perecíveis</li>
                  <li>✓ Roupas limpas e em bom estado</li>
                  <li>✓ Materiais escolares</li>
                  <li>✓ Produtos de higiene</li>
                  <li>✓ Livros infantis</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* 4. Seja Parceiro */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2
                    className="text-3xl font-bold text-foreground"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Seja Parceiro
                  </h2>
                </div>
              </div>

              <p className="text-lg text-muted-foreground">
                Empresas, escolas, igrejas e organizações podem se tornar parceiras
                do Instituto Maria Luz e impactar positivamente a comunidade.
              </p>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Benefícios de Parcerias:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✅ Responsabilidade social corporativa</li>
                  <li>✅ Visibilidade da marca</li>
                  <li>✅ Engajamento de colaboradores</li>
                  <li>✅ Impacto social mensurável</li>
                  <li>✅ Benefícios fiscais</li>
                </ul>
              </div>

              <Button
                onClick={handleWhatsAppDonation}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                💼 Conversar sobre Parcerias
              </Button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl flex items-center justify-center min-h-96">
              <div className="text-center space-y-4">
                <div className="text-6xl">🤝</div>
                <p className="text-blue-900 font-semibold">
                  Juntos somos mais fortes!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container text-center space-y-6">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "Poppins" }}
          >
            Dúvidas? Entre em Contato!
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos sempre disponíveis para conversar sobre como você pode ajudar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsAppDonation}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              💬 WhatsApp
            </Button>
            <Button
              variant="outline"
              onClick={() => window.location.href = "mailto:contato@institutomarialuz.org.br"}
            >
              📧 E-mail
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
