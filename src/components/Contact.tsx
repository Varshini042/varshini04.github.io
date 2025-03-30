
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, User, Code, ArrowRight, ExternalLink, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ResumeButton from "./ResumeButton";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create a mailto link with the form data
      const mailtoLink = `mailto:varshini042@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Open the mail client
      window.open(mailtoLink, "_blank");
      
      toast({
        title: "Message ready to send",
        description: "Your default email client has been opened with your message.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "There was a problem preparing your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container bg-secondary/50">
      <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
      
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="space-y-6" data-aos="fade-right" data-aos-delay="100">
          <h3 className="text-2xl font-semibold">Let's Connect</h3>
          <p className="text-lg text-foreground/80">
            I'm always open to discussing new projects, challenges in data analysis, 
            or opportunities to collaborate on data initiatives.
          </p>
          
          <div className="mt-6 flex justify-center md:justify-start">
            <ResumeButton />
          </div>
          
          <div className="space-y-4 mt-8">
            <Card className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-data-teal/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-data-teal" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/60">Email</h4>
                    <a 
                      href="mailto:varshini042@gmail.com" 
                      className="font-medium hover:text-data-teal transition-colors flex items-center gap-1"
                    >
                      varshini042@gmail.com
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-data-blue/10 p-3 rounded-lg">
                    <User className="h-6 w-6 text-data-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/60">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/varshini-sreeramsetty" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-medium hover:text-data-blue transition-colors flex items-center gap-1"
                    >
                      linkedin.com/in/varshini-sreeramsetty
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-data-purple/10 p-3 rounded-lg">
                    <Code className="h-6 w-6 text-data-purple" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/60">GitHub</h4>
                    <a 
                      href="https://github.com/Varshini042" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-medium hover:text-data-purple transition-colors flex items-center gap-1"
                    >
                      github.com/Varshini042
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-data-orange/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-data-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/60">Location</h4>
                    <p className="font-medium">Hyderabad, Telangana</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-500/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/60">Phone</h4>
                    <a 
                      href="tel:+916281136925" 
                      className="font-medium hover:text-green-500 transition-colors flex items-center gap-1"
                    >
                      +91 6281136925
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div data-aos="fade-left" data-aos-delay="200">
          <Card className="border-none shadow-md transform transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="transition-all duration-300 focus:border-data-teal focus:ring-data-teal/20"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="transition-all duration-300 focus:border-data-teal focus:ring-data-teal/20"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    required
                    className="transition-all duration-300 focus:border-data-teal focus:ring-data-teal/20"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="transition-all duration-300 focus:border-data-teal focus:ring-data-teal/20"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-data-teal hover:bg-data-teal/90 transition-all duration-300 transform hover:-translate-y-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <ArrowRight className="h-4 w-4 ml-2" />}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
