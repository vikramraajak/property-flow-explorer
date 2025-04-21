
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvestorProperties from "./pages/InvestorProperties";
import PropertyDetails from "./pages/PropertyDetails";
import NotFound from "./pages/NotFound";
import PropertyDetailsForm from "./pages/application/PropertyDetailsForm";
import FarmingPlanForm from "./pages/application/FarmingPlanForm";
import FinancialInfoForm from "./pages/application/FinancialInfoForm";
import DocumentsUploadForm from "./pages/application/DocumentsUploadForm";
import ReviewForm from "./pages/application/ReviewForm";
import SuccessPage from "./pages/application/SuccessPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InvestorProperties />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          
          {/* Application Flow Routes */}
          <Route path="/application/property-details" element={<PropertyDetailsForm />} />
          <Route path="/application/farming-plan" element={<FarmingPlanForm />} />
          <Route path="/application/financial-info" element={<FinancialInfoForm />} />
          <Route path="/application/documents" element={<DocumentsUploadForm />} />
          <Route path="/application/review" element={<ReviewForm />} />
          <Route path="/application/success" element={<SuccessPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
