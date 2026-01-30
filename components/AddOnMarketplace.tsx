
import React from 'react';
import { ADD_ONS } from '../constants';
import { AddOn } from '../types';
import { Check, Plus } from 'lucide-react';

interface AddOnMarketplaceProps {
  selectedAddOns: string[];
  onToggleAddOn: (id: string) => void;
}

const AddOnMarketplace: React.FC<AddOnMarketplaceProps> = ({ selectedAddOns, onToggleAddOn }) => {
  const categories: AddOn['category'][] = ['Catering', 'Light & Sound', 'Photo/Video', 'Decor'];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.5em] text-silver uppercase mb-4">The Service Modular</p>
          <h2 className="text-4xl font-serif text-charcoal">Enhance Your Vision</h2>
        </div>

        {categories.map((cat) => (
          <div key={cat} className="mb-20 last:mb-0">
            <h3 className="text-xl font-serif text-slate border-b border-silver/10 pb-4 mb-10 tracking-widest uppercase">
              {cat}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ADD_ONS.filter(a => a.category === cat).map((item) => {
                const isSelected = selectedAddOns.includes(item.id);
                return (
                  <div 
                    key={item.id}
                    className="group border border-silver/10 hover:border-charcoal transition-all duration-500 bg-[#fcfcfc] overflow-hidden"
                  >
                    <div className="h-48 overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-serif text-charcoal mb-2">{item.title}</h4>
                      <p className="text-sm text-silver font-light leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <ul className="mb-8 space-y-2">
                        {item.specs?.map((spec, i) => (
                          <li key={i} className="text-[10px] tracking-widest text-slate font-semibold uppercase flex items-center gap-2">
                            <span className="w-1 h-1 bg-charcoal rounded-full"></span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => onToggleAddOn(item.id)}
                        className={`w-full py-3 text-xs tracking-[0.2em] font-bold transition-all duration-500 flex items-center justify-center gap-2 ${
                          isSelected 
                            ? 'bg-charcoal text-white' 
                            : 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
                        }`}
                      >
                        {isSelected ? <><Check className="w-3 h-3" /> ADDED</> : <><Plus className="w-3 h-3" /> ADD TO VISION</>}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddOnMarketplace;
