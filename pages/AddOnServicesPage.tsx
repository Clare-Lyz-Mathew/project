import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, X, Utensils, Palette, Camera, Music, Building2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type ServiceType = 'Catering' | 'Décor' | 'Photography' | 'Light & Sound' | 'Venue Liaison';

interface AddOnService {
  id: string;
  type: ServiceType;
  title: string;
  description: string;
  priceRange: string;
  icon: React.ComponentType<{ className?: string }>;
  images: string[];
}

const AddOnServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState<ServiceType | 'All'>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const services: AddOnService[] = [
    {
      id: 'catering-1',
      type: 'Catering',
      title: 'Gourmet Catering',
      description:
        'Exquisite cuisine tailored to your event. From traditional dishes to modern fusion, our culinary team creates memorable dining experiences.',
      priceRange: '£50 - £200 per person',
      icon: Utensils,
      images: [
        'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1555939594-58d7cb561b1e?auto=format&fit=crop&q=80&w=1000',
      ],
    },
    {
      id: 'decor-1',
      type: 'Décor',
      title: 'Elegant Styling',
      description:
        'Transform any space with sophisticated décor. Floral arrangements, lighting, and thematic elements that reflect your vision.',
      priceRange: '£500 - £5,000',
      icon: Palette,
      images: [
        'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000',
      ],
    },
    {
      id: 'photography-1',
      type: 'Photography',
      title: 'Photography & Videography',
      description:
        'Professional documentation of your event. High-quality photos and videos that capture every meaningful moment.',
      priceRange: '£800 - £3,000',
      icon: Camera,
      images: [
        'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000',
      ],
    },
    {
      id: 'light-sound-1',
      type: 'Light & Sound',
      title: 'Atmospheric Audio & Lighting',
      description:
        'Create the perfect ambiance with professional sound systems and lighting design. From intimate gatherings to grand celebrations.',
      priceRange: '£300 - £2,500',
      icon: Music,
      images: [
        'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000',
      ],
    },
    {
      id: 'venue-1',
      type: 'Venue Liaison',
      title: 'Venue Coordination',
      description:
        'Let us handle venue selection, negotiations, and coordination. We work with premium venues worldwide.',
      priceRange: 'Included in package',
      icon: Building2,
      images: [
        'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000',
      ],
    }
  ];

  const filteredServices = selectedFilter === 'All' 
    ? services 
    : services.filter(s => s.type === selectedFilter);

  const serviceTypes: (ServiceType | 'All')[] = ['All', 'Catering', 'Décor', 'Photography', 'Light & Sound', 'Venue Liaison'];

  return (
    <div className="min-h-screen bg-seashell">
      <Header />
      
      <main className="pt-24">
        {/* Header Section */}
        <section className="bg-space-indigo text-white py-16">
          <div className="container mx-auto px-6">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-almond-silk hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </button>
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Add-On Services</h1>
            <p className="text-seashell/80 text-lg max-w-2xl">
              Enhance your event with our modular services. Mix and match to create the perfect experience.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="bg-lilac-ash/20 py-6 border-b border-almond-silk/20">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-4">
              {serviceTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedFilter(type)}
                  className={`px-6 py-2 rounded-refined transition-all ${
                    selectedFilter === type
                      ? 'bg-space-indigo text-white shadow-soft'
                      : 'bg-seashell text-space-indigo hover:bg-almond-silk/20'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Service Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-seashell border border-almond-silk/20 rounded-soft p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 bg-almond-silk/20 rounded-full flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-space-indigo" />
                    </div>
                    <h3 className="text-2xl font-serif text-space-indigo mb-3">{service.title}</h3>
                    <p className="text-dusty-grape text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <p className="text-almond-silk font-semibold mb-6">{service.priceRange}</p>
                    
                    {/* Image Gallery Preview */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.images.slice(0, 2).map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`${service.title} ${idx + 1}`}
                          onClick={() => setSelectedImage(img)}
                          className="w-full h-32 object-cover rounded-refined cursor-pointer hover:opacity-80 transition-opacity"
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => navigate('/customize')}
                      className="w-full py-3 bg-almond-silk text-space-indigo font-bold uppercase rounded-refined hover:bg-seashell transition-colors flex items-center justify-center gap-2"
                    >
                      <Plus className="w-4 h-4" /> Add to Event Plan
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Media Gallery Section */}
        <section className="py-16 bg-lilac-ash/10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif text-space-indigo mb-8 text-center">Service Gallery</h2>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
              {services.flatMap(service => 
                service.images.map((img, idx) => (
                  <div
                    key={`${service.id}-${idx}`}
                    onClick={() => setSelectedImage(img)}
                    className="mb-6 break-inside-avoid cursor-pointer group"
                  >
                    <img
                      src={img}
                      alt={`${service.title} gallery`}
                      className="w-full rounded-refined shadow-soft hover:shadow-soft-lg transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-space-indigo/95 backdrop-blur-xl flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-6 right-6 text-white hover:text-almond-silk transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery view"
            className="max-w-full max-h-full object-contain rounded-soft"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default AddOnServicesPage;
