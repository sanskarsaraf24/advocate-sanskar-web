import { CheckCircle2 } from "lucide-react";
const About = () => {
  const steps = [{
    number: "1",
    title: "Consultation & Case Evaluation",
    description: "An initial, in-depth consultation to understand the nuances of your case and provide a preliminary assessment."
  }, {
    number: "2",
    title: "Strategy & Representation",
    description: "Meticulous development of a legal strategy, followed by strong, time-bound representation in the appropriate forum."
  }, {
    number: "3",
    title: "Resolution & Support",
    description: "Working towards a decisive resolution and providing ongoing support to ensure the successful conclusion of the matter."
  }];
  return <section id="about" className="py-28 bg-card border-y-2 border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8 mb-20">
          <div className="inline-block border-b-4 border-accent pb-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About the Practice
            </h2>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed font-crimson">Adv. Sanskar Saraf is an independent legal practitioner primarily focused on civil litigation and arbitration, with a growing emphasis on bank-related disputes, recovery proceedings, and enforcement actions before various courts and tribunals across Delhi.</p>
          
        </div>

        <div className="max-w-4xl mx-auto mt-24">
          <div className="text-center mb-16">
            <div className="inline-block border-b-4 border-accent pb-2">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Structured Approach to Legal Solutions
              </h3>
            </div>
            <p className="text-center text-muted-foreground mt-6 text-lg max-w-2xl mx-auto font-crimson">
              The process is designed to be transparent, efficient, and client-focused. Clients are guided through each stage with strategic counsel and clear communication.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map(step => <div key={step.number} className="bg-secondary/50 p-8 border-l-4 border-accent hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 border-2 border-accent flex items-center justify-center bg-card">
                      <span className="text-3xl font-bold text-accent font-playfair">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-lg font-crimson">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;