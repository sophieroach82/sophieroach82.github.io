import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, Award, BookOpen, Globe } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { useEffect } from "react";

const Education = () => {
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
                Academic Journey
              </p>
              <h1 className="display-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
                Education
              </h1>
            </div>
          </div>

          {/* Georgia Tech */}
          <section className="mb-16">
            <div className="p-8 lg:p-12 bg-card card-hover">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl lg:text-3xl text-foreground">
                    Georgia Institute of Technology
                  </h2>
                  <p className="text-primary font-body">College of Design</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Degree</p>
                    <p className="text-foreground font-body">Bachelor of Science in Industrial Design</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Minor</p>
                    <p className="text-foreground font-body">History</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Expected Graduation</p>
                    <p className="text-foreground font-body">Class of 2028</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <h3 className="font-display text-lg text-foreground">Relevant Coursework</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {["Computer Science", "Graphic Design", "Fundamentals of Design Studio"].map((course) => (
                      <span
                        key={course}
                        className="px-4 py-2 text-sm font-body bg-background border border-border text-muted-foreground"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-primary font-body">
                <Globe className="w-5 h-5" />
                <p>Study Abroad: Georgia Tech Europe (Summer 2025)</p>
              </div>
            </div>
          </section>

          {/* St. Vincent's Academy */}
          <section>
            <div className="p-8 lg:p-12 bg-card card-hover">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl lg:text-3xl text-foreground">
                    St. Vincent's Academy
                  </h2>
                  <p className="text-primary font-body">Class of 2024</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">GPA</p>
                    <p className="text-3xl font-display text-primary">4.67</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Class Rank</p>
                    <p className="text-foreground font-body">3 out of 79</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">SAT Score</p>
                    <p className="text-foreground font-body">1420</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-lg text-foreground">Academic Honors</h3>
                  <ul className="space-y-2">
                    {[
                      "STAR Student (Highest SAT)",
                      "GA Certificate of Merit (Top 5%)",
                    ].map((honor) => (
                      <li key={honor} className="flex items-center gap-2 text-muted-foreground font-body">
                        <Award className="w-4 h-4 text-primary flex-shrink-0" />
                        {honor}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-display text-lg text-foreground mb-4">Athletics</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-primary font-body font-medium mb-2">Track & Field</p>
                    <p className="text-muted-foreground font-body text-sm">
                      Captain • MVP • All-State Honors
                    </p>
                  </div>
                  <div>
                    <p className="text-primary font-body font-medium mb-2">Cross Country</p>
                    <p className="text-muted-foreground font-body text-sm">
                      Captain • MVP • State Qualifier
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Education;