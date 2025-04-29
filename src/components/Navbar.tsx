
import React from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 py-3">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar} 
            className="p-2 rounded-md hover:bg-muted mr-4 lg:hidden"
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <a href="#" className="text-xl font-bold text-discord-blurple">
            Ruhan<span className="text-discord-purple">Davidson</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavLink href="#projects">Projetos</NavLink>
          <NavLink href="#process">Processo</NavLink>
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#contact">Contato</NavLink>
          <a 
            href="mailto:RuhanDavidson@gmail.com" 
            className="discord-button"
          >
            Vamos Conversar
          </a>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
  return (
    <a 
      href={href} 
      className={cn(
        "relative text-foreground hover:text-discord-blurple transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-discord-blurple hover:after:w-full after:transition-all after:duration-300", 
        className
      )}
    >
      {children}
    </a>
  );
};

export default Navbar;
