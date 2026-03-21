import { SERVICES, CLASSIFICATION_ICONS } from "../constants";
import { ArrowRight } from "lucide-react";
const ServicePavilion = ({ onSelectClassification }) => {
  const classifications = ["Celebratory", "Religious", "Memorial", "Custom", "Add-ons"];
  return <section id="pavilion" className="py-32 bg-mist relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <p className="text-[10px] tracking-[0.6em] text-plum uppercase mb-6 font-bold">Classifications</p>
          <h2 className="text-5xl md:text-7xl font-serif text-navy mb-8 italic">The Service Pavilion</h2>
          <div className="w-px h-24 bg-slate/30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {classifications.map((cl) => {
    const representativeService = SERVICES.find((s) => s.classification === cl);
    return <button
      key={cl}
      onClick={() => onSelectClassification(cl)}
      className="group relative h-[500px] overflow-hidden bg-navy text-left animate-slide-up rounded-soft shadow-soft hover:shadow-soft-lg transition-all duration-300"
    >
                {
      /* Background Image */
    }
                <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0 opacity-60 rounded-soft"
      style={{ backgroundImage: `url(${representativeService?.image})` }}
    />
                
                {
      /* Overlay Gradient */
    }
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent rounded-soft" />

                {
      /* Content */
    }
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="mb-6 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
                    {CLASSIFICATION_ICONS[cl]}
                  </div>
                  <h3 className="text-3xl font-serif text-white mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                    {cl}
                  </h3>
                  <p className="text-mist/90 text-sm font-light leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 max-w-xs transform translate-y-4 group-hover:translate-y-0">
                    Explore our bespoke offerings in the {cl.toLowerCase()} sphere. From technical precision to artistic flair.
                  </p>
                  <div className="flex items-center gap-4 text-white text-[10px] tracking-[0.3em] font-bold uppercase overflow-hidden">
                    <span className="relative z-10">ENTER SUITE</span>
                    <ArrowRight className="w-4 h-4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  </div>
                </div>
              </button>;
  })}
        </div>
      </div>
    </section>;
};
export default ServicePavilion;
