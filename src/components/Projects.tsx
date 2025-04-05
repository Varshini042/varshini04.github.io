
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ArrowUp, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
}

interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  category: string;
  gradient: string;
  repoUrl: string;
}

// Map of project categories and gradients
const categoryMap: Record<string, { category: string; gradient: string }> = {
  "data-engineering": { 
    category: "Data Engineering", 
    gradient: "from-data-teal/20 to-data-blue/10" 
  },
  "data-analytics": { 
    category: "Data Analysis", 
    gradient: "from-data-blue/20 to-data-teal/10" 
  },
  "business-intelligence": { 
    category: "Business Intelligence", 
    gradient: "from-data-pink/20 to-data-purple/10" 
  },
  "azure": { 
    category: "Azure Cloud", 
    gradient: "from-data-blue/20 to-data-purple/10" 
  },
  "python": { 
    category: "Python", 
    gradient: "from-data-teal/20 to-data-pink/10" 
  },
  "sql": { 
    category: "SQL", 
    gradient: "from-data-purple/20 to-data-blue/10" 
  },
  "default": { 
    category: "Project", 
    gradient: "from-data-teal/20 to-data-blue/10" 
  }
};

const Projects = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const username = "Varshini042"; // GitHub username
        console.log(`Fetching repos for ${username}`);
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        
        const allRepos: GitHubRepo[] = await response.json();
        console.log("Fetched repos:", allRepos.map(repo => repo.name));
        
        // Filter out repos starting with "Varshini" or "Subash"
        const filteredRepos = allRepos.filter(repo => {
          const name = repo.name.toLowerCase();
          return !name.startsWith("varshini") && !name.startsWith("subash");
        });
        
        console.log("Filtered repos:", filteredRepos.map(repo => repo.name));
        
        if (filteredRepos.length === 0) {
          // Use fallback data if no repos found
          useFallbackData();
          return;
        }
        
        // Transform GitHub repos into project data
        const projectData = filteredRepos.map(repo => ({
          title: repo.name.replace(/-/g, " ").replace(/_/g, " "),
          description: repo.description || "No description available",
          tags: repo.topics.length > 0 ? repo.topics : getCategoryTags(repo.name),
          category: getCategoryFromRepo(repo.name),
          gradient: getGradientFromRepo(repo.name),
          repoUrl: repo.html_url
        }));
        
        setProjects(projectData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
        useFallbackData();
      }
    };

    // Helper function to use fallback data
    const useFallbackData = () => {
      toast({
        title: "Using sample projects",
        description: "Showing example project data instead",
      });
      
      // Fallback data in case of API failure
      const fallbackProjects = [
        {
          title: "Fabric Data Engineering",
          description: "Microsoft Fabric implementation for modern data engineering pipelines and workflows.",
          tags: ["Azure", "Fabric", "Data Engineering"],
          category: "Data Engineering",
          gradient: "from-data-teal/20 to-data-blue/10",
          repoUrl: "https://github.com/Varshini042/Fabric-Data-Engineering"
        },
        {
          title: "SQL Data Warehouse Project",
          description: "End-to-end data warehouse implementation using SQL Server and modern data modeling techniques.",
          tags: ["SQL", "Data Warehouse", "ETL"],
          category: "Data Engineering",
          gradient: "from-data-purple/20 to-data-pink/10",
          repoUrl: "https://github.com/Varshini042/sql_data_warehouse_project"
        },
        {
          title: "SQL Data Analytics Project",
          description: "Advanced SQL analytics project with complex queries and performance optimization techniques.",
          tags: ["SQL", "Data Analysis", "Reporting"],
          category: "Data Analysis",
          gradient: "from-data-blue/20 to-data-teal/10",
          repoUrl: "https://github.com/Varshini042/sql-data-analytics-project"
        },
        {
          title: "Netflix Project",
          description: "Data analysis and visualization project based on Netflix viewing data.",
          tags: ["Python", "Data Visualization", "BI"],
          category: "Business Intelligence",
          gradient: "from-data-pink/20 to-data-purple/10",
          repoUrl: "https://github.com/Varshini042/Netflix-Project"
        }
      ];
      setProjects(fallbackProjects);
      setLoading(false);
    };

    // Helper functions for categorization
    const getCategoryFromRepo = (repoName: string): string => {
      const name = repoName.toLowerCase();
      
      if (name.includes("data-engineering") || name.includes("etl") || name.includes("pipeline") || name.includes("fabric")) {
        return categoryMap["data-engineering"].category;
      } else if (name.includes("analytics") || name.includes("analysis") || name.includes("sql")) {
        return categoryMap["data-analytics"].category;
      } else if (name.includes("bi") || name.includes("business-intelligence") || name.includes("powerbi") || name.includes("netflix")) {
        return categoryMap["business-intelligence"].category;
      } else if (name.includes("azure") || name.includes("cloud")) {
        return categoryMap["azure"].category;
      } else if (name.includes("python")) {
        return categoryMap["python"].category;
      }
      
      return categoryMap["default"].category;
    };
    
    const getGradientFromRepo = (repoName: string): string => {
      const name = repoName.toLowerCase();
      
      if (name.includes("data-engineering") || name.includes("etl") || name.includes("pipeline") || name.includes("fabric")) {
        return categoryMap["data-engineering"].gradient;
      } else if (name.includes("analytics") || name.includes("analysis") || name.includes("sql")) {
        return categoryMap["data-analytics"].gradient;
      } else if (name.includes("bi") || name.includes("business-intelligence") || name.includes("powerbi") || name.includes("netflix")) {
        return categoryMap["business-intelligence"].gradient;
      } else if (name.includes("azure") || name.includes("cloud")) {
        return categoryMap["azure"].gradient;
      } else if (name.includes("python")) {
        return categoryMap["python"].gradient;
      }
      
      return categoryMap["default"].gradient;
    };
    
    const getCategoryTags = (repoName: string): string[] => {
      const name = repoName.toLowerCase();
      const tags: string[] = [];
      
      if (name.includes("data")) tags.push("Data");
      if (name.includes("sql") || name.includes("database")) tags.push("SQL");
      if (name.includes("azure")) tags.push("Azure");
      if (name.includes("python")) tags.push("Python");
      if (name.includes("analytics") || name.includes("analysis")) tags.push("Analytics");
      if (name.includes("engineering")) tags.push("Engineering");
      if (name.includes("bi") || name.includes("business-intelligence") || name.includes("powerbi")) tags.push("BI");
      
      // Add at least one default tag if none were found
      if (tags.length === 0) tags.push("GitHub Project");
      
      return tags;
    };

    fetchProjects();
  }, [toast]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title" data-aos="fade-down">Featured Projects</h2>
      
      {/* Featured projects carousel */}
      {!loading && projects.length > 0 && (
        <div className="mb-12" data-aos="fade-up">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.slice(0, 3).map((project, index) => (
                <CarouselItem key={`carousel-${index}`} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static transform-none mx-2 bg-data-teal/20 text-data-teal hover:bg-data-teal/30" />
              <CarouselNext className="static transform-none mx-2 bg-data-teal/20 text-data-teal hover:bg-data-teal/30" />
            </div>
          </Carousel>
        </div>
      )}
      
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="h-10 w-10 border-4 border-data-teal/30 border-t-data-teal rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`overflow-hidden border-none shadow-md bg-gradient-to-br ${project.gradient} hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
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
          ))}
        </div>
      )}
      
      <Button 
        onClick={scrollToTop} 
        className="fixed bottom-8 right-8 p-3 bg-data-teal hover:bg-data-teal/90 rounded-full shadow-lg z-50 hover:scale-110 transition-transform"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </section>
  );
};

export default Projects;
