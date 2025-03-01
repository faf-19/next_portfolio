
import { ABOUT_CONTENT, EDUCATION_TIMELINE, EXPERIENCE_TIMELINE } from "@/lib/data";
import { useElementOnScreen } from "@/hooks/use-scroll-position";

export default function About() {
  const [setRef, isVisible] = useElementOnScreen({ threshold: 0.1 });
  
  return (
    <section 
      id="about" 
      className="py-20 bg-gradient-to-b from-background to-secondary/30 relative"
      ref={setRef as any}
    >
      {/* Decorative elements */}
      <div className="absolute -top-40 left-1/4 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 right-1/4 w-60 h-60 bg-primary opacity-5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="inline-block px-4 py-1.5 mb-4 text-sm bg-primary/10 text-primary rounded-full">
            About Me
          </h2>
          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-pink-500 text-transparent bg-clip-text">
            My Background
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {ABOUT_CONTENT.intro}
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Description */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg leading-relaxed">
              {ABOUT_CONTENT.description}
            </p>
            
            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {ABOUT_CONTENT.values.map((value, index) => (
                <div 
                  key={value.title} 
                  className="flex flex-col p-6 bg-secondary/50 rounded-xl border border-border/50 hover:border-primary/20 transition-transform hover:translate-y-[-5px] duration-300 hover:shadow-md"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    <value.icon size={24} className="text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Stats and Timeline */}
          <div className="space-y-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {ABOUT_CONTENT.stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="p-6 bg-primary/5 rounded-xl text-center transition-transform hover:translate-y-[-5px] duration-300 border border-primary/10 hover:border-primary/30"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <p className="text-3xl font-bold mb-1 text-primary">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            
            {/* Timeline Component for Experience */}
            <div className="relative pl-8 border-l border-primary/20 space-y-8 py-4">
              {EXPERIENCE_TIMELINE.map((item, index) => (
                <div 
                  key={item.title}
                  className="relative"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="absolute -left-[41px] mt-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10">
                    <item.icon size={14} className="text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                    <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                    <span className="text-sm font-medium">{item.location}</span>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Education Timeline */}
        <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <h4 className="text-2xl font-bold mb-8 text-center">Education</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATION_TIMELINE.map((item, index) => (
              <div 
                key={item.title}
                className="p-6 bg-secondary/30 rounded-xl transition-all duration-300 hover:translate-y-[-5px] border border-border/50 hover:border-primary/20 hover:shadow-md"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="flex gap-4">
                  <div className="p-3 rounded-full bg-primary/10 h-fit">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                    <h5 className="text-lg font-semibold mt-1">{item.title}</h5>
                    <span className="text-sm font-medium">{item.location}</span>
                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
