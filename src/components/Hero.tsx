import { ArrowDown } from "lucide-react";
import sophiePortrait from "@/assets/sophie-portrait.png";

export const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-body fade-in-up stagger-1">
                Industrial Design • Georgia Tech
              </p>
              <h1 className="display-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground fade-in-up stagger-2">
                Sophie Roach
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed max-w-lg fade-in-up stagger-3">
                A creative problem solver who bridges Industrial Design with technical proficiency in CAD and Adobe Creative Cloud. Driven by user-focused design, I bring attention to detail and a collaborative spirit to every project.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 fade-in-up stagger-4">
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-body text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-300"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center px-6 py-3 border border-foreground/20 text-foreground font-body text-sm uppercase tracking-wider hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end fade-in-up stagger-2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-border shadow-elevated">
                <img
                  src={sophiePortrait}
                  alt="Sophie Roach - Industrial Design Student"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-full" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};