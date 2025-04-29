
import React from 'react';
import { cn } from '@/lib/utils';
import { Home, Code, User, MessageSquare, Link } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 h-screen bg-discord-darker w-64 transition-transform duration-300 ease-in-out z-40 pt-16",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-20"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex flex-col space-y-2 p-3">
          <SidebarItem 
            icon={<Home size={20} />} 
            label="Início" 
            href="#top" 
            isCollapsed={!isOpen} 
          />
          <SidebarItem 
            icon={<Code size={20} />} 
            label="Projetos" 
            href="#projects" 
            isCollapsed={!isOpen} 
          />
          <SidebarItem 
            icon={<User size={20} />} 
            label="Sobre" 
            href="#about" 
            isCollapsed={!isOpen} 
          />
          <SidebarItem 
            icon={<MessageSquare size={20} />} 
            label="Contato" 
            href="#contact" 
            isCollapsed={!isOpen} 
          />
        </div>

        <div className="mt-auto p-3">
          <div className={cn(
            "p-3 bg-discord-dark rounded-md",
            !isOpen && "flex justify-center"
          )}>
            {isOpen ? (
              <div>
                <h4 className="text-sm font-medium text-discord-blurple mb-2">Ruhan Davidson</h4>
                <p className="text-xs text-muted-foreground">UX Designer</p>
                <a href="mailto:RuhanDavidson@gmail.com" className="text-xs discord-link mt-2 block">
                  RuhanDavidson@gmail.com
                </a>
              </div>
            ) : (
              <Link size={20} className="text-discord-blurple" />
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isCollapsed: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, href, isCollapsed }) => {
  return (
    <a 
      href={href}
      className={cn(
        "flex items-center p-3 rounded-md transition-colors duration-200 hover:bg-discord-dark group relative",
        isCollapsed ? "justify-center" : "space-x-3"
      )}
    >
      <div className="text-muted-foreground group-hover:text-discord-blurple transition-colors duration-200">
        {icon}
      </div>
      {!isCollapsed && (
        <span className="group-hover:text-discord-blurple transition-colors duration-200">{label}</span>
      )}
      {isCollapsed && (
        <div className="absolute left-full ml-2 bg-discord-dark px-2 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200">
          {label}
        </div>
      )}
    </a>
  );
};

export default Sidebar;
