
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  detailsUrl?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags, imageUrl, detailsUrl = "#" }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="discord-card overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
        
        <a 
          href={detailsUrl} 
          className={cn(
            "inline-flex items-center gap-2 text-discord-blurple transition-all duration-300",
            isHovered ? "opacity-100" : "opacity-70"
          )}
        >
          <span>Ver detalhes</span>
          <ArrowRight size={16} className={cn(
            "transition-transform duration-300",
            isHovered ? "translate-x-1" : ""
          )} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
