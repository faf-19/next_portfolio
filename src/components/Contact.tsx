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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mdkzwzer", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "✅ Message sent!",
          description: "Thank you! I’ll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "❌ Submission failed",
          description: "Please try again later.",
        });
      }
    } catch (error) {
      toast({
        title: "❌ Error",
        description: "Could not send message. Check your internet connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialIcons = {
    GitHub: <Github size={20} />,
    LinkedIn: <Linkedin size={20} />,
    Twitter: <Twitter size={20} />,
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="inline-block px-4 py-1.5 mb-4 text-sm bg-primary/10 text-primary rounded-full">
            Get In Touch
          </h2>
          <h3 className="text-4xl font-bold mb-4">Contact Me</h3>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Have a project in mind? Let's talk about it. Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
              <p className="text-muted-foreground mb-6">
                Fill out the form and I will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-full">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h5 className="text-sm font-medium text-muted-foreground mb-1">Email</h5>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-foreground hover:text-primary">
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
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="text-foreground hover:text-primary">
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

            {/* Social Links */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Follow Me</h5>
              <div className="flex space-x-4">
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
          </div>

          {/* Contact Form */}
          <div className="bg-background border border-border p-8 rounded-xl shadow-sm order-1 lg:order-2">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input type="text" name="_gotcha" style={{ display: "none" }} />
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
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
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
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
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
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
                className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="h-5 w-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send size={18} />
                    Send Message
                  </span>
                )}
              </button>
         </form>
          </div>
        </div>
      </div>
    </section>
  );
}
