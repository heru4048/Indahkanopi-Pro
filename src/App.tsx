import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import KanopiDetail from "./pages/services/KanopiDetail";
import AtapDetail from "./pages/services/AtapDetail";
import BalkonDetail from "./pages/services/BalkonDetail";
import PlavonDetail from "./pages/services/PlavonDetail";
import PagarDetail from "./pages/services/PagarDetail";
import TanggaDetail from "./pages/services/TanggaDetail";
import WhatsAppFloating from "./components/WhatsAppFloating";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/kanopi" element={<KanopiDetail />} />
          <Route path="/services/atap" element={<AtapDetail />} />
          <Route path="/services/balkon" element={<BalkonDetail />} />
          <Route path="/services/plavon" element={<PlavonDetail />} />
          <Route path="/services/pagar" element={<PagarDetail />} />
          <Route path="/services/tangga" element={<TanggaDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppFloating />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
