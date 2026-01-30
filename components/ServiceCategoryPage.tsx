
import React, { useState, useEffect } from 'react';
import { ServiceDetail, GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../constants';
import { ArrowLeft, ArrowDown } from 'lucide-react';
import AddOnMarketplace from './AddOnMarketplace';
import VisionBoard from './VisionBoard';
import BookingEngine from './BookingEngine';

interface ServiceCategoryPageProps {
  service: ServiceDetail;
  onBack: () => void;
  onBook: (eventType: any, addons: string[]) => void;
}

const ServiceCategoryPage: React.FC<ServiceCategoryPageProps> = ({ service, onBack, onBook }) => {
  const [subFilter, setSubFilter] = useState('All');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [showBooking, setShowBooking] = useState(false);

  // Router logic: only pull related past works specifically for this category/classification
  const filteredGallery = GALLERY_ITEMS.filter(item => {
    if (item.classification !== service.classification) return false;
    if (subFilter === 'All') return true;
    if (subFilter === 'Cultural & Regional') return item.subType === 'Cultural';
    if (subFilter === 'Religious') return item.subType === 'Religious';
    if (subFilter === 'Modern/Thematic') return item.subType === 'Modern';
    return true;
  });

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const getThemeStyles = () => {
    switch(service.themeColor) {
      case 'light': return 'bg-white text-charcoal';
      case 'dignified': return 'bg-charcoal text-white border-stone';
      default: return 'bg-charcoal text-white';
    }
  };

  return (
    <div className={`min-h-screen ${getThemeStyles()} animate-fade-in relative`}>
      {/* Background PNG Overlay */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 transition-opacity duration-1000"
        style={{ backgroundImage: `url(${service.overlayPattern})` }}
      />

      {/* Dynamic Header */}
      <nav className="p-8 flex justify-between items-center sticky top-0 z-40 bg-inherit/90 backdrop-blur-md border-b border-silver/10">
        <button onClick={onBack} className="flex items-center gap-4 text-xs tracking-widest font-bold opacity-70 hover:opacity-100 transition-opacity">
          <ArrowLeft className="w-4 h-4" /> EXIT SUITE
        </button>
        <span className="text-xs tracking-[0.6em] font-serif uppercase">{service.title}</span>
      </nav>

      {/* Hero Content */}
      <section className="container mx-auto px-6 py-32 flex flex-col items-center text-center relative z-10">
        <div className="w-px h-32 bg-silver/20 mb-12"></div>
        <p className="text-[10px] tracking-[0.5em] text-silver uppercase mb-8 font-bold">{service.classification} Services</p>
        <h1 className="text-6xl md:text-9xl font-serif italic mb-12 animate-slide-up leading-tight tracking-tighter">
          {service.id === 'Marketplace' ? 'The Modular' : service.title}
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-3xl opacity-80 leading-relaxed mb-20 px-4">
          {service.description}
        </p>
        <div className="flex flex-wrap justify-center gap-12">
          {service.features.map((f, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-silver/60">{f}</span>
              <div className="w-16 h-px bg-silver/20"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Work Record Section */}
      <section className="py-24 container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-silver/10 pb-12 gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif italic">Category Record</h2>
            <p className="text-silver text-sm mt-4 font-light">Meticulously curated {service.classification.toLowerCase()} past works.</p>
          </div>
          {service.subFilters && (
            <div className="flex flex-wrap gap-10">
              {service.subFilters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setSubFilter(filter)}
                  className={`text-[10px] tracking-[0.4em] font-bold uppercase transition-all ${
                    subFilter === filter ? 'opacity-100 scale-110 border-b border-current' : 'opacity-30 hover:opacity-60'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {filteredGallery.map((item, i) => (
            <div key={item.id} className={`group relative overflow-hidden h-[700px] shadow-2xl ${i % 2 !== 0 ? 'md:mt-32' : ''}`}>
              <img src={item.url} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/10 transition-all duration-700"></div>
              <div className="absolute bottom-16 left-16 text-white max-w-md">
                <p className="text-xs tracking-[0.4em] uppercase mb-4 opacity-70 font-bold">{item.location}</p>
                <h3 className="text-4xl font-serif italic mb-6 leading-tight">{item.subType || item.type} Record</h3>
                <div className="w-12 h-px bg-white/40 transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          ))}
          {filteredGallery.length === 0 && (
            <div className="col-span-full py-40 text-center opacity-40 italic font-serif text-3xl">Archive records coming soon.</div>
          )}
        </div>
      </section>

      {/* Customization & Booking Suite Integration */}
      <section id="category-booking" className="pt-32 relative z-10 bg-inherit">
        <div className="container mx-auto px-6 mb-16 text-center">
          <h2 className="text-4xl font-serif italic mb-4">The {service.classification} Suite</h2>
          <p className="text-silver text-sm tracking-widest uppercase font-bold">Configure Your Requirements</p>
        </div>
        <BookingEngine 
          preselectedClassification={service.classification} 
          initialAddons={selectedAddOns} 
        />
      </section>

      {/* Add-On Marketplace (Conditional View) */}
      {service.id !== 'Marketplace' && (
        <AddOnMarketplace 
          selectedAddOns={selectedAddOns}
          onToggleAddOn={toggleAddOn}
        />
      )}

      {/* Global Ready to Plan CTA */}
      <section className="py-48 bg-charcoal text-white text-center relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl md:text-8xl font-serif mb-12 italic">Ready to Plan?</h2>
          <p className="text-platinum text-xl font-light mb-20 max-w-xl mx-auto leading-relaxed">
            Your {service.classification.toLowerCase()} vision is ready to be arquitected by our team of senior event curators.
          </p>
          <button 
            onClick={() => document.getElementById('category-booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-20 py-8 border border-white hover:bg-white hover:text-charcoal transition-all duration-700 text-[10px] tracking-[0.6em] font-bold uppercase"
          >
            Initiate Project Brief
          </button>
        </div>
      </section>

      {/* Floating Vision Board */}
      {selectedAddOns.length > 0 && (
        <VisionBoard 
          eventType={service.id as any}
          selectedAddOns={selectedAddOns}
          onRemoveAddOn={toggleAddOn}
          onProceed={() => document.getElementById('category-booking')?.scrollIntoView({ behavior: 'smooth' })}
        />
      )}
    </div>
  );
};

export default ServiceCategoryPage;
