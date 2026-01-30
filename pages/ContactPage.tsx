import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-seashell">
      <Header />
      
      <main className="pt-24">
        {/* Header Section */}
        <section className="bg-space-indigo text-white py-16">
          <div className="container mx-auto px-6">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-almond-silk hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </button>
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Contact Us</h1>
            <p className="text-seashell/80 text-lg max-w-2xl">
              Get in touch with our team. We're here to help bring your vision to life.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-seashell border border-lilac-ash/30 rounded-soft p-8 shadow-soft">
                <h2 className="text-3xl font-serif text-space-indigo mb-6">Send us a Message</h2>
                
                {submitted ? (
                  <div className="text-center py-12 animate-fade-in">
                    <CheckCircle2 className="w-16 h-16 text-almond-silk mx-auto mb-4" />
                    <h3 className="text-2xl font-serif text-space-indigo mb-2">Message Sent!</h3>
                    <p className="text-dusty-grape">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-space-indigo font-bold uppercase text-sm mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-seashell border border-lilac-ash/30 rounded-refined text-space-indigo focus:border-almond-silk focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-space-indigo font-bold uppercase text-sm mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-seashell border border-lilac-ash/30 rounded-refined text-space-indigo focus:border-almond-silk focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-space-indigo font-bold uppercase text-sm mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-seashell border border-lilac-ash/30 rounded-refined text-space-indigo focus:border-almond-silk focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-space-indigo font-bold uppercase text-sm mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-seashell border border-lilac-ash/30 rounded-refined text-space-indigo focus:border-almond-silk focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-almond-silk text-space-indigo font-bold uppercase rounded-refined hover:bg-seashell transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-seashell border border-almond-silk/20 rounded-soft p-8 shadow-soft sticky top-32">
                <h3 className="text-2xl font-serif text-space-indigo mb-8">Get in Touch</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-almond-silk mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-lilac-ash uppercase mb-1">Email</p>
                      <a href="mailto:concierge@elyzaevents.com" className="text-space-indigo hover:text-almond-silk transition-colors">
                        concierge@elyzaevents.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-almond-silk mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-lilac-ash uppercase mb-1">Phone</p>
                      <a href="tel:+442079460123" className="text-space-indigo hover:text-almond-silk transition-colors">
                        +44 20 7946 0123
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-almond-silk mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-lilac-ash uppercase mb-1">Locations</p>
                      <p className="text-space-indigo">Mayfair, London</p>
                      <p className="text-space-indigo">Upper East Side, NY</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-almond-silk mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-lilac-ash uppercase mb-1">Business Hours</p>
                      <p className="text-space-indigo">Monday - Friday: 9am - 6pm</p>
                      <p className="text-space-indigo">Saturday: 10am - 4pm</p>
                      <p className="text-space-indigo">Sunday: By appointment</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-almond-silk/20 pt-6">
                  <p className="text-sm text-dusty-grape mb-4">
                    For urgent inquiries or same-day event coordination, please call our emergency line.
                  </p>
                  <a href="tel:+442079460123" className="text-almond-silk font-semibold hover:text-space-indigo transition-colors">
                    Emergency: +44 20 7946 0124
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section (Optional) */}
          <div className="mt-12 bg-seashell border border-almond-silk/20 rounded-soft overflow-hidden shadow-soft">
            <div className="h-96 bg-dusty-grape/20 flex items-center justify-center">
              <p className="text-dusty-grape">Map embed would go here</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
