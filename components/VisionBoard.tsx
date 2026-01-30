
import React from 'react';
import { EventType, AddOn } from '../types';
import { ADD_ONS, EVENT_ICONS } from '../constants';
import { ArrowRight, X } from 'lucide-react';

interface VisionBoardProps {
  eventType: EventType;
  selectedAddOns: string[];
  onRemoveAddOn: (id: string) => void;
  onProceed: () => void;
}

const VisionBoard: React.FC<VisionBoardProps> = ({ eventType, selectedAddOns, onRemoveAddOn, onProceed }) => {
  const activeAddOns = ADD_ONS.filter(a => selectedAddOns.includes(a.id));

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50 animate-slide-up">
      <div className="bg-charcoal/95 backdrop-blur-xl border border-silver/20 shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-white/5 border border-silver/10 flex items-center justify-center text-platinum">
            {EVENT_ICONS[eventType]}
          </div>
          <div>
            <h4 className="text-xs tracking-[0.4em] text-silver uppercase mb-1">Vision Summary</h4>
            <p className="text-xl font-serif text-white">{eventType} Design Concept</p>
          </div>
        </div>

        <div className="flex-1 flex flex-wrap gap-2 px-8 overflow-hidden max-h-16 md:max-h-none justify-center">
          {activeAddOns.map(addon => (
            <div key={addon.id} className="bg-slate/50 px-3 py-1 flex items-center gap-2 border border-silver/10">
              <span className="text-[10px] tracking-widest text-platinum uppercase font-bold">{addon.title}</span>
              <button onClick={() => onRemoveAddOn(addon.id)} className="text-silver hover:text-white">
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
          {activeAddOns.length === 0 && (
            <p className="text-xs italic text-silver">Select modular add-ons to build your vision board...</p>
          )}
        </div>

        <button
          onClick={onProceed}
          className="bg-white text-charcoal px-8 py-4 text-xs tracking-[0.3em] font-bold hover:bg-platinum transition-all duration-300 flex items-center gap-4 whitespace-nowrap"
        >
          CONFIRM & BOOK <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default VisionBoard;
