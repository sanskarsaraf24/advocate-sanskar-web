import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I will get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-28 bg-card border-y-2 border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8 mb-20">
          <div className="inline-block border-b-4 border-accent pb-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Get in Touch
            </h2>
          </div>
          <p className="text-xl text-muted-foreground font-crimson">
            Schedule a consultation to discuss your legal needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-accent/10 border-2 border-accent/20 group-hover:border-accent transition-colors">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-xl font-playfair">Phone</h3>
                  <p className="text-muted-foreground text-lg font-crimson">+91 9717460924</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-accent/10 border-2 border-accent/20 group-hover:border-accent transition-colors">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-xl font-playfair">Email</h3>
                  <p className="text-muted-foreground text-lg font-crimson">contact@sanskarsaraf.in</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-accent/10 border-2 border-accent/20 group-hover:border-accent transition-colors">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-xl font-playfair">Office</h3>
                  <p className="text-muted-foreground text-lg font-crimson">
                    2608, Naya Bazaar, Delhi 110006
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-secondary/50 p-10 border-2 border-border shadow-xl">
            <div className="space-y-2">
              <Input
                placeholder="Your Name"
                required
                className="bg-background border-2 border-border font-crimson text-base py-6"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your Email"
                required
                className="bg-background border-2 border-border font-crimson text-base py-6"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="tel"
                placeholder="Your Phone"
                required
                className="bg-background border-2 border-border font-crimson text-base py-6"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Briefly describe your legal matter"
                required
                className="min-h-[140px] bg-background border-2 border-border font-crimson text-base"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-primary py-6 text-base"
              size="lg"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
