
import React, { useState, useEffect, useRef } from 'react';
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
  
  // Planet drag-to-rotate state
  const [planetRotation, setPlanetRotation] = useState(0);
  const dragRef = useRef({ dragging: false, startX: 0, startRotation: 0, lastX: 0, lastT: 0, velocity: 0 });

  const handlePlanetPointerDown = (e: React.PointerEvent) => {
    dragRef.current.dragging = true;
    dragRef.current.startX = e.clientX;
    dragRef.current.lastX = e.clientX;
    dragRef.current.lastT = performance.now();
    dragRef.current.startRotation = planetRotation;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePlanetPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current.dragging) return;
    const now = performance.now();
    const dt = Math.max(now - dragRef.current.lastT, 1);
    dragRef.current.velocity = ((e.clientX - dragRef.current.lastX) / dt) * 16;
    dragRef.current.lastX = e.clientX;
    dragRef.current.lastT = now;
    setPlanetRotation(dragRef.current.startRotation + (e.clientX - dragRef.current.startX) * 0.5);
  };

  const endPlanetDrag = () => {
    dragRef.current.dragging = false;
  };

  // Inertia + idle auto-spin
  useEffect(() => {
    let raf: number;
    const tick = () => {
      if (!dragRef.current.dragging) {
        dragRef.current.velocity *= 0.95;
        const spin = 0.05 + dragRef.current.velocity * 0.5;
        setPlanetRotation((r) => r + spin);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  
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
              
              <div className="order-1 md:order-2 relative flex items-center justify-center group select-none">
                {/* Background Glow */}
                <div className="absolute w-72 h-72 bg-discord-blurple rounded-full blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>
                
                {/* Saturn Planet — drag to spin */}
                <div
                  className="relative w-full aspect-square max-w-[400px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-none"
                  style={{ perspective: "900px" }}
                  onPointerDown={handlePlanetPointerDown}
                  onPointerMove={handlePlanetPointerMove}
                  onPointerUp={endPlanetDrag}
                  onPointerLeave={endPlanetDrag}
                >
                  <div
                    className="relative w-full h-full flex items-center justify-center"
                    style={{ transform: `rotateY(${planetRotation}deg)`, transformStyle: "preserve-3d" }}
                  >
                    {/* Ring (behind planet) */}
                    <div
                      className="absolute w-[340px] h-[340px] rounded-full border-[10px] border-discord-blurple/50"
                      style={{ transform: "rotateX(75deg)", boxShadow: "0 0 30px rgba(88,101,242,0.35), inset 0 0 20px rgba(88,101,242,0.2)" }}
                    ></div>
                    <div
                      className="absolute w-[290px] h-[290px] rounded-full border-[3px] border-foreground/20"
                      style={{ transform: "rotateX(75deg)" }}
                    ></div>

                    {/* Planet Sphere */}
                    <div
                      className="relative z-10 w-40 h-40 rounded-full shadow-[0_0_60px_rgba(88,101,242,0.5)]"
                      style={{
                        background: "radial-gradient(circle at 32% 28%, #a3b2ff 0%, #5865F2 38%, #2c3aa8 68%, #141a4a 100%)",
                      }}
                    >
                      {/* Surface bands */}
                      <div className="absolute inset-0 rounded-full overflow-hidden opacity-40">
                        <div className="absolute top-[30%] left-0 right-0 h-[10%] bg-white/20 blur-[2px]"></div>
                        <div className="absolute top-[52%] left-0 right-0 h-[7%] bg-indigo-300/30 blur-[2px]"></div>
                        <div className="absolute top-[70%] left-0 right-0 h-[5%] bg-white/10 blur-[2px]"></div>
                      </div>
                      {/* Terminator shadow */}
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{ background: "linear-gradient(115deg, transparent 42%, rgba(5,8,30,0.75) 78%)" }}
                      ></div>
                    </div>

                    {/* Moon orbiting on the ring plane */}
                    <div
                      className="absolute w-4 h-4 rounded-full bg-foreground/90 shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                      style={{
                        transform: `rotateX(75deg) rotate(${planetRotation * 2}deg) translateX(155px)`,
                      }}
                    ></div>
                    <div
                      className="absolute w-2.5 h-2.5 rounded-full bg-discord-blurple shadow-[0_0_10px_rgba(88,101,242,0.9)]"
                      style={{
                        transform: `rotateX(75deg) rotate(${-planetRotation * 1.4}deg) translateX(180px)`,
                      }}
                    ></div>
                  </div>

                  {/* Holographic Particles */}
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-discord-blurple rounded-full animate-ping delay-75 pointer-events-none"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-foreground rounded-full animate-ping delay-300 pointer-events-none"></div>
                  <div className="absolute top-1/2 right-0 w-1 h-1 bg-discord-blurple rounded-full animate-ping pointer-events-none"></div>
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
