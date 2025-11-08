import { Briefcase, FileText, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PracticeAreas = () => {
  const practices = [
    {
      icon: Briefcase,
      title: "Commercial Disputes",
      description: "Expert representation in complex commercial litigation, contract disputes, partnership conflicts, and business disagreements. I provide strategic counsel to protect your business interests and resolve disputes efficiently through negotiation, arbitration, or litigation.",
    },
    {
      icon: TrendingUp,
      title: "Debt Resolution & Recovery",
      description: "Comprehensive debt recovery services including legal notice drafting, recovery suits, execution proceedings, and asset attachment. I assist creditors in recovering outstanding dues while ensuring compliance with legal procedures and protecting your financial interests.",
    },
    {
      icon: FileText,
      title: "Cheque Bounce Cases",
      description: "Specialized handling of dishonored cheque matters under Section 138 of the Negotiable Instruments Act. From sending legal notices to representing clients in criminal proceedings, I ensure swift and effective resolution of cheque bounce cases with a focus on maximum recovery.",
    },
    {
      icon: Shield,
      title: "Consumer Disputes & Resolution",
      description: "Advocacy in consumer protection matters before Consumer Forums at District, State, and National levels. I represent clients in cases involving defective goods, deficient services, unfair trade practices, and seek appropriate compensation for consumer grievances.",
    },
  ];

  return (
    <section id="practice-areas" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Areas of Practice
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive legal services tailored to your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {practices.map((practice) => (
            <Card key={practice.title} className="border-border hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <practice.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{practice.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {practice.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
