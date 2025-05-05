
import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Figma, FileText, Presentation } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  figmaUrl?: string;
  presentationUrl?: string;
  documentationUrl?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  tags, 
  imageUrl, 
  figmaUrl, 
  presentationUrl, 
  documentationUrl 
}) => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  
  return (
    <div className="discord-card overflow-hidden group">
      <div className="relative overflow-hidden aspect-video">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-discord-darkgray text-discord-blurple"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold group-hover:text-discord-blurple transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm">{description}</p>
        
        <div className="flex flex-wrap gap-3 mt-4">
          {figmaUrl && (
            <a 
              href={figmaUrl} 
              className={cn(
                "inline-flex items-center gap-2 text-discord-blurple transition-all duration-300 px-3 py-2 rounded-md border border-discord-blurple/30 hover:bg-discord-blurple/10",
                hoveredButton === "figma" ? "opacity-100" : "opacity-80"
              )}
              onMouseEnter={() => setHoveredButton("figma")}
              onMouseLeave={() => setHoveredButton(null)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Figma size={16} />
              <span>Veja no Figma</span>
              <ExternalLink size={14} className={cn(
                "transition-transform duration-300",
                hoveredButton === "figma" ? "translate-x-1" : ""
              )} />
            </a>
          )}
          
          {presentationUrl && (
            <a 
              href={presentationUrl} 
              className={cn(
                "inline-flex items-center gap-2 text-discord-blurple transition-all duration-300 px-3 py-2 rounded-md border border-discord-blurple/30 hover:bg-discord-blurple/10",
                hoveredButton === "presentation" ? "opacity-100" : "opacity-80"
              )}
              onMouseEnter={() => setHoveredButton("presentation")}
              onMouseLeave={() => setHoveredButton(null)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Presentation size={16} />
              <span>Apresentação</span>
              <ExternalLink size={14} className={cn(
                "transition-transform duration-300",
                hoveredButton === "presentation" ? "translate-x-1" : ""
              )} />
            </a>
          )}
          
          {documentationUrl && (
            <a 
              href={documentationUrl} 
              className={cn(
                "inline-flex items-center gap-2 text-discord-blurple transition-all duration-300 px-3 py-2 rounded-md border border-discord-blurple/30 hover:bg-discord-blurple/10",
                hoveredButton === "documentation" ? "opacity-100" : "opacity-80"
              )}
              onMouseEnter={() => setHoveredButton("documentation")}
              onMouseLeave={() => setHoveredButton(null)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={16} />
              <span>Documentação</span>
              <ExternalLink size={14} className={cn(
                "transition-transform duration-300",
                hoveredButton === "documentation" ? "translate-x-1" : ""
              )} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
