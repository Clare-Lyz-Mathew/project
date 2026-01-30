import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EventCustomizationPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: '',
    theme: [] as string[],
    culture: '',
    venuePreference: '',
    guestCount: 50,
    date: '',
    addons: [] as string[],
    notes: ''
  });

  const eventTypes = ['Wedding', 'Anniversary', 'Birthday', 'Reunion', 'Baptism', 'Memorial', 'Custom'];
  const themes = ['International', 'Minimalist', 'Cultural', 'Traditional', 'Modern', 'Rustic', 'Elegant'];
  const cultures = ['Hindu', 'Christian', 'Muslim', 'Jewish', 'Buddhist', 'Sikh', 'Regional', 'Secular'];
  const addOnOptions = ['Catering', 'Décor', 'Photography', 'Light & Sound', 'Venue Liaison'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'theme') {
        setFormData(prev => ({
          ...prev,
          theme: checked 
            ? [...prev.theme, value]
            : prev.theme.filter(t => t !== value)
        }));
      } else if (name === 'addons') {
        setFormData(prev => ({
          ...prev,
          addons: checked
            ? [...prev.addons, value]
            : prev.addons.filter(a => a !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const estimatedCost = 1000 + (formData.guestCount * 50) + (formData.addons.length * 500);

  return (
    <div className="min-h-screen bg-seashell">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="bg-space-indigo text-white py-12">
          <div className="container mx-auto px-6">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-almond-silk hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </button>
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Customize Your Event</h1>
            <p className="text-seashell/80 text-lg">Tell us about your vision and we'll bring it to life</p>
          </div>
        </section>

        {/* Step Indicator */}
        <section className="bg-lilac-ash/20 py-6 border-b border-almond-silk/20">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-4">
              {[1, 2, 3].map((s) => (
                <React.Fragment key={s}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= s ? 'bg-space-indigo text-white' : 'bg-lilac-ash text-space-indigo'
                  }`}>
                    {s}
                  </div>
                  {s < 3 && (
                    <div className={`w-16 h-0.5 ${
                      step > s ? 'bg-space-indigo' : 'bg-lilac-ash'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-seashell border border-almond-silk/20 rounded-soft p-8 shadow-soft">
                {step === 1 && (
                  <div className="space-y-8 animate-fade-in">
                    <div>
                      <label className="block text-space-indigo font-bold uppercase text-sm mb-3">Event Type</label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-lilac-ash/20 border border-almond-silk/20 rounded-refined text-space-indigo focus:border-almond-silk focus:outline-none"
                        required
                      >
                        <option value="">Select event type</option>
                        {eventTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-space-indigo font-bold uppercase text-sm mb-3">Theme Selector</label>
                      <div className="flex flex-wrap gap-3">
                        {themes.map(theme => (
                          <label key={theme} className="flex items-center">
                            <input
                              type="checkbox"
                              name="theme"
                              value={theme}
                              checked={formData.theme.includes(theme)}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <span className={`px-4 py-2 rounded-refined cursor-pointer transition-all ${
                              formData.theme.includes(theme)
                                ? 'bg-space-indigo text-white'
                                : 'bg-lilac-ash/20 text-space-indigo hover:bg-almond-silk/20'
                            }`}>
                              {theme}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-space-indigo font-bold uppercase text-sm mb-3">Culture/Religion</label>
                      <select
                        name="culture"
                        value={formData.culture}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-lilac-ash/20 border border-almond-silk/20 rounded-refined text-space-indigo focus:border-almond-silk focus:outline-none"
                      >
                        <option value="">Select culture/religion</option>
                        {cultures.map(culture => (
                          <option key={culture} value={culture}>{culture}</option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full py-4 bg-almond-silk text-space-indigo font-bold uppercase rounded-refined hover:bg-seashell transition-colors flex items-center justify-center gap-2"
                    >
                      Continue <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8 animate-fade-in">
                    <div>
                      <label className="block text-space-indigo font-bold uppercase text-sm mb-3">
                        Guest Count: {formData.guestCount}
                      </label>
                      <input
                        type="range"
                        name="guestCount"
                        min="10"
                        max="1000"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        className="w-full h-2 bg-lilac-ash/20 rounded-lg appearance-none cursor-pointer accent-space-indigo"
                      />
                    </div>

                    <div>
                      <label className="block text-space-indigo font-bold uppercase text-sm mb-3">Preferred Date</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-lilac-ash/20 border border-almond-silk/20 rounded-refined text-space-indigo focus:border-almond-silk focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-space-indigo font-bold uppercase text-sm mb-3">Venue Preference</label>
                      <input
                        type="text"
                        name="venuePreference"
                        value={formData.venuePreference}
                        onChange={handleInputChange}
                        placeholder="Indoor, outdoor, specific venue..."
                        className="w-full px-4 py-3 bg-lilac-ash/20 border border-almond-silk/20 rounded-refined text-space-indigo focus:border-almond-silk focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-space-indigo font-bold uppercase text-sm mb-3">Add-On Services</label>
                      <div className="space-y-2">
                        {addOnOptions.map(addon => (
                          <label key={addon} className="flex items-center gap-3 p-3 bg-lilac-ash/10 rounded-refined cursor-pointer hover:bg-lilac-ash/20">
                            <input
                              type="checkbox"
                              name="addons"
                              value={addon}
                              checked={formData.addons.includes(addon)}
                              onChange={handleInputChange}
                              className="w-5 h-5 accent-space-indigo"
                            />
                            <span className="text-space-indigo">{addon}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-space-indigo font-bold uppercase text-sm mb-3">Additional Notes</label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Tell us about your vision, special requirements, or any questions..."
                        className="w-full px-4 py-3 bg-lilac-ash/20 border border-almond-silk/20 rounded-refined text-space-indigo focus:border-almond-silk focus:outline-none resize-none"
                      />
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 py-4 border-2 border-almond-silk text-space-indigo font-bold uppercase rounded-refined hover:bg-almond-silk transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-4 bg-almond-silk text-space-indigo font-bold uppercase rounded-refined hover:bg-seashell transition-colors flex items-center justify-center gap-2"
                      >
                        Get a Quote <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="text-center py-12 animate-fade-in">
                    <CheckCircle2 className="w-20 h-20 text-almond-silk mx-auto mb-6" />
                    <h2 className="text-3xl font-serif text-space-indigo mb-4">Request Submitted</h2>
                    <p className="text-dusty-grape text-lg mb-8">
                      Thank you for your submission! Our team will review your event details and get back to you within 24 hours with a customized quote.
                    </p>
                    <button
                      onClick={() => navigate('/')}
                      className="px-8 py-4 bg-almond-silk text-space-indigo font-bold uppercase rounded-refined hover:bg-seashell transition-colors"
                    >
                      Return to Home
                    </button>
                  </div>
                )}
              </form>
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-seashell border border-almond-silk/20 rounded-soft p-6 shadow-soft sticky top-32">
                <h3 className="text-2xl font-serif text-space-indigo mb-6">Your Selections</h3>
                
                <div className="space-y-4 mb-6">
                  {formData.eventType && (
                    <div>
                      <p className="text-xs text-lilac-ash uppercase mb-1">Event Type</p>
                      <p className="text-space-indigo font-semibold">{formData.eventType}</p>
                    </div>
                  )}
                  {formData.theme.length > 0 && (
                    <div>
                      <p className="text-xs text-lilac-ash uppercase mb-1">Themes</p>
                      <p className="text-space-indigo font-semibold">{formData.theme.join(', ')}</p>
                    </div>
                  )}
                  {formData.culture && (
                    <div>
                      <p className="text-xs text-lilac-ash uppercase mb-1">Culture</p>
                      <p className="text-space-indigo font-semibold">{formData.culture}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-xs text-lilac-ash uppercase mb-1">Guest Count</p>
                    <p className="text-space-indigo font-semibold">{formData.guestCount}</p>
                  </div>
                  {formData.addons.length > 0 && (
                    <div>
                      <p className="text-xs text-lilac-ash uppercase mb-1">Add-Ons</p>
                      <p className="text-space-indigo font-semibold">{formData.addons.join(', ')}</p>
                    </div>
                  )}
                </div>

                <div className="border-t border-almond-silk/20 pt-4">
                  <p className="text-xs text-lilac-ash uppercase mb-2">Estimated Cost</p>
                  <p className="text-2xl font-serif text-space-indigo">£{estimatedCost.toLocaleString()}</p>
                  <p className="text-xs text-lilac-ash mt-2">*Final quote may vary</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventCustomizationPage;
