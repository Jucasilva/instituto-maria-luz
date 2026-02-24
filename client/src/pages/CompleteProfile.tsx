import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

/**
 * Página "Completar Perfil" - Instituto Maria Luz
 * Após verificação do código, o usuário completa seu perfil com o nome
 */
export default function CompleteProfile() {
  const [, setLocation] = useLocation();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Por favor, digite seu nome");
      return;
    }

    setLoading(true);

    try {
      // Aqui você faria a chamada para salvar o nome no banco de dados
      // await trpc.auth.updateProfile.useMutation({ name });

      // Por enquanto, salvamos no localStorage como exemplo
      localStorage.setItem("userName", name);

      toast.success("Perfil completado com sucesso!");

      // Redireciona para home após 1 segundo
      setTimeout(() => {
        setLocation("/");
      }, 1000);
    } catch (error) {
      toast.error("Erro ao completar perfil. Tente novamente.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-white" style={{ fontFamily: "Poppins" }}>
                ML
              </span>
            </div>
          </div>
          <h1
            className="text-3xl font-bold text-foreground"
            style={{ fontFamily: "Poppins" }}
          >
            Bem-vindo!
          </h1>
          <p className="text-muted-foreground">
            Complete seu perfil para continuar
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-foreground"
            >
              Seu Nome Completo
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Ex: João Silva"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              className="h-12 text-base"
              autoFocus
            />
            <p className="text-xs text-muted-foreground">
              Este nome será exibido em seu perfil
            </p>
          </div>

          <Button
            type="submit"
            disabled={loading || !name.trim()}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold text-base"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Salvando...
              </>
            ) : (
              "Continuar"
            )}
          </Button>

          <div className="text-center text-sm text-muted-foreground">
            <p>Você poderá alterar seu nome depois nas configurações de perfil</p>
          </div>
        </form>

        {/* Info Box */}
        <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            ✅ Seu cadastro foi verificado com sucesso!
          </p>
        </div>
      </div>
    </div>
  );
}
