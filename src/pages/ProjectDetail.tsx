import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Navigation } from "@/components/Navigation";

const projectData: Record<string, {
  title: string;
  category: string;
  description: string;
  overview: string;
  process: string[];
  tools: string[];
  image: string;
  gallery: string[];
}> = {
  "website-development": {
    title: "Website Development",
    category: "UI/UX & Coding",
    description: "CS 1301 project using Streamlit, APIs, and JSON",
    overview: "A comprehensive web development project completed for CS 1301 at Georgia Tech, demonstrating the intersection of my design sensibilities with technical programming skills. This project showcases my ability to work with modern web technologies while maintaining focus on user experience.",
    process: [
      "Conceptualized the user interface with wireframes and mockups",
      "Developed the backend using Python and Streamlit framework",
      "Integrated external APIs to fetch and display dynamic data",
      "Implemented JSON data handling for persistent storage",
      "Tested and refined the user experience through iterative development",
    ],
    tools: ["Python", "Streamlit", "APIs", "JSON", "HTML/CSS"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    ],
  },
  "graphic-design": {
    title: "Freelance Logo Design",
    category: "Graphic Design",
    description: "Brand identity and logo work for various clients",
    overview: "A collection of freelance graphic design work focusing on logo creation and brand identity development. Each project required close collaboration with clients to understand their vision and translate it into compelling visual assets.",
    process: [
      "Conducted client interviews to understand brand values and target audience",
      "Created mood boards and initial concept sketches",
      "Developed multiple logo variations in Adobe Illustrator",
      "Refined designs based on client feedback",
      "Delivered final assets in multiple formats for various use cases",
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
    ],
  },
  "industrial-design": {
    title: "Studio Projects",
    category: "Industrial Design",
    description: "Product sketches, models, and prototypes",
    overview: "A showcase of Industrial Design studio work at Georgia Tech, featuring concept development, sketching, physical modeling, and prototyping. These projects demonstrate my ability to take ideas from initial concept to tangible form.",
    process: [
      "Researched user needs and market opportunities",
      "Generated multiple concepts through rapid sketching",
      "Selected promising directions for further development",
      "Created physical models and prototypes for testing",
      "Documented the design process for presentation",
    ],
    tools: ["Sketching", "CAD Software", "3D Modeling", "Physical Prototyping"],
    image: "https://images.unsplash.com/photo-503387762-592deb58ef4e?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    ],
  },
  "leadership": {
    title: "Panhellenic Council",
    category: "Leadership",
    description: "DEI initiatives and community engagement",
    overview: "As DEI Vice President of the Collegiate Panhellenic Council, I lead initiatives that foster inclusive practices and facilitate meaningful dialogue across Greek life at Georgia Tech. This role combines strategic planning with community engagement.",
    process: [
      "Developed comprehensive DEI programming calendar",
      "Facilitated bi-weekly meetings with chapter delegates",
      "Created resources and training materials for chapters",
      "Organized inter-chapter events promoting dialogue",
      "Measured and reported on initiative outcomes",
    ],
    tools: ["Strategic Planning", "Event Coordination", "Community Building", "Public Speaking"],
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=400&fit=crop",
    ],
  },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Project Not Found</h1>
          <Link to="/#portfolio" className="text-primary hover:underline font-body">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 lg:pt-32">
        {/* Hero Image */}
        <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-12 -mt-24 relative z-10 pb-24">
          {/* Header */}
          <div className="bg-background p-8 lg:p-12 mb-12">
            <Link
              to="/#portfolio"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm mb-8"
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>
            
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-body">
                {project.category}
              </p>
              <h1 className="display-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground font-body font-light max-w-2xl">
                {project.description}
              </p>
            </div>
          </div>

          {/* Overview */}
          <section className="mb-16">
            <h2 className="font-display text-2xl text-foreground mb-6">Overview</h2>
            <p className="text-muted-foreground font-body font-light leading-relaxed">
              {project.overview}
            </p>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="font-display text-2xl text-foreground mb-6">Process</h2>
            <ol className="space-y-4">
              {project.process.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary font-display text-sm">
                    {index + 1}
                  </span>
                  <p className="text-muted-foreground font-body font-light pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Tools */}
          <section className="mb-16">
            <h2 className="font-display text-2xl text-foreground mb-6">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 text-sm font-body bg-card border border-border text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <section className="mb-16">
            <h2 className="font-display text-2xl text-foreground mb-6">Gallery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="image-reveal aspect-[3/2] overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="pt-12 border-t border-border flex flex-col sm:flex-row gap-4 items-center justify-between">
            <p className="text-muted-foreground font-body">
              Interested in this project?
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-body text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
