import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { useEffect } from "react";

const experiences = [
  {
    title: "DEI Vice President",
    organization: "Collegiate Panhellenic Council",
    period: "October 2025 – Present",
    location: "Georgia Tech, Atlanta, GA",
    description: [
      "Leading initiatives that foster awareness and inclusive practices across Greek life",
      "Facilitating bi-weekly meetings with chapter delegates to discuss DEI strategies",
      "Managing inter-chapter communication and collaboration on diversity initiatives",
      "Developing programming that promotes dialogue and understanding within the community",
    ],
  },
  {
    title: "Vice President, Media Club",
    organization: "St. Vincent's Academy",
    period: "2021 – 2023",
    location: "Savannah, GA",
    description: [
      "Managed social media platforms to showcase student achievements and school events",
      "Leveraged data-driven insights to enhance engagement and reach target audiences",
      "Coordinated with team members to develop content calendars and marketing strategies",
      "Increased follower engagement through new visual storytelling techniques",
    ],
  },
  {
    title: "Independent Childcare Provider",
    organization: "Self-Employed",
    period: "2020 – 2024",
    location: "Savannah, GA",
    description: [
      "Developed strong time management and organizational skills",
      "Built excellent interpersonal communication abilities with families",
      "Demonstrated responsibility, reliability, and adaptability across various situations",
      "Maintained consistent, professional relationships with multiple families",
    ],
  },
];

const Experience = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 lg:pt-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 pb-24">
          {/* Header */}
          <div className="mb-16">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm mb-8"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-body">
                Professional Background
              </p>
              <h1 className="display-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
                Experience
              </h1>
              <p className="text-lg text-muted-foreground font-body font-light max-w-2xl">
                A journey through leadership, design, and professional development.
              </p>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <article
                key={index}
                className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full" />
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="font-display text-2xl text-foreground">
                      {exp.title}
                    </h2>
                    <p className="text-primary font-body font-medium">
                      {exp.organization}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-body">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((point, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground font-body font-light flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-border">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <p className="text-muted-foreground font-body">
                Interested in working together?
              </p>
              <Link
                to="/#contact"
                onClick={() => {
                  setTimeout(() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 100);
                }}
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-body text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Experience;