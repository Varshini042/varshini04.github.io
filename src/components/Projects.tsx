
import { Skeleton } from "@/components/ui/skeleton";
import { useProjects } from "./projects/useProjects";
import FeaturedProjectsCarousel from "./projects/FeaturedProjectsCarousel";
import ProjectsGrid from "./projects/ProjectsGrid";
import BackToTopButton from "./projects/BackToTopButton";

const Projects = () => {
  const { projects, loading } = useProjects();

  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title" data-aos="fade-down">Featured Projects</h2>
      
      {/* Featured projects carousel */}
      {!loading && projects.length > 0 && (
        <FeaturedProjectsCarousel projects={projects} />
      )}
      
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="h-10 w-10 border-4 border-data-teal/30 border-t-data-teal rounded-full animate-spin"></div>
        </div>
      ) : (
        <ProjectsGrid projects={projects} />
      )}
      
      <BackToTopButton />
    </section>
  );
};

export default Projects;
