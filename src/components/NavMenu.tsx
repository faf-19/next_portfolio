
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { useScrollPosition } from "@/hooks/use-scroll-position";

export default function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false);
    
    // Smooth scroll to the section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrollPosition > 50 ? "py-4 glass-dark text-white shadow-md" : "py-6 bg-transparent"
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold tracking-tight"
          onClick={(e) => {
            e.preventDefault();
            handleMenuClick("#home");
          }}
        >
          Portfolio<span className="text-primary">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative px-2 py-1 transition-all duration-300 hover:text-primary ${
                    activeSection === link.href.substring(1) 
                      ? "text-primary font-medium" 
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(link.href);
                  }}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-foreground z-50"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Navigation Menu */}
        <div 
          className={`fixed inset-0 bg-background glass-dark flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <nav>
            <ul className="flex flex-col space-y-6 text-center">
              {NAV_LINKS.map((link) => (
                <li key={link.name} className="text-xl">
                  <a
                    href={link.href}
                    className={`relative px-4 py-2 transition-all duration-300 ${
                      activeSection === link.href.substring(1) 
                        ? "text-primary font-medium" 
                        : "text-foreground"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuClick(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
