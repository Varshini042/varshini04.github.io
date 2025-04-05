
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { GitHubRepo, ProjectData } from "./types";
import { getCategoryFromRepo, getGradientFromRepo, getCategoryTags } from "./utils";

export const useProjects = () => {
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

    fetchProjects();
  }, [toast]);

  return { projects, loading };
};
