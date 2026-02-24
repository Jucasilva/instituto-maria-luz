import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Users, ChevronRight } from "lucide-react";
import ImageCarousel from "./ImageCarousel";

/**
 * Design Humanista - Visit Component
 * Destaca depoimentos de diferentes profissionais sobre a educação do Instituto
 * Tipografia: Poppins Bold para título, Inter para depoimento
 * Cores: Azul Céu como primária
 * Layout: Assimétrico com depoimentos à esquerda, carrossel à direita
 */
export default function Visit() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);

  const testimonials = [
    {
      name: "João Victor",
      role: "Estudante",
      quote: "Fomos muito bem recebidos pela pessoa responsável pelo local. A dedicação, o amor e a paixão pelo trabalho são evidentes em cada ação. O Instituto Maria Luz não é apenas um lugar de aprendizado, é um espaço de esperança e transformação social.",
    },
    {
      name: "Maria Santos",
      role: "Professora",
      quote: "Trabalhar com o Instituto Maria Luz é uma honra. Ver a transformação nos olhos dos alunos quando aprendem a ler é indescritível. A educação de qualidade que oferecemos aqui muda vidas e abre portas para um futuro melhor.",
    },
    {
      name: "Carlos Oliveira",
      role: "Empresário",
      quote: "Como empresário, vejo no Instituto Maria Luz um exemplo de impacto social real. A educação oferecida aqui não apenas alfabetiza, mas empodera pessoas a alcançarem seus sonhos e contribuírem para a sociedade.",
    },
    {
      name: "Ana Silva",
      role: "Assistente Social",
      quote: "O trabalho realizado pelo Instituto vai muito além da alfabetização. Eles acolhem famílias inteiras, oferecem doações de alimentos e roupas, e criam um ambiente de dignidade e respeito. É transformação de verdade.",
    },
    {
      name: "Roberto Costa",
      role: "Voluntário",
      quote: "Quando comecei a voluntariar aqui, entendi o verdadeiro significado de fazer diferença. Cada pessoa que aprende a ler, cada família que recebe ajuda, é uma vida transformada. O Instituto Maria Luz é um farol de esperança.",
    },
    {
      name: "Lucia Ferreira",
      role: "Mãe de Aluno",
      quote: "Meu filho começou analfabeto e hoje está lendo e escrevendo. O Instituto não apenas educou meu filho, educou toda minha família. Somos eternamente gratos por essa oportunidade de transformação.",
    },
  ];

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

  const displayedTestimonials = showAllTestimonials ? testimonials : testimonials.slice(0, 3);
  const currentTestimonial = testimonials[selectedTestimonial];

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
                O que Dizem Sobre Nós
              </h2>
              <p className="text-lg text-muted-foreground" style={{ fontFamily: "Inter" }}>
                Depoimentos de pessoas que conhecem de perto o trabalho transformador do Instituto Maria Luz.
              </p>
            </div>

            {/* Depoimento Principal */}
            <Card className="bg-white border-l-4 border-l-primary p-6 md:p-8">
              <div className="flex gap-4">
                <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-4">
                  <p
                    className="text-base md:text-lg text-foreground leading-relaxed italic"
                    style={{ fontFamily: "Inter" }}
                  >
                    {currentTestimonial.quote}
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">
                        {currentTestimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground" style={{ fontFamily: "Poppins" }}>
                        {currentTestimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Navegação de Depoimentos */}
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2">
                {testimonials.slice(0, 3).map((testimonial, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTestimonial(index)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all ${
                      selectedTestimonial === index
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                    style={{ fontFamily: "Inter" }}
                  >
                    <div className="font-semibold">{testimonial.name.split(" ")[0]}</div>
                    <div className="text-xs opacity-80">{testimonial.role}</div>
                  </button>
                ))}
              </div>

              {!showAllTestimonials && testimonials.length > 3 && (
                <Button
                  onClick={() => setShowAllTestimonials(true)}
                  variant="outline"
                  className="w-full"
                >
                  Ver Mais Depoimentos ({testimonials.length - 3})
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              )}

              {showAllTestimonials && (
                <div className="space-y-3 mt-4 max-h-96 overflow-y-auto">
                  {testimonials.slice(3).map((testimonial, index) => (
                    <button
                      key={index + 3}
                      onClick={() => setSelectedTestimonial(index + 3)}
                      className={`w-full p-3 rounded-lg text-left transition-all ${
                        selectedTestimonial === index + 3
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground hover:bg-muted/80"
                      }`}
                    >
                      <div className="font-semibold" style={{ fontFamily: "Poppins" }}>
                        {testimonial.name}
                      </div>
                      <div className="text-xs opacity-80">{testimonial.role}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

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
