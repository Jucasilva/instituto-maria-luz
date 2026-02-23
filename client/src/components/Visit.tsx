import { Card } from "@/components/ui/card";
import { Quote, Users } from "lucide-react";
import ImageCarousel from "./ImageCarousel";

/**
 * Design Humanista - Visit Component
 * Destaca o relato da visita com depoimento e carrossel de fotos
 * Tipografia: Poppins Bold para título, Inter para depoimento
 * Cores: Azul Céu como primária
 * Layout: Assimétrico com quote à esquerda, carrossel à direita
 */
export default function Visit() {
  const visitImages = [
    {
      src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663349875959/ImPNhjceGkbBxQtt.jpeg",
      alt: "Visita ao Instituto Maria Luz - Sala de Aula",
    },
    {
      src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663349875959/BgSnrJeQMRNjPBmR.jpeg",
      alt: "Cartaz Instituto Maria Luz - Mão Colorida",
    },
    {
      src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663349875959/yLnSGrVxJNlpVTjn.jpeg",
      alt: "Cartaz Maravilhosas - Valores do Instituto",
    },
    {
      src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663349875959/MlOsQguixCvqyBrB.jpeg",
      alt: "Decoração Instituto Maria Luz - Árvore Verde",
    },
  ];

  return (
    <section id="visita" className="py-12 md:py-24 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Conteúdo - Esquerda */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="space-y-4">
              <h2
                className="text-3xl md:text-4xl font-bold text-foreground"
                style={{ fontFamily: "Poppins" }}
              >
                Nossa Visita
              </h2>
              <p className="text-lg text-muted-foreground" style={{ fontFamily: "Inter" }}>
                Tivemos o privilégio de visitar o Instituto Maria Luz e conhecer de perto o trabalho
                transformador realizado pela equipe.
              </p>
            </div>

            {/* Depoimento */}
            <Card className="bg-white border-l-4 border-l-primary p-6 md:p-8">
              <div className="flex gap-4">
                <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-4">
                  <p
                    className="text-base md:text-lg text-foreground leading-relaxed italic"
                    style={{ fontFamily: "Inter" }}
                  >
                    Fomos muito bem recebidos pela pessoa responsável pelo local. A dedicação, o amor
                    e a paixão pelo trabalho são evidentes em cada ação. O Instituto Maria Luz não é
                    apenas um lugar de aprendizado, é um espaço de esperança e transformação social.
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground" style={{ fontFamily: "Poppins" }}>
                        Visitante
                      </p>
                      <p className="text-sm text-muted-foreground">Instituto Maria Luz</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-lg border border-border">
                <p className="text-2xl font-bold text-primary" style={{ fontFamily: "Poppins" }}>
                  100%
                </p>
                <p className="text-sm text-muted-foreground">Dedicação</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-border">
                <p className="text-2xl font-bold text-secondary" style={{ fontFamily: "Poppins" }}>
                  ∞
                </p>
                <p className="text-sm text-muted-foreground">Amor ao próximo</p>
              </div>
            </div>
          </div>

          {/* Carrossel de Imagens - Direita */}
          <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <ImageCarousel images={visitImages} autoplay={true} interval={5000} />
          </div>
        </div>
      </div>
    </section>
  );
}
