import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

const ChequeBounce = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const payeeServices = [
    "We draft and serve the mandatory statutory demand notice to the drawer, giving them the required time to make the payment.",
    "If the payment is not made, we file a criminal complaint before the appropriate court, ensuring strict compliance with all procedural requirements.",
    "We then provide robust representation throughout the legal proceedings, including hearings and evidence.",
  ];

  const drawerServices = [
    "We provide strategic legal defense against criminal complaints filed under the Negotiable Instruments Act.",
    "Our services include challenging the legal validity of the demand notice, disproving the existence of a legally enforceable debt or liability.",
    "We also focus on negotiating a settlement to avoid a lengthy and costly criminal trial.",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-accent/10 rounded-lg">
                <FileText className="h-12 w-12 text-accent" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Cheque Bounce Cases
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cheque dishonour cases are a common challenge in the commercial world, governed by a specific legal framework. Advocate Sanskar Saraf provides end-to-end legal support to both the payee (the person who received the cheque) and the drawer (the person who issued it). His expertise lies in the legal framework provided by the Negotiable Instruments Act, 1881.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              How We Handle Cheque Bounce Cases
            </h2>
            
            <div className="space-y-12">
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  For the Payee (Complainant)
                </h3>
                <p className="text-muted-foreground mb-6">
                  We provide a step-by-step legal process to ensure effective recovery:
                </p>
                <div className="space-y-4">
                  {payeeServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{service}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  For the Drawer (Accused)
                </h3>
                <p className="text-muted-foreground mb-6">
                  We provide strategic legal defense:
                </p>
                <div className="space-y-4">
                  {drawerServices.map((service, index) => (
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

export default ChequeBounce;
