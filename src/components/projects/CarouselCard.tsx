
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectData } from "./types";

interface CarouselCardProps {
  project: ProjectData;
}

const CarouselCard = ({ project }: CarouselCardProps) => {
  return (
    <Card className={`overflow-hidden border-none shadow-lg bg-gradient-to-br ${project.gradient} hover:shadow-xl transition-all duration-300 h-full`}>
      <CardContent className="p-6">
        <div className="mb-2">
          <span className="text-xs font-medium bg-background/90 text-foreground/90 px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
        <p className="text-foreground/80 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs bg-background/60 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={project.repoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-data-teal hover:text-data-teal/80 transition-colors hover-scale"
        >
          View on GitHub <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
        </a>
      </CardContent>
    </Card>
  );
};

export default CarouselCard;
