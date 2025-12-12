import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Portfolio } from "@/components/Portfolio";
import { ExperiencePreview } from "@/components/ExperiencePreview";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <ExperiencePreview />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
