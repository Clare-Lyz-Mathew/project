import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, X, Filter } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const EventCategoriesPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState("All");
  const [selectedCulture, setSelectedCulture] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const categories = [
    "Weddings",
    "Anniversaries",
    "Birthdays",
    "Reunions",
    "Baptisms",
    "Custom Celebrations",
    "Memorial Services"
  ];
  const themes = ["All", "International", "Minimalist", "Cultural", "Traditional", "Modern"];
  const cultures = ["All", "Hindu", "Christian", "Muslim", "Jewish", "Buddhist", "Regional", "Secular"];
  const categoryDescriptions = {
    "Weddings": {
      description: "Elegant ceremonies tailored to your cultural heritage. From intimate gatherings to grand celebrations with meticulous attention to detail.",
      packages: ["Intimate Ceremony", "Classic Celebration", "Grand Affair", "Destination Wedding"],
      image: "/gallery/church_wedding.png"
    },
    "Anniversaries": {
      description: "Celebrate milestones with sophistication. Whether it's your 25th or 50th anniversary, we create memorable experiences.",
      packages: ["Silver Anniversary", "Golden Jubilee", "Diamond Celebration", "Custom Milestone"],
      image: "/gallery/red_table_setup.jpg"
    },
    "Birthdays": {
      description: "From children's parties to milestone birthdays, we design celebrations that reflect personality and joy.",
      packages: ["Children's Party", "Teen Celebration", "Milestone Birthday", "Elegant Soirée"],
      image: "/gallery/balloon_bouquet.jpg"
    },
    "Reunions": {
      description: "Bring families and friends together with thoughtfully planned reunions that honor shared memories.",
      packages: ["Family Reunion", "Class Reunion", "Corporate Reunion", "Custom Gathering"],
      image: "/gallery/gala_dinner.jpg"
    },
    "Baptisms": {
      description: "Sacred ceremonies handled with reverence and respect. We honor your religious traditions.",
      packages: ["Traditional Baptism", "Modern Ceremony", "Multi-Faith Service", "Custom Ritual"],
      image: "/gallery/baptism_decor.jpg"
    },
    "Custom Celebrations": {
      description: "Unique events that don't fit traditional categories. We bring your vision to life.",
      packages: ["Custom Design", "Themed Event", "Corporate Celebration", "Special Occasion"],
      image: "/gallery/birthday_party.png"
    },
    "Memorial Services": {
      description: "Respectful and meaningful services that honor life and legacy. Thoughtful coordination for solemn occasions.",
      packages: ["Traditional Service", "Celebration of Life", "Memorial Gathering", "Tribute Event"],
      image: "/gallery/memorial_setup.jpg"
    }
  };
  return <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {
    /* Header Section */
  }
        <section className="relative py-16 overflow-hidden border-b border-navy/10">
          <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url('/gallery/gala_dinner.jpg')` }}>
            <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-white">
            <button
    onClick={() => navigate("/")}
    className="flex items-center gap-2 text-mist/80 hover:text-white mb-8 transition-colors drop-shadow-md"
  >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </button>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 text-glow">Event Categories</h1>
            <p className="text-mist/90 text-lg max-w-2xl">
              Browse our comprehensive range of event types. Each category offers tailored packages and customization options.
            </p>
          </div>
        </section>

        {
    /* Filter Panel */
  }
        <section className="bg-plum/20 py-8 border-b border-slate/20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <button
    onClick={() => setShowFilters(!showFilters)}
    className="flex items-center gap-2 px-6 py-3 bg-plum text-navy rounded-refined hover:bg-slate transition-colors"
  >
                <Filter className="w-4 h-4" /> Filters
              </button>
              
              {showFilters && <div className="flex flex-wrap gap-4 animate-fade-in">
                  <div>
                    <label className="block text-xs text-navy font-bold uppercase mb-2">Theme</label>
                    <select
    value={selectedTheme}
    onChange={(e) => setSelectedTheme(e.target.value)}
    className="px-4 py-2 bg-mist border border-slate/20 rounded-refined text-navy"
  >
                      {themes.map((theme) => <option key={theme} value={theme}>{theme}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-navy font-bold uppercase mb-2">Culture/Religion</label>
                    <select
    value={selectedCulture}
    onChange={(e) => setSelectedCulture(e.target.value)}
    className="px-4 py-2 bg-mist border border-slate/20 rounded-refined text-navy"
  >
                      {cultures.map((culture) => <option key={culture} value={culture}>{culture}</option>)}
                    </select>
                  </div>
                </div>}
            </div>
          </div>
        </section>

        {
    /* Category Grid */
  }
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => <div
    key={category}
    onClick={() => setSelectedCategory(category)}
    className="group relative h-[400px] overflow-hidden bg-mauve rounded-soft shadow-soft hover:shadow-soft-lg transition-all duration-300 cursor-pointer hover:-translate-y-2"
  >
                  <div
    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
    style={{ backgroundImage: `url(${categoryDescriptions[category].image})` }}
  >
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
                  </div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                    <h3 className="text-3xl font-serif mb-3">{category}</h3>
                    <p className="text-mist/90 text-sm mb-4 line-clamp-2">
                      {categoryDescriptions[category].description}
                    </p>
                    <button className="text-slate font-semibold text-sm hover:text-white transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>)}
            </div>
          </div>
        </section>
      </main>

      {
    /* Event Detail Modal */
  }
      {selectedCategory && <div className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-xl flex items-center justify-center p-6 animate-fade-in">
          <div className="bg-mist rounded-soft max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-soft-lg">
            <div className="bg-mauve text-white p-6 rounded-t-soft flex justify-between items-center">
              <h2 className="text-3xl font-serif">{selectedCategory}</h2>
              <button
    onClick={() => setSelectedCategory(null)}
    className="text-white hover:text-slate transition-colors"
  >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="mb-8">
                <img
    src={categoryDescriptions[selectedCategory].image}
    alt={selectedCategory}
    className="w-full h-64 object-cover rounded-refined mb-6"
  />
                <p className="text-mauve text-lg leading-relaxed">
                  {categoryDescriptions[selectedCategory].description}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-serif text-navy mb-4">Available Packages</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categoryDescriptions[selectedCategory].packages.map((pkg, index) => <div
    key={index}
    className="p-4 border border-slate/20 rounded-refined hover:border-slate transition-colors"
  >
                      <p className="font-semibold text-navy">{pkg}</p>
                    </div>)}
                </div>
              </div>

              <div className="flex gap-4">
                <button
    onClick={() => {
      navigate("/customize");
      setSelectedCategory(null);
    }}
    className="flex-1 py-4 bg-slate text-navy font-bold uppercase rounded-refined hover:bg-mist transition-colors"
  >
                  Customize This Event
                </button>
                <button
    onClick={() => {
      navigate("/addons");
      setSelectedCategory(null);
    }}
    className="px-8 py-4 border-2 border-slate text-navy font-bold uppercase rounded-refined hover:bg-slate transition-colors"
  >
                  View Add-Ons
                </button>
              </div>
            </div>
          </div>
        </div>}

      <Footer />
    </div>;
};
export default EventCategoriesPage;
