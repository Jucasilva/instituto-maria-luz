import { useAuth } from "@/_core/hooks/useAuth";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Visit from "@/components/Visit";
import Contact from "@/components/Contact";
import OpinionsSection from "@/components/OpinionsSection";
import Footer from "@/components/Footer";

/**
 * Home Page - Instituto Maria Luz
 * Design Humanista com tipografia expressiva
 * Seções: Hero, Projetos, Visita, Contato
 * Integração com autenticação
 */
export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Visit />
        <OpinionsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
