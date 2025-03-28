
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary pt-16">
      <div className="container px-4 md:px-6 py-8 md:py-10 relative">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-data-blue rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-data-teal rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-data-purple rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          
          <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">
            Hello, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-data-teal to-data-blue">
              Varshini Sreeramsetty
            </span>
          </h1>
          
          <div className="typing-container mb-6 md:mb-8 pb-2">
            <span className="font-mono text-xl md:text-2xl font-semibold">
              Data Analyst | BI Developer | Data Engineer
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-8 md:mb-10">
            Transforming complex data into meaningful insights and powerful visualizations 
            to help businesses make data-driven decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-data-teal hover:bg-data-teal/90 text-white">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" className="border-data-teal text-data-teal hover:bg-data-teal/10">
              <a href="#about">Learn More About Me</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
