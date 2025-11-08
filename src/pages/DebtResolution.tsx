import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, CheckCircle2 } from "lucide-react";

const DebtResolution = () => {
  const frameworks = [
    {
      title: "Debt Recovery Tribunal (DRT)",
      description: "The DRT and its appellate tribunal, DRAT, were established to expedite the recovery of debts owed to banks and financial institutions. We represent both creditors, who file recovery applications to reclaim their dues, and debtors, who may file counterclaims and objections to defend against such actions.",
    },
    {
      title: "SARFAESI Act, 2002",
      description: "The SARFAESI Act empowers secured creditors to enforce their security interests without the intervention of a court or tribunal. We provide legal counsel to creditors in a step-by-step process of issuing notices under Section 13(2), taking symbolic or physical possession of secured assets, and proceeding with their sale. Simultaneously, we defend the rights of borrowers by assisting them in filing objections and appeals before the DRT to challenge illegal or procedural lapses in the creditor's actions.",
    },
  ];

  const services = [
    {
      title: "DRT & SARFAESI Matters",
      description: "We handle all stages of the process, from drafting and filing Original Applications or defending against them in the DRT, to managing enforcement actions and appeals.",
    },
    {
      title: "Strategic Debt Settlement",
      description: "We assist both creditors and debtors in negotiating structured settlements, including advising on RBI's guidelines for one-time settlements (OTS) of non-performing assets (NPAs). Our goal is to achieve commercially viable and sustainable resolutions that avoid protracted litigation.",
    },
    {
      title: "Legal Notices",
      description: "We draft and respond to demand notices under the SARFAESI Act and other relevant statutes, ensuring all communications are legally sound and strategically aligned with your case.",
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
                <TrendingUp className="h-12 w-12 text-accent" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Debt Resolution & Recovery Matters
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The landscape of debt is complex, involving various legal acts and specialized tribunals. Advocate Sanskar Saraf offers expert legal services to all parties involved, including creditors seeking recovery and debtors seeking a fair and structured resolution. His expertise is grounded in the legal frameworks that govern debt, including the Recovery of Debts and Bankruptcy Act, 1993, and the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act). He is adept at handling matters under these acts, representing both creditors seeking to enforce security interests and borrowers defending their rights.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Understanding the DRT and SARFAESI Frameworks
            </h2>
            <div className="space-y-8">
              {frameworks.map((framework, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    {framework.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {framework.description}
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
              Our Comprehensive Services
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

      <Footer />
    </div>
  );
};

export default DebtResolution;
