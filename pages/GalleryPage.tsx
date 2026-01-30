import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type FilterType = 'All' | 'Wedding' | 'Memorial' | 'Décor' | 'Catering' | 'Anniversary' | 'Birthday';

interface GalleryItem {
  id: string;
  image: string;
  category: FilterType;
  caption: string;
  tags: string[];
}

const GalleryPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryItems: GalleryItem[] = [
    { id: '1', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000', category: 'Wedding', caption: 'Elegant wedding ceremony', tags: ['Elegant', 'Traditional', 'Outdoor'] },
    { id: '2', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000', category: 'Anniversary', caption: 'Golden anniversary celebration', tags: ['Elegant', 'Intimate'] },
    { id: '3', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000', category: 'Birthday', caption: 'Milestone birthday party', tags: ['Modern', 'Celebration'] },
    { id: '4', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000', category: 'Catering', caption: 'Gourmet catering presentation', tags: ['Gourmet', 'Elegant'] },
    { id: '5', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000', category: 'Décor', caption: 'Sophisticated event décor', tags: ['Modern', 'Stylish'] },
    { id: '6', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000', category: 'Memorial', caption: 'Respectful memorial service', tags: ['Solemn', 'Traditional'] },
    { id: '7', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000', category: 'Wedding', caption: 'Cultural wedding celebration', tags: ['Cultural', 'Traditional'] },
    { id: '8', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561b1e?auto=format&fit=crop&q=80&w=1000', category: 'Catering', caption: 'Artistic food presentation', tags: ['Artistic', 'Gourmet'] },
    { id: '9', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000', category: 'Décor', caption: 'Floral arrangement design', tags: ['Floral', 'Elegant'] },
  ];

  const filteredItems = selectedFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter);

  const filters: FilterType[] = ['All', 'Wedding', 'Memorial', 'Décor', 'Catering', 'Anniversary', 'Birthday'];

  const openLightbox = (item: GalleryItem) => {
    const index = filteredItems.findIndex(i => i.id === item.id);
    setCurrentImageIndex(index);
    setSelectedImage(item);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : filteredItems.length - 1;
      setCurrentImageIndex(newIndex);
      setSelectedImage(filteredItems[newIndex]);
    } else {
      const newIndex = currentImageIndex < filteredItems.length - 1 ? currentImageIndex + 1 : 0;
      setCurrentImageIndex(newIndex);
      setSelectedImage(filteredItems[newIndex]);
    }
  };

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
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Gallery</h1>
            <p className="text-seashell/80 text-lg max-w-2xl">
              Explore our portfolio of beautifully executed events. Each image tells a story of attention to detail and cultural sensitivity.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="bg-lilac-ash/20 py-6 border-b border-almond-silk/20 sticky top-0 z-40">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-4">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-6 py-2 rounded-refined transition-all ${
                    selectedFilter === filter
                      ? 'bg-space-indigo text-white shadow-soft'
                      : 'bg-seashell text-space-indigo hover:bg-almond-silk/20'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Masonry Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item)}
                  className="mb-6 break-inside-avoid cursor-pointer group"
                >
                  <div className="relative overflow-hidden rounded-refined shadow-soft hover:shadow-soft-lg transition-all duration-300">
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-indigo/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <p className="font-serif text-lg mb-1">{item.caption}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, idx) => (
                            <span key={idx} className="text-xs bg-white/20 px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Viewer */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-space-indigo/95 backdrop-blur-xl flex items-center justify-center p-6 animate-fade-in">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-almond-silk transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-6 text-white hover:text-almond-silk transition-colors z-10"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>
          
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-6 text-white hover:text-almond-silk transition-colors z-10"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="max-w-6xl w-full">
            <img
              src={selectedImage.image}
              alt={selectedImage.caption}
              className="w-full h-auto max-h-[80vh] object-contain rounded-soft"
            />
            <div className="mt-6 text-center text-white">
              <p className="text-2xl font-serif mb-2">{selectedImage.caption}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {selectedImage.tags.map((tag, idx) => (
                  <span key={idx} className="text-sm bg-almond-silk/20 px-3 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;
