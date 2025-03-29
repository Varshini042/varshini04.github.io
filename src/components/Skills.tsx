
import { Card, CardContent } from "@/components/ui/card";
import { Database, BarChart, Code, Server, Laptop, LineChart, FileSpreadsheet, Cloud } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "SQL", category: "Data", icon: <Database className="h-6 w-6 text-data-blue group-hover:text-white transition-colors duration-300" /> },
    { name: "Power BI", category: "Visualization", icon: <BarChart className="h-6 w-6 text-data-teal group-hover:text-white transition-colors duration-300" /> },
    { name: "Tableau", category: "Visualization", icon: <LineChart className="h-6 w-6 text-data-teal group-hover:text-white transition-colors duration-300" /> },
    { name: "Databricks", category: "Platform", icon: <Server className="h-6 w-6 text-data-purple group-hover:text-white transition-colors duration-300" /> },
    { name: "ETL/ELT", category: "Data", icon: <FileSpreadsheet className="h-6 w-6 text-data-blue group-hover:text-white transition-colors duration-300" /> },
    { name: "Fabric", category: "Platform", icon: <Laptop className="h-6 w-6 text-data-purple group-hover:text-white transition-colors duration-300" /> },
    { name: "Python", category: "Programming", icon: <Code className="h-6 w-6 text-data-pink group-hover:text-white transition-colors duration-300" /> },
    { name: "PySpark", category: "Programming", icon: <Code className="h-6 w-6 text-data-pink group-hover:text-white transition-colors duration-300" /> },
    { name: "Azure", category: "Cloud", icon: <Cloud className="h-6 w-6 text-data-teal group-hover:text-white transition-colors duration-300" /> },
  ];
  
  const toolsAndTechnologies = [
    "SQL Server", "Azure SQL", "Synapse Analytics", 
    "Power BI Desktop", "Power BI Service", "DAX", "Power Query",
    "Tableau Desktop", "Tableau Server", "Python", "PySpark",
    "Azure Data Factory", "Azure Databricks", "Microsoft Fabric",
    "Azure Data Lake", "Azure Synapse"
  ];

  return (
    <section id="skills" className="section-container bg-secondary/50 overflow-hidden">
      <h2 className="section-title mb-16">Skills & Expertise</h2>
      
      <div className="space-y-16">
        <div data-aos="fade-up" className="space-y-8">
          <h3 className="text-2xl font-semibold text-center relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-12 after:h-1 after:bg-data-blue after:transform after:-translate-x-1/2 after:rounded-full pb-2">
            Technical Skills
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {technicalSkills.map((skill, index) => (
              <Card 
                key={index} 
                className="border-none shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group hover:bg-gradient-to-br hover:from-data-blue/90 hover:to-data-purple/90 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    {skill.icon}
                  </div>
                  <div className="font-semibold group-hover:text-white transition-colors duration-300">{skill.name}</div>
                  <span className="inline-block text-xs bg-data-teal/10 text-data-teal px-2 py-1 rounded-full mt-2 group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                    {skill.category}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="200" className="space-y-8">
          <h3 className="text-2xl font-semibold text-center relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-12 after:h-1 after:bg-data-teal after:transform after:-translate-x-1/2 after:rounded-full pb-2">
            Tools & Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {toolsAndTechnologies.map((tool, index) => (
              <span 
                key={index}
                className="bg-background px-4 py-2 rounded-full border border-border hover:border-data-blue hover:bg-data-blue/5 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md cursor-default animate-fade-in"
                style={{ animationDelay: `${(index * 50) + 500}ms` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="400" className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-data-blue/10 to-data-blue/5 border-none shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-data-blue/20 hover:to-data-blue/10">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <Database className="h-10 w-10 text-data-blue" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Data Engineering</h4>
              <p className="text-foreground/80">
                Building robust ETL pipelines and data infrastructure with Azure, Databricks, and Microsoft Fabric.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-data-teal/10 to-data-teal/5 border-none shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-data-teal/20 hover:to-data-teal/10">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <BarChart className="h-10 w-10 text-data-teal" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Business Intelligence</h4>
              <p className="text-foreground/80">
                Creating interactive dashboards and reports with Power BI and Tableau to transform data into insights.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-data-purple/10 to-data-purple/5 border-none shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-data-purple/20 hover:to-data-purple/10">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <Code className="h-10 w-10 text-data-purple" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Data Analysis</h4>
              <p className="text-foreground/80">
                Extracting insights from complex datasets using Python, PySpark and SQL to drive business decisions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
