import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase, CheckCircle2 } from "lucide-react";

const CommercialDisputes = () => {
  const services = [
    {
      title: "Breach of Contract",
      description: "We provide end-to-end legal services for disputes arising from commercial agreements. Our work includes the drafting and issuance of a formal legal notice to establish the cause of action and initiate a dialogue for resolution. When negotiation fails, we meticulously prepare and file suits for damages, specific performance, or other remedies in the appropriate Commercial Court.",
    },
    {
      title: "Corporate & Partnership Disputes",
      description: "We handle complex disputes between business partners, shareholders, and management. This includes litigation over partnership deeds, director's liability, and corporate governance issues. We work to achieve an efficient resolution while protecting the financial and operational integrity of our clients.",
    },
    {
      title: "Recovery of Money",
      description: "We assist in suits for the recovery of money, providing strategic legal action to recover outstanding dues through the appropriate judicial forums. We are experienced in navigating the procedural framework of the Code of Civil Procedure, 1908, particularly the summary procedure under Order XXXVII, to ensure time-bound and effective recovery.",
    },
    {
      title: "Legal Documentation & Advisory",
      description: "We believe that the best legal strategy is often a proactive one. We advise on and draft legally sound commercial contracts, shareholder agreements, and other legal documents, meticulously building in provisions for dispute avoidance and risk mitigation.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Initial Case Evaluation",
      description: "Our first step is a thorough analysis of all contractual documents, correspondence, and financial records to assess the legal validity and strength of your claim or defense.",
    },
    {
      number: "02",
      title: "Strategic Legal Notice",
      description: "We draft and issue a precise legal notice that clearly outlines the facts, breaches, and legal grounds for the claim, setting the stage for either a negotiated settlement or litigation.",
    },
    {
      number: "03",
      title: "Representation in Court",
      description: "We provide robust legal representation in Commercial Courts, civil courts, and other tribunals. Our approach is characterized by detailed preparation, compelling arguments, and a relentless focus on securing a favorable outcome for our client.",
    },
    {
      number: "04",
      title: "Enforcement of Decrees",
      description: "Following a successful judgment, we assist in the execution and enforcement of the decree to ensure that the awarded relief is realized effectively and without undue delay.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-accent/10 rounded-lg">
                <Briefcase className="h-12 w-12 text-accent" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Commercial Disputes & Corporate Litigation
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Commercial disputes are an inherent part of the business world, but when they arise, they require swift, strategic, and decisive legal action. Advocate Sanskar Saraf provides comprehensive legal counsel for a wide spectrum of commercial disputes, representing both plaintiffs and defendants with an equal measure of expertise. His practice is built on a deep understanding of corporate law, the intricacies of commercial transactions, and the procedural nuances of civil and commercial litigation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Overview of Our Services
            </h2>
            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Our Process in Detail
            </h2>
            <div className="space-y-6">
              {process.map((step) => (
                <div
                  key={step.number}
                  className="bg-card p-6 rounded-lg border border-border"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-accent">{step.number}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
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

      <Footer />
    </div>
  );
};

export default CommercialDisputes;
