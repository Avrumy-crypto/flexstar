import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import CapabilitiesPage from "./pages/CapabilitiesPage";
import ExtrusionPage from "./pages/capabilities/ExtrusionPage";
import LaminationPage from "./pages/capabilities/LaminationPage";
import PrintingPage from "./pages/capabilities/PrintingPage";
import ConvertingPage from "./pages/capabilities/ConvertingPage";
import MarketsPage from "./pages/MarketsPage";
import MaterialsPage from "./pages/MaterialsPage";
import SustainabilityPage from "./pages/SustainabilityPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import LocationsPage from "./pages/LocationsPage";
import AdminAuthPage from "./pages/AdminAuthPage";
import AdminPage from "./pages/AdminPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Admin routes without header/footer */}
            <Route path="/admin/auth" element={<AdminAuthPage />} />
            <Route path="/admin" element={<AdminPage />} />
            
            {/* Public routes with header/footer */}
            <Route
              path="*"
              element={
                <div className="flex min-h-screen flex-col">
                  <Header />
                  <div className="flex-1">
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/products" element={<ProductsPage />} />
                      <Route path="/products/:slug" element={<ProductCategoryPage />} />
                      <Route path="/capabilities/extrusion" element={<ExtrusionPage />} />
                      <Route path="/capabilities/lamination" element={<LaminationPage />} />
                      <Route path="/capabilities/printing" element={<PrintingPage />} />
                      <Route path="/capabilities/converting" element={<ConvertingPage />} />
                      <Route path="/capabilities" element={<CapabilitiesPage />} />
                      <Route path="/markets" element={<MarketsPage />} />
                      <Route path="/markets/:slug" element={<MarketsPage />} />
                      <Route path="/materials" element={<MaterialsPage />} />
                      <Route path="/sustainability" element={<SustainabilityPage />} />
                      <Route path="/faq" element={<FAQPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/contact/locations" element={<LocationsPage />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </div>
                  <Footer />
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
