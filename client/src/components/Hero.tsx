import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Design Humanista - Hero Component
 * Layout assimétrico: imagem à direita, texto à esquerda
 * Tipografia: Poppins Bold para título (display), Inter para descrição
 * Cores: Verde Esperança como primária, com fundo Bege Natural
 * Animação: Fade-in ao carregar com parallax suave
 */
export default function Hero() {
  const [, setLocation] = useLocation();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projetos");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative py-12 md:py-24 bg-background overflow-hidden"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Texto - Esquerda */}
          <div className="flex flex-col justify-center space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="space-y-4">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                style={{ fontFamily: "Poppins" }}
              >
                Educação para um{" "}
                <span className="text-primary">mundo melhor</span>
              </h1>
              <p
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                style={{ fontFamily: "Inter" }}
              >
                O Instituto Maria Luz acredita que a educação transforma vidas.
                Trabalhamos para alfabetizar pessoas adultas e apoiar famílias
                que perderam tudo em enchentes, oferecendo esperança e
                oportunidades.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 flex-wrap">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                onClick={() => setLocation("/como-ajudar")}
              >
                <Heart className="mr-2 w-5 h-5" />
                Quero Doar
              </Button>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground group"
                onClick={() => setLocation("/como-ajudar#voluntario")}
              >
                <Users className="mr-2 w-5 h-5" />
                Ser Voluntário
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
                onClick={scrollToProjects}
              >
                Conhecer Projetos
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border mt-8">
              <div className="space-y-2">
                <p
                  className="text-3xl md:text-4xl font-bold text-primary"
                  style={{ fontFamily: "Poppins" }}
                >
                  +500
                </p>
                <p className="text-sm text-muted-foreground">Pessoas alfabetizadas</p>
              </div>
              <div className="space-y-2">
                <p
                  className="text-3xl md:text-4xl font-bold text-accent"
                  style={{ fontFamily: "Poppins" }}
                >
                  +1000
                </p>
                <p className="text-sm text-muted-foreground">Famílias ajudadas</p>
              </div>
            </div>
          </div>

          {/* Imagem - Direita */}
          <div className="relative h-96 md:h-full min-h-96 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/ljQC4ZGDLZbBpaF40s1fqs/sandbox/jUaiX63HmZ8nirEsMZ3oTq-img-1_1771937720000_na1fn_aGVyby1oYW5kcy13YWxs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbGpRQzRaR0RMWmJCcGFGNDBzMWZxcy9zYW5kYm94L2pVYWlYNjNIbVo4bmlyRXNNWjNvVHEtaW1nLTFfMTc3MTkzNzcyMDAwMF9uYTFmbl9hR1Z5Ynkxb1lXNWtjeTEzWVd4cy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rJdVqSH5Zft22qlIxJ1ErvWZh9Nb65c1mDUC-HEHJdmI1g6F-UUmqCYpxnXZQoGifbQ6DsNKoI~tMEK9LwghGo-L9wxHLiz~OofODcezslMwU8Mv3siQdnwycVM5MsPvDsMrRUam2pSVa7Rdntu3ezDUv0RJRQNX5065TVjECpw7VtMpaO~I35x4zJ3LHnIbYRH2tObvThHdARSMp9M8BHZTEwVwuSf2Bc8v7KkKRemku6Zw21ntYUGRQCK2kDvck7GIWQxYRs9hI1ofY2Y2hSHg2XT8GMo8clEIjokQfv82Eo0ejEVReleTFBU-XPYpmrheQy9zGqZou4wLUMBQPA__"
              alt="Instituto Maria Luz - Duas Mãos Coloridas na Parede"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl hidden"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl hidden"></div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24 text-background"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q300,100 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="currentColor"
        ></path>
      </svg>
    </section>
  );
}
