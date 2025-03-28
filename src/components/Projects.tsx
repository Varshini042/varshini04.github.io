
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sales Analytics Dashboard",
      description: "Interactive Tableau dashboard providing real-time insights into sales performance, customer behavior, and product trends for a retail company.",
      tags: ["Tableau", "SQL", "Data Analysis"],
      category: "Business Intelligence",
      gradient: "from-data-blue/20 to-data-teal/10"
    },
    {
      title: "Customer Segmentation Model",
      description: "Developed a machine learning model to segment customers based on purchasing behavior, demographics, and engagement metrics to optimize marketing campaigns.",
      tags: ["Python", "scikit-learn", "Data Modeling"],
      category: "Data Analysis",
      gradient: "from-data-purple/20 to-data-pink/10"
    },
    {
      title: "ETL Pipeline Modernization",
      description: "Redesigned legacy ETL processes into a modern, cloud-based solution, improving processing time by 70% and ensuring data reliability.",
      tags: ["AWS", "Airflow", "Python", "ETL"],
      category: "Data Engineering",
      gradient: "from-data-teal/20 to-data-blue/10"
    },
    {
      title: "Financial Reporting System",
      description: "Built an automated reporting system that consolidates data from multiple sources to generate comprehensive financial reports and forecasts.",
      tags: ["Power BI", "SQL", "DAX"],
      category: "Business Intelligence",
      gradient: "from-data-pink/20 to-data-purple/10"
    },
    {
      title: "Supply Chain Optimization",
      description: "Analyzed supply chain data to identify bottlenecks and optimization opportunities, resulting in a 15% reduction in inventory costs.",
      tags: ["Python", "Excel", "Data Analysis"],
      category: "Data Analysis",
      gradient: "from-data-blue/20 to-data-purple/10"
    },
    {
      title: "Data Quality Framework",
      description: "Implemented a comprehensive data quality framework to monitor, report, and remediate data quality issues across enterprise databases.",
      tags: ["SQL", "Python", "Data Governance"],
      category: "Data Engineering",
      gradient: "from-data-teal/20 to-data-pink/10"
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Featured Projects</h2>
      
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
              <Button variant="link" className="p-0 h-auto text-data-teal hover:text-data-teal/80">
                View Details <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
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
    </section>
  );
};

export default Projects;
