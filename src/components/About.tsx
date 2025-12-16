export const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-body">
              About Me
            </p>
            <h2 className="display-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
              Bridging Design & Technology
            </h2>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground font-body font-light leading-relaxed">
            <p>
              I'm Sophie Roach, an Industrial Design student at the Georgia Institute of Technology with a passion for thoughtful, human-centered design. My work combines simplicity, usability, and visual storytelling, drawing from experience in both product and graphic design. Inspired by the natural world, I aim to explore how composition, aesthetics, and experience shape the way people interact with everyday objects.
            </p>
          </div>

          <div className="pt-8 grid grid-cols-2 gap-8 border-t border-border">
            <div className="space-y-2">
              <p className="text-3xl font-display text-primary">2028</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Class Year</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-display text-primary">ID</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Major</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};