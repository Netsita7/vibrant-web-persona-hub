
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary/50 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
          {/* Image with overlay */}
          <div className="relative rounded-lg overflow-hidden aspect-square max-w-md mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60" 
              alt="John Doe" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10"></div>
            
            {/* Experience stats */}
            <div className="absolute -bottom-6 -right-6 bg-background shadow-lg rounded-lg p-4 w-40">
              <p className="text-3xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground">Years of Experience</p>
            </div>
          </div>
          
          {/* Bio content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              A passionate Frontend Developer & UX Designer based in New York
            </h3>
            
            <p className="text-muted-foreground">
              I'm a frontend developer and UX designer with a passion for creating beautiful, 
              functional, and user-centered digital experiences. I am always looking forward to
              improving my skills and learning new technologies.
            </p>
            
            <p className="text-muted-foreground">
              With 5+ years of experience in the field, I am proficient in HTML, CSS, JavaScript,
              React, and other modern frontend frameworks. I also have experience in UX design
              principles and creating wireframes and prototypes.
            </p>
            
            {/* Personal info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-muted-foreground">John Doe</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-muted-foreground">hello@johndoe.com</p>
              </div>
              <div>
                <p className="font-medium">Location:</p>
                <p className="text-muted-foreground">New York, USA</p>
              </div>
              <div>
                <p className="font-medium">Availability:</p>
                <p className="text-muted-foreground">Open for work</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Button>Download CV</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
