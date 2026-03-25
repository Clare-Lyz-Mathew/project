import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-navy text-white pt-24 pb-12 border-t border-mauve/10">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
        <div>
          <h2 className="text-3xl font-serif mb-8 tracking-widest">ELYZA EVENTS</h2>
          <p className="text-mist/80 font-light leading-relaxed mb-10 max-w-md">
            A boutique event studio dedicated to the art of the celebration.
            We believe in the power of atmosphere to elevate moments into lifelong memories.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-plum hover:text-mauve transition-colors">
              <Mail className="w-5 h-5" />
              <span className="text-sm tracking-wide">clarelyzmathew@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-plum hover:text-mauve transition-colors">
              <Phone className="w-5 h-5" />
              <span className="text-sm tracking-wide">+91 954 4544 217</span>
            </div>
            <div className="flex items-center gap-4 text-plum hover:text-mauve transition-colors">
              <MapPin className="w-5 h-5" />
              <span className="text-sm tracking-wide">Marine Drive, Kochi | Ernakulam, Kerala</span>
            </div>
          </div>

          <div className="flex gap-6 mt-12">
            <Instagram className="w-5 h-5 text-plum hover:text-mauve cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 text-plum hover:text-mauve cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-plum hover:text-mauve cursor-pointer transition-colors" />
          </div>
        </div>

        <div className="relative group transition-all duration-700 h-80 w-full overflow-hidden border border-mauve/30 rounded-soft shadow-twilight">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251482.3551532452!2d76.16668383833892!3d9.982855866164224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1704153026048!5m2!1sen!2sin"
            className="w-full h-full border-0 absolute inset-0 z-0 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-500 z-10">
            <div className="bg-navy/90 p-6 border border-mauve/20 backdrop-blur-md rounded-refined shadow-soft">
              <p className="text-xs tracking-[0.3em] font-bold text-white mb-2 uppercase">Headquarters</p>
              <p className="text-mist/80 text-sm">Marine Drive, Kochi, KL</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-mauve/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] tracking-widest text-plum uppercase">
          © 2024 Elyza Events Studio. All rights reserved.
        </p>
        <div className="flex gap-8 text-[10px] tracking-widest text-plum uppercase font-semibold">
          <a href="#" className="hover:text-mauve transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-mauve transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>;
};
export default Footer;
