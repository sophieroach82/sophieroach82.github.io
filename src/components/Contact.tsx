import { useState } from "react";
import { MapPin, Mail, GraduationCap, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Savannah, GA / Atlanta, GA",
    },
    {
      icon: Mail,
      label: "Email",
      value: "sophieroach82@gmail.com",
      href: "mailto:sophieroach82@gmail.com",
    },
    {
      icon: GraduationCap,
      label: "University",
      value: "Georgia Institute of Technology",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-body">
                Get in Touch
              </p>
              <h2 className="display-heading text-3xl md:text-4xl lg:text-5xl">
                Let's Connect
              </h2>
              <p className="text-background/70 font-body font-light">
                I'm always open to discussing new opportunities, creative projects, or simply connecting with fellow designers.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <item.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-background/50 mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-background hover:text-primary transition-colors duration-300 font-body"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-background font-body">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/in/sophie-roach-056961333"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border border-background/20 text-background hover:bg-background hover:text-foreground transition-all duration-300 font-body text-sm uppercase tracking-wider"
            >
              <Linkedin size={18} />
              Connect on LinkedIn
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-wider text-background/50 font-body">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border border-background/20 text-background placeholder:text-background/40 focus:border-primary focus:outline-none transition-colors duration-300 font-body"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs uppercase tracking-wider text-background/50 font-body">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border border-background/20 text-background placeholder:text-background/40 focus:border-primary focus:outline-none transition-colors duration-300 font-body"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-wider text-background/50 font-body">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border border-background/20 text-background placeholder:text-background/40 focus:border-primary focus:outline-none transition-colors duration-300 font-body resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 font-body text-sm">
            © {new Date().getFullYear()} Sophie Roach. All rights reserved.
          </p>
          <p className="text-background/50 font-body text-sm">
            Designed with passion for Industrial Design
          </p>
        </div>
      </div>
    </section>
  );
};
