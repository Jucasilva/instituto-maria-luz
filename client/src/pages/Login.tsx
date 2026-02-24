import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Apple, Chrome, ArrowLeft, Loader2 } from "lucide-react";
import { useLocation } from "wouter";
import { toast } from "sonner";

type LoginMethod = "email" | "phone" | "google" | "apple" | null;
type Step = "method" | "contact" | "verification";

// Lista de países com código de área
const COUNTRY_CODES = [
  { name: "Brasil", code: "+55", flag: "🇧🇷" },
  { name: "Estados Unidos", code: "+1", flag: "🇺🇸" },
  { name: "Portugal", code: "+351", flag: "🇵🇹" },
  { name: "Canadá", code: "+1", flag: "🇨🇦" },
  { name: "México", code: "+52", flag: "🇲🇽" },
  { name: "Argentina", code: "+54", flag: "🇦🇷" },
  { name: "Chile", code: "+56", flag: "🇨🇱" },
  { name: "Colômbia", code: "+57", flag: "🇨🇴" },
  { name: "Peru", code: "+51", flag: "🇵🇪" },
  { name: "Uruguai", code: "+598", flag: "🇺🇾" },
  { name: "Paraguai", code: "+595", flag: "🇵🇾" },
  { name: "Bolívia", code: "+591", flag: "🇧🇴" },
  { name: "Venezuela", code: "+58", flag: "🇻🇪" },
  { name: "Equador", code: "+593", flag: "🇪🇨" },
  { name: "Guiana", code: "+592", flag: "🇬🇾" },
  { name: "Suriname", code: "+597", flag: "🇸🇷" },
  { name: "Espanha", code: "+34", flag: "🇪🇸" },
  { name: "França", code: "+33", flag: "🇫🇷" },
  { name: "Alemanha", code: "+49", flag: "🇩🇪" },
  { name: "Itália", code: "+39", flag: "🇮🇹" },
  { name: "Reino Unido", code: "+44", flag: "🇬🇧" },
  { name: "Austrália", code: "+61", flag: "🇦🇺" },
  { name: "Japão", code: "+81", flag: "🇯🇵" },
  { name: "China", code: "+86", flag: "🇨🇳" },
  { name: "Índia", code: "+91", flag: "🇮🇳" },
];

/**
 * Login Page - Instituto Maria Luz
 * Suporta múltiplos métodos de autenticação:
 * - Email com código de verificação
 * - Telefone com código de verificação (com seletor de país)
 * - Google OAuth
 * - Apple OAuth
 */
export default function Login() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState<Step>("method");
  const [method, setMethod] = useState<LoginMethod>(null);
  const [contact, setContact] = useState("");
  const [countryCode, setCountryCode] = useState("+55");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

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
      const fullPhone = method === "phone" ? `${countryCode}${contact}` : contact;
      console.log(`Código enviado para ${method}: ${fullPhone}`);
      toast.success(`Código enviado para ${fullPhone}`);
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
      
      // Redirecionar para completar perfil após 1 segundo
      setTimeout(() => {
        setLocation("/complete-profile");
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
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">ML</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground" style={{ fontFamily: "Poppins" }}>
            Login
          </h1>
          <p className="text-muted-foreground mt-2" style={{ fontFamily: "Inter" }}>
            Instituto Maria Luz
          </p>
        </div>

        {/* Step 1: Escolher método */}
        {step === "method" && (
          <Card className="p-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: "Poppins" }}>
                Como você quer entrar?
              </h2>
              <p className="text-muted-foreground text-sm" style={{ fontFamily: "Inter" }}>
                Escolha seu método preferido de autenticação
              </p>
            </div>

            <div className="space-y-3">
              <Button
                onClick={() => handleMethodSelect("email")}
                variant="outline"
                className="w-full h-12 justify-start text-base"
              >
                <Mail className="w-5 h-5 mr-2" />
                Continuar com Email
              </Button>

              <Button
                onClick={() => handleMethodSelect("phone")}
                variant="outline"
                className="w-full h-12 justify-start text-base"
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
              {method === "phone" && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "Inter" }}>
                    País/Código de Área
                  </label>
                  <div className="relative">
                    <button
                      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary transition-colors bg-background text-left flex items-center justify-between"
                    >
                      <span>
                        {COUNTRY_CODES.find(c => c.code === countryCode)?.flag}{" "}
                        {countryCode}
                      </span>
                      <span className="text-muted-foreground">▼</span>
                    </button>

                    {showCountryDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-border rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                        {COUNTRY_CODES.map((country) => (
                          <button
                            key={country.code + country.name}
                            onClick={() => {
                              setCountryCode(country.code);
                              setShowCountryDropdown(false);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-primary/10 transition-colors border-b border-border last:border-b-0 flex items-center justify-between"
                          >
                            <span>
                              {country.flag} {country.name}
                            </span>
                            <span className="text-muted-foreground font-medium">{country.code}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "Inter" }}>
                  {method === "email" ? "Email" : "Telefone"}
                </label>
                <div className="flex gap-2">
                  {method === "phone" && (
                    <div className="flex items-center px-4 py-3 border-2 border-border rounded-lg bg-muted">
                      <span className="font-medium text-foreground">{countryCode}</span>
                    </div>
                  )}
                  <input
                    type={method === "email" ? "email" : "tel"}
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder={
                      method === "email"
                        ? "seu@email.com"
                        : "(21) 99999-9999"
                    }
                    className="flex-1 px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    disabled={loading}
                  />
                </div>
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
                Verificar Código
              </h2>
              <p className="text-muted-foreground text-sm" style={{ fontFamily: "Inter" }}>
                Insira o código de 6 dígitos que enviamos
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "Inter" }}>
                  Código de Verificação
                </label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  placeholder="000000"
                  maxLength={6}
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

              <p className="text-xs text-muted-foreground text-center">
                Não recebeu o código? Verifique sua pasta de spam
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
