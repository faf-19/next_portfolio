
import { useState } from "react";
import { useElementOnScreen } from "@/hooks/use-scroll-position";
import { CONTACT_INFO } from "@/lib/data";
import { Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [setRef, isVisible] = useElementOnScreen({ threshold: 0.1 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const socialIcons = {
    GitHub: <Github size={20} />,
    LinkedIn: <Linkedin size={20} />,
    Twitter: <Twitter size={20} />,
  };

  return (
    <section 
      id="contact" 
      className="py-20"
      ref={setRef as any}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="inline-block px-4 py-1.5 mb-4 text-sm bg-primary/10 text-primary rounded-full">
            Get in Touch
          </h2>
          <h3 className="text-4xl font-bold mb-4">
            Contact Me
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>
        
        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div className="bg-secondary p-8 rounded-xl shadow-sm animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-xl font-semibold mb-6">Send a Message</h4>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 resize-none"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Right Column - Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-full">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h5 className="text-sm font-medium text-muted-foreground mb-1">Email</h5>
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`} 
                    className="text-foreground hover:text-primary transition-colors duration-200"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-full">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h5 className="text-sm font-medium text-muted-foreground mb-1">Phone</h5>
                  <a 
                    href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} 
                    className="text-foreground hover:text-primary transition-colors duration-200"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-full">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h5 className="text-sm font-medium text-muted-foreground mb-1">Location</h5>
                  <p className="text-foreground">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h5 className="text-sm font-medium text-muted-foreground mb-4">Connect with me</h5>
              
              <div className="flex gap-4">
                {CONTACT_INFO.socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={link.name}
                  >
                    {socialIcons[link.name as keyof typeof socialIcons]}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-secondary rounded-xl">
              <h5 className="font-medium mb-4">Working Hours</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
