import { X, ArrowRight } from "lucide-react";
const ServiceView = ({ service, onClose, onBook }) => {
  return <div className="fixed inset-0 z-[60] bg-charcoal overflow-y-auto animate-fade-in">
      <div className="min-h-screen flex flex-col lg:flex-row">
        {
    /* Visual Side */
  }
        <div className="lg:w-1/2 h-[40vh] lg:h-screen sticky top-0">
          <img
    src={service.image}
    alt={service.title}
    className="w-full h-full object-cover"
  />
          <div className="absolute inset-0 bg-charcoal/20" />
        </div>

        {
    /* Content Side */
  }
        <div className="lg:w-1/2 bg-charcoal p-8 md:p-16 lg:p-24 relative">
          <button
    onClick={onClose}
    className="absolute top-8 right-8 text-white hover:rotate-90 transition-transform duration-300"
  >
            <X className="w-8 h-8" />
          </button>

          <div className="max-w-xl">
            <p className="text-xs tracking-[0.5em] text-silver mb-6 uppercase">Service Template</p>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-10">{service.title}</h1>
            
            <p className="text-platinum text-xl font-light leading-relaxed mb-12">
              {service.description}
            </p>

            <div className="mb-16">
              <h3 className="text-xs tracking-[0.3em] font-bold text-white mb-8 uppercase">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                {service.features.map((feature, idx) => <li key={idx} className="flex items-center gap-4 text-silver">
                    <div className="w-1.5 h-1.5 bg-silver rounded-full" />
                    <span className="text-sm font-medium uppercase tracking-wider">{feature}</span>
                  </li>)}
              </ul>
            </div>

            <button
    onClick={onBook}
    className="group inline-flex items-center gap-6 text-white text-xs tracking-[0.4em] font-bold py-4 px-8 border border-white hover:bg-white hover:text-charcoal transition-all duration-500"
  >
              INITIALIZE PROJECT <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-24 pt-12 border-t border-silver/10">
            <p className="text-xs text-silver leading-loose">
              Every package is fully bespoke and tailored to your specific requirements. 
              Costs vary based on location, guest count, and desired complexity.
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default ServiceView;
