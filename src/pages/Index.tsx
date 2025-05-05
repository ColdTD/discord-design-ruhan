
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
            <h2 className="text-3xl font-bold mb-4">Projetos em Destaque</h2>
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
                  Sou um UX Designer apaixonado por criar experiências digitais que impactam positivamente a vida das pessoas. 
                  Com uma abordagem centrada no usuário e uma mentalidade criativa, trabalho para transformar 
                  conceitos complexos em interfaces intuitivas e experiências envolventes.
                </p>
                <p className="text-muted-foreground mb-4">
                  Minha jornada no design me ensinou a valorizar tanto o processo quanto o resultado final. 
                  Acredito que a melhor forma de resolver problemas é através de uma combinação de pesquisa 
                  rigorosa, empatia genuína com os usuários, e uma disposição para experimentar novas abordagens.
                </p>
                <p className="text-muted-foreground">
                  Quando não estou desenhando interfaces ou conduzindo pesquisas, estou sempre aprendendo sobre 
                  novas tendências e tecnologias que possam enriquecer meu trabalho como designer.
                </p>
              </div>
              
              <div className="order-1 md:order-2 relative">
                <div className="discord-card p-1 rotate-3 transform hover:rotate-0 transition-transform duration-300">
                  <div className="aspect-square bg-discord-dark rounded-md overflow-hidden">
                    <img 
                      src="https://source.unsplash.com/random/600x600/?designer,portrait" 
                      alt="Ruhan Davidson" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 discord-card p-4 -rotate-6 transform hover:rotate-0 transition-transform duration-300 max-w-[200px]">
                  <p className="text-sm font-medium text-discord-blurple">
                    "Bom design faz sentido. Ótimo design faz você sentir."
                  </p>
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
