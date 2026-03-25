import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventCategoriesPage from "./pages/EventCategoriesPage";
import AddOnServicesPage from "./pages/AddOnServicesPage";
import EventCustomizationPage from "./pages/EventCustomizationPage";
import GalleryPage from "./pages/GalleryPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import BookingAvailabilityPage from "./pages/BookingAvailabilityPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect } from "react";
import { initJQueryEffects } from "./utils/jquery.effects";

const App = () => {
  useEffect(() => {
    initJQueryEffects();
  }, []);

  return <Router>
      <ScrollToTop />
      <div className="relative font-sans text-navy bg-transparent">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<EventCategoriesPage />} />
          <Route path="/addons" element={<AddOnServicesPage />} />
          <Route path="/customize" element={<ProtectedRoute><EventCustomizationPage /></ProtectedRoute>} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booking" element={<ProtectedRoute><BookingAvailabilityPage /></ProtectedRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>;
};
export default App;
