
import { motion } from "framer-motion";
import { ProjectData } from "./types";
import ProjectCard from "./ProjectCard";

interface ProjectsGridProps {
  projects: ProjectData[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
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
