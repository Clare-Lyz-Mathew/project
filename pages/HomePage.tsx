import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Utensils, Palette, Camera, Music, ArrowRight, Quote, Heart, Church, Sparkles, Globe, Target, Gem } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        setParallaxOffset(scrolled * 0.5);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceCategories = [
    {
      title: 'Celebratory Events',
      description:
        'Weddings, birthdays, anniversaries, reunions, and milestones. Every moment deserves to be extraordinary and joyfully celebrated.',
      icon: Heart,
    },
    {
      title: 'Religious Ceremonies',
      description:
        'Sacred ceremonies across all faiths. We respect and honor your religious traditions with utmost care and reverence.',
      icon: Church,
    },
    {
      title: 'Memorial Services',
      description:
        'Respectful and meaningful services that honor life and legacy. Thoughtful coordination for solemn occasions.',
      icon: Quote,
    },
    {
      title: 'Custom Events',
      description:
        "Unique events that don't fit traditional categories. We bring your vision to life with creative and personalized solutions.",
      icon: Sparkles,
    },
  ];

  const addOnServices = [
    { icon: Utensils, name: 'Catering', description: 'Gourmet cuisine' },
    { icon: Palette, name: 'Décor', description: 'Elegant styling' },
    { icon: Camera, name: 'Photography', description: 'Capture moments' },
    { icon: Music, name: 'Light & Sound', description: 'Atmospheric audio' }
  ];

  const whyChooseUs = [
    { icon: Globe, title: 'Cultural Sensitivity', text: 'We honor traditions from all backgrounds' },
    { icon: Sparkles, title: 'Customization', text: 'Every event is uniquely yours' },
    { icon: Target, title: 'Professional Coordination', text: 'Seamless execution from start to finish' },
    { icon: Gem, title: 'Attention to Detail', text: 'No detail is too small' },
  ];

  const testimonials = [
    { name: 'Sarah & James', event: 'Wedding', text: 'Elyza transformed our vision into reality. Every moment was perfect.', location: 'London' },
    { name: 'The Chen Family', event: 'Memorial', text: 'They handled everything with such grace and respect. We are forever grateful.', location: 'New York' },
    { name: 'Maria Rodriguez', event: 'Anniversary', text: 'Our 50th anniversary celebration exceeded all expectations.', location: 'Barcelona' }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000')`,
            transform: `translateY(${parallaxOffset}px) scale(1.1)`
          }}
        >
          <div className="absolute inset-0 bg-space-indigo/50" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Make your vision <br />
            <span className="italic">come to life</span>
          </h1>
          <p className="text-seashell/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Sophisticated event management for celebrations, memorials, and ceremonies that honor your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/categories')}
              className="px-8 py-4 bg-almond-silk text-space-indigo text-sm tracking-widest font-bold uppercase rounded-refined hover:bg-seashell transition-all duration-300 shadow-soft hover:shadow-soft-lg"
            >
              Plan an Event
            </button>
            <button 
              onClick={() => navigate('/booking')}
              className="px-8 py-4 border-2 border-almond-silk text-white text-sm tracking-widest font-bold uppercase rounded-refined hover:bg-almond-silk hover:text-space-indigo transition-all duration-300"
            >
              Check Availability
            </button>
          </div>
        </div>
      </section>

      {/* Service Categories Preview */}
      <section className="py-24 bg-seashell">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-space-indigo mb-4">Our Services</h2>
            <p className="text-dusty-grape text-lg max-w-2xl mx-auto">
              Explore our comprehensive event management solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="bg-seashell border border-almond-silk/20 rounded-soft p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="w-16 h-16 bg-almond-silk/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-almond-silk/30 transition-colors">
                    <IconComponent className="w-8 h-8 text-space-indigo" />
                  </div>
                  <h3 className="text-xl font-serif text-dusty-grape mb-4">{category.title}</h3>
                  <p className="text-lilac-ash text-sm leading-relaxed mb-6 line-clamp-2">
                    {category.description}
                  </p>
                  <button 
                    onClick={() => navigate('/categories')}
                    className="flex items-center gap-2 text-almond-silk font-semibold text-sm hover:text-space-indigo transition-colors group-hover:gap-4"
                  >
                    Explore <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-On Services Strip */}
      <section className="py-16 bg-space-indigo">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 md:gap-16">
            {addOnServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group relative flex flex-col items-center cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-almond-silk/20 flex items-center justify-center mb-3 group-hover:bg-almond-silk/30 transition-colors">
                    <IconComponent className="w-8 h-8 text-almond-silk group-hover:text-lilac-ash transition-colors" />
                  </div>
                  <span className="text-seashell/90 text-sm font-medium">{service.name}</span>
                  <span className="text-lilac-ash text-xs mt-1">{service.description}</span>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-almond-silk group-hover:w-full transition-all duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-seashell">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-space-indigo mb-4">Why Choose Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-almond-silk/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-space-indigo" />
                  </div>
                  <h3 className="text-xl font-serif text-space-indigo mb-3">{item.title}</h3>
                  <p className="text-dusty-grape text-sm">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 bg-lilac-ash/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-space-indigo mb-4">What Our Clients Say</h2>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-seashell rounded-soft p-12 shadow-soft-lg min-h-[300px] flex flex-col justify-center">
              <Quote className="w-12 h-12 text-almond-silk mb-6" />
              <p className="text-space-indigo text-lg font-light leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-serif text-space-indigo text-xl">{testimonials[currentTestimonial].name}</p>
                  <p className="text-dusty-grape text-sm">{testimonials[currentTestimonial].event} • {testimonials[currentTestimonial].location}</p>
                </div>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentTestimonial ? 'bg-space-indigo w-8' : 'bg-almond-silk/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
