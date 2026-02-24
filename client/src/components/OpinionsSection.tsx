import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, ChevronRight, Send } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

/**
 * OpinionsSection - Permite visitantes deixarem opiniões públicas
 * Exibe todas as opiniões aprovadas com opção de ver mais
 */
export default function OpinionsSection() {
  const [showForm, setShowForm] = useState(false);
  const [showAllOpinions, setShowAllOpinions] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    rating: 5,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch opiniões
  const { data: opinions = [], isLoading, refetch } = trpc.opinions.list.useQuery();
  const createOpinionMutation = trpc.opinions.create.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.comment.trim()) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    if (formData.comment.length < 10) {
      toast.error("O comentário deve ter pelo menos 10 caracteres");
      return;
    }

    setIsSubmitting(true);
    try {
      await createOpinionMutation.mutateAsync({
        name: formData.name,
        email: formData.email || undefined,
        comment: formData.comment,
        rating: formData.rating,
      });
      
      toast.success("Obrigado! Sua opinião foi publicada com sucesso!");
      setFormData({ name: "", email: "", comment: "", rating: 5 });
      setShowForm(false);
      refetch();
    } catch (error) {
      toast.error("Erro ao enviar opinião. Tente novamente.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const displayedOpinions = showAllOpinions ? opinions : opinions.slice(0, 3);

  return (
    <section id="opiniones" className="py-12 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              style={{ fontFamily: "Poppins" }}
            >
              Deixe sua Opinião
            </h2>
            <p className="text-lg text-muted-foreground" style={{ fontFamily: "Inter" }}>
              Sua opinião é importante para nós! Compartilhe sua experiência e ajude outras pessoas a conhecer nosso trabalho.
            </p>
          </div>

          {/* Formulário */}
          {showForm ? (
            <Card className="p-6 md:p-8 mb-8 border-2 border-primary/20">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nome *
                    </label>
                    <Input
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email (opcional)
                    </label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Sua Opinião *
                  </label>
                  <Textarea
                    placeholder="Compartilhe sua experiência com o Instituto Maria Luz..."
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    rows={5}
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Mínimo 10 caracteres
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Avaliação
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= formData.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted-foreground"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Enviando..." : "Publicar Opinião"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            </Card>
          ) : (
            <Button
              onClick={() => setShowForm(true)}
              size="lg"
              className="w-full mb-8"
            >
              Deixar uma Opinião
            </Button>
          )}

          {/* Opiniões */}
          {isLoading ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Carregando opiniões...</p>
            </div>
          ) : displayedOpinions.length === 0 ? (
            <Card className="p-8 text-center bg-muted/30">
              <p className="text-muted-foreground">
                Nenhuma opinião ainda. Seja o primeiro a compartilhar sua experiência!
              </p>
            </Card>
          ) : (
            <div className="space-y-4">
              {displayedOpinions.map((opinion) => (
                <Card key={opinion.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3
                        className="font-semibold text-foreground"
                        style={{ fontFamily: "Poppins" }}
                      >
                        {opinion.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {new Date(opinion.createdAt).toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= (opinion.rating || 5)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p
                    className="text-foreground leading-relaxed"
                    style={{ fontFamily: "Inter" }}
                  >
                    {opinion.comment}
                  </p>
                </Card>
              ))}

              {!showAllOpinions && opinions.length > 3 && (
                <Button
                  onClick={() => setShowAllOpinions(true)}
                  variant="outline"
                  className="w-full"
                >
                  Ver Mais Opiniões ({opinions.length - 3})
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
