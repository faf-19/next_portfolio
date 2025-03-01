
import { useState, useRef } from "react";
import { ArrowUpRight, Eye } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  index: number;
}

export default function ProjectCard({ 
  title, 
  description, 
  tags, 
  imageUrl, 
  link,
  index
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Calculate animation delay based on index
  const delay = `${index * 0.1}s`;

  return (
    <div
      ref={cardRef}
      className="project-card group relative rounded-lg overflow-hidden shadow-md h-[400px] transition-all duration-500 animate-fade-in border border-primary/10"
      style={{ animationDelay: delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 transition-all duration-500">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-primary/90 to-black/60 transition-opacity duration-500 ${
          isHovered ? "opacity-90" : "opacity-80"
        }`} />
      </div>
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end p-6 text-white z-10">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3 transition-all duration-500">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Title and Description */}
        <h3 className="text-2xl font-bold mb-2 transition-all duration-500 group-hover:translate-y-0">
          {title}
        </h3>
        
        <p className={`text-sm text-gray-200 mb-4 transition-all duration-500 ${
          isHovered ? "opacity-100 max-h-24" : "opacity-0 max-h-0"
        } overflow-hidden`}>
          {description}
        </p>
        
        {/* Link Button */}
        <a
          href={link}
          className="inline-flex items-center gap-1 text-sm font-medium py-2 transition-all duration-300 hover-underline group"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project 
          <ArrowUpRight 
            size={16} 
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
          />
        </a>
      </div>
      
      {/* Live Preview Overlay Button */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href={link}
          className="flex items-center gap-2 px-4 py-3 bg-white text-primary font-medium rounded-full transform transition-all duration-500 hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Eye size={18} />
          Live Preview
        </a>
      </div>
    </div>
  );
}
