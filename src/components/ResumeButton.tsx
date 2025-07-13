
import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeButton = () => {
  return (
    <a 
      href="https://drive.google.com/file/d/1N-NWy-J3AM4XKX_epql5-jq0ClNE19tX/view?usp=drivesdk" 
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
        <ExternalLink className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0" />
      </Button>
    </a>
  );
};

export default ResumeButton;
