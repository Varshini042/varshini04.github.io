
import { Card, CardContent } from "@/components/ui/card";
import { User, Book, Briefcase, CircleDot, Brain, Target } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="about" className="section-container relative">
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-data-blue rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-data-teal rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <h2 className="section-title mb-10">About Me</h2>
      
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
        <div className="space-y-5">
          {[
            {
              icon: <User className="h-6 w-6 text-data-purple" />,
              title: "Who I Am",
              content: "I'm a passionate data professional with expertise in analytics, business intelligence, and data engineering. I specialize in transforming raw data into actionable insights that drive business decisions.",
              color: "data-purple",
              delay: 0
            },
            {
              icon: <Book className="h-6 w-6 text-data-blue" />,
              title: "Education",
              content: "I hold a Bachelor of Technology in Electronics and Communications, which provided me with a strong technical foundation. I am also a Microsoft Certified Power BI Data Analyst, specializing in data visualization and business analytics.",
              color: "data-blue",
              delay: 1
            },
            {
              icon: <Briefcase className="h-6 w-6 text-data-teal" />,
              title: "Experience",
              content: "With experience across various industries, I've developed expertise in data pipeline development, BI dashboard creation, and analytical reporting. I've helped organizations leverage their data assets to gain competitive advantages.",
              color: "data-teal",
              delay: 2
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="overflow-hidden border-t-2" style={{ borderTopColor: `var(--${item.color})` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`bg-${item.color}/10 p-3 rounded-lg`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-foreground/80">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="h-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-data-blue/20 to-data-teal/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-xl h-full flex flex-col">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-data-blue/10 border border-data-blue/30 animate-pulse">
                <CircleDot className="h-12 w-12 text-data-blue" />
              </div>
            </div>
            <div className="space-y-4 flex-grow">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-data-blue to-data-teal bg-clip-text text-transparent text-center">My Approach to Data</h3>
              <p className="text-foreground/80">
                I believe that effective data work is about more than just technical skills—it's about 
                understanding business needs, asking the right questions, and communicating insights 
                in a way that drives action.
              </p>
              <p className="text-foreground/80">
                My approach combines technical rigor with business acumen to deliver solutions that 
                create real value. I focus on building scalable, maintainable data systems that evolve 
                with your organization's needs.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="md:col-span-2 mt-3"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { text: "Data Analytics", color: "data-blue" },
              { text: "Business Intelligence", color: "data-teal" },
              { text: "Data Engineering", color: "data-purple" },
              { text: "Data Visualization", color: "data-pink" },
              { text: "ML Integration", color: "data-blue" },
              { text: "Data Strategy", color: "data-teal" }
            ].map((tag, i) => (
              <motion.span
                key={i}
                className={`bg-${tag.color}/10 text-${tag.color} px-4 py-2 rounded-full text-sm font-medium`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {tag.text}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
