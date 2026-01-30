
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate?: (section: string) => void;
  onServiceSelect?: (service: any) => void;
}

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-space-indigo/95 backdrop-blur-md py-4 shadow-soft-lg' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => handleNavigation('/')}
          className="text-2xl font-serif tracking-widest text-white hover:text-almond-silk transition-colors"
        >
          ELYZA EVENTS
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 text-xs font-medium tracking-[0.2em] text-seashell/90">
          <button onClick={() => handleNavigation('/about')} className={`hover:text-white transition-colors ${location.pathname === '/about' ? 'text-white' : ''}`}>ABOUT</button>
          <button onClick={() => handleNavigation('/gallery')} className={`hover:text-white transition-colors ${location.pathname === '/gallery' ? 'text-white' : ''}`}>GALLERY</button>
          <button onClick={() => handleNavigation('/categories')} className={`hover:text-white transition-colors ${location.pathname === '/categories' ? 'text-white' : ''}`}>CATEGORIES</button>
          <button onClick={() => handleNavigation('/addons')} className={`hover:text-white transition-colors ${location.pathname === '/addons' ? 'text-white' : ''}`}>ADD-ONS</button>
          <button onClick={() => handleNavigation('/contact')} className={`hover:text-white transition-colors ${location.pathname === '/contact' ? 'text-white' : ''}`}>CONTACT</button>

          <button 
            onClick={() => handleNavigation('/booking')}
            className="px-6 py-2 border border-almond-silk/50 rounded-refined hover:bg-almond-silk hover:text-space-indigo transition-all duration-300 shadow-soft"
          >
            BOOK NOW
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-space-indigo transition-transform duration-500 z-50 pt-24 px-6 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <button className="absolute top-8 right-6 text-white" onClick={() => setIsMobileMenuOpen(false)}><X /></button>
        <div className="flex flex-col space-y-8 text-xl font-serif text-seashell/90">
          <button onClick={() => handleNavigation('/')} className="hover:text-white transition-colors">Home</button>
          <button onClick={() => handleNavigation('/about')} className="hover:text-white transition-colors">About</button>
          <button onClick={() => handleNavigation('/gallery')} className="hover:text-white transition-colors">Gallery</button>
          <button onClick={() => handleNavigation('/categories')} className="hover:text-white transition-colors">Categories</button>
          <button onClick={() => handleNavigation('/addons')} className="hover:text-white transition-colors">Add-Ons</button>
          <button onClick={() => handleNavigation('/contact')} className="hover:text-white transition-colors">Contact</button>
          <button onClick={() => handleNavigation('/booking')} className="text-white border-b border-almond-silk pb-2 inline-block">Book Now</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
