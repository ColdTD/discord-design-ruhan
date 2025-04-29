
import React from 'react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, isLast = false }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-discord-blurple text-white font-bold">
          {number}
        </div>
        {!isLast && (
          <div className="w-px h-full bg-border mt-2"></div>
        )}
      </div>
      <div className="pt-1 pb-8">
        <h4 className="text-lg font-bold mb-2">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="py-20 container">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meu Processo de Design</h2>
          <p className="text-muted-foreground">
            Uma abordagem metodológica para resolver problemas complexos e criar experiências memoráveis.
          </p>
        </div>
        
        <div className="mt-12">
          <ProcessStep 
            number="1" 
            title="Descoberta e Pesquisa" 
            description="Compreendo profundamente o problema, o contexto e os usuários através de pesquisas qualitativas e quantitativas, estabelecendo uma base sólida para o projeto."
          />
          
          <ProcessStep 
            number="2" 
            title="Definição e Estratégia" 
            description="Defino claramente o problema e estabeleço objetivos mensuráveis, criando personas e jornadas de usuário para guiar as decisões de design."
          />
          
          <ProcessStep 
            number="3" 
            title="Ideação e Conceituação" 
            description="Exploro múltiplas soluções através de sessões de brainstorming, esboços e wireframes, pensando além do óbvio para encontrar abordagens inovadoras."
          />
          
          <ProcessStep 
            number="4" 
            title="Prototipagem" 
            description="Transformo conceitos em protótipos interativos de diferentes fidelidades, permitindo visualizar e testar a experiência antes da implementação."
          />
          
          <ProcessStep 
            number="5" 
            title="Testes e Iteração" 
            description="Conduzo testes de usabilidade e coletando feedback para refinar continuamente o design, garantindo que a solução atenda às necessidades dos usuários."
            isLast
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
