
import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-discord-darker py-8 mt-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-discord-blurple">
              Ruhan<span className="text-discord-purple">Davidson</span>
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              UX Designer criando experiências memoráveis
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-2">
              <a href="#" className="text-muted-foreground hover:text-discord-blurple transition-colors">
                LinkedIn
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              &copy; {year} Ruhan Davidson. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
