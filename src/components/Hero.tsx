
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-discord opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-discord-accent opacity-10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-gradient-discord opacity-20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container flex flex-col lg:flex-row items-center gap-12 animate-fade-in">
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <h2 className="text-discord-blurple font-medium">Olá, eu sou</h2>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Ruhan Davidson
              <span className="block text-discord-blurple mt-2">UX Designer</span>
            </h1>
          </div>
          
          <p className="text-lg text-muted-foreground">
            Criando experiências digitais que resolvem problemas reais com 
            uma abordagem criativa e centrada no usuário.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="discord-button">
              Ver Projetos
            </a>
            <a href="#process" className="border border-discord-blurple text-discord-blurple hover:bg-discord-blurple/10 font-medium py-2 px-4 rounded-md transition-all duration-200">
              Meu Processo
            </a>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="discord-card p-6 max-w-md">
            <div className="w-full aspect-square bg-discord-dark rounded-md mb-4 flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/046fe4af-877e-4978-9739-a1187d8eef07.png" 
                alt="Ruhan Davidson - UX Designer" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-discord-purple flex items-center justify-center text-xl">
                RD
              </div>
              <div>
                <h3 className="font-medium">Sobre minha abordagem</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Acredito que o bom design resolve problemas de forma criativa e inovadora, sempre pensando fora da caixa.
                </p>
              </div>
            </div>
          </div>
          
          <div className="discord-card p-4 absolute -bottom-6 -left-6 max-w-xs animate-pulse-subtle">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
              <p className="text-sm">Disponível para novos projetos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
