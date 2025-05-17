
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce analytics with real-time data visualization and inventory management.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "Travel Booking App",
    description: "A mobile-first travel booking platform with destination search, booking management, and user reviews.",
    image: "https://images.unsplash.com/photo-1476984251899-8d7fdfc5c92c?w=500&auto=format&fit=crop&q=60",
    tags: ["React Native", "GraphQL", "Node.js"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "Financial Portfolio Tracker",
    description: "Track investments, analyze performance, and visualize financial growth with this interactive portfolio tool.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60",
    tags: ["Next.js", "Chart.js", "Firebase"],
    demoUrl: "#",
    codeUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover h-full flex flex-col">
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              {/* Project Content */}
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              
              {/* Project Actions */}
              <CardFooter className="p-6 pt-0 flex gap-3">
                <Button size="sm" variant="default" asChild className="flex-1">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild className="flex-1">
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* View More Projects Button */}
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
