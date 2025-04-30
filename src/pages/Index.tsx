
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

// Sample project data
const projects = [
  {
    title: "Redesign de App Financeiro",
    description: "Redesenho completo da experiência do usuário para um aplicativo de gestão financeira, focando em clareza visual e facilidade de uso.",
    tags: ["UX Design", "UI Design", "Pesquisa"],
    imageUrl: "https://source.unsplash.com/random/600x400/?finance,app",
  },
  {
    title: "Plataforma de Educação Online",
    description: "Criação de uma plataforma intuitiva para cursos online, com foco na jornada de aprendizagem e engajamento dos estudantes.",
    tags: ["Design de Produto", "Protótipos", "Testes A/B"],
    imageUrl: "https://source.unsplash.com/random/600x400/?education,online",
  },
  {
    title: "App de Bem-estar Mental",
    description: "Design de um aplicativo para meditação e controle de ansiedade, com interface calmante e fluxos de usuário simplificados.",
    tags: ["Design Inclusivo", "UI Design", "Acessibilidade"],
    imageUrl: "https://source.unsplash.com/random/600x400/?wellness,meditation",
  },
  {
    title: "Dashboard Corporativo",
    description: "Visualização de dados complexos em um dashboard intuitivo para tomada de decisões empresariais.",
    tags: ["Data Visualization", "UI Design", "UX Research"],
    imageUrl: "https://source.unsplash.com/random/600x400/?dashboard,data",
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
      
      <main className={cn("transition-all duration-300", isSidebarOpen ? "lg:ml-64" : "lg:ml-20")}>
        <Hero />
        
        <section id="projects" className="py-20 container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Projetos em Destaque</h2>
            <p className="text-muted-foreground max-w-2xl">
              Uma seleção dos meus projetos que demonstram minha abordagem criativa 
              e capacidade de resolver problemas complexos de design.
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
