
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUp, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

const Projects = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Map repository names to category and gradient
  const repoConfig: Record<string, { category: string; gradient: string }> = {
    "Fabric-Data-Engineering": { 
      category: "Data Engineering", 
      gradient: "from-data-teal/20 to-data-blue/10"
    },
    "sql_data_warehouse_project": { 
      category: "Data Engineering", 
      gradient: "from-data-purple/20 to-data-pink/10"
    },
    "sql-data-analytics-project": { 
      category: "Data Analysis", 
      gradient: "from-data-blue/20 to-data-teal/10"
    },
    "Netflix-Project": { 
      category: "Business Intelligence", 
      gradient: "from-data-pink/20 to-data-purple/10"
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const username = "varshini"; // Replace with your actual GitHub username
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        
        const allRepos: GitHubRepo[] = await response.json();
        
        // Filter repos based on the ones we want
        const targetRepoNames = Object.keys(repoConfig);
        const filteredRepos = allRepos.filter(repo => 
          targetRepoNames.includes(repo.name)
        );
        
        // Transform GitHub repos into project data
        const projectData = filteredRepos.map(repo => ({
          title: repo.name.replace(/-/g, " ").replace(/_/g, " "),
          description: repo.description || "No description available",
          tags: repo.topics.length > 0 ? repo.topics : ["GitHub Project"],
          category: repoConfig[repo.name]?.category || "Project",
          gradient: repoConfig[repo.name]?.gradient || "from-data-blue/20 to-data-teal/10",
          repoUrl: repo.html_url
        }));
        
        setProjects(projectData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
        toast({
          title: "Error fetching projects",
          description: "Using fallback project data instead",
          variant: "destructive"
        });
        
        // Fallback data in case of API failure
        const fallbackProjects = [
          {
            title: "Fabric Data Engineering",
            description: "Microsoft Fabric implementation for modern data engineering pipelines and workflows.",
            tags: ["Azure", "Fabric", "Data Engineering"],
            category: "Data Engineering",
            gradient: "from-data-teal/20 to-data-blue/10",
            repoUrl: "#"
          },
          {
            title: "SQL Data Warehouse Project",
            description: "End-to-end data warehouse implementation using SQL Server and modern data modeling techniques.",
            tags: ["SQL", "Data Warehouse", "ETL"],
            category: "Data Engineering",
            gradient: "from-data-purple/20 to-data-pink/10",
            repoUrl: "#"
          },
          {
            title: "SQL Data Analytics Project",
            description: "Advanced SQL analytics project with complex queries and performance optimization techniques.",
            tags: ["SQL", "Data Analysis", "Reporting"],
            category: "Data Analysis",
            gradient: "from-data-blue/20 to-data-teal/10",
            repoUrl: "#"
          },
          {
            title: "Netflix Project",
            description: "Data analysis and visualization project based on Netflix viewing data.",
            tags: ["Python", "Data Visualization", "BI"],
            category: "Business Intelligence",
            gradient: "from-data-pink/20 to-data-purple/10",
            repoUrl: "#"
          }
        ];
        setProjects(fallbackProjects);
        setLoading(false);
      }
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
      <h2 className="section-title">Featured Projects</h2>
      
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="h-10 w-10 border-4 border-data-teal/30 border-t-data-teal rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`overflow-hidden border-none shadow-md bg-gradient-to-br ${project.gradient} hover:shadow-lg transition-shadow`}
              >
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-medium bg-background/80 text-foreground/80 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-foreground/80 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-background/50 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-data-teal hover:text-data-teal/80"
                    onClick={() => window.open(project.repoUrl, "_blank")}
                  >
                    View on GitHub <Github className="h-3.5 w-3.5 ml-1.5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-data-teal hover:bg-data-teal/90">
              View All Projects
            </Button>
          </div>
        </>
      )}
      
      <Button 
        onClick={scrollToTop} 
        className="fixed bottom-8 right-8 p-3 bg-data-teal hover:bg-data-teal/90 rounded-full shadow-lg z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </section>
  );
};

export default Projects;
