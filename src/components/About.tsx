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
              I am an Industrial Design student at the Georgia Institute of Technology's College of Design (Class of 2028), pursuing a minor in History. My work bridges the gap between physical product design and digital user experience.
            </p>
            <p>
              Currently, I serve as the DEI Vice President for the Collegiate Panhellenic Council, where I facilitate community dialogue and foster inclusive practices. With a background in freelance graphic design and proficiency in Python and HTML, I combine creative intuition with technical execution to build engaging, user-centered solutions.
            </p>
          </div>

          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border">
            <div className="space-y-2">
              <p className="text-3xl font-display text-primary">3.56</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">GPA</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-display text-primary">2028</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Class Year</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-display text-primary">ID</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Major</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-display text-primary">Zell</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Scholar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
