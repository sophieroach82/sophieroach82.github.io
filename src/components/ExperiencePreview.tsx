import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const ExperiencePreview = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 p-8 lg:p-12 bg-card card-hover">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-body">
              Professional Background
            </p>
            <h2 className="display-heading text-2xl md:text-3xl text-foreground">
              Experience & Leadership
            </h2>
            <p className="text-muted-foreground font-body max-w-md">
              From freelance design to DEI leadership, explore my professional journey and the skills I've developed along the way.
            </p>
          </div>
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 group whitespace-nowrap"
          >
            View Full Resume
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};
