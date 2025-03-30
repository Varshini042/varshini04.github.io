
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize AOS with updated configuration
    AOS.init({
      duration: 800,
      once: false,
      mirror: false,
      offset: 100,
      easing: 'ease-out-cubic',
      delay: 50,
      disable: 'mobile'
    });

    // Refresh AOS on window resize and when page is fully loaded
    window.addEventListener('resize', AOS.refresh);
    window.addEventListener('load', AOS.refresh);

    return () => {
      window.removeEventListener('resize', AOS.refresh);
      window.removeEventListener('load', AOS.refresh);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
