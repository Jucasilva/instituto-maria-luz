import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Apple, Chrome, ArrowLeft, Loader2 } from "lucide-react";
import { useLocation } from "wouter";
import { toast } from "sonner";

type LoginMethod = "email" | "phone" | "google" | "apple" | null;
type Step = "method" | "contact" | "verification";

/**
 * Login Page - Instituto Maria Luz
 * Suporta múltiplos métodos de autenticação:
 * - Email com código de verificação
 * - Telefone com código de verificação
 * - Google OAuth
 * - Apple OAuth
 */
export default function Login() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState<Step>("method");
  const [method, setMethod] = useState<LoginMethod>(null);
  const [contact, setContact] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMethodSelect = (selectedMethod: LoginMethod) => {
    if (selectedMethod === "google" || selectedMethod === "apple") {
      toast.info(`${selectedMethod === "google" ? "Google" : "Apple"} login em breve!`);
      return;
    }
    setMethod(selectedMethod);
    setStep("contact");
  };

  const handleSendCode = async () => {
    if (!contact || !method) return;

    setLoading(true);
    try {
      // Validar email ou telefone
      if (method === "email" && !contact.includes("@")) {
        toast.error("Email inválido");
        setLoading(false);
        return;
      }

      if (method === "phone" && contact.length < 10) {
        toast.error("Telefone inválido");
        setLoading(false);
        return;
      }

      // Simular envio de código (em produção, chamar API)
      console.log(`Código enviado para ${method}: ${contact}`);
      toast.success(`Código enviado para ${contact}`);
      setStep("verification");
    } catch (error) {
      toast.error("Erro ao enviar código");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!code || code.length !== 6) {
      toast.error("Código deve ter 6 dígitos");
      return;
    }

    setLoading(true);
    try {
      // Simular verificação de código (em produção, chamar API)
      console.log(`Verificando código: ${code}`);
      toast.success("Login realizado com sucesso!");
      
      // Redirecionar para home após 1 segundo
      setTimeout(() => {
        setLocation("/");
      }, 1000);
    } catch (error) {
      toast.error("Código inválido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 mx-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Voltar</span>
          </button>

          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg" style={{ fontFamily: "Poppins" }}>
                ML
              </span>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-2" style={{ fontFamily: "Poppins" }}>
            Bem-vindo
          </h1>
          <p className="text-muted-foreground" style={{ fontFamily: "Inter" }}>
            Instituto Maria Luz
          </p>
        </div>

        {/* Step 1: Escolher método */}
        {step === "method" && (
          <Card className="p-8 space-y-4">
            <div className="space-y-3">
              <Button
                onClick={() => handleMethodSelect("google")}
                variant="outline"
                className="w-full h-12 border-2 hover:border-primary hover:bg-primary/5 transition-all"
              >
                <Chrome className="w-5 h-5 mr-2" />
                Continuar com Google
              </Button>

              <Button
                onClick={() => handleMethodSelect("apple")}
                variant="outline"
                className="w-full h-12 border-2 hover:border-primary hover:bg-primary/5 transition-all"
              >
                <Apple className="w-5 h-5 mr-2" />
                Continuar com Apple
              </Button>

              <Button
                onClick={() => handleMethodSelect("email")}
                variant="outline"
                className="w-full h-12 border-2 hover:border-primary hover:bg-primary/5 transition-all"
              >
                <Mail className="w-5 h-5 mr-2" />
                Continuar com Email
              </Button>

              <Button
                onClick={() => handleMethodSelect("phone")}
                variant="outline"
                className="w-full h-12 border-2 hover:border-primary hover:bg-primary/5 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Continuar com Telefone
              </Button>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-muted-foreground">ou</span>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground" style={{ fontFamily: "Inter" }}>
              Ao continuar, você concorda com nossos Termos de Serviço e Política de Privacidade
            </p>
          </Card>
        )}

        {/* Step 2: Inserir email/telefone */}
        {step === "contact" && (
          <Card className="p-8 space-y-6">
            <button
              onClick={() => {
                setStep("method");
                setMethod(null);
                setContact("");
              }}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Voltar</span>
            </button>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "Poppins" }}>
                {method === "email" ? "Login com Email" : "Login com Telefone"}
              </h2>
              <p className="text-muted-foreground text-sm" style={{ fontFamily: "Inter" }}>
                Digite seu {method === "email" ? "email" : "número de telefone"} para continuar
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "Inter" }}>
                  {method === "email" ? "Email" : "Telefone"}
                </label>
                <input
                  type={method === "email" ? "email" : "tel"}
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder={
                    method === "email"
                      ? "seu@email.com"
                      : "(21) 99999-9999"
                  }
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  disabled={loading}
                />
              </div>

              <Button
                onClick={handleSendCode}
                disabled={!contact || loading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Código"
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Você receberá um código de 6 dígitos
              </p>
            </div>
          </Card>
        )}

        {/* Step 3: Verificar código */}
        {step === "verification" && (
          <Card className="p-8 space-y-6">
            <button
              onClick={() => {
                setStep("contact");
                setCode("");
              }}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Voltar</span>
            </button>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "Poppins" }}>
                Código de Verificação
              </h2>
              <p className="text-muted-foreground text-sm" style={{ fontFamily: "Inter" }}>
                Enviamos um código para {contact}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "Inter" }}>
                  Código (6 dígitos)
                </label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  maxLength={6}
                  placeholder="000000"
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-center text-2xl tracking-widest font-mono"
                  disabled={loading}
                />
              </div>

              <Button
                onClick={handleVerifyCode}
                disabled={code.length !== 6 || loading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Verificando...
                  </>
                ) : (
                  "Verificar Código"
                )}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="w-full text-xs"
                onClick={() => {
                  toast.info("Novo código enviado!");
                  setCode("");
                }}
              >
                Reenviar Código
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
