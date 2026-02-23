import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Visit from "@/components/Visit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Home Page - Instituto Maria Luz
 * Design Humanista com tipografia expressiva
 * Seções: Hero, Projetos, Visita, Contato
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
