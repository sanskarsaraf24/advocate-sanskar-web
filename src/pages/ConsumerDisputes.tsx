import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, CheckCircle2 } from "lucide-react";

const ConsumerDisputes = () => {
  const consumerServices = [
    "Advocate Sanskar Saraf assists consumers in filing complaints before the appropriate consumer dispute resolution forum, ranging from the District Commission to the National Commission.",
    "Cases are meticulously prepared to seek reliefs such as refunds, replacement of defective goods, or compensation for damages.",
    "The goal is to secure swift and effective relief for clients.",
  ];

  const businessServices = [
    "Advocate Sanskar Saraf provides businesses with a robust legal defense against consumer complaints.",
    "Services include challenging the merits of a complaint, highlighting jurisdictional issues, and representing the business in all hearings.",
    "The focus is on protecting clients' commercial reputation and defending against potentially frivolous or unsubstantiated claims.",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-accent/10 rounded-lg">
                <Shield className="h-12 w-12 text-accent" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Consumer Disputes
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Consumer disputes require a specialized understanding of both commercial law and consumer protection principles. Advocate Sanskar Saraf provides dedicated and effective legal counsel to both consumers and businesses in cases related to unfair trade practices, defective goods, and deficiencies in services. His work is guided by the Consumer Protection Act, 2019, and a commitment to upholding a fair and transparent marketplace.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Services
            </h2>
            
            <div className="space-y-12">
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  For Consumers
                </h3>
                <div className="space-y-4">
                  {consumerServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{service}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  For Businesses
                </h3>
                <div className="space-y-4">
                  {businessServices.map((service, index) => (
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

export default ConsumerDisputes;
