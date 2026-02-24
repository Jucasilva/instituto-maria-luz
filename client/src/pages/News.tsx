import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Newspaper } from "lucide-react";

/**
 * Página "Notícias e Agenda" - Instituto Maria Luz
 * Apresenta últimas ações, próximos eventos e campanhas
 */
export default function News() {
  const news = [
    {
      id: 1,
      title: "Mais de 500 pessoas alfabetizadas em 2024",
      description:
        "O Instituto Maria Luz comemora a marca de 500 pessoas alfabetizadas ao longo de 2024. Um ano de muito trabalho, dedicação e transformação.",
      date: "15 de Fevereiro de 2025",
      category: "Sucesso",
      image: "📚",
    },
    {
      id: 2,
      title: "Campanha de Doações para Famílias Afetadas por Enchentes",
      description:
        "Iniciamos uma campanha urgente para ajudar as famílias atingidas pelas chuvas em Nova Iguaçu. Sua doação faz diferença!",
      date: "10 de Fevereiro de 2025",
      category: "Campanha",
      image: "🌊",
    },
    {
      id: 3,
      title: "Novo Programa de Voluntariado Lançado",
      description:
        "Estamos recrutando voluntários para nossas atividades de educação, logística e eventos. Junte-se a nós!",
      date: "5 de Fevereiro de 2025",
      category: "Oportunidade",
      image: "🤝",
    },
    {
      id: 4,
      title: "Parceria com Escola Local Amplia Alcance",
      description:
        "Firmamos parceria com a Escola Municipal para expandir nossos programas de alfabetização e apoio comunitário.",
      date: "28 de Janeiro de 2025",
      category: "Parceria",
      image: "🏫",
    },
  ];

  const events = [
    {
      id: 1,
      title: "Aula de Alfabetização - Turma Matutina",
      date: "Seg-Sex",
      time: "8h às 10h",
      location: "Rua Estela Pinto, 264",
      participants: "15-20 pessoas",
      icon: "📚",
    },
    {
      id: 2,
      title: "Aula de Alfabetização - Turma Noturna",
      date: "Seg-Sex",
      time: "18h às 20h",
      location: "Rua Estela Pinto, 264",
      participants: "15-20 pessoas",
      icon: "📚",
    },
    {
      id: 3,
      title: "Distribuição de Alimentos",
      date: "Sábado",
      time: "9h às 12h",
      location: "Rua Estela Pinto, 264",
      participants: "Aberto à comunidade",
      icon: "🍽️",
    },
    {
      id: 4,
      title: "Reunião de Voluntários",
      date: "Primeira Quarta do Mês",
      time: "19h às 20h30",
      location: "Rua Estela Pinto, 264",
      participants: "Voluntários",
      icon: "🤝",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Sucesso":
        return "bg-green-100 text-green-800";
      case "Campanha":
        return "bg-red-100 text-red-800";
      case "Oportunidade":
        return "bg-blue-100 text-blue-800";
      case "Parceria":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
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
            Notícias e Agenda
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fique atualizado sobre nossas ações, eventos e campanhas
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-24">
        <div className="container space-y-16">
          {/* Notícias */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Newspaper className="w-8 h-8 text-primary" />
              <h2
                className="text-3xl font-bold text-foreground"
                style={{ fontFamily: "Poppins" }}
              >
                Últimas Notícias
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {news.map((item) => (
                <Card
                  key={item.id}
                  className="p-6 hover:shadow-lg transition-shadow space-y-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-4xl">{item.image}</div>
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <h3
                      className="text-xl font-bold text-foreground"
                      style={{ fontFamily: "Poppins" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Agenda */}
          <div className="space-y-8">
            <h2
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "Poppins" }}
            >
              Próximos Eventos e Atividades Regulares
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event) => (
                <Card
                  key={event.id}
                  className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-lg transition-shadow space-y-4 border-l-4 border-primary"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className="text-xl font-bold text-foreground"
                        style={{ fontFamily: "Poppins" }}
                      >
                        {event.title}
                      </h3>
                    </div>
                    <div className="text-3xl">{event.icon}</div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">
                        <strong>{event.date}</strong> às {event.time}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">{event.location}</span>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Users className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">{event.participants}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Campanhas em Andamento */}
          <div className="space-y-8">
            <h2
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "Poppins" }}
            >
              Campanhas em Andamento
            </h2>

            <div className="grid grid-cols-1 gap-6">
              <Card className="p-8 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">🌊</div>
                  <h3
                    className="text-2xl font-bold text-red-900"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Campanha de Emergência - Enchentes
                  </h3>
                </div>
                <p className="text-red-800">
                  Famílias de Nova Iguaçu foram afetadas pelas chuvas intensas. Estamos
                  arrecadando alimentos, roupas e itens de higiene para ajudar. Sua doação
                  é urgente e essencial!
                </p>
                <div className="flex gap-4">
                  <div className="text-sm text-red-800">
                    <strong>Meta:</strong> R$ 5.000
                  </div>
                  <div className="text-sm text-red-800">
                    <strong>Arrecadado:</strong> R$ 2.350 (47%)
                  </div>
                </div>
                <div className="w-full bg-red-200 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full transition-all"
                    style={{ width: "47%" }}
                  ></div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">📚</div>
                  <h3
                    className="text-2xl font-bold text-blue-900"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Campanha de Materiais Escolares
                  </h3>
                </div>
                <p className="text-blue-800">
                  Precisamos de livros, cadernos, lápis e outros materiais escolares para
                  nossas aulas de alfabetização. Você pode contribuir com doações ou
                  voluntariado!
                </p>
                <div className="flex gap-4">
                  <div className="text-sm text-blue-800">
                    <strong>Meta:</strong> 500 itens
                  </div>
                  <div className="text-sm text-blue-800">
                    <strong>Recebido:</strong> 280 itens (56%)
                  </div>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{ width: "56%" }}
                  ></div>
                </div>
              </Card>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 md:p-12 rounded-2xl text-center space-y-6">
            <h2
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "Poppins" }}
            >
              Receba Nossas Notícias
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Inscreva-se em nossa newsletter para receber atualizações sobre nossas
              atividades, eventos e campanhas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground"
              />
              <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors">
                Inscrever
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
