
import { SKILLS } from "@/lib/data";
import SkillBar from "./SkillBar";
import { useElementOnScreen } from "@/hooks/use-scroll-position";

export default function Skills() {
  const [setRef, isVisible] = useElementOnScreen({ threshold: 0.1 });
  
  return (
    <section 
      id="skills" 
      className="py-20 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden"
      ref={setRef as any}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-secondary/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="inline-block px-4 py-1.5 mb-4 text-sm bg-primary/10 text-primary rounded-full">
            My Expertise
          </h2>
          <h3 className="text-4xl font-bold mb-4">
            Skills & Technologies
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A comprehensive overview of my technical skills and proficiencies
            across various technologies and tools.
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SKILLS.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className="bg-background rounded-xl p-8 shadow-sm border border-border/50 hover:border-primary/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <category.icon size={24} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold">{category.category}</h4>
              </div>
              
              <div>
                {category.skills.map((skill) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
