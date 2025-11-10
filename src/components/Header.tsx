import { Scale, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const scrollToSection = (id: string) => {
    if (!isHome) {
      navigate(`/#${id}`);
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b-2 border-border shadow-md">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="flex items-center gap-3 cursor-pointer group">
          <Scale className="h-7 w-7 text-accent transition-transform group-hover:scale-110" />
          <span className="text-2xl font-bold text-foreground font-playfair">Sanskar Saraf</span>
        </button>
        
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-base font-crimson text-muted-foreground hover:text-foreground transition-colors border-b-2 border-transparent hover:border-accent pb-1"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-base font-crimson text-muted-foreground hover:text-foreground transition-colors border-b-2 border-transparent hover:border-accent pb-1"
          >
            About
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-base font-crimson text-muted-foreground hover:text-foreground transition-colors border-b-2 border-transparent hover:border-accent pb-1">
              Practice Areas
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card border-2 border-border shadow-xl z-50">
              <DropdownMenuItem onClick={() => navigate("/practice-areas/commercial-disputes")} className="font-crimson text-base">
                Commercial Disputes
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/practice-areas/debt-resolution")} className="font-crimson text-base">
                Debt Resolution & Recovery
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/practice-areas/cheque-bounce")} className="font-crimson text-base">
                Cheque Bounce Cases
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/practice-areas/consumer-disputes")} className="font-crimson text-base">
                Consumer Disputes
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/practice-areas/dispute-resolution")} className="font-crimson text-base">
                Dispute Resolution
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-primary px-6 py-2 text-base"
          >
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
