
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
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)"
      }}
    >
      <Button 
        onClick={scrollToTop} 
        className="fixed bottom-8 right-8 p-3 bg-data-teal hover:bg-data-teal/90 rounded-full shadow-lg z-50 transition-all duration-300 border border-data-teal/20"
        aria-label="Back to top"
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default BackToTopButton;
