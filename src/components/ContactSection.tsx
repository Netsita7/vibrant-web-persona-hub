
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Get In Touch</h3>
            <p className="text-muted-foreground">
              I'm currently available for freelance work and full-time positions.
              If you have a project that you want to get started, or you're looking
              for a developer to join your team, feel free to contact me.
            </p>
            
            <div className="space-y-4 mt-8">
              {/* Location */}
              <Card className="p-4 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary">📍</span>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">New York, USA</p>
                </div>
              </Card>
              
              {/* Email */}
              <Card className="p-4 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary">✉️</span>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">hello@johndoe.com</p>
                </div>
              </Card>
              
              {/* Phone */}
              <Card className="p-4 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary">📱</span>
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Your email" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="Subject" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  required 
                  rows={5}
                />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
