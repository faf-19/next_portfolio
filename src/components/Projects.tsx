
import { useRef } from "react";
import { PROJECTS } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import { useElementOnScreen } from "@/hooks/use-scroll-position";

export default function Projects() {
  const [setRef, isVisible] = useElementOnScreen({ threshold: 0.1 });
  
  return (
    <section 
      id="projects" 
      className="py-20 bg-secondary/50 relative overflow-hidden"
      ref={setRef as any}
    >
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary opacity-5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary opacity-5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="inline-block px-4 py-1.5 mb-4 text-sm bg-primary/10 text-primary rounded-full">
            My Work
          </h2>
          <h3 className="text-4xl font-bold mb-4">
            Featured Projects
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A collection of my recent projects, showcasing my skills in web development, 
            design, and problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              link={project.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
