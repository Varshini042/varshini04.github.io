
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectData } from "./types";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface ProjectCardProps {
  project: ProjectData;
  index?: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div 
      whileHover={{ y: isMobile ? -2 : -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card 
        className={`overflow-hidden border-none shadow-md bg-gradient-to-br ${project.gradient} hover:shadow-lg transition-all duration-300 h-full flex flex-col`}
        data-aos="fade-up"
        data-aos-delay={index ? (isMobile ? index * 50 : index * 100) : 0}
      >
        <CardContent className="p-4 md:p-6 flex flex-col h-full">
          <div className="mb-2 flex justify-between">
            <span className="text-xs font-medium bg-background/80 text-foreground/80 px-2 md:px-3 py-1 rounded-full truncate max-w-[70%]">
              {project.category}
            </span>
            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-data-teal/20 flex items-center justify-center">
              <Github className="h-3 w-3 md:h-3.5 md:w-3.5 text-data-teal" />
            </div>
          </div>
          
          {/* Project title with animated underline effect */}
          <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 relative inline-block group">
            {project.title}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-data-teal transition-all duration-300 group-hover:w-full"></span>
          </h3>
          
          <p className="text-foreground/80 text-sm md:text-base mb-3 md:mb-4 flex-grow line-clamp-3 md:line-clamp-none">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
            {project.tags.slice(0, isMobile ? 3 : 4).map((tag) => (
              <span key={tag} className="text-xs bg-background/50 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full hover:bg-background/70 transition-colors truncate max-w-[100px] md:max-w-none">
                {tag}
              </span>
            ))}
          </div>
          
          <motion.a 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center text-data-teal hover:text-data-teal/80 transition-colors mt-auto text-sm md:text-base"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            <span className="story-link">View on GitHub</span> <ExternalLink className="h-3 w-3 md:h-3.5 md:w-3.5 ml-1.5" />
          </motion.a>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
