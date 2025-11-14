import { Button } from "@/components/ui/button";
import sanskarImage from "@/assets/sanskar-saraf.png";
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Advocate
                <br />
                Sanskar Saraf
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl font-crimson">
              Specializing in commercial disputes, debt resolution, and consumer protection with a commitment to delivering strategic legal solutions.
            </p>
            
            <div className="flex gap-4 pt-6">
              <Button size="lg" onClick={scrollToContact} className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById("practice-areas")?.scrollIntoView({
              behavior: "smooth"
            })} className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-base">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-sm transform rotate-3" />
              <div className="absolute -inset-4 bg-primary/10 rounded-sm transform -rotate-3" />
              <img src={sanskarImage} alt="Advocate Sanskar Saraf" className="relative rounded-sm w-full max-w-md object-cover shadow-2xl border-4 border-card" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;