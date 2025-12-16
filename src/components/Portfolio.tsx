import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import studioProjectsCover from "@/assets/studio-projects-cover.jpeg";

const projects = [
  {
    id: "studio-projects",
    title: "Studio Projects",
    category: "Industrial Design",
    description: "Product sketches, models, and prototypes from Georgia Tech design studio",
    image: studioProjectsCover,
  },
  {
    id: "website-development",
    title: "Website Development",
    category: "UI/UX & Coding",
    description: "CS 1301 project using Streamlit, APIs, and JSON",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
  },
  {
    id: "leadership",
    title: "Panhellenic Council",
    category: "Leadership",
    description: "DEI initiatives and community engagement",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
  },
];

export const Portfolio = () => {
  const handleProjectClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-body">
              Selected Work
            </p>
            <h2 className="display-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
              Portfolio
            </h2>
          </div>
          <p className="text-muted-foreground font-body max-w-md">
            Explore my work across industrial design, UI/UX, and leadership initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              onClick={handleProjectClick}
              className={`group block ${index === 0 ? "md:col-span-2" : ""}`}
            >
              <article className="card-hover bg-background overflow-hidden">
                <div className={`image-reveal ${index === 0 ? "aspect-[2/1]" : "aspect-[3/2]"}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.15em] text-primary font-body">
                        {project.category}
                      </p>
                      <h3 className="font-display text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground font-body text-sm">
                        {project.description}
                      </p>
                    </div>
                    <ArrowUpRight 
                      className="text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" 
                      size={24} 
                    />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};