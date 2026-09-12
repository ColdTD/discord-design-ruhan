
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import ProcessTimeline from '@/components/ProcessTimeline';
import ExperiencesSection from '@/components/ExperiencesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

// Sample project data
const projects = [
  {
    title: "Conceito de Página para o Switch 2",
    description: "Testando conceitos de temas para uma página focada no Switch 2.",
    tags: ["UX Design", "UI Design", "Conceito", "Jogos"],
    imageUrl: "/lovable-uploads/9af65a33-8d1d-4b66-98ba-4da6d383df4b.png",
    figmaUrl: "https://www.figma.com/design/zDQGRrNyyFk4gl7FofGFlb/Untitled?node-id=0-1&t=OF8fxH6udJxJHkBV-1",
    presentationUrl: "https://www.figma.com/proto/zDQGRrNyyFk4gl7FofGFlb/Untitled?node-id=4-552&p=f&t=WldSX769t643I4FE-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A552",
    // Removed documentationUrl as requested
  },
  {
    title: "Conceito de Brand Board Discord",
    description: "Testando conceitos de Brand Board para o aplicativo Discord.",
    tags: ["UX Design", "UI Design", "Conceito", "Jogos"],
    imageUrl: "/lovable-uploads/ef3c6919-8d1f-4f03-9ac0-e87ee3eae89e.png",
    figmaUrl: "https://www.figma.com/design/KoMiwEEE8S6zMJSF4qzCTe/Discord-Brand-board?node-id=0-1&t=xV534pCufEcTyBRW-1",
    // No presentationUrl or documentationUrl as requested
  },
  {
    title: "Cozinha Ideal - Google UX Design",
    description: "Este projeto mostra um pouco do começo do meu aprendizado no curso de UX Design da Google.",
    tags: ["UX Design", "UI Design", "Google", "Estudo de caso"],
    imageUrl: "/lovable-uploads/11dbb27f-5a46-4d01-a096-ec474e29f999.png",
    figmaUrl: "https://www.figma.com/design/wF4rciki7vu4EbhAAj8QVo/Prot%C3%B3tipos?node-id=6-278&t=g5WiChDKfQzUOKg6-1",
    presentationUrl: "https://www.figma.com/proto/wF4rciki7vu4EbhAAj8QVo/Prot%C3%B3tipos?node-id=49-6&p=f&t=BTuxgo14fqoWR5RJ-1&scaling=scale-down&content-scaling=fixed&page-id=6%3A278&starting-point-node-id=49%3A139",
    documentationUrl: "https://docs.google.com/presentation/d/1yv5UolYlznhxeugmv8B-SUG3VmhKVLfOovOuMIZxYxA/edit#slide=id.ge4c37863e3_0_334",
  },
];

const Index: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className="bg-background min-h-screen">
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <Toaster />
      
      <main className={cn("transition-all duration-300", isSidebarOpen ? "lg:ml-64" : "lg:ml-20")}>
        <Hero />
        
        <section id="projects" className="py-20 container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Um pouco sobre meu começo em design</h2>
            <p className="text-muted-foreground max-w-2xl">
              Uma seleção de alguns dos meus projetos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={cn(
                  "opacity-0 transform translate-y-8", 
                  scrollY > 300 && "animate-fade-in"
                )} 
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </section>
        
        <section id="about" className="py-20 bg-discord-darker">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">Sobre Mim</h2>
                <p className="text-muted-foreground mb-4">
                  Suporte de TI, atuando desde 2021 com manutenção de computadores, redes, sistemas operacionais, microsoft 365/Office, gestão de projetos, sistemas de chamados, help-desk, atendimento ao cliente, controle de estoque e suporte administrativo.
                </p>
                <p className="text-muted-foreground">
                  <span className="text-discord-blurple font-medium">Adicionais:</span> Front-end, UX, Marketing digital, redes sociais e edição de vídeos.
                </p>
              </div>
              
              <div className="order-1 md:order-2 relative flex items-center justify-center group">
                {/* Background Glow */}
                <div className="absolute w-72 h-72 bg-discord-blurple rounded-full blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                
                {/* Neural Data Sculpture */}
                <div className="relative w-full aspect-square max-w-[400px] flex items-center justify-center">
                  
                  {/* Central Core */}
                  <div className="z-20 w-32 h-32 rounded-3xl bg-discord-dark border border-foreground/10 shadow-[0_0_50px_rgba(88,101,242,0.3)] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <div className="w-12 h-12 text-discord-blurple">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    </div>
                  </div>

                  {/* Orbiting Node 1 */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-discord-lightgray/80 backdrop-blur-md border border-foreground/5 flex items-center justify-center shadow-xl group-hover:-translate-y-8 transition-transform duration-700 ease-out">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  </div>
                  
                  {/* Orbiting Node 2 */}
                  <div className="absolute bottom-10 right-0 w-20 h-20 rounded-full bg-discord-lightgray/80 backdrop-blur-md border border-foreground/5 flex flex-col items-center justify-center shadow-xl group-hover:translate-x-6 group-hover:translate-y-4 transition-transform duration-1000 ease-out">
                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Uptime</span>
                    <span className="text-foreground font-mono text-sm">99.9%</span>
                  </div>

                  {/* Orbiting Node 3 */}
                  <div className="absolute bottom-10 left-0 w-24 h-12 rounded-full bg-discord-lightgray/80 backdrop-blur-md border border-foreground/5 flex items-center justify-center gap-2 shadow-xl group-hover:-translate-x-8 group-hover:translate-y-4 transition-transform duration-500 ease-out">
                    <div className="flex space-x-0.5">
                      <div className="w-1 h-3 bg-discord-blurple rounded-full"></div>
                      <div className="w-1 h-5 bg-discord-blurple rounded-full"></div>
                      <div className="w-1 h-2 bg-discord-blurple rounded-full"></div>
                    </div>
                    <span className="text-[10px] text-foreground font-bold">ACTIVE</span>
                  </div>

                  {/* Decorative Orbits */}
                  <div className="absolute inset-0 border border-dashed border-foreground/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute inset-8 border border-foreground/5 rounded-full animate-[spin_12s_linear_infinite_reverse]"></div>
                  
                  {/* Holographic Particles */}
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-discord-blurple rounded-full animate-ping delay-75"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-foreground rounded-full animate-ping delay-300"></div>
                  <div className="absolute top-1/2 right-0 w-1 h-1 bg-discord-blurple rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <ExperiencesSection />
        <ProcessTimeline />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
