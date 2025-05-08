
import { motion } from "framer-motion";
import { ProjectData } from "./types";
import ProjectCard from "./ProjectCard";
import { useIsMobile } from "@/hooks/use-mobile";

interface ProjectsGridProps {
  projects: ProjectData[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  const isMobile = useIsMobile();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
    >
      {projects.map((project, index) => (
        <motion.div key={index} variants={item} className="h-full flex">
          <div className="h-full w-full">
            <ProjectCard project={project} index={index} />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectsGrid;
