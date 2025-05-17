import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type Skill = {
  name: string;
  level: number;
  category: "frontend" | "backend" | "design" | "other";
};

const skills: Skill[] = [
  { name: "HTML & CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "UI/UX Design", level: 85, category: "design" },
  { name: "Responsive Design", level: 90, category: "frontend" },
  { name: "Git & GitHub", level: 80, category: "other" },
];

const SkillsSection = () => {
  // Group skills by category
  const frontendSkills = skills.filter((skill) => skill.category === "frontend");
  const otherSkills = skills.filter((skill) => skill.category !== "frontend");

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Frontend Skills */}
          <Card className="overflow-hidden card-hover">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Frontend Development</h3>
              <div className="space-y-5">
                {frontendSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Other Skills */}
          <Card className="overflow-hidden card-hover">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Other Skills</h3>
              <div className="space-y-5">
                {otherSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Technologies Icons */}
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-8 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["React", "TypeScript", "Node.js", "Tailwind CSS", "Git", "Figma"].map((tech) => (
              <Card key={tech} className="p-4 w-36 h-36 flex flex-col items-center justify-center text-center card-hover">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-lg font-bold text-primary">{tech[0]}</span>
                </div>
                <p className="font-medium">{tech}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
