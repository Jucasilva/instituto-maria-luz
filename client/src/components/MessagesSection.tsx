import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { MessageCircle, Send } from "lucide-react";

/**
 * Seção de Mensagens Públicas
 * Permite visitantes deixarem mensagens que aparecem publicamente
 */
export default function MessagesSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAll, setShowAll] = useState(false);

  // Fetch messages
  const { data: messages = [], refetch } = trpc.messages.list.useQuery();

  // Create message mutation
  const createMessageMutation = trpc.messages.create.useMutation({
    onSuccess: () => {
      toast.success("Mensagem enviada com sucesso!");
      setName("");
      setEmail("");
      setMessage("");
      refetch();
    },
    onError: (error) => {
      toast.error(error.message || "Erro ao enviar mensagem");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) {
      toast.error("Preencha todos os campos obrigatórios");
      return;
    }
    createMessageMutation.mutate({ name, email, message });
  };

  const displayedMessages = showAll ? messages : messages.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-accent/5">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <MessageCircle className="w-12 h-12 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Deixe sua Mensagem
            </h2>
            <p className="text-lg text-muted-foreground">
              Compartilhe sua experiência e inspire outras pessoas
            </p>
          </div>

          {/* Form */}
          <Card className="p-6 md:p-8 border-2 border-accent/20">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border-border"
                />
                <Input
                  placeholder="Seu email (opcional)"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-border"
                />
              </div>
              <Textarea
                placeholder="Sua mensagem (mínimo 100 caracteres)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                minLength={100}
                rows={5}
                className="border-border resize-none"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group"
                disabled={createMessageMutation.isPending}
              >
                <Send className="mr-2 w-5 h-5" />
                {createMessageMutation.isPending ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </Card>

          {/* Messages List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Mensagens Públicas ({messages.length})
            </h3>
            <div className="grid gap-4">
              {displayedMessages.length > 0 ? (
                displayedMessages.map((msg) => (
                  <Card key={msg.id} className="p-6 border-l-4 border-l-accent">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-foreground text-lg">
                          {msg.name}
                        </h4>
                        <time className="text-sm text-muted-foreground">
                          {new Date(msg.createdAt).toLocaleDateString("pt-BR")}
                        </time>
                      </div>
                      <p className="text-muted-foreground">{msg.message}</p>
                      {msg.email && (
                        <p className="text-sm text-muted-foreground">
                          Email: {msg.email}
                        </p>
                      )}
                    </div>
                  </Card>
                ))
              ) : (
                <Card className="p-6 text-center text-muted-foreground">
                  Nenhuma mensagem ainda. Seja o primeiro a deixar uma!
                </Card>
              )}
            </div>

            {/* Ver Mais Button */}
            {messages.length > 3 && !showAll && (
              <Button
                variant="outline"
                size="lg"
                className="w-full border-accent text-accent hover:bg-accent/5"
                onClick={() => setShowAll(true)}
              >
                Ver Mais Mensagens ({messages.length - 3})
              </Button>
            )}

            {showAll && messages.length > 3 && (
              <Button
                variant="outline"
                size="lg"
                className="w-full border-accent text-accent hover:bg-accent/5"
                onClick={() => setShowAll(false)}
              >
                Ver Menos
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
