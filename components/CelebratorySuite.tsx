
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, X, Info, Filter } from 'lucide-react';
import { GALLERY_ITEMS } from '../constants';
import { EventType } from '../types';

interface CelebratorySuiteProps {
  onBack: () => void;
}

type CelebrationSubFilter = 'All' | 'Culture/Regional' | 'International' | 'Modern' | 'Intimate & Minimalist' | 'Pocket-Friendly';

const CelebratorySuite: React.FC<CelebratorySuiteProps> = ({ onBack }) => {
  const [activeEvent, setActiveEvent] = useState<EventType>('Wedding');
  const [galleryFilter, setGalleryFilter] = useState<CelebrationSubFilter>('All');
  const [selectedBlueprint, setSelectedBlueprint] = useState<any>(null);
  const [step, setStep] = useState(1);

  // Background patterns mapping
  const patterns: Record<string, string> = {
    Wedding: 'https://www.transparenttextures.com/patterns/floral-paper.png',
    Birthday: 'https://www.transparenttextures.com/patterns/pinstriped-suit.png',
    Anniversary: 'https://www.transparenttextures.com/patterns/cloud-noise.png',
    Reunion: 'https://www.transparenttextures.com/patterns/geometric-leaves.png',
  };

  // Gallery filtering logic
  const filteredGallery = GALLERY_ITEMS.filter(item => {
    if (item.classification !== 'Celebratory') return false;
    if (item.type !== activeEvent) return false;
    if (galleryFilter === 'All') return true;
    
    // Mapping our specific gallery filters to existing subTypes or mock metadata
    if (galleryFilter === 'Modern') return item.subType === 'Modern';
    if (galleryFilter === 'Culture/Regional') return item.subType === 'Cultural';
    if (galleryFilter === 'International') return item.location !== 'London';
    return true; // Simple fallback for mock data
  });

  const celebrationTypes: EventType[] = ['Wedding', 'Birthday', 'Anniversary', 'Reunion'];

  return (
    <div className="min-h-screen bg-seashell animate-fade-in relative selection:bg-almond-silk selection:text-space-indigo">
      {/* Dynamic Background Pattern */}
      <div 
        className="fixed inset-0 opacity-[0.04] pointer-events-none transition-all duration-1000 z-0"
        style={{ backgroundImage: `url(${patterns[activeEvent]})`, backgroundSize: '400px' }}
      />

      {/* 1. Hero Navigation (Event Selection Bar) */}
      <nav className="sticky top-0 z-50 bg-seashell/90 backdrop-blur-md border-b border-almond-silk/20 shadow-soft">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-3 text-[10px] tracking-[0.4em] font-bold text-lilac-ash hover:text-space-indigo transition-colors uppercase">
            <ArrowLeft className="w-4 h-4" /> Studio
          </button>
          
          <div className="flex gap-12">
            {celebrationTypes.map(type => (
              <button
                key={type}
                onClick={() => { setActiveEvent(type); setGalleryFilter('All'); }}
                className={`text-[11px] tracking-[0.5em] font-bold uppercase transition-all relative py-2 ${
                  activeEvent === type ? 'text-space-indigo' : 'text-lilac-ash hover:text-dusty-grape'
                }`}
              >
                {type}
                {activeEvent === type && (
                  <span className="absolute bottom-0 left-0 w-full h-px bg-space-indigo animate-fade-in" />
                )}
              </button>
            ))}
          </div>

          <div className="w-24 hidden md:block" /> {/* Spacer */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 container mx-auto px-6 z-10 text-center">
        <h2 className="text-xs tracking-[0.8em] text-lilac-ash uppercase mb-8 font-bold animate-slide-up">Elyza Celebratory</h2>
        <h1 className="text-6xl md:text-9xl font-serif italic text-space-indigo mb-12 animate-slide-up leading-tight">
          {activeEvent} <span className="text-dusty-grape">Suites</span>
        </h1>
        <p className="max-w-2xl mx-auto text-dusty-grape text-xl font-light leading-relaxed opacity-80 italic">
          Curating high-end {activeEvent.toLowerCase()} experiences with architectural precision and a legacy of joy.
        </p>
      </section>

      {/* 2. The "Work-First" Gallery (Legacy of Joy) */}
      <section className="bg-space-indigo py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h3 className="text-white text-5xl font-serif italic mb-4">Our Legacy of Joy</h3>
              <p className="text-seashell/80 font-light opacity-60">Archive of {activeEvent.toLowerCase()} blueprints designed globally.</p>
            </div>
            
            <div className="flex flex-wrap gap-6 border-b border-almond-silk/20 pb-4">
              {(['All', 'Culture/Regional', 'International', 'Modern', 'Intimate & Minimalist', 'Pocket-Friendly'] as CelebrationSubFilter[]).map(f => (
                <button
                  key={f}
                  onClick={() => setGalleryFilter(f)}
                  className={`text-[10px] tracking-[0.3em] font-bold uppercase transition-all ${
                    galleryFilter === f ? 'text-white' : 'text-lilac-ash hover:text-almond-silk'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredGallery.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setSelectedBlueprint(item)}
                className="group relative h-[600px] overflow-hidden bg-dusty-grape cursor-pointer rounded-soft shadow-soft hover:shadow-soft-lg transition-all duration-300"
              >
                <img src={item.url} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-transform duration-[2s] group-hover:scale-110 rounded-soft" />
                <div className="absolute inset-0 bg-gradient-to-t from-space-indigo/90 via-transparent to-transparent opacity-60 rounded-soft" />
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-[10px] tracking-[0.4em] uppercase mb-2 opacity-70">{item.location}</p>
                  <h4 className="text-2xl font-serif italic">The {item.subType || 'Signature'} Record</h4>
                  <div className="mt-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[10px] tracking-widest font-bold border border-white/30 px-3 py-1">VIEW BLUEPRINT</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bespoke Booking Engine */}
      <section className="bg-lilac-ash/20 py-40 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-24">
            <h3 className="text-5xl font-serif text-space-indigo mb-4">Initialize {activeEvent}</h3>
            <p className="text-[10px] tracking-[0.6em] text-lilac-ash uppercase font-bold">Customization Engine v3.0</p>
          </div>

          <div className="bg-seashell border border-almond-silk/20 shadow-soft-lg p-12 md:p-20 relative overflow-hidden rounded-soft">
             {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-space-indigo translate-x-16 -translate-y-16 rotate-45" />

            {step === 1 ? (
              <form className="animate-fade-in space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Common Fields */}
                  <div className="space-y-4">
                    <label className="text-[10px] tracking-widest text-lilac-ash font-bold uppercase block">Preferred Date</label>
                    <input type="date" className="w-full border-b border-almond-silk/30 py-3 outline-none focus:border-charcoal transition-colors bg-transparent" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] tracking-widest text-lilac-ash font-bold uppercase block">Estimated Guest Count</label>
                    <input type="number" placeholder="50-500" className="w-full border-b border-almond-silk/30 py-3 outline-none focus:border-charcoal transition-colors bg-transparent" />
                  </div>

                  {/* Conditional Fields Based on activeEvent */}
                  {activeEvent === 'Wedding' && (
                    <>
                      <div className="space-y-4">
                        <label className="text-[10px] tracking-widest text-lilac-ash font-bold uppercase block">Heritage / Culture</label>
                        <select className="w-full border-b border-almond-silk/30 py-3 outline-none focus:border-charcoal transition-colors bg-transparent">
                          <option>Traditional Western</option>
                          <option>South Asian</option>
                          <option>Middle Eastern</option>
                          <option>East Asian</option>
                          <option>Intercultural Bespoke</option>
                        </select>
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] tracking-widest text-lilac-ash font-bold uppercase block">Design Direction</label>
                        <select className="w-full border-b border-almond-silk/30 py-3 outline-none focus:border-charcoal transition-colors bg-transparent">
                          <option>Modern Minimalist</option>
                          <option>Avant-Garde Luxe</option>
                          <option>International Destination</option>
                          <option>Pocket-Friendly High Impact</option>
                        </select>
                      </div>
                    </>
                  )}

                  {(activeEvent === 'Birthday' || activeEvent === 'Anniversary') && (
                    <>
                      <div className="space-y-4">
                        <label className="text-[10px] tracking-widest text-lilac-ash font-bold uppercase block">Milestone / Age</label>
                        <input type="text" placeholder="e.g. 50th Jubilee" className="w-full border-b border-almond-silk/30 py-3 outline-none focus:border-charcoal transition-colors bg-transparent" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] tracking-widest text-lilac-ash font-bold uppercase block">Surprise Element Coordination</label>
                        <select className="w-full border-b border-almond-silk/30 py-3 outline-none focus:border-charcoal transition-colors bg-transparent">
                          <option>Secret Performance</option>
                          <option>Reveal Moment</option>
                          <option>Immersive Reveal</option>
                          <option>None</option>
                        </select>
                      </div>
                    </>
                  )}

                  {activeEvent === 'Reunion' && (
                    <>
                      <div className="space-y-4">
                        <label className="text-[10px] tracking-widest text-lilac-ash font-bold uppercase block">Generation Range</label>
                        <input type="text" placeholder="e.g. 1950s - 2020s" className="w-full border-b border-almond-silk/30 py-3 outline-none focus:border-charcoal transition-colors bg-transparent" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] tracking-widest text-lilac-ash font-bold uppercase block">Travel Assistance Needed</label>
                        <div className="flex gap-6 mt-2">
                          <label className="flex items-center gap-2 text-xs text-dusty-grape"><input type="radio" name="travel" className="accent-space-indigo" /> Yes</label>
                          <label className="flex items-center gap-2 text-xs text-dusty-grape"><input type="radio" name="travel" className="accent-space-indigo" /> No</label>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] tracking-widest text-lilac-ash font-bold uppercase block">Narrative Vision</label>
                  <textarea rows={4} className="w-full border border-almond-silk/20 p-6 outline-none focus:border-charcoal transition-colors bg-transparent font-light" placeholder="Describe the atmosphere you wish to architect..." />
                </div>

                <button 
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-6 bg-space-indigo text-white text-[10px] tracking-[0.5em] font-bold uppercase hover:bg-dusty-grape transition-all duration-500 flex items-center justify-center gap-4 group"
                >
                  Architect Proposal <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            ) : (
              <div className="animate-fade-in text-center py-20">
                <div className="w-20 h-20 border border-charcoal/10 flex items-center justify-center mx-auto mb-10">
                  <ArrowRight className="w-10 h-10 text-space-indigo -rotate-45" />
                </div>
                <h4 className="text-4xl font-serif text-space-indigo mb-6 italic">Vision Lodged</h4>
                <p className="text-dusty-grape font-light text-lg mb-12 max-w-sm mx-auto opacity-70">
                  Our senior {activeEvent.toLowerCase()} architects are now reviewing your brief. A cinematic proposal follows.
                </p>
                <button 
                  onClick={() => setStep(1)}
                  className="text-[10px] tracking-[0.4em] font-bold text-lilac-ash hover:text-space-indigo uppercase border-b border-almond-silk/30 pb-2 transition-all"
                >
                  Amend Brief
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blueprint Lightbox */}
      {selectedBlueprint && (
        <div className="fixed inset-0 z-[100] bg-space-indigo/95 backdrop-blur-xl flex items-center justify-center p-6 animate-fade-in">
          <div className="bg-white max-w-5xl w-full flex flex-col md:flex-row shadow-2xl overflow-hidden relative">
            <button onClick={() => setSelectedBlueprint(null)} className="absolute top-6 right-6 text-space-indigo hover:rotate-90 transition-transform"><X /></button>
            
            <div className="md:w-1/2 h-[400px] md:h-auto">
              <img src={selectedBlueprint.url} className="w-full h-full object-cover" />
            </div>
            
            <div className="md:w-1/2 p-12 md:p-20">
              <p className="text-[10px] tracking-[0.4em] text-lilac-ash uppercase mb-6 font-bold">Event Blueprint</p>
              <h4 className="text-4xl font-serif text-space-indigo mb-10 italic">Case Study: {selectedBlueprint.location}</h4>
              
              <div className="space-y-8 border-t border-almond-silk/10 pt-10">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-lilac-ash uppercase tracking-widest font-bold">Category</span>
                  <span className="text-space-indigo font-medium">{selectedBlueprint.type}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-lilac-ash uppercase tracking-widest font-bold">Date</span>
                  <span className="text-space-indigo font-medium">{selectedBlueprint.date}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-lilac-ash uppercase tracking-widest font-bold">Design Logic</span>
                  <span className="text-space-indigo font-medium">{selectedBlueprint.subType || 'High-Contrast Luxe'}</span>
                </div>
                
                <p className="text-dusty-grape text-sm font-light leading-loose mt-10">
                  A masterpiece of {selectedBlueprint.subType?.toLowerCase() || 'bespoke'} design, emphasizing the unique {selectedBlueprint.type.toLowerCase()} 
                  narrative within the historical context of {selectedBlueprint.location}.
                </p>
              </div>

              <button 
                onClick={() => { setSelectedBlueprint(null); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="mt-16 w-full py-4 border border-charcoal text-space-indigo text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-space-indigo hover:text-white transition-all duration-500"
              >
                REQUEST SIMILAR DESIGN
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Signature */}
      <footer className="py-20 bg-space-indigo border-t border-almond-silk/10 text-center">
        <p className="text-[10px] tracking-[0.8em] text-lilac-ash uppercase font-bold">ELYZA CELEBRATORY STUDIO</p>
      </footer>
    </div>
  );
};

export default CelebratorySuite;
