
import { Code, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="h-5 w-5 text-data-teal" />
            <span className="font-mono font-bold">Varshini S</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-2 md:space-y-0 text-sm text-foreground/80">
            <a href="#about" className="hover:text-data-teal transition-colors">About</a>
            <a href="#skills" className="hover:text-data-teal transition-colors">Skills</a>
            <a href="#projects" className="hover:text-data-teal transition-colors">Projects</a>
            <a href="#contact" className="hover:text-data-teal transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-data-teal" />
              <a href="mailto:varshini042@gmail.com" className="hover:text-data-teal transition-colors">varshini042@gmail.com</a>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-data-teal" />
              <span>Hyderabad, Telangana</span>
            </div>
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/varshini-sreeramsetty" className="hover:text-data-teal transition-colors">LinkedIn</a>
            <a href="https://github.com/Varshini042" className="hover:text-data-teal transition-colors">GitHub</a>
            <a href="mailto:varshini042@gmail.com" className="hover:text-data-teal transition-colors">Email</a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs text-foreground/40">
          <p>&copy; {currentYear} <a href="https://varshini-sreeramsetty-portfolio.com" className="hover:text-data-teal transition-colors">Varshini_Sreeramsetty-portfolio</a>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
