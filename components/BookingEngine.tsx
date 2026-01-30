
import React, { useState, useEffect } from 'react';
import { EVENT_ICONS, ADD_ONS, CLASSIFICATION_ICONS } from '../constants';
import { EventType, BookingFormData, EventClassification } from '../types';
import { ChevronRight, CheckCircle2, Package, ArrowRight } from 'lucide-react';

interface BookingEngineProps {
  preselectedClassification?: EventClassification;
  initialAddons?: string[];
}

const BookingEngine: React.FC<BookingEngineProps> = ({ preselectedClassification, initialAddons }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>({
    classification: 'Celebratory',
    eventType: null,
    guestCount: '100',
    date: '',
    venueStatus: 'Searching',
    specificStyle: 'Modern',
    venueName: '',
    ritualDate: '',
    receptionNeeded: true,
    urgency: 'Immediate',
    tributeType: 'Celebration of Life',
    avRequirements: '',
    specialRequests: '',
    addons: []
  });

  useEffect(() => {
    if (preselectedClassification) {
      setFormData(prev => ({ 
        ...prev, 
        classification: preselectedClassification,
        addons: initialAddons || []
      }));
      setStep(2);
    }
  }, [preselectedClassification, initialAddons]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as any;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value 
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const selectedAddOnObjects = ADD_ONS.filter(a => formData.addons?.includes(a.id));

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="animate-fade-in text-center">
            <h3 className="text-3xl font-serif mb-12 text-white italic">Initialize Your Vision</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {(['Celebratory', 'Religious', 'Memorial', 'Custom', 'Add-ons'] as EventClassification[]).map((cl) => (
                <button
                  key={cl}
                  onClick={() => {
                    setFormData({ ...formData, classification: cl });
                    setStep(2);
                  }}
                  className="group flex flex-col items-center p-6 bg-dusty-grape/20 border border-almond-silk/20 hover:border-almond-silk rounded-refined shadow-soft hover:shadow-soft-lg transition-all duration-500"
                >
                  <div className="text-almond-silk group-hover:text-white transition-colors mb-4 scale-75">
                    {CLASSIFICATION_ICONS[cl]}
                  </div>
                  <span className="text-[10px] tracking-widest text-almond-silk group-hover:text-white font-bold">{cl.toUpperCase()}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <form onSubmit={handleSubmit} className="animate-fade-in max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 pb-6 border-b border-almond-silk/20 gap-4">
              <div className="flex items-center gap-6">
                <div className="text-white p-3 bg-white/5 border border-almond-silk/20 rounded-refined">{CLASSIFICATION_ICONS[formData.classification]}</div>
                <div>
                  <h3 className="text-3xl font-serif text-white">{formData.classification} Suite</h3>
                  <p className="text-xs tracking-[0.2em] text-lilac-ash uppercase font-bold">Customization Engine v2.5</p>
                </div>
              </div>
              <button 
                type="button" 
                onClick={() => setStep(1)}
                className="text-[10px] tracking-[0.3em] font-bold text-lilac-ash hover:text-white uppercase border border-almond-silk/20 px-4 py-2 hover:bg-almond-silk/10 rounded-refined transition-all"
              >
                Reset Classification
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
              <div className="lg:col-span-8 space-y-10">
                {/* Specific Fields per Classification */}
                
                {formData.classification === 'Celebratory' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/5 p-8 border border-almond-silk/20 rounded-soft">
                    <div className="space-y-4">
                      <label className="text-[10px] tracking-widest text-almond-silk font-bold uppercase block">Event Category</label>
                      <select name="eventType" onChange={handleInputChange} className="w-full bg-space-indigo border-b border-almond-silk/30 text-white p-3 outline-none focus:border-almond-silk rounded-refined">
                        <option value="Wedding">Wedding</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Reunion">Reunion</option>
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] tracking-widest text-almond-silk font-bold uppercase block">Preferred Style</label>
                      <select name="specificStyle" onChange={handleInputChange} className="w-full bg-space-indigo border-b border-almond-silk/30 text-white p-3 outline-none focus:border-almond-silk rounded-refined">
                        <option value="Modern">Modern Minimalist</option>
                        <option value="Cultural">Cultural Heritage</option>
                        <option value="Thematic">Thematic/Story-driven</option>
                        <option value="Regional">Regional Traditional</option>
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] tracking-widest text-almond-silk font-bold uppercase block">Guest Count: {formData.guestCount}</label>
                      <input type="range" name="guestCount" min="10" max="1000" value={formData.guestCount} onChange={handleInputChange} className="w-full h-1 bg-almond-silk/20 rounded-lg appearance-none cursor-pointer accent-almond-silk" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] tracking-widest text-almond-silk font-bold uppercase block">Venue Status</label>
                      <div className="flex gap-4">
                        {['Booked', 'Searching'].map(status => (
                          <button
                            key={status}
                            type="button"
                            onClick={() => setFormData({ ...formData, venueStatus: status as any })}
                            className={`flex-1 py-3 text-[10px] tracking-widest border transition-all rounded-refined ${
                              formData.venueStatus === status ? 'bg-almond-silk text-space-indigo border-almond-silk' : 'border-almond-silk/20 text-lilac-ash hover:border-almond-silk/40'
                            }`}
                          >
                            {status.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {formData.classification === 'Religious' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/5 p-8 border border-almond-silk/20 rounded-soft">
                    <div className="space-y-4 md:col-span-2">
                      <label className="text-[10px] tracking-widest text-almond-silk font-bold uppercase block">Religious Institution / Venue Name</label>
                      <input name="venueName" onChange={handleInputChange} placeholder="St. Patrick's Cathedral, etc." className="w-full bg-space-indigo border-b border-almond-silk/30 text-white p-3 outline-none focus:border-almond-silk rounded-refined" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] tracking-widest text-almond-silk font-bold uppercase block">Date of Ritual</label>
                      <input type="date" name="ritualDate" onChange={handleInputChange} className="w-full bg-space-indigo border-b border-almond-silk/30 text-white p-3 outline-none focus:border-almond-silk rounded-refined" />
                    </div>
                    <div className="flex items-center gap-4 pt-6">
                      <input type="checkbox" name="receptionNeeded" checked={formData.receptionNeeded} onChange={handleInputChange} className="w-5 h-5 accent-almond-silk" />
                      <label className="text-[10px] tracking-widest text-almond-silk font-bold uppercase">Reception Planning Needed</label>
                    </div>
                  </div>
                )}

                {formData.classification === 'Memorial' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/5 p-8 border border-almond-silk/20 rounded-soft">
                    <div className="space-y-4">
                      <label className="text-[10px] tracking-widest text-almond-silk font-bold uppercase block">Service Urgency</label>
                      <select name="urgency" onChange={handleInputChange} className="w-full bg-space-indigo border-b border-almond-silk/30 text-white p-3 outline-none focus:border-almond-silk rounded-refined">
                        <option value="Immediate">Immediate Assistance</option>
                        <option value="Planning">Advance Planning</option>
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] tracking-widest text-almond-silk font-bold uppercase block">Tribute Type</label>
                      <select name="tributeType" onChange={handleInputChange} className="w-full bg-space-indigo border-b border-almond-silk/30 text-white p-3 outline-none focus:border-almond-silk rounded-refined">
                        <option value="Traditional">Traditional Service</option>
                        <option value="Celebration of Life">Celebration of Life</option>
                      </select>
                    </div>
                    <div className="space-y-4 md:col-span-2">
                      <label className="text-[10px] tracking-widest text-almond-silk font-bold uppercase block">Audio-Visual & Eulogy Requirements</label>
                      <textarea name="avRequirements" onChange={handleInputChange} rows={3} placeholder="Live streaming, video montages, soundscapes..." className="w-full bg-space-indigo border border-almond-silk/20 text-white p-4 outline-none focus:border-almond-silk resize-none rounded-refined" />
                    </div>
                  </div>
                )}

                {formData.classification === 'Add-ons' && (
                  <div className="bg-white/5 p-8 border border-almond-silk/20 rounded-soft">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[10px] tracking-widest text-almond-silk font-bold uppercase block">Event Date (Approx)</label>
                        <input type="date" name="date" onChange={handleInputChange} className="w-full bg-space-indigo border-b border-almond-silk/30 text-white p-3 outline-none focus:border-almond-silk rounded-refined" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] tracking-widest text-almond-silk font-bold uppercase block">Venue Address</label>
                        <input name="venueName" onChange={handleInputChange} placeholder="Street, City, Postcode" className="w-full bg-space-indigo border-b border-almond-silk/30 text-white p-3 outline-none focus:border-almond-silk rounded-refined" />
                      </div>
                    </div>
                    <div className="mt-10 p-4 border border-almond-silk/20 bg-dusty-grape/10 flex items-center justify-between rounded-refined">
                      <span className="text-xs text-lilac-ash italic">Using the modular marketplace to enhance an existing event.</span>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <label className="text-[10px] tracking-widest text-almond-silk font-bold uppercase block">The Narrative Brief</label>
                  <textarea
                    name="specialRequests"
                    rows={6}
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    className="w-full bg-space-indigo border border-almond-silk/20 text-white p-8 focus:border-almond-silk outline-none transition-colors resize-none font-light leading-relaxed rounded-soft"
                    placeholder="Tell us about the atmosphere, the people, and the legacy you wish to honor..."
                  />
                </div>
              </div>

              {/* Summary Vision Board Panel */}
              <div className="lg:col-span-4">
                <div className="bg-dusty-grape/30 border border-almond-silk/20 sticky top-32 rounded-soft shadow-soft">
                  <div className="p-8 border-b border-almond-silk/20">
                    <h4 className="text-[10px] tracking-[0.4em] font-bold text-white mb-6 uppercase flex items-center gap-2">
                      <Package className="w-4 h-4" /> Current Concept
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between text-xs">
                        <span className="text-lilac-ash uppercase tracking-widest">Type</span>
                        <span className="text-white font-bold">{formData.classification}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-lilac-ash uppercase tracking-widest">Guests</span>
                        <span className="text-white font-bold">{formData.guestCount}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 max-h-[300px] overflow-y-auto">
                    <h5 className="text-[8px] tracking-[0.3em] font-bold text-lilac-ash mb-4 uppercase">Added Modules</h5>
                    {selectedAddOnObjects.length > 0 ? (
                      <ul className="space-y-3">
                        {selectedAddOnObjects.map(a => (
                          <li key={a.id} className="text-[10px] text-almond-silk font-medium flex items-center gap-3">
                            <div className="w-1 h-1 bg-almond-silk rounded-full" />
                            {a.title}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[10px] italic text-lilac-ash">No modular components selected yet.</p>
                    )}
                  </div>

                  <div className="p-8 bg-white/5">
                    <button
                      type="submit"
                      className="w-full py-5 bg-almond-silk text-space-indigo text-[10px] tracking-[0.4em] font-bold hover:bg-seashell transition-all duration-500 flex items-center justify-center gap-4 rounded-refined shadow-soft"
                    >
                      REQUEST PROPOSAL <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        );

      case 3:
        return (
          <div className="animate-fade-in text-center py-20">
            <CheckCircle2 className="w-24 h-24 text-almond-silk mx-auto mb-10 stroke-[1px]" />
            <h3 className="text-5xl font-serif text-white mb-8">Concept Received</h3>
            <p className="text-seashell/90 text-xl font-light max-w-xl mx-auto leading-relaxed">
              Our architects of experience are now reviewing your {formData.classification.toLowerCase()} brief. 
              A senior designer will reach out with a curated vision board shortly.
            </p>
            <button 
              onClick={() => { setStep(1); setFormData({...formData, eventType: null, addons: []}); }}
              className="mt-16 text-xs tracking-[0.4em] font-bold text-white border-b border-almond-silk pb-3 uppercase hover:text-almond-silk hover:border-almond-silk transition-all"
            >
              Start Another Project
            </button>
          </div>
        );
    }
  };

  return (
    <section id="booking" className="py-32 bg-space-indigo relative overflow-hidden">
      {/* Dynamic Background Pattern based on selected classification */}
      <div 
        className="absolute inset-0 opacity-[0.03] transition-all duration-1000 pointer-events-none" 
        style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/cubes.png')` }} 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-dusty-grape/5 border border-almond-silk/20 p-8 md:p-20 shadow-soft-lg backdrop-blur-md rounded-soft">
          {renderStep()}
        </div>
      </div>
    </section>
  );
};

export default BookingEngine;
