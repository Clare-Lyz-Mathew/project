
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-space-indigo text-white pt-24 pb-12 border-t border-almond-silk/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-3xl font-serif mb-8 tracking-widest">ELYZA EVENTS</h2>
            <p className="text-seashell/80 font-light leading-relaxed mb-10 max-w-md">
              A boutique event studio dedicated to the art of the celebration. 
              We believe in the power of atmosphere to elevate moments into lifelong memories.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-lilac-ash hover:text-almond-silk transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-sm tracking-wide">concierge@elyzaevents.com</span>
              </div>
              <div className="flex items-center gap-4 text-lilac-ash hover:text-almond-silk transition-colors">
                <Phone className="w-5 h-5" />
                <span className="text-sm tracking-wide">+44 20 7946 0123</span>
              </div>
              <div className="flex items-center gap-4 text-lilac-ash hover:text-almond-silk transition-colors">
                <MapPin className="w-5 h-5" />
                <span className="text-sm tracking-wide">Mayfair, London | Upper East Side, NY</span>
              </div>
            </div>
            
            <div className="flex gap-6 mt-12">
              <Instagram className="w-5 h-5 text-lilac-ash hover:text-almond-silk cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-lilac-ash hover:text-almond-silk cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-lilac-ash hover:text-almond-silk cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="relative group grayscale transition-all duration-700 hover:grayscale-0">
            {/* Map Placeholder */}
            <div className="w-full h-80 bg-dusty-grape overflow-hidden relative border border-almond-silk/20 rounded-soft">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
                alt="London Map Area" 
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-space-indigo/80 p-6 border border-almond-silk/20 backdrop-blur-md rounded-refined shadow-soft">
                  <p className="text-xs tracking-[0.3em] font-bold text-white mb-2 uppercase">Headquarters</p>
                  <p className="text-seashell/80 text-sm">Mayfair, London, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-almond-silk/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-widest text-lilac-ash uppercase">
            © 2024 Elyza Events Studio. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] tracking-widest text-lilac-ash uppercase font-semibold">
            <a href="#" className="hover:text-almond-silk transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-almond-silk transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
