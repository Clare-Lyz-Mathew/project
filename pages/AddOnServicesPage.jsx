import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, X, Utensils, Palette, Camera, Music, Building2 } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const AddOnServicesPage = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const services = [
    {
      id: "catering-1",
      type: "Catering",
      title: "Gourmet Catering",
      description: "Exquisite cuisine tailored to your event. From traditional dishes to modern fusion, our culinary team creates memorable dining experiences.",
      priceRange: "₹5,000 - ₹20,000 per person",
      icon: Utensils,
      images: [
        "/gallery/corporate_gala.png"
      ]
    },
    {
      id: "decor-1",
      type: "D\xE9cor",
      title: "Elegant Styling",
      description: "Transform any space with sophisticated d\xE9cor. Floral arrangements, lighting, and thematic elements that reflect your vision.",
      priceRange: "₹50,000 - ₹5,00,000",
      icon: Palette,
      images: [
        "/gallery/anniversary_toast.png"
      ]
    },
    {
      id: "photography-1",
      type: "Photography",
      title: "Photography & Videography",
      description: "Professional documentation of your event. High-quality photos and videos that capture every meaningful moment.",
      priceRange: "₹80,000 - ₹3,00,000",
      icon: Camera,
      images: [
        "/gallery/baptisim_candles.png"
      ]
    },
    {
      id: "light-sound-1",
      type: "Light & Sound",
      title: "Atmospheric Audio & Lighting",
      description: "Create the perfect ambiance with professional sound systems and lighting design. From intimate gatherings to grand celebrations.",
      priceRange: "₹30,000 - ₹2,50,000",
      icon: Music,
      images: [
        "/gallery/anniversary_toast.png"
      ]
    },
    {
      id: "venue-1",
      type: "Venue Liaison",
      title: "Venue Coordination",
      description: "Expert assistance in finding and securing the perfect venue. We handle negotiations, logistics, and vendor coordination.",
      priceRange: "Included in package",
      icon: Building2,
      images: [
        "/gallery/sadhya_catering.png",
        "/gallery/kerala_wedding.png"
      ]
    }
  ];
  const filteredServices = selectedFilter === "All" ? services : services.filter((s) => s.type === selectedFilter);
  const serviceTypes = ["All", "Catering", "Décor", "Photography", "Light & Sound", "Venue Liaison"];
  return <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {
    /* Header Section */
  }
        <section className="relative py-16 overflow-hidden border-b border-navy/10">
          <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url('/gallery/birthday_party.png')` }}>
            <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-white">
            <button
    onClick={() => navigate("/")}
    className="flex items-center gap-2 text-mist/80 hover:text-white mb-8 transition-colors drop-shadow-md"
  >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </button>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 text-glow">Add-On Services</h1>
            <p className="text-mist/90 text-lg max-w-2xl">
              Enhance your event with our modular services. Mix and match to create the perfect experience.
            </p>
          </div>
        </section>

        {
    /* Filter Bar */
  }
        <section className="bg-plum/20 py-6 border-b border-slate/20">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-4">
              {serviceTypes.map((type) => <button
    key={type}
    onClick={() => setSelectedFilter(type)}
    className={`px-6 py-2 rounded-refined transition-all ${selectedFilter === type ? "bg-navy text-white shadow-soft" : "bg-mist text-navy hover:bg-slate/20"}`}
  >
                  {type}
                </button>)}
            </div>
          </div>
        </section>

        {
    /* Service Grid */
  }
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => {
    const IconComponent = service.icon;
    return <div
      key={service.id}
      className="bg-mist border border-slate/20 rounded-soft p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2"
    >
                    <div className="w-16 h-16 bg-slate/20 rounded-full flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-navy" />
                    </div>
                    <h3 className="text-2xl font-serif text-navy mb-3">{service.title}</h3>
                    <p className="text-mauve text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <p className="text-slate font-semibold mb-6">{service.priceRange}</p>
                    
                    {
      /* Image Gallery Preview */
    }
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.images.slice(0, 2).map((img, idx) => <img
      key={idx}
      src={img}
      alt={`${service.title} ${idx + 1}`}
      onClick={() => setSelectedImage(img)}
      className="w-full h-32 object-cover rounded-refined cursor-pointer hover:opacity-80 transition-opacity"
    />)}
                    </div>

                    <button
      onClick={() => navigate("/customize")}
      className="w-full py-3 bg-slate text-navy font-bold uppercase rounded-refined hover:bg-mist transition-colors flex items-center justify-center gap-2"
    >
                      <Plus className="w-4 h-4" /> Add to Event Plan
                    </button>
                  </div>;
  })}
            </div>
          </div>
        </section>

        {
    /* Media Gallery Section */
  }
        <section className="py-16 bg-plum/10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif text-navy mb-8 text-center">Service Gallery</h2>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
              {services.flatMap(
    (service) => service.images.map((img, idx) => <div
      key={`${service.id}-${idx}`}
      onClick={() => setSelectedImage(img)}
      className="mb-6 break-inside-avoid cursor-pointer group"
    >
                    <img
      src={img}
      alt={`${service.title} gallery`}
      className="w-full rounded-refined shadow-soft hover:shadow-soft-lg transition-all duration-300 group-hover:scale-105"
    />
                  </div>)
  )}
            </div>
          </div>
        </section>
      </main>

      {
    /* Lightbox Viewer */
  }
      {selectedImage && <div
    className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-xl flex items-center justify-center p-6 animate-fade-in"
    onClick={() => setSelectedImage(null)}
  >
          <button
    onClick={(e) => {
      e.stopPropagation();
      setSelectedImage(null);
    }}
    className="absolute top-6 right-6 text-white hover:text-slate transition-colors"
  >
            <X className="w-8 h-8" />
          </button>
          <img
    src={selectedImage}
    alt="Gallery view"
    className="max-w-full max-h-full object-contain rounded-soft"
    onClick={(e) => e.stopPropagation()}
  />
        </div>}

      <Footer />
    </div>;
};
export default AddOnServicesPage;
