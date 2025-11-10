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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer">
          <Scale className="h-6 w-6 text-accent" />
          <span className="text-xl font-semibold text-foreground">Sanskar Saraf</span>
        </button>
        
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Practice Areas
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border-border">
              <DropdownMenuItem onClick={() => navigate("/practice-areas/commercial-disputes")}>
                Commercial Disputes
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/practice-areas/debt-resolution")}>
                Debt Resolution & Recovery
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/practice-areas/cheque-bounce")}>
                Cheque Bounce Cases
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/practice-areas/consumer-disputes")}>
                Consumer Disputes
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/practice-areas/dispute-resolution")}>
                Dispute Resolution
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
