import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EVENT_CUSTOMIZATIONS = {
  Wedding: ["Bridal Suite Setup", "Floral Mandap / Arch", "Custom Invitations", "Gourmet Catering", "Live Band"],
  Anniversary: ["Romantic Candlelight Dinner", "Memory Montage AV", "Vow Renewal Setup", "Private Photographer"],
  Birthday: ["Themed Cake", "Magic Show / Entertainer", "Party Favors", "Balloon Sculpting"],
  Reunion: ["Icebreaker Games Setup", "Group Photo Booth", "Nostalgia Decor", "Buffet Catering"],
  Baptism: ["Sacred Decor", "Family Feast Setup", "Godparent Gifts", "Soft Acoustic Music"],
  Memorial: ["Eulogy AV Setups", "Dignified Floral Tributes", "Host Concierge", "Peaceful Strings Music"]
};

const CustomizationTab = ({ activeTab, setActiveTab }) => (
  <div className="flex w-full mb-8 border border-mauve/20 rounded-refined overflow-hidden">
    <button
      type="button"
      onClick={() => setActiveTab("standard")}
      className={`flex-1 py-3 text-center font-bold uppercase text-sm transition-colors ${
        activeTab === "standard" ? "bg-navy text-white" : "bg-mist text-navy hover:bg-plum/10"
      }`}
    >
      Standard Events
    </button>
    <button
      type="button"
      onClick={() => setActiveTab("custom")}
      className={`flex-1 py-3 text-center font-bold uppercase text-sm transition-colors ${
        activeTab === "custom" ? "bg-navy text-white" : "bg-mist text-navy hover:bg-plum/10"
      }`}
    >
      Custom Event Definition
    </button>
  </div>
);

const EventCustomizationPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [activeTab, setActiveTab] = useState("standard"); // "standard" | "custom"

  const [formData, setFormData] = useState({
    eventType: "",
    customEventDescription: "",
    customPreferences: "",
    theme: [],
    culture: "",
    venuePreference: "",
    guestCount: 50,
    date: "",
    addons: [],
    eventSpecifics: [],
    notes: ""
  });

  const eventTypes = ["Wedding", "Anniversary", "Birthday", "Reunion", "Baptism", "Memorial"];
  const themes = ["International", "Minimalist", "Cultural", "Traditional", "Modern", "Rustic", "Elegant"];
  const cultures = ["Hindu", "Christian", "Muslim", "Jewish", "Buddhist", "Sikh", "Regional", "Secular"];
  const addOnOptions = ["Catering", "Décor", "Photography", "Light & Sound", "Venue Liaison"];

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = e.target.checked;
      if (name === "theme") {
        setFormData((prev) => ({
          ...prev,
          theme: checked ? [...prev.theme, value] : prev.theme.filter((t) => t !== value)
        }));
      } else if (name === "addons") {
        setFormData((prev) => ({
          ...prev,
          addons: checked ? [...prev.addons, value] : prev.addons.filter((a) => a !== value)
        }));
      } else if (name === "eventSpecifics") {
        setFormData((prev) => ({
          ...prev,
          eventSpecifics: checked ? [...prev.eventSpecifics, value] : prev.eventSpecifics.filter((s) => s !== value)
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      
      // Clear specifics if event type changes
      if (name === "eventType") {
        setFormData((prev) => ({ ...prev, eventSpecifics: [] }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  // Base price 1,00,000 INR
  // Guest impact: 5,000 INR per guest
  // Addon impact: 50,000 INR per general addon
  // Custom specific impact: 20,000 INR per specific customization
  const estimatedCost = 100000 + (formData.guestCount * 5000) + (formData.addons.length * 50000) + (formData.eventSpecifics.length * 20000);

  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      
      <main className="pt-24 pb-16">
        <section className="relative py-16 overflow-hidden rounded-soft mx-6 shadow-twilight border border-white/10 mt-6">
          <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url('/gallery/church_wedding.png')` }}>
            <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-white">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-mist/80 hover:text-white mb-6 transition-colors drop-shadow-md"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </button>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 text-glow">Customize Your Event</h1>
            <p className="text-mist/90 text-lg">Tell us about your vision and we'll bring it to life</p>
          </div>
        </section>

        <section className="bg-glass py-6 border-b border-mauve/20 my-6 mx-6 rounded-soft">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-4">
              {[1, 2, 3].map((s) => (
                <React.Fragment key={s}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-soft ${step >= s ? "bg-navy text-white" : "bg-mist text-navy"}`}>
                    {s}
                  </div>
                  {s < 3 && <div className={`w-16 h-0.5 ${step > s ? "bg-navy" : "bg-plum/40"}`} />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="glass border border-mauve/20 rounded-soft p-8 shadow-twilight">
                {step === 1 && (
                  <div className="space-y-8 animate-fade-in">
                    
                    <CustomizationTab activeTab={activeTab} setActiveTab={setActiveTab} />

                    {activeTab === "standard" ? (
                      <>
                        <div>
                          <label className="block text-navy font-bold uppercase text-sm mb-3">Event Type</label>
                          <select
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-mist/50 border border-mauve/30 rounded-refined text-navy focus:border-navy focus:outline-none backdrop-blur-sm"
                            required
                          >
                            <option value="">Select event type</option>
                            {eventTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>

                        {formData.eventType && EVENT_CUSTOMIZATIONS[formData.eventType] && (
                          <div className="bg-plum/10 p-4 rounded-refined border border-plum/20">
                            <label className="block text-navy font-bold uppercase text-sm mb-3 text-plum">
                              {formData.eventType} Customizations
                            </label>
                            <div className="space-y-2">
                              {EVENT_CUSTOMIZATIONS[formData.eventType].map((option) => (
                                <label key={option} className="flex items-center gap-3 p-2 cursor-pointer hover:bg-mist/50 rounded-refined transition-colors">
                                  <input
                                    type="checkbox"
                                    name="eventSpecifics"
                                    value={option}
                                    checked={formData.eventSpecifics.includes(option)}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 accent-navy"
                                  />
                                  <span className="text-navy text-sm">{option}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div>
                          <label className="block text-navy font-bold uppercase text-sm mb-3">Culture/Religion</label>
                          <select
                            name="culture"
                            value={formData.culture}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-mist/50 border border-mauve/30 rounded-refined text-navy focus:border-navy focus:outline-none backdrop-blur-sm"
                          >
                            <option value="">Select culture/religion</option>
                            {cultures.map((culture) => (
                              <option key={culture} value={culture}>{culture}</option>
                            ))}
                          </select>
                        </div>
                      </>
                    ) : (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-navy font-bold uppercase text-sm mb-3">Define Your Unique Event</label>
                          <input
                            type="text"
                            name="customEventDescription"
                            value={formData.customEventDescription}
                            onChange={handleInputChange}
                            placeholder="e.g. A woodland faerie fashion show..."
                            className="w-full px-4 py-3 bg-mist/50 border border-mauve/30 rounded-refined text-navy focus:border-navy focus:outline-none backdrop-blur-sm"
                            required={activeTab === "custom"}
                          />
                        </div>
                        <div>
                          <label className="block text-navy font-bold uppercase text-sm mb-3">A la carte Custom Preferences</label>
                          <textarea
                            name="customPreferences"
                            value={formData.customPreferences}
                            onChange={handleInputChange}
                            rows={3}
                            placeholder="Describe specific bespoke elements, unique rituals, or custom fabricated decor..."
                            className="w-full px-4 py-3 bg-mist/50 border border-mauve/30 rounded-refined text-navy focus:border-navy focus:outline-none resize-none backdrop-blur-sm"
                          />
                          <p className="text-xs text-plum mt-2">Our design team will review your unique needs and reach out directly.</p>
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-navy font-bold uppercase text-sm mb-3">Visual Theme</label>
                      <div className="flex flex-wrap gap-3">
                        {themes.map((theme) => (
                          <label key={theme} className="flex items-center">
                            <input
                              type="checkbox"
                              name="theme"
                              value={theme}
                              checked={formData.theme.includes(theme)}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <span className={`px-4 py-2 rounded-refined cursor-pointer transition-all shadow-sm ${formData.theme.includes(theme) ? "bg-navy text-white" : "bg-mist/80 text-navy hover:bg-mauve/40 border border-mauve/20"}`}>
                              {theme}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full py-4 bg-navy text-white font-bold uppercase rounded-refined hover:bg-navy/90 transition-colors flex items-center justify-center gap-2 shadow-twilight"
                    >
                      Continue <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8 animate-fade-in">
                    <div>
                      <label className="block text-navy font-bold uppercase text-sm mb-3">
                        Guest Count: <span className="text-plum font-serif text-lg">{formData.guestCount}</span>
                      </label>
                      <input
                        type="range"
                        name="guestCount"
                        min="10"
                        max="1000"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        className="w-full h-2 bg-mauve/40 rounded-lg appearance-none cursor-pointer accent-navy"
                      />
                    </div>

                    <div>
                      <label className="block text-navy font-bold uppercase text-sm mb-3">Preferred Date</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-mist/50 border border-mauve/30 rounded-refined text-navy focus:border-navy focus:outline-none backdrop-blur-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-navy font-bold uppercase text-sm mb-3">Venue Preference</label>
                      <input
                        type="text"
                        name="venuePreference"
                        value={formData.venuePreference}
                        onChange={handleInputChange}
                        placeholder="Indoor, outdoor, specific venue in Kerala..."
                        className="w-full px-4 py-3 bg-mist/50 border border-mauve/30 rounded-refined text-navy focus:border-navy focus:outline-none backdrop-blur-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-navy font-bold uppercase text-sm mb-3">General Add-On Services</label>
                      <div className="space-y-2">
                        {addOnOptions.map((addon) => (
                          <label key={addon} className="flex items-center gap-3 p-3 bg-mist/50 border border-mauve/20 rounded-refined cursor-pointer hover:bg-plum/10 transition-colors backdrop-blur-sm">
                            <input
                              type="checkbox"
                              name="addons"
                              value={addon}
                              checked={formData.addons.includes(addon)}
                              onChange={handleInputChange}
                              className="w-5 h-5 accent-navy"
                            />
                            <span className="text-navy font-medium">{addon}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-navy font-bold uppercase text-sm mb-3">Additional Notes</label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Tell us about your vision, special requirements, or any questions..."
                        className="w-full px-4 py-3 bg-mist/50 border border-mauve/30 rounded-refined text-navy focus:border-navy focus:outline-none resize-none backdrop-blur-sm"
                      />
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 py-4 border-2 border-navy text-navy font-bold uppercase rounded-refined hover:bg-navy hover:text-white transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-4 bg-navy text-white font-bold uppercase rounded-refined hover:bg-navy/90 transition-colors flex items-center justify-center gap-2 shadow-twilight"
                      >
                        Get a Quote <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="text-center py-12 animate-fade-in glass p-8 rounded-soft border border-mauve/30">
                    <CheckCircle2 className="w-20 h-20 text-navy mx-auto mb-6 drop-shadow-md" />
                    <h2 className="text-3xl font-serif text-navy mb-4">Request Submitted</h2>
                    <p className="text-navy/80 text-lg mb-8 max-w-md mx-auto">
                      Thank you for your inquiry! Our team in Kochi will review your event details and contact you shortly with a personalized <strong>₹{estimatedCost.toLocaleString("en-IN")}</strong> estimate.
                    </p>
                    <button
                      onClick={() => navigate("/")}
                      className="px-8 py-4 bg-navy text-white font-bold uppercase rounded-refined hover:bg-navy/90 transition-colors shadow-twilight"
                    >
                      Return to Home
                    </button>
                  </div>
                )}
              </form>
            </div>

            <div className="lg:col-span-1">
              <div className="glass border border-mauve/20 rounded-soft p-6 shadow-twilight sticky top-32">
                <h3 className="text-2xl font-serif text-navy mb-6">Your Selections</h3>
                
                <div className="space-y-4 mb-6">
                  {activeTab === "standard" && formData.eventType && (
                    <div>
                      <p className="text-xs text-plum font-bold uppercase mb-1">Event Type</p>
                      <p className="text-navy font-semibold">{formData.eventType}</p>
                    </div>
                  )}
                  {activeTab === "custom" && formData.customEventDescription && (
                    <div>
                      <p className="text-xs text-plum font-bold uppercase mb-1">Custom Event</p>
                      <p className="text-navy font-semibold truncate">{formData.customEventDescription}</p>
                    </div>
                  )}
                  {formData.theme.length > 0 && (
                    <div>
                      <p className="text-xs text-plum font-bold uppercase mb-1">Themes</p>
                      <p className="text-navy font-semibold">{formData.theme.join(", ")}</p>
                    </div>
                  )}
                  {formData.culture && (
                    <div>
                      <p className="text-xs text-plum font-bold uppercase mb-1">Culture</p>
                      <p className="text-navy font-semibold">{formData.culture}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-xs text-plum font-bold uppercase mb-1">Guest Count</p>
                    <p className="text-navy font-semibold">{formData.guestCount}</p>
                  </div>
                  {formData.eventSpecifics.length > 0 && (
                    <div>
                      <p className="text-xs text-plum font-bold uppercase mb-1">Event Specifics</p>
                      <p className="text-navy font-semibold text-sm">{formData.eventSpecifics.join(", ")}</p>
                    </div>
                  )}
                  {formData.addons.length > 0 && (
                    <div>
                      <p className="text-xs text-plum font-bold uppercase mb-1">Add-Ons</p>
                      <p className="text-navy font-semibold text-sm">{formData.addons.join(", ")}</p>
                    </div>
                  )}
                </div>

                <div className="border-t border-mauve/40 pt-4">
                  <p className="text-xs text-navy font-bold uppercase mb-2">Estimated Base Cost</p>
                  <p className="text-3xl font-serif text-navy drop-shadow-sm">₹{estimatedCost.toLocaleString("en-IN")}</p>
                  <p className="text-xs text-plum mt-2 font-medium">*Final INR quote will vary based on Kochi vendor rates</p>
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
