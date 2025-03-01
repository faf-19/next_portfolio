
import { ArrowUp } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/30 py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-secondary/50 z-0" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center mb-10">
          <button
            onClick={handleScrollToTop}
            className="p-4 bg-primary text-primary-foreground rounded-full mb-6 hover:bg-primary/90 transition-all duration-300 animate-fade-in shadow-md hover:shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
          
          <h2 className="text-2xl font-bold mb-2">
            Portfolio<span className="text-primary">.</span>
          </h2>
          
          <p className="text-muted-foreground text-sm max-w-md text-center mb-6">
            Crafting digital experiences with a focus on clean design and intuitive functionality.
          </p>
          
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
