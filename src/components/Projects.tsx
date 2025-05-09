
import { Skeleton } from "@/components/ui/skeleton";
import { useProjects } from "./projects/useProjects";
import FeaturedProjectsCarousel from "./projects/FeaturedProjectsCarousel";
import ProjectsGrid from "./projects/ProjectsGrid";
import BackToTopButton from "./projects/BackToTopButton";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Projects = () => {
  const { projects, loading, error } = useProjects();
  const isMobile = useIsMobile();

  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title" data-aos="fade-down">Featured Projects</h2>
      <p className="text-center text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        Explore some of my highlighted work showcasing expertise in data engineering and analytics
      </p>
      
      {/* Error state */}
      {error && (
        <div className="text-center py-8">
          <p className="text-destructive">Unable to load projects. Please try again later.</p>
        </div>
      )}
      
      {/* Featured projects carousel */}
      {!loading && projects.length > 0 && (
        <FeaturedProjectsCarousel projects={projects} />
      )}
      
      {/* Divider with animation */}
      <motion.div 
        className="w-full max-w-md mx-auto my-8 md:my-16 h-0.5 bg-gradient-to-r from-transparent via-data-teal to-transparent"
        initial={{ opacity: 0, width: "0%" }}
        whileInView={{ opacity: 1, width: "100%" }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      />
      
      {/* All projects section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title" data-aos="fade-down">All Projects</h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          A comprehensive collection of my data engineering, analytics, and visualization work
        </p>
      </motion.div>
      
      {loading ? (
        <div className="flex justify-center py-12 md:py-20">
          <div className="h-8 md:h-10 w-8 md:w-10 border-4 border-data-teal/30 border-t-data-teal rounded-full animate-spin"></div>
        </div>
      ) : (
        <ProjectsGrid projects={projects} />
      )}
      
      <BackToTopButton />
    </section>
  );
};

export default Projects;
