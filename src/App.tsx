import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CommercialDisputes from "./pages/CommercialDisputes";
import DebtResolution from "./pages/DebtResolution";
import ChequeBounce from "./pages/ChequeBounce";
import ConsumerDisputes from "./pages/ConsumerDisputes";
import DisputeResolution from "./pages/DisputeResolution";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/practice-areas/commercial-disputes" element={<CommercialDisputes />} />
          <Route path="/practice-areas/debt-resolution" element={<DebtResolution />} />
          <Route path="/practice-areas/cheque-bounce" element={<ChequeBounce />} />
          <Route path="/practice-areas/consumer-disputes" element={<ConsumerDisputes />} />
          <Route path="/practice-areas/dispute-resolution" element={<DisputeResolution />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
