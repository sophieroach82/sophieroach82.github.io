import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "website-development",
    title: "Website Development",
    category: "UI/UX & Coding",
    description: "CS 1301 project using Streamlit, APIs, and JSON",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
  },
  {
    id: "graphic-design",
    title: "Freelance Logo Design",
    category: "Graphic Design",
    description: "Brand identity and logo work for various clients",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
  },
  {
    id: "industrial-design",
    title: "Studio Projects",
    category: "Industrial Design",
    description: "Product sketches, models, and prototypes",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
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
            Explore my work across UI/UX, graphic design, industrial design, and leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group block"
            >
              <article className="card-hover bg-background overflow-hidden">
                <div className="image-reveal aspect-[3/2]">
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
