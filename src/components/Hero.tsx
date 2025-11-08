import { Button } from "@/components/ui/button";
import sanskarImage from "@/assets/sanskar-saraf.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-accent font-medium tracking-wider uppercase text-sm">
                Legal Excellence
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Advocate
                <br />
                Sanskar Saraf
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Specializing in commercial disputes, debt resolution, and consumer protection with a commitment to delivering strategic legal solutions.
            </p>
            
            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("practice-areas")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl" />
              <img
                src={sanskarImage}
                alt="Advocate Sanskar Saraf"
                className="relative rounded-2xl w-full max-w-md object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
