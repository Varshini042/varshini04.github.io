
export interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
}

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  category: string;
  gradient: string;
  repoUrl: string;
}

// Map of project categories and gradients
export const categoryMap: Record<string, { category: string; gradient: string }> = {
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
