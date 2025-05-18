
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// import ProductM3DOC from "./pages/ProductM3DOC";
import ProductDiagnosticMicroscope from "./pages/ProductDiagnosticMicroscope";
import ProductLumoraScan from "./pages/ProductLumoraScan";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Commented out M3DOC route as requested */}
          {/* <Route path="/products/m3doc" element={<ProductM3DOC />} /> */}
          <Route path="/products/diagnostic-microscope" element={<ProductDiagnosticMicroscope />} />
          <Route path="/products/lumora-scan" element={<ProductLumoraScan />} />
          <Route path="about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<About />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
