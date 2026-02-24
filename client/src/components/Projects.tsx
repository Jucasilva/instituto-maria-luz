import { BookOpen, Heart, Users } from "lucide-react";

/**
 * Design Humanista - Projects Component
 * Layout: Seções alternadas (texto-esquerda/direita) criando ritmo visual
 * Tipografia: Poppins Bold para títulos, Inter para descrição
 * Cores: Verde Esperança e Terra Queimada como primárias
 * Animação: Fade-in ao scroll com parallax suave
 */
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Programa de Alfabetização",
      description:
        "Oferecemos aulas de alfabetização para adultos que nunca tiveram oportunidade de aprender a ler e escrever. Nossos educadores dedicados trabalham com paciência e amor, transformando vidas através da educação.",
      icon: BookOpen,
      color: "bg-primary",
      image:
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663349875959/CTZuBSLTVQrrBNZN.jpeg",
      reverse: false,
    },
    {
      id: 2,
      title: "Ajuda a Famílias em Enchentes",
      description:
        "Quando as chuvas chegam e as enchentes destroem casas e vidas, estamos lá. Distribuímos alimentos, roupas, cobertores e abrigo temporário para famílias que perderam tudo. Acreditamos que ninguém deve sofrer sozinho.",
      icon: Heart,
      color: "bg-secondary",
      image:
        "https://private-us-east-1.manuscdn.com/sessionFile/ljQC4ZGDLZbBpaF40s1fqs/sandbox/pEWoeEc9S42Pp0vjzMb3e5-img-3_1771866483000_na1fn_c2VjYW8tZW5jaGVudGVz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbGpRQzRaR0RMWmJCcGFGNDBzMWZxcy9zYW5kYm94L3BFV29lRWM5UzQyUHAwdmp6TWIzZTUtaW1nLTNfMTc3MTg2NjQ4MzAwMF9uYTFmbl9jMlZqWVc4dFpXNWphR1Z1ZEdWei5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=b8WZCAnFpAE31QC7GAOGubdkBRt-yq0FFfKTwkUjJROujj4COxh98PDookLPChtWSru0JdeVgPKJfPk7KmFjfNeoL0cecGUN0p4bMzoHYRnlyYOdnmNKFeZrPxDhoNrDh5w3uSIfb~hM7FVbHPFqMLL7xPf1zSXTediuvLkVqohuWmUtbvOj8KSPGiJfMB1o5puR81pjfoOz1kwlE~tsmYoERFQe8e7~i9n-2-SIJWih-tAlpkAtxPexxKaLO1sWdp~usRhJO8NfRXM96MBZcZdd6pzZ9v2PYG6qpeFVzchfu7QqbyxyxJfLW5mUH3IP4K~XnvZ1GQMahAqk~NMCSw__",
      reverse: true,
    },
    {
      id: 3,
      title: "Doações de Alimentos e Roupas",
      description:
        "Recebemos doações de alimentos, roupas e itens essenciais da comunidade. Distribuímos regularmente para famílias em situação de vulnerabilidade, garantindo que todos tenham o básico para viver com dignidade.",
      icon: Users,
      color: "bg-accent",
      image:
        "https://private-us-east-1.manuscdn.com/sessionFile/ljQC4ZGDLZbBpaF40s1fqs/sandbox/pEWoeEc9S42Pp0vjzMb3e5-img-2_1771866474000_na1fn_c2VjYW8tZG9hY29lcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbGpRQzRaR0RMWmJCcGFGNDBzMWZxcy9zYW5kYm94L3BFV29lRWM5UzQyUHAwdmp6TWIzZTUtaW1nLTJfMTc3MTg2NjQ3NDAwMF9uYTFmbl9jMlZqWVc4dFpHOWhZMjlsY3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qJam4vaEs71xXR3mIu2VBPMqF8eLVWM6m6dii6wm9kN955WOogeT9dOx44Q6-jqLftTI85JSCw~umVOdiQLPymme-PxTX1sUl5SFAf21Kkin8vCSsUfoDMxSqCAhRq1oRG37FENVy-3mP8--47r8xcSIdnRm1I2Bw5bdiNBhbYAXN3RT9WtQBUz8~aAe3ZSP~wGHOoN2x1AwPc-WSI4tYwsNjZIE0t0xbsyPnMy5ME3Vhl~8mtCK4tfga4cmLQHdcNbEhHs~wBqhIl4MFwfYuFsTYz0N5AmpIx-T2yz1EYOW0LPothrSyx2QKaCE9N8rrU2~4w2P20jFGNCHGomSRw__",
      reverse: false,
    },
  ];

  return (
    <section id="projetos" className="py-12 md:py-24 bg-white">
      <div className="container space-y-16 md:space-y-24">
        {/* Seção Título */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2
            className="text-3xl md:text-5xl font-bold text-foreground"
            style={{ fontFamily: "Poppins" }}
          >
            Nossos Projetos
          </h2>
          <p className="text-lg text-muted-foreground" style={{ fontFamily: "Inter" }}>
            Conheça as iniciativas que transformam vidas e comunidades
          </p>
        </div>

        {/* Projetos */}
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <div
              key={project.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                project.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Conteúdo */}
              <div
                className={`flex flex-col justify-center space-y-6 ${
                  project.reverse ? "md:order-2" : ""
                } animate-in fade-in slide-in-from-left-8 duration-700`}
              >
                <div className="flex items-center gap-4">
                  <div className={`${project.color} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-foreground"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {project.title}
                  </h3>
                </div>
                <p
                  className="text-base md:text-lg text-muted-foreground leading-relaxed"
                  style={{ fontFamily: "Inter" }}
                >
                  {project.description}
                </p>
              </div>

              {/* Imagem */}
              <div
                className={`relative h-80 md:h-96 ${
                  project.reverse ? "md:order-1" : ""
                } animate-in fade-in slide-in-from-right-8 duration-700 delay-200`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
