import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Scale, CheckCircle2 } from "lucide-react";

const DisputeResolution = () => {
  const arbitrationServices = [
    "Governed by the Arbitration and Conciliation Act, 1996, arbitration provides a private, binding, and expedited process for resolving commercial disputes outside of court.",
    "Advocate Sanskar Saraf assists in all stages of the process, including drafting arbitration clauses, invoking proceedings, presenting cases before a tribunal, and enforcing the final arbitral award.",
  ];

  const mediationServices = [
    "For disputes that require a more collaborative approach, mediation services focus on facilitating a structured dialogue between parties to reach a mutually agreeable settlement.",
    "Clients are represented during the mediation process, ensuring their legal and commercial interests are protected while working towards a swift and amicable resolution.",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-accent/10 rounded-lg">
                <Scale className="h-12 w-12 text-accent" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Dispute Resolution
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Advocate Sanskar Saraf recognizes that not all disputes require traditional litigation. He is a strong advocate for Alternative Dispute Resolution (ADR) mechanisms that are often more efficient, confidential, and commercially sound. His practice provides expert counsel in both arbitration and mediation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Arbitration and Mediation Services
            </h2>
            
            <div className="space-y-12">
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Arbitration
                </h3>
                <div className="space-y-4">
                  {arbitrationServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{service}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Mediation
                </h3>
                <div className="space-y-4">
                  {mediationServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{service}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DisputeResolution;
