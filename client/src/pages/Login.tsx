import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Apple, Chrome, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Login() {
  const [, setLocation] = useLocation();
  const [loginMethod, setLoginMethod] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleGoogleLogin = () => {
    console.log("Login com Google");
  };

  const handleAppleLogin = () => {
    console.log("Login com Apple");
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login com Email:", email);
  };

  const handlePhoneLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login com Telefone:", phone);
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

        {!loginMethod ? (
          <Card className="p-8 space-y-4">
            <div className="space-y-3">
              <Button
                onClick={handleGoogleLogin}
                variant="outline"
                className="w-full h-12 border-2 hover:border-primary hover:bg-primary/5 transition-all"
              >
                <Chrome className="w-5 h-5 mr-2" />
                Continuar com Google
              </Button>

              <Button
                onClick={handleAppleLogin}
                variant="outline"
                className="w-full h-12 border-2 hover:border-primary hover:bg-primary/5 transition-all"
              >
                <Apple className="w-5 h-5 mr-2" />
                Continuar com Apple
              </Button>

              <Button
                onClick={() => setLoginMethod("email")}
                variant="outline"
                className="w-full h-12 border-2 hover:border-primary hover:bg-primary/5 transition-all"
              >
                <Mail className="w-5 h-5 mr-2" />
                Continuar com Email
              </Button>

              <Button
                onClick={() => setLoginMethod("phone")}
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
        ) : loginMethod === "email" ? (
          <Card className="p-8 space-y-6">
            <button
              onClick={() => setLoginMethod(null)}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Voltar</span>
            </button>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "Poppins" }}>
                Login com Email
              </h2>
              <p className="text-muted-foreground text-sm" style={{ fontFamily: "Inter" }}>
                Digite seu email para continuar
              </p>
            </div>

            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "Inter" }}>
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12">
                Continuar
              </Button>
            </form>
          </Card>
        ) : loginMethod === "phone" ? (
          <Card className="p-8 space-y-6">
            <button
              onClick={() => setLoginMethod(null)}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Voltar</span>
            </button>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "Poppins" }}>
                Login com Telefone
              </h2>
              <p className="text-muted-foreground text-sm" style={{ fontFamily: "Inter" }}>
                Digite seu número de telefone para continuar
              </p>
            </div>

            <form onSubmit={handlePhoneLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "Inter" }}>
                  Número de Telefone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(21) 99999-9999"
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12">
                Continuar
              </Button>
            </form>
          </Card>
        ) : null}
      </div>
    </div>
  );
}
