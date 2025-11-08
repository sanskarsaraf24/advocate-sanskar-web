import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-accent" />
            <span className="font-semibold">Advocate Sanskar Saraf</span>
          </div>
          
          <div className="text-sm text-primary-foreground/80 text-center md:text-left">
            © {new Date().getFullYear()} Sanskar Saraf. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
