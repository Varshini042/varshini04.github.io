
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
        delay: 0.5
      }}
    >
      <Button 
        onClick={scrollToTop} 
        className="fixed bottom-8 right-8 p-3 bg-data-teal hover:bg-data-teal/90 rounded-full shadow-lg z-50 hover:scale-110 transition-transform"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </motion.div>
  );
};

export default BackToTopButton;
