import { CheckCircle2 } from "lucide-react";

const About = () => {
  const steps = [
    {
      number: "1",
      title: "Consultation & Case Evaluation",
      description: "An initial, in-depth consultation to understand the nuances of your case and provide a preliminary assessment.",
    },
    {
      number: "2",
      title: "Strategy & Representation",
      description: "Meticulous development of a legal strategy, followed by strong, time-bound representation in the appropriate forum.",
    },
    {
      number: "3",
      title: "Resolution & Support",
      description: "Working towards a decisive resolution and providing ongoing support to ensure the successful conclusion of the matter.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            About the Practice
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Adv. Sanskar Saraf is an independent legal practitioner enrolled with the Bar Council of Delhi. His practice is primarily focused on civil litigation and arbitration, with a growing emphasis on bank-related disputes, recovery proceedings, and enforcement actions before various courts and tribunals across Delhi.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            He represents and advises clients in matters involving contractual breaches, recovery suits, execution petitions, and arbitral disputes, with a distinct focus on cases concerning financial institutions and lending entities. His work encompasses both litigation and advisory functions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-4">
            Structured Approach to Legal Solutions
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            The process is designed to be transparent, efficient, and client-focused. Clients are guided through each stage with strategic counsel and clear communication.
          </p>

          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-accent">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
