
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-space-indigo overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
             {/* Abstract design elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-almond-silk/20 rounded-full animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1471306225400-e17b1c16751c?auto=format&fit=crop&q=80&w=1200" 
              alt="The Founder" 
              className="relative z-10 grayscale hover:grayscale-0 transition-all duration-1000 w-full max-w-md mx-auto shadow-soft-lg rounded-soft"
            />
          </div>
          <div className="lg:w-1/2">
            <h4 className="text-almond-silk text-xs tracking-[0.4em] uppercase mb-6">Our Philosophy</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              A commitment to <br />
              <span className="italic">extraordinary detail.</span>
            </h2>
            <div className="space-y-6 text-seashell/80 font-light text-lg leading-relaxed">
              <p>
                Founded on the principles of discretion and artistic integrity, Elyza Events 
                specializes in the architecture of experience. We don't just plan events; 
                we design atmospheres.
              </p>
              <p>
                Every celebration is an opportunity to tell a story through texture, lighting, 
                and sound. Based in London but operating globally, our team works tirelessly 
                behind the scenes to ensure your only focus is the moment itself.
              </p>
              <p className="italic text-almond-silk">
                "We believe that true luxury is found in the things that are felt, not just seen."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
