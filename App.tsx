import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventCategoriesPage from './pages/EventCategoriesPage';
import AddOnServicesPage from './pages/AddOnServicesPage';
import EventCustomizationPage from './pages/EventCustomizationPage';
import GalleryPage from './pages/GalleryPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import BookingAvailabilityPage from './pages/BookingAvailabilityPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative font-sans text-space-indigo bg-seashell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<EventCategoriesPage />} />
          <Route path="/addons" element={<AddOnServicesPage />} />
          <Route path="/customize" element={<EventCustomizationPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booking" element={<BookingAvailabilityPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
