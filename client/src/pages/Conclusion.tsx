import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Página "Conclusão" - Instituto Maria Luz
 * Apresenta a conclusão sobre o trabalho do Instituto com foto e texto
 */
export default function Conclusion() {
  const [, setLocation] = useLocation();

  const conclusionText = `Mediante a entrevista realizada na ONG Instituto Maria Luz, percebi que através da Educação se pode realizar vários atendimentos a Comunidade.

Observei que a comunidade é muito carente, tendo um público voltado para muitas necessidades básicas, então, através da ONG as crianças podem ter reforço escolar, alfabetização, ajuda psicológica e lanche (merenda). Isso permite que seus pais tenham um pouco de segurança em relação ao seus filhos, pois, sabem que as crianças estão aprendendo há como ter um futuro significativo e consequentemente ficarão longe da violência e da vida ociosa. Dessa forma, seus pais podem se concentrar em seus trabalhos.

A professora Ana Lúcia, responsável e fundadora da ONG me passou que através de doações pode ajudar algumas famílias necessitada. Mas, precisam de ajudas, de parcerias, para assim, poderem ter muito mais êxitos nesse projeto. Nas aulas orientam os alunos a terem uma visão mais sustentável para suas casas e o Meio Ambiente, onde aprendem a reciclar o óleo de cozinha usado, fazendo assim um descarte correto e gerando renda para as despesas do Instituto (ONG).

Me senti muito feliz em poder conhecer um ambiente voltado para o BEM, para ajudar a quem necessita, tirando crianças das ruas e da violência. Pessoas que tem o coração muito grande em prol do próximo!`;

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container pt-6">
        <Button
          variant="ghost"
          onClick={() => setLocation("/")}
          className="gap-2 text-primary hover:text-primary/80"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container text-center space-y-6">
          <h1
            className="text-4xl md:text-5xl font-bold text-foreground"
            style={{ fontFamily: "Poppins" }}
          >
            Conclusão
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma reflexão sobre o impacto do Instituto Maria Luz na comunidade
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663349875959/QwXXVvWouTRCFsFI.jpeg"
                    alt="Instituto Maria Luz - Painel de Doações"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>

            {/* Text Side */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none text-foreground space-y-6">
                {conclusionText.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-base md:text-lg leading-relaxed text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Call to Action */}
              <div className="pt-6 space-y-3">
                <p className="text-sm text-muted-foreground font-semibold">
                  Quer fazer parte dessa história?
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => setLocation("/como-ajudar")}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    Como Ajudar
                  </Button>
                  <Button
                    onClick={() =>
                      window.open("https://wa.me/5521970699007", "_blank")
                    }
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    Fale Conosco
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-primary">+500</p>
              <p className="text-muted-foreground">Pessoas Alfabetizadas</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-primary">+1000</p>
              <p className="text-muted-foreground">Famílias Ajudadas</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-primary">∞</p>
              <p className="text-muted-foreground">Amor ao Próximo</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
