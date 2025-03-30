
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const roles = ["Data Analyst", "BI Developer", "Data Engineer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const typingInterval = 100; // Speed of typing (lower is faster)
    const deletingInterval = 50; // Speed of deleting (lower is faster)
    const pauseTime = 1500; // Pause time when role is fully typed
    
    let timer: number;
    
    const currentRole = roles[currentRoleIndex];
    
    if (!isDeleting && displayText === currentRole) {
      // Full word typed, wait before deleting
      timer = window.setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && displayText === "") {
      // Word fully deleted, move to next role
      setIsDeleting(false);
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      timer = window.setTimeout(() => {}, deletingInterval);
    } else {
      // Type or delete characters
      timer = window.setTimeout(() => {
        if (isDeleting) {
          setDisplayText(prev => prev.substring(0, prev.length - 1));
        } else {
          setDisplayText(prev => currentRole.substring(0, prev.length + 1));
        }
      }, isDeleting ? deletingInterval : typingInterval);
    }
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);
  
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
          
          <div className="mb-6 md:mb-8 h-8 flex items-center justify-center">
            <span className="font-mono text-xl md:text-2xl font-semibold relative">
              {displayText}
              <span className="absolute right-[-8px] top-0 h-full w-[2px] bg-data-teal animate-pulse"></span>
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
