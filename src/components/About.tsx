
import { Card, CardContent } from "@/components/ui/card";
import { User, Book, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-data-purple/10 p-3 rounded-lg">
                  <User className="h-6 w-6 text-data-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
                  <p className="text-foreground/80">
                    I'm a passionate data professional with expertise in analytics, 
                    business intelligence, and data engineering. I specialize in transforming 
                    raw data into actionable insights that drive business decisions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-data-blue/10 p-3 rounded-lg">
                  <Book className="h-6 w-6 text-data-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-foreground/80">
                    I hold a Bachelor of Technology in Electronics and Communications,
                    which provided me with a strong technical foundation. I am also a 
                    Microsoft Certified Power BI Data Analyst, specializing in data 
                    visualization and business analytics.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-data-teal/10 p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-data-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Experience</h3>
                  <p className="text-foreground/80">
                    With experience across various industries, I've developed expertise 
                    in data pipeline development, BI dashboard creation, and analytical 
                    reporting. I've helped organizations leverage their data assets to 
                    gain competitive advantages.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">My Approach to Data</h3>
          <p className="text-lg text-foreground/80">
            I believe that effective data work is about more than just technical skills—it's about 
            understanding business needs, asking the right questions, and communicating insights 
            in a way that drives action.
          </p>
          <p className="text-lg text-foreground/80">
            My approach combines technical rigor with business acumen to deliver solutions that 
            create real value. I focus on building scalable, maintainable data systems that evolve 
            with your organization's needs.
          </p>
          <p className="text-lg text-foreground/80">
            Whether I'm building ETL pipelines, creating interactive dashboards, or performing 
            complex analyses, my goal remains the same: to help you harness the power of your data.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <span className="bg-data-blue/10 text-data-blue px-4 py-2 rounded-full">Data Analytics</span>
            <span className="bg-data-teal/10 text-data-teal px-4 py-2 rounded-full">Business Intelligence</span>
            <span className="bg-data-purple/10 text-data-purple px-4 py-2 rounded-full">Data Engineering</span>
            <span className="bg-data-pink/10 text-data-pink px-4 py-2 rounded-full">Data Visualization</span>
            <span className="bg-data-blue/10 text-data-blue px-4 py-2 rounded-full">ML Integration</span>
            <span className="bg-data-teal/10 text-data-teal px-4 py-2 rounded-full">Data Strategy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
