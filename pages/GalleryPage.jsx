import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const GalleryPage = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryItems = [
    { id: "1", image: "/gallery/kerala_wedding.png", category: "Wedding", caption: "Vibrant traditional Kerala Hindu wedding", tags: ["Traditional", "Vibrant", "Hindu"] },
    { id: "2", image: "/gallery/church_wedding.png", category: "Wedding", caption: "Elegant Christian wedding in a grand church", tags: ["Elegant", "Christian", "Altar"] },
    { id: "3", image: "/gallery/sadhya_catering.png", category: "Catering", caption: "Grand Kerala Sadhya served on banana leaf", tags: ["Sadhya", "Gourmet", "Traditional"] },
    { id: "4", image: "/gallery/corporate_gala.png", category: "Custom", caption: "Luxury corporate gala dinner in a grand ballroom", tags: ["Corporate", "Luxury", "Gala"] },
    { id: "5", image: "/gallery/birthday_party.png", category: "Birthday", caption: "Lively luxury birthday party setup", tags: ["Lively", "Modern", "Balloons"] },
    { id: "6", image: "/gallery/memorial_service.png", category: "Memorial", caption: "Peaceful and elegant memorial service", tags: ["Peaceful", "Respectful", "White Wreaths"] },
    { id: "7", image: "/gallery/anniversary_toast.png", category: "Anniversary", caption: "Golden Anniversary champagne toast", tags: ["Toast", "Golden", "Crystal"] },
    { id: "8", image: "/gallery/baptisim_candles.png", category: "Baptism", caption: "Serene baptism ceremony setup", tags: ["Serene", "Holy", "Candles"] }
  ];
  const filteredItems = selectedFilter === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedFilter);
  const filters = ["All", "Wedding", "Memorial", "D\xE9cor", "Catering", "Anniversary", "Birthday", "Reunion", "Custom", "Baptism", "Photography", "Light & Sound"];
  const openLightbox = (item) => {
    const index = filteredItems.findIndex((i) => i.id === item.id);
    setCurrentImageIndex(index);
    setSelectedImage(item);
  };
  const navigateImage = (direction) => {
    if (direction === "prev") {
      const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : filteredItems.length - 1;
      setCurrentImageIndex(newIndex);
      setSelectedImage(filteredItems[newIndex]);
    } else {
      const newIndex = currentImageIndex < filteredItems.length - 1 ? currentImageIndex + 1 : 0;
      setCurrentImageIndex(newIndex);
      setSelectedImage(filteredItems[newIndex]);
    }
  };
  return <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {
    /* Header Section */
  }
        <section className="relative py-16 overflow-hidden border-b border-navy/10">
          <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url('/gallery/church_wedding.png')` }}>
            <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-white">
            <button
    onClick={() => navigate("/")}
    className="flex items-center gap-2 text-mist/80 hover:text-white mb-8 transition-colors drop-shadow-md"
  >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </button>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 text-glow">Gallery</h1>
            <p className="text-mist/90 text-lg max-w-2xl">
              Explore our portfolio of beautifully executed events. Each image tells a story of attention to detail and cultural sensitivity.
            </p>
          </div>
        </section>

        {
    /* Filter Bar */
  }
        <section className="bg-plum/20 py-6 border-b border-slate/20 sticky top-0 z-40">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-4">
              {filters.map((filter) => <button
    key={filter}
    onClick={() => setSelectedFilter(filter)}
    className={`px-6 py-2 rounded-refined transition-all ${selectedFilter === filter ? "bg-navy text-white shadow-soft" : "bg-mist text-navy hover:bg-slate/20"}`}
  >
                  {filter}
                </button>)}
            </div>
          </div>
        </section>

        {
    /* Masonry Grid */
  }
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
              {filteredItems.map((item) => <div
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
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <p className="font-serif text-lg mb-1">{item.caption}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, idx) => <span key={idx} className="text-xs bg-white/20 px-2 py-1 rounded">
                              {tag}
                            </span>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </section>
      </main>

      {
    /* Lightbox Viewer */
  }
      {selectedImage && <div className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-xl flex items-center justify-center p-6 animate-fade-in">
          <button
    onClick={() => setSelectedImage(null)}
    className="absolute top-6 right-6 text-white hover:text-slate transition-colors z-10"
  >
            <X className="w-8 h-8" />
          </button>
          
          <button
    onClick={() => navigateImage("prev")}
    className="absolute left-6 text-white hover:text-slate transition-colors z-10"
  >
            <ChevronLeft className="w-12 h-12" />
          </button>
          
          <button
    onClick={() => navigateImage("next")}
    className="absolute right-6 text-white hover:text-slate transition-colors z-10"
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
                {selectedImage.tags.map((tag, idx) => <span key={idx} className="text-sm bg-slate/20 px-3 py-1 rounded">
                    {tag}
                  </span>)}
              </div>
            </div>
          </div>
        </div>}

      <Footer />
    </div>;
};
export default GalleryPage;
