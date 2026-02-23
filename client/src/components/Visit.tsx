import { Card } from "@/components/ui/card";
import { Quote, Users } from "lucide-react";

/**
 * Design Humanista - Visit Component
 * Destaca o relato da visita com depoimento
 * Tipografia: Poppins Bold para título, Inter para depoimento
 * Cores: Azul Céu como primária
 * Layout: Assimétrico com quote à esquerda, imagem à direita
 */
export default function Visit() {
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

          {/* Imagem - Direita */}
          <div className="relative h-96 md:h-full min-h-96 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/ljQC4ZGDLZbBpaF40s1fqs/sandbox/pEWoeEc9S42Pp0vjzMb3e5-img-4_1771866475000_na1fn_YmFja2dyb3VuZC1wYXR0ZXJu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbGpRQzRaR0RMWmJCcGFGNDBzMWZxcy9zYW5kYm94L3BFV29lRWM5UzQyUHAwdmp6TWIzZTUtaW1nLTRfMTc3MTg2NjQ3NTAwMF9uYTFmbl9ZbUZqYTJkeWIzVnVaQzF3WVhSMFpYSnUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=g5YXdXuIBJjLPaByY6xMqh6WEU20slbGZelqqfH8tTMxiF6WOauBkUorLlsp0xUs90M3J7i1v7j1zGQGPr3nFG~9SOt8pcle2hkRpNCxX~aRNLjxosm-Ahve0buv4J~NJiARkAVqFh3eu1EEraZBvEGpczvMjdilyIG7SX~U9c-eX2v9O3lPcqKNyIDioiZJINPUStAy5Bv13VQ4ONz0yX0Vj4wQMzs~~DpbJy8bKVWH8gS-dT3WFAdikbmlO2oaaRCpsE5ounp9-0pGDpS6srmqHdDifwPVk4y8ySsKo3Ee-vgYLLdwLmYwR27kr2e2a9-igHlRDeNSlCZgbTQlpQ__"
              alt="Padrão decorativo"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
