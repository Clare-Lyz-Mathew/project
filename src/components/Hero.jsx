const Hero = ({ onAction }) => {
  return <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-navy">
      {
    /* Background with overlay */
  }
      <div
    className="absolute inset-0 z-0 bg-cover bg-center scale-105 transition-transform duration-[10s] hover:scale-100"
    style={{ backgroundImage: `url('/gallery/anniversary_background.png')` }}
  >
        <div className="absolute inset-0 bg-navy/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center animate-slide-up">
        <h2 className="text-mauve text-xs md:text-sm font-medium tracking-[0.5em] mb-6 uppercase">
          Elegance Reimagined
        </h2>
        <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight">
          Crafting Moments <br />
          <span className="italic">Beyond Expectation</span>
        </h1>
        <p className="text-mist/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          From intimate gatherings to grand celebrations, we curate sophisticated environments 
          that reflect your unique narrative.
        </p>
        <button
    onClick={onAction}
    className="group relative inline-flex items-center px-12 py-5 text-sm tracking-widest text-white border border-mauve/50 rounded-refined hover:text-navy transition-all duration-500 overflow-hidden shadow-soft hover:shadow-soft-lg"
  >
          <span className="relative z-10">EXPLORE SERVICES</span>
          <div className="absolute inset-0 bg-mauve translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-refined" />
        </button>
      </div>

      {
    /* Decorative floral pattern element (absolute positioned SVG pattern) */
  }
      <div className="absolute bottom-10 right-10 opacity-20 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
          <path d="M50 10V90M10 50H90M25 25L75 75M75 25L25 75" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
    </section>;
};
export default Hero;
