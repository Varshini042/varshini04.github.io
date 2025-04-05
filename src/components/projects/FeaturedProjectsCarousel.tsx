
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectData } from "./types";
import CarouselCard from "./CarouselCard";
import { motion } from "framer-motion";

interface FeaturedProjectsCarouselProps {
  projects: ProjectData[];
}

const FeaturedProjectsCarousel = ({ projects }: FeaturedProjectsCarouselProps) => {
  // Only use the first 3 projects for the carousel
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <div className="mb-12" data-aos="fade-up">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {featuredProjects.map((project, index) => (
            <CarouselItem key={`carousel-${index}`} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <CarouselCard project={project} />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="relative transform-none mx-2 bg-data-teal/20 text-data-teal hover:bg-data-teal/30" />
          <CarouselNext className="relative transform-none mx-2 bg-data-teal/20 text-data-teal hover:bg-data-teal/30" />
        </div>
      </Carousel>
    </div>
  );
};

export default FeaturedProjectsCarousel;
