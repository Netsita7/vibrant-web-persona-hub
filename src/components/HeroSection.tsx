
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent"></div>
      <div className="section-container flex flex-col items-center justify-center text-center z-10">
        <p className="text-primary font-medium mb-2 md:mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          Hello, I'm
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
          John Doe
        </h1>
        <h2 className="text-xl md:text-3xl text-muted-foreground mb-6 md:mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
          <span className="text-accent">Frontend Developer</span> & UX Designer
        </h2>
        <p className="max-w-xl text-muted-foreground mb-8 md:mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
          I create stunning web experiences with attention to detail, focusing on clean code
          and intuitive user interfaces.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
          <Button size="lg" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <a href="#about" className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={20} />
        </a>
      </div>

      {/* Background design elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
