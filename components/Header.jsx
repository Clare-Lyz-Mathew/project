import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };
  return <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-mist/95 backdrop-blur-md py-5 shadow-soft-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button
    onClick={() => handleNavigation("/")}
    className="text-2xl font-serif tracking-widest text-navy font-bold hover:text-plum transition-colors"
  >
          ELYZA EVENTS
        </button>

        {
    /* Desktop Nav */
  }
        <nav className="hidden md:flex items-center space-x-10 text-xs font-bold tracking-[0.2em] text-navy/70">
          <button onClick={() => handleNavigation("/about")} className={`hover:text-navy transition-all ${location.pathname === "/about" ? "text-navy border-b-[1.5px] border-navy pb-1" : ""}`}>ABOUT</button>
          <button onClick={() => handleNavigation("/gallery")} className={`hover:text-navy transition-all ${location.pathname === "/gallery" ? "text-navy border-b-[1.5px] border-navy pb-1" : ""}`}>GALLERY</button>
          <button onClick={() => handleNavigation("/categories")} className={`hover:text-navy transition-all ${location.pathname === "/categories" ? "text-navy border-b-[1.5px] border-navy pb-1" : ""}`}>CATEGORIES</button>
          <button onClick={() => handleNavigation("/addons")} className={`hover:text-navy transition-all ${location.pathname === "/addons" ? "text-navy border-b-[1.5px] border-navy pb-1" : ""}`}>ADD-ONS</button>
          <button onClick={() => handleNavigation("/contact")} className={`hover:text-navy transition-all ${location.pathname === "/contact" ? "text-navy border-b-[1.5px] border-navy pb-1" : ""}`}>CONTACT</button>
          <button onClick={() => handleNavigation("/login")} className={`hover:text-navy transition-all ${location.pathname === "/login" ? "text-navy border-b-[1.5px] border-navy pb-1" : ""}`}>LOGIN</button>

          <button
    onClick={() => handleNavigation("/booking")}
    className="px-6 py-2 border font-bold border-navy text-navy rounded-refined hover:bg-navy hover:text-mist transition-all duration-300 shadow-soft"
  >
            BOOK NOW
          </button>
        </nav>

        {
    /* Mobile Toggle */
  }
        <button
    className="md:hidden text-navy"
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {
    /* Mobile Menu */
  }
      <div className={`md:hidden fixed inset-0 bg-navy transition-transform duration-500 z-50 pt-24 px-6 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button className="absolute top-8 right-6 text-white" onClick={() => setIsMobileMenuOpen(false)}><X /></button>
        <div className="flex flex-col space-y-8 text-xl font-serif text-mist/90">
          <button onClick={() => handleNavigation("/")} className="hover:text-white transition-colors">Home</button>
          <button onClick={() => handleNavigation("/about")} className="hover:text-white transition-colors">About</button>
          <button onClick={() => handleNavigation("/gallery")} className="hover:text-white transition-colors">Gallery</button>
          <button onClick={() => handleNavigation("/categories")} className="hover:text-white transition-colors">Categories</button>
          <button onClick={() => handleNavigation("/addons")} className="hover:text-white transition-colors">Add-Ons</button>
          <button onClick={() => handleNavigation("/contact")} className="hover:text-white transition-colors">Contact</button>
          <button onClick={() => handleNavigation("/login")} className="hover:text-white transition-colors">Login</button>
          <button onClick={() => handleNavigation("/booking")} className="text-white border-b border-mauve pb-2 inline-block">Book Now</button>
        </div>
      </div>
    </header>;
};
export default Header;
