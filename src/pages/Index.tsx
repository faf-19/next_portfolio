
import { useEffect } from "react";
import Cursor from "@/components/Cursor";
import NavMenu from "@/components/NavMenu";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add a class to enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="relative">
      <Cursor />
      <NavMenu />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
