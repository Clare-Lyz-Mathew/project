import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Utensils, Palette, Camera, Music, ArrowRight, Quote, Heart, Church, Sparkles, Globe, Target, Gem, Star, Send } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const HomePage = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        setParallaxOffset(scrolled * 0.5);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const serviceCategories = [
    {
      title: "Celebratory Events",
      description: "Weddings, birthdays, anniversaries, reunions, and milestones. Every moment deserves to be extraordinary and joyfully celebrated.",
      icon: Heart
    },
    {
      title: "Religious Ceremonies",
      description: "Sacred ceremonies across all faiths. We respect and honor your religious traditions with utmost care and reverence.",
      icon: Church
    },
    {
      title: "Memorial Services",
      description: "Respectful and meaningful services that honor life and legacy. Thoughtful coordination for solemn occasions.",
      icon: Quote
    },
    {
      title: "Custom Events",
      description: "Unique events that don't fit traditional categories. We bring your vision to life with creative and personalized solutions.",
      icon: Sparkles
    }
  ];
  const addOnServices = [
    { icon: Utensils, name: "Catering", description: "Gourmet cuisine" },
    { icon: Palette, name: "D\xE9cor", description: "Elegant styling" },
    { icon: Camera, name: "Photography", description: "Capture moments" },
    { icon: Music, name: "Light & Sound", description: "Atmospheric audio" }
  ];
  const whyChooseUs = [
    { icon: Globe, title: "Cultural Sensitivity", text: "We honor traditions from all backgrounds" },
    { icon: Sparkles, title: "Customization", text: "Every event is uniquely yours" },
    { icon: Target, title: "Professional Coordination", text: "Seamless execution from start to finish" },
    { icon: Gem, title: "Attention to Detail", text: "No detail is too small" }
  ];
  const initialTestimonials = [
    { name: "Arun & Meera", event: "Hindu Wedding", text: "The team coordinated our massive 3-day wedding flawlessly. Our guests were amazed by the traditional sadhya catering.", location: "Kochi, Kerala", rating: 5 },
    { name: "Sarah & James", event: "Wedding", text: "Elyza transformed our vision into reality. Every moment was perfect.", location: "London", rating: 5 },
    { name: "Varghese Family", event: "Baptism", text: "Beautiful arrangements for our son's baptism. The church floral decor was breathtaking.", location: "Kottayam, Kerala", rating: 5 },
    { name: "The Chen Family", event: "Memorial", text: "They handled everything with such grace and respect. We are forever grateful.", location: "New York", rating: 5 },
    { name: "TechCorp India", event: "Corporate Gala", text: "Highly professional event management. The AV setup and lighting were at an international standard.", location: "Trivandrum, Kerala", rating: 4 },
    { name: "Sneha & Rohan", event: "Destination Wedding", text: "We wanted a serene backwater wedding and Elyza Events delivered a masterpiece. Pure magic.", location: "Kumarakom, Kerala", rating: 5 },
    { name: "Maria Rodriguez", event: "Anniversary", text: "Our 50th anniversary celebration exceeded all expectations.", location: "Barcelona", rating: 4 }
  ];
  const [reviews, setReviews] = useState(initialTestimonials);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Review Form State
  const [newReview, setNewReview] = useState({ name: "", event: "", location: "", text: "", rating: 5 });
  const averageRating = (reviews.reduce((acc, rev) => acc + rev.rating, 0) / reviews.length).toFixed(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % reviews.length);
    }, 5e3);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;
    setReviews([newReview, ...reviews]);
    setNewReview({ name: "", event: "", location: "", text: "", rating: 5 });
    setCurrentTestimonial(0);
  };

  return <div className="min-h-screen">
      <Header />
      
      {
    /* Hero Section */
  }
      <section
    ref={heroRef}
    className="relative h-screen w-full flex items-center justify-center overflow-hidden"
  >
        <div
    className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
    style={{
      backgroundImage: `url('/gallery/baptisim_candles.png')`,
      transform: `translateY(${parallaxOffset}px) scale(1.1)`
    }}
  >
          <div className="absolute inset-0 bg-navy/60" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Make your vision <br />
            <span className="italic">come to life</span>
          </h1>
          <p className="text-mist/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Sophisticated event management for celebrations, memorials, and ceremonies that honor your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
    onClick={() => navigate("/categories")}
    className="px-8 py-4 bg-mauve text-navy text-sm tracking-widest font-bold uppercase rounded-refined hover:bg-mist transition-all duration-300 shadow-soft hover:shadow-soft-lg"
  >
              Plan an Event
            </button>
            <button
    onClick={() => navigate("/booking")}
    className="px-8 py-4 border-2 border-mauve text-white text-sm tracking-widest font-bold uppercase rounded-refined hover:bg-mauve hover:text-navy transition-all duration-300"
  >
              Check Availability
            </button>
          </div>
        </div>
      </section>

      {
    /* Service Categories Preview */
  }
      <section className="py-24 bg-mist">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">Our Services</h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              Explore our comprehensive event management solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => {
    const IconComponent = category.icon;
    return <div
      key={index}
      data-jq-reveal="true"
      className="bg-mist border border-mauve/20 rounded-soft p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 group"
    >
                  <div className="w-16 h-16 bg-mauve/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-mauve/30 transition-colors">
                    <IconComponent className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="text-xl font-serif text-slate mb-4">{category.title}</h3>
                  <p className="text-plum text-sm leading-relaxed mb-6 line-clamp-2">
                    {category.description}
                  </p>
                  <button
      onClick={() => navigate("/categories")}
      className="flex items-center gap-2 text-mauve font-semibold text-sm hover:text-navy transition-colors group-hover:gap-4"
    >
                    Explore <ArrowRight className="w-4 h-4" />
                  </button>
                </div>;
  })}
          </div>
        </div>
      </section>

      {
    /* Add-On Services Strip */
  }
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 md:gap-16">
            {addOnServices.map((service, index) => {
    const IconComponent = service.icon;
    return <div
      key={index}
      className="group relative flex flex-col items-center cursor-pointer"
    >
                  <div className="w-16 h-16 rounded-full bg-mauve/20 flex items-center justify-center mb-3 group-hover:bg-mauve/30 transition-colors">
                    <IconComponent className="w-8 h-8 text-mauve group-hover:text-plum transition-colors" />
                  </div>
                  <span className="text-mist/90 text-sm font-medium">{service.name}</span>
                  <span className="text-plum text-xs mt-1">{service.description}</span>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-mauve group-hover:w-full transition-all duration-300" />
                </div>;
  })}
          </div>
        </div>
      </section>

      {
    /* Why Choose Us */
  }
      <section className="py-24 bg-mist">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">Why Choose Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
    const IconComponent = item.icon;
    return <div
      key={index}
      data-jq-reveal="true"
      className="text-center animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
                  <div className="w-16 h-16 bg-mauve/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="text-xl font-serif text-navy mb-3">{item.title}</h3>
                  <p className="text-slate text-sm">{item.text}</p>
                </div>;
  })}
          </div>
        </div>
      </section>

      {
    /* Testimonials Carousel */
  }
      <section className="py-24 bg-plum/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">Client Experiences</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex text-mauve">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-6 h-6 ${i < Math.round(averageRating) ? "fill-current" : ""}`} />
                ))}
              </div>
              <span className="text-xl font-medium text-navy ml-2">{averageRating} / 5</span>
            </div>
            <p className="text-slate text-sm">Based on {reviews.length} genuine reviews worldwide</p>
          </div>
          
          <div className="max-w-4xl mx-auto relative mb-24" data-jq-reveal="true">
            <div className="bg-mist rounded-soft p-12 shadow-soft-lg min-h-[300px] flex flex-col justify-center transition-all duration-500">
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-12 h-12 text-mauve" />
                <div className="flex text-mauve">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < reviews[currentTestimonial].rating ? "fill-current" : ""}`} />
                  ))}
                </div>
              </div>
              <p className="text-navy text-lg font-light leading-relaxed mb-8 italic">
                "{reviews[currentTestimonial].text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-serif text-navy text-xl">{reviews[currentTestimonial].name}</p>
                  <p className="text-slate text-sm">{reviews[currentTestimonial].event} • {reviews[currentTestimonial].location}</p>
                </div>
                <div className="flex gap-2">
                  {reviews.map((_, index) => <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${index === currentTestimonial ? "bg-navy w-8" : "bg-mauve/30"}`}
                  />)}
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-white/50 backdrop-blur-sm rounded-soft p-8 md:p-12 shadow-soft border border-mist">
            <h3 className="text-2xl font-serif text-navy mb-6 text-center">Share Your Experience</h3>
            <form onSubmit={handleReviewSubmit} className="space-y-6">
              <div className="flex flex-col items-center mb-6">
                <p className="text-sm font-medium text-navy/70 mb-2 tracking-widest uppercase">Tap to Rate</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      className="transition-transform hover:scale-110"
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                    >
                      <Star className={`w-8 h-8 ${star <= newReview.rating ? "text-mauve fill-current" : "text-mist/80"}`} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name (e.g. Aswathy & Rahul)"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full bg-mist/30 border border-mauve/20 rounded-refined px-4 py-3 text-navy placeholder:text-navy/40 focus:border-mauve focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Location (e.g. Kochi, Kerala)"
                    value={newReview.location}
                    onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                    className="w-full bg-mist/30 border border-mauve/20 rounded-refined px-4 py-3 text-navy placeholder:text-navy/40 focus:border-mauve focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Event Type (e.g. Traditional Hindu Wedding)"
                  value={newReview.event}
                  onChange={(e) => setNewReview({ ...newReview, event: e.target.value })}
                  className="w-full bg-mist/30 border border-mauve/20 rounded-refined px-4 py-3 text-navy placeholder:text-navy/40 focus:border-mauve focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  required
                  placeholder="Tell us about your magical experience with Elyza Events..."
                  value={newReview.text}
                  onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                  rows={4}
                  className="w-full bg-mist/30 border border-mauve/20 rounded-refined px-4 py-3 text-navy placeholder:text-navy/40 focus:border-mauve focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-navy text-mist rounded-refined font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-plum transition-colors shadow-soft"
              >
                SUBMIT REVIEW <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default HomePage;
