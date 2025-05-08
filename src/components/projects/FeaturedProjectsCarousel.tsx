
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ProjectData } from "./types";
import CarouselCard from "./CarouselCard";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface FeaturedProjectsCarouselProps {
  projects: ProjectData[];
}

const FeaturedProjectsCarousel = ({ projects }: FeaturedProjectsCarouselProps) => {
  // Only use the first 3 projects for the carousel
  const featuredProjects = projects.slice(0, 3);
  const isMobile = useIsMobile();
  
  return (
    <div className="mb-8 md:mb-12" data-aos="fade-up">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {featuredProjects.map((project, index) => (
            <CarouselItem key={`carousel-${index}`} className="basis-full sm:basis-1/1 md:basis-1/2 lg:basis-1/3 p-1 md:p-2">
              <motion.div 
                whileHover={{ scale: isMobile ? 1.01 : 1.03 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <CarouselCard project={project} />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default FeaturedProjectsCarousel;
