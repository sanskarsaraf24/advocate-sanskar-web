import { Briefcase, FileText, Shield, TrendingUp, Scale } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const PracticeAreas = () => {
  const practices = [
    {
      icon: Briefcase,
      title: "Commercial Disputes",
      description: "Commercial disputes are an inherent part of the business world, but when they arise, they require swift, strategic, and decisive legal action. Advocate Sanskar Saraf provides comprehensive legal counsel for a wide spectrum of commercial disputes, representing both plaintiffs and defendants with an equal measure of expertise.",
      link: "/practice-areas/commercial-disputes",
    },
    {
      icon: TrendingUp,
      title: "Debt Resolution & Recovery",
      description: "The landscape of debt is complex, involving various legal acts and specialized tribunals. Advocate Sanskar Saraf offers expert legal services to all parties involved, including creditors seeking recovery and debtors seeking a fair and structured resolution.",
      link: "/practice-areas/debt-resolution",
    },
    {
      icon: FileText,
      title: "Cheque Bounce Cases",
      description: "Cheque dishonour cases are a common challenge in the commercial world, governed by a specific legal framework. Advocate Sanskar Saraf provides end-to-end legal support to both the payee (the person who received the cheque) and the drawer (the person who issued it).",
      link: "/practice-areas/cheque-bounce",
    },
    {
      icon: Shield,
      title: "Consumer Disputes",
      description: "Consumer disputes require a specialized understanding of both commercial law and consumer protection principles. Advocate Sanskar Saraf provides dedicated and effective legal counsel to both consumers and businesses in cases related to unfair trade practices, defective goods, and deficiencies in services.",
      link: "/practice-areas/consumer-disputes",
    },
    {
      icon: Scale,
      title: "Dispute Resolution",
      description: "Advocate Sanskar Saraf recognizes that not all disputes require traditional litigation. He is a strong advocate for Alternative Dispute Resolution (ADR) mechanisms that are often more efficient, confidential, and commercially sound. His practice provides expert counsel in both arbitration and mediation.",
      link: "/practice-areas/dispute-resolution",
    },
  ];

  return (
    <section id="practice-areas" className="py-28 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8 mb-20">
          <div className="inline-block border-b-4 border-accent pb-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Areas of Practice
            </h2>
          </div>
          <p className="text-xl text-muted-foreground font-crimson">
            Comprehensive legal services tailored to your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {practices.map((practice) => (
            <Link key={practice.title} to={practice.link}>
              <Card className="border-2 border-border hover:shadow-2xl transition-all duration-300 h-full cursor-pointer hover:border-accent bg-card">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-accent/10 border-2 border-accent/20">
                      <practice.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <CardTitle className="text-2xl font-playfair">{practice.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground leading-relaxed text-base font-crimson">
                    {practice.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
