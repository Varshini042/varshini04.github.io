
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: "SQL", level: 95, category: "Data" },
    { name: "Python", level: 90, category: "Programming" },
    { name: "Tableau", level: 92, category: "Visualization" },
    { name: "Power BI", level: 88, category: "Visualization" },
    { name: "ETL/ELT", level: 85, category: "Data" },
    { name: "Data Modeling", level: 82, category: "Data" },
    { name: "R", level: 78, category: "Programming" },
    { name: "Cloud Data Platforms", level: 80, category: "Infrastructure" },
  ];
  
  const toolsAndTechnologies = [
    "PostgreSQL", "MySQL", "AWS Redshift", "Snowflake", 
    "Apache Airflow", "Pandas", "NumPy", "Scikit-Learn",
    "Jupyter", "dbt", "Looker", "Excel", "Git", "Docker",
    "Azure Data Factory", "Google BigQuery"
  ];

  return (
    <section id="skills" className="section-container bg-secondary/50">
      <h2 className="section-title">Skills & Expertise</h2>
      
      <div className="space-y-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center mb-8">Technical Skills</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((skill) => (
              <Card key={skill.name} className="overflow-hidden border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-sm bg-data-teal/10 text-data-teal px-2 py-1 rounded-full">
                      {skill.category}
                    </span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-secondary" indicatorClassName="bg-data-teal" />
                  <span className="text-xs text-foreground/60 mt-1 block text-right">{skill.level}%</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center mb-8">Tools & Technologies</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {toolsAndTechnologies.map((tool) => (
              <span 
                key={tool}
                className="bg-background px-4 py-2 rounded-full border border-border hover:border-data-blue hover:bg-data-blue/5 transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-data-blue/10 to-data-blue/5 border-none shadow-md">
            <CardContent className="p-6 text-center">
              <h4 className="text-xl font-semibold mb-3">Data Analysis</h4>
              <p className="text-foreground/80">
                Expert in extracting insights from complex datasets using 
                statistical methods and analytical tools.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-data-teal/10 to-data-teal/5 border-none shadow-md">
            <CardContent className="p-6 text-center">
              <h4 className="text-xl font-semibold mb-3">Business Intelligence</h4>
              <p className="text-foreground/80">
                Creating interactive dashboards and reports that transform data 
                into actionable business insights.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-data-purple/10 to-data-purple/5 border-none shadow-md">
            <CardContent className="p-6 text-center">
              <h4 className="text-xl font-semibold mb-3">Data Engineering</h4>
              <p className="text-foreground/80">
                Building robust data pipelines and infrastructure to ensure 
                reliable data flow across organizations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
