import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Globe, Sparkles, Award } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const AboutUsPage = () => {
  const navigate = useNavigate();
  const values = [
    {
      icon: Globe,
      title: "Cultural Sensitivity",
      description: "We honor and respect traditions from all backgrounds, ensuring every event reflects your cultural heritage with authenticity and grace."
    },
    {
      icon: Heart,
      title: "Respect for Solemn Events",
      description: "Memorial services and solemn occasions are handled with the utmost care, dignity, and respect they deserve."
    },
    {
      icon: Sparkles,
      title: "Customization",
      description: "Every event is uniquely yours. We work closely with you to bring your vision to life, no matter how specific or unique."
    },
    {
      icon: Award,
      title: "Professional Coordination",
      description: "Our experienced team ensures seamless execution from initial planning to the final moment, handling every detail with precision."
    }
  ];
  return <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {
    /* Hero Section */
  }
        <section className="relative py-24 overflow-hidden border-b border-navy/10">
          <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url('/gallery/hero_reunion_dinner.jpg')` }}>
            <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-white">
            <button
    onClick={() => navigate("/")}
    className="flex items-center gap-2 text-mist/80 hover:text-white mb-8 transition-colors drop-shadow-md"
  >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </button>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 text-glow">About Elyza Events</h1>
            <p className="text-mist/90 text-xl max-w-3xl leading-relaxed">
              A boutique event studio dedicated to the art of celebration and the dignity of remembrance.
            </p>
          </div>
        </section>

        {
    /* Introduction */
  }
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="h-1 w-24 bg-slate mb-8" />
              <p className="text-mauve text-lg leading-relaxed mb-6">
                Founded on the principles of discretion, artistic integrity, and cultural sensitivity, Elyza Events 
                specializes in the architecture of experience. We don't just plan events; we design atmospheres that 
                honor your story, whether it's a celebration of joy or a moment of remembrance.
              </p>
              <p className="text-mauve text-lg leading-relaxed mb-6">
                Every celebration is an opportunity to tell a story through texture, lighting, sound, and the 
                careful curation of details that transform spaces into meaningful experiences. Based in London but 
                operating globally, our team works tirelessly behind the scenes to ensure your only focus is the moment itself.
              </p>
              <p className="text-navy text-xl font-serif italic">
                "We believe that true luxury is found in the things that are felt, not just seen."
              </p>
            </div>
          </div>
        </section>

        {
    /* Mission & Philosophy */
  }
        <section className="py-24 bg-plum/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8">Our Mission</h2>
              <p className="text-mauve text-lg leading-relaxed mb-12">
                To create events that transcend the ordinary—whether celebrating life's milestones or honoring its 
                passandstones. We approach each event with the understanding that behind every celebration or memorial 
                is a unique narrative deserving of thoughtful, respectful, and beautiful expression.
              </p>
              
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8">Our Philosophy</h2>
              <p className="text-mauve text-lg leading-relaxed">
                We believe in the power of atmosphere to elevate moments into lifelong memories. Our philosophy 
                centers on three core principles: authenticity in honoring traditions, excellence in execution, 
                and empathy in understanding the emotional significance of each occasion.
              </p>
            </div>
          </div>
        </section>

        {
    /* Values */
  }
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">Our Values</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {values.map((value, index) => {
    const IconComponent = value.icon;
    return <div key={index} className="bg-mist border border-slate/20 rounded-soft p-8 shadow-soft">
                    <div className="w-16 h-16 bg-slate/20 rounded-full flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-navy" />
                    </div>
                    <h3 className="text-2xl font-serif text-navy mb-4">{value.title}</h3>
                    <p className="text-mauve leading-relaxed">{value.description}</p>
                  </div>;
  })}
            </div>
          </div>
        </section>

        {
    /* Team Section (Optional) */
  }
        <section className="py-24 bg-navy text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Our Team</h2>
              <p className="text-mist/90 text-lg leading-relaxed mb-12">
                Our team of experienced event coordinators, designers, and cultural consultants brings together 
                decades of expertise in creating meaningful events. We work collaboratively to ensure every detail 
                reflects your vision and honors your traditions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-mauve/20 rounded-soft p-6">
                  <div className="w-24 h-24 bg-slate/20 rounded-full mx-auto mb-4" />
                  <h3 className="font-serif text-xl mb-2">Event Coordinators</h3>
                  <p className="text-mist/80 text-sm">Expert planning and execution</p>
                </div>
                <div className="bg-mauve/20 rounded-soft p-6">
                  <div className="w-24 h-24 bg-slate/20 rounded-full mx-auto mb-4" />
                  <h3 className="font-serif text-xl mb-2">Design Specialists</h3>
                  <p className="text-mist/80 text-sm">Creative vision and styling</p>
                </div>
                <div className="bg-mauve/20 rounded-soft p-6">
                  <div className="w-24 h-24 bg-slate/20 rounded-full mx-auto mb-4" />
                  <h3 className="font-serif text-xl mb-2">Cultural Consultants</h3>
                  <p className="text-mist/80 text-sm">Authentic tradition guidance</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default AboutUsPage;
