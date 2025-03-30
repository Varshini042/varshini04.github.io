
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeButton = () => {
  return (
    <a 
      href="/lovable-uploads/f14b7b40-ccbc-4d7c-8385-169951127a5b.png" 
      download="Varshini_Sreeramsetty_Resume.png"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <Button 
        variant="outline" 
        className="group flex items-center gap-2 bg-white/10 backdrop-blur-sm border-data-teal/30 hover:bg-data-teal/10 transition-all duration-300"
      >
        <FileText className="h-4 w-4 text-data-teal group-hover:scale-110 transition-transform" />
        <span>View Resume</span>
        <Download className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0" />
      </Button>
    </a>
  );
};

export default ResumeButton;
