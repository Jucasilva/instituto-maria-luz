import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Target, Lightbulb } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Página "Quem Somos" - Instituto Maria Luz
 * Apresenta a história, missão, visão, valores e transparência
 */
export default function AboutUs() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container text-center space-y-6">
          <h1
            className="text-4xl md:text-5xl font-bold text-foreground"
            style={{ fontFamily: "Poppins" }}
          >
            Quem Somos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça a história, missão e valores do Instituto Maria Luz
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-24">
        <div className="container space-y-16">
          {/* Nossa História */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2
                className="text-3xl font-bold text-foreground"
                style={{ fontFamily: "Poppins" }}
              >
                Nossa História
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O Instituto Maria Luz foi fundado com a missão de transformar vidas através da
                educação. Nasceu da convicção de que a educação é o caminho mais poderoso para
                criar oportunidades e dignidade.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Começamos com um pequeno grupo de voluntários dedicados a alfabetizar adultos
                na comunidade de Nova Iguaçu. Hoje, somos uma organização que impacta centenas
                de vidas, oferecendo não apenas educação, mas também apoio em momentos de crise,
                como as enchentes que assolam nossa região.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada pessoa que alfabetizamos, cada família que ajudamos, cada voluntário que
                se dedica à nossa causa é parte da nossa história de transformação.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 rounded-2xl flex items-center justify-center min-h-96">
              <div className="text-center space-y-4">
                <div className="text-6xl">📚</div>
                <p className="text-muted-foreground font-semibold">
                  Transformando vidas desde [ano de fundação]
                </p>
              </div>
            </div>
          </div>

          {/* Missão, Visão, Valores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3
                  className="text-2xl font-bold text-foreground"
                  style={{ fontFamily: "Poppins" }}
                >
                  Missão
                </h3>
              </div>
              <p className="text-muted-foreground">
                Transformar vidas através da educação, alfabetizando pessoas adultas e apoiando
                famílias em situação de vulnerabilidade, oferecendo esperança e oportunidades.
              </p>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <h3
                  className="text-2xl font-bold text-foreground"
                  style={{ fontFamily: "Poppins" }}
                >
                  Visão
                </h3>
              </div>
              <p className="text-muted-foreground">
                Um futuro onde todas as pessoas tenham acesso à educação de qualidade, onde a
                solidariedade seja a base da comunidade e onde ninguém seja deixado para trás.
              </p>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-orange-600" />
                </div>
                <h3
                  className="text-2xl font-bold text-foreground"
                  style={{ fontFamily: "Poppins" }}
                >
                  Valores
                </h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>❤️ <strong>Amor</strong> - Dedicação genuína</p>
                <p>🤝 <strong>Solidariedade</strong> - Apoio mútuo</p>
                <p>📚 <strong>Educação</strong> - Transformação</p>
                <p>✨ <strong>Dignidade</strong> - Respeito</p>
              </div>
            </Card>
          </div>

          {/* Equipe */}
          <div className="space-y-8">
            <h2
              className="text-3xl font-bold text-foreground text-center"
              style={{ fontFamily: "Poppins" }}
            >
              Nossa Equipe
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Pessoas dedicadas que trabalham dia a dia para transformar vidas
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team member placeholder */}
              <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto flex items-center justify-center">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground" style={{ fontFamily: "Poppins" }}>
                    Coordenador(a)
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Liderança e gestão do Instituto
                  </p>
                </div>
              </Card>

              <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto flex items-center justify-center">
                  <Users className="w-12 h-12 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground" style={{ fontFamily: "Poppins" }}>
                    Professores
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Educação e alfabetização
                  </p>
                </div>
              </Card>

              <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto flex items-center justify-center">
                  <Users className="w-12 h-12 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground" style={{ fontFamily: "Poppins" }}>
                    Voluntários
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Apoio em atividades
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Transparência */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 md:p-12 rounded-2xl space-y-6">
            <h2
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "Poppins" }}
            >
              Transparência
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-bold text-foreground">Informações Legais</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>CNPJ:</strong> XX.XXX.XXX/0001-XX</p>
                  <p><strong>Razão Social:</strong> Instituto Maria Luz</p>
                  <p><strong>Tipo:</strong> Organização Não Governamental (ONG)</p>
                  <p><strong>Fundação:</strong> [Ano de fundação]</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-foreground">Como Usamos Suas Doações</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>📚 50% - Educação e materiais escolares</p>
                  <p>🍽️ 30% - Alimentos e ajuda emergencial</p>
                  <p>👕 15% - Roupas e itens de higiene</p>
                  <p>⚙️ 5% - Operação e manutenção</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg space-y-4">
              <h4 className="font-bold text-foreground">Relatórios e Documentos</h4>
              <p className="text-muted-foreground">
                Todos os nossos relatórios financeiros e de impacto estão disponíveis para
                consulta. Acreditamos na transparência como base da confiança.
              </p>
              <div className="flex gap-4">
                <Button variant="outline">
                  📄 Relatório Financeiro 2024
                </Button>
                <Button variant="outline">
                  📊 Relatório de Impacto
                </Button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <h2
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "Poppins" }}
            >
              Quer Fazer Parte?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Junte-se a nós na missão de transformar vidas através da educação e solidariedade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setLocation("/como-ajudar")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Quero Ajudar
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=institutomarialuz@gmail.com", "_blank")}
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
