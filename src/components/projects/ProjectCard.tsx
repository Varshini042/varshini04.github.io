
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectData } from "./types";

interface ProjectCardProps {
  project: ProjectData;
  index?: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Card 
      className={`overflow-hidden border-none shadow-md bg-gradient-to-br ${project.gradient} hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]`}
      data-aos="fade-up"
      data-aos-delay={index ? index * 100 : 0}
    >
      <CardContent className="p-6">
        <div className="mb-2">
          <span className="text-xs font-medium bg-background/80 text-foreground/80 px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        
        {/* Project title with animated underline effect */}
        <h3 className="text-xl font-semibold mb-3 relative inline-block">
          {project.title}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-data-teal transition-all group-hover:w-full"></span>
        </h3>
        
        <p className="text-foreground/80 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs bg-background/50 px-2 py-1 rounded-full hover:bg-background/70 transition-colors">
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href={project.repoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group inline-flex items-center text-data-teal hover:text-data-teal/80 transition-colors"
        >
          <span className="story-link">View on GitHub</span> <Github className="h-3.5 w-3.5 ml-1.5 group-hover:rotate-12 transition-transform" />
        </a>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
