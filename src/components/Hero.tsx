
import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useScrollPosition } from "@/hooks/use-scroll-position";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const scrollPosition = useScrollPosition();
  const roles = ["Frontend Developer", "UI/UX Designer", "Web Enthusiast"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        if (currentCharIndex < roles[currentRoleIndex].length) {
          setTypedText(roles[currentRoleIndex].substring(0, currentCharIndex + 1));
          setCurrentCharIndex(currentCharIndex + 1);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setCurrentCharIndex(0);
            setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
          }, 2000); // Wait before typing the next role
        }
      } else {
        if (currentCharIndex > 0) {
          setTypedText(roles[currentRoleIndex].substring(0, currentCharIndex - 1));
          setCurrentCharIndex(currentCharIndex - 1);
        } else {
          setIsTyping(true);
          setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
        }
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentCharIndex, currentRoleIndex, isTyping, roles]);

  const handleScrollDown = () => {
    const nextSection = document.getElementById("projects");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      style={{
        transform: `translateY(${scrollPosition * 0.3}px)`,
        opacity: 1 - (scrollPosition * 0.002),
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary opacity-10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-primary opacity-10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 left-0 h-1/3 bg-gradient-to-t from-secondary/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center justify-center space-y-6 max-w-3xl mx-auto">
          <h2 className="inline-block px-4 py-1.5 mb-2 text-sm bg-primary text-primary-foreground rounded-full animate-fade-in">
            Hello, I'm a Web Developer
          </h2>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-tight lg:leading-tight animate-fade-in bg-gradient-to-r from-primary to-pink-500 text-transparent bg-clip-text">
            Creating Digital Experiences with Purpose
          </h1>
          
          <div className="h-12 flex items-center justify-center">
            <h3 className="text-xl md:text-2xl text-muted-foreground font-medium">
              I'm a <span className="text-primary font-semibold">{typedText}</span>
              <span className="animate-pulse">|</span>
            </h3>
          </div>
          
          <div className="flex space-x-4 mt-4 animate-fade-in">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Twitter Profile"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:hello@example.com" 
              className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Email Me"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={handleScrollDown}
          className="p-3 rounded-full bg-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} className="text-primary hover:text-primary-foreground" />
        </button>
      </div>
    </section>
  );
}
