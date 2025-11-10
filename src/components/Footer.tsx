import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 border-t-4 border-accent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Scale className="h-7 w-7 text-accent" />
            <span className="font-bold text-xl font-playfair">Advocate Sanskar Saraf</span>
          </div>
          
          <div className="text-base text-primary-foreground/90 text-center md:text-left font-crimson">
            © {new Date().getFullYear()} Sanskar Saraf. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
