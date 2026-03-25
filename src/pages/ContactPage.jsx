import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3e3);
  };
  return <div className="min-h-screen">
    <Header />

    <main className="pt-24">
      {
        /* Header Section */
      }
      <section className="relative py-16 overflow-hidden border-b border-navy/10">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url('/gallery/contact_hero_corporate.png')` }}>
          <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-mauve hover:text-white mb-8 transition-colors drop-shadow-md"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          <h1 className="text-4xl md:text-6xl font-serif mb-4 text-glow">Contact Us</h1>
          <p className="text-mist/90 text-lg max-w-2xl">
            Get in touch with our team. We're here to help bring your vision to life.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {
            /* Contact Form */
          }
          <div className="lg:col-span-2">
            <div className="bg-mist border border-plum/30 rounded-soft p-8 shadow-soft">
              <h2 className="text-3xl font-serif text-navy mb-6">Send us a Message</h2>

              {submitted ? <div className="text-center py-12 animate-fade-in">
                <CheckCircle2 className="w-16 h-16 text-mauve mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-navy mb-2">Message Sent!</h3>
                <p className="text-slate">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </div> : <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-navy font-bold uppercase text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-mist border border-plum/30 rounded-refined text-navy focus:border-mauve focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-navy font-bold uppercase text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-mist border border-plum/30 rounded-refined text-navy focus:border-mauve focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-navy font-bold uppercase text-sm mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-mist border border-plum/30 rounded-refined text-navy focus:border-mauve focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-navy font-bold uppercase text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-mist border border-plum/30 rounded-refined text-navy focus:border-mauve focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-mauve text-navy font-bold uppercase rounded-refined hover:bg-mist transition-colors"
                >
                  Send Message
                </button>
              </form>}
            </div>
          </div>

          {
            /* Contact Information */
          }
          <div className="lg:col-span-1">
            <div className="bg-mist border border-mauve/20 rounded-soft p-8 shadow-soft sticky top-32">
              <h3 className="text-2xl font-serif text-navy mb-8">Get in Touch</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-mauve mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-plum uppercase mb-1">Email</p>
                    <a href="mailto:clarelyzmathew@gmail.com" className="text-navy hover:text-mauve transition-colors">
                      clarelyzmathew@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-mauve mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-plum uppercase mb-1">Phone</p>
                    <a href="tel:+919544544217" className="text-navy hover:text-mauve transition-colors">
                      +91 954 4544 217
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-mauve mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-plum uppercase mb-1">Locations</p>
                    <p className="text-navy">Marine Drive, Kochi</p>
                    <p className="text-navy">Ernakulam, Kerala</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-mauve mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-plum uppercase mb-1">Business Hours</p>
                    <p className="text-navy">Monday - Friday: 9am - 6pm</p>
                    <p className="text-navy">Saturday: 10am - 4pm</p>
                    <p className="text-navy">Sunday: By appointment</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-mauve/20 pt-6">
                <p className="text-sm text-slate mb-4">
                  For urgent inquiries or same-day event coordination, please call our emergency line.
                </p>
                <a href="tel:+919544544217" className="text-mauve font-semibold hover:text-navy transition-colors">
                  Emergency: +91 954 4544 217
                </a>
              </div>
            </div>
          </div>
        </div>

        {
          /* Map Section (Optional) */
        }
        <div className="mt-12 bg-mist border border-mauve/20 rounded-soft overflow-hidden shadow-twilight w-full h-96 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251482.3551532452!2d76.16668383833892!3d9.982855866164224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1704153026048!5m2!1sen!2sin"
            className="w-full h-full border-0 absolute inset-0 z-0 grayscale opacity-90 transition-all duration-500 hover:grayscale-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>

    <Footer />
  </div>;
};
export default ContactPage;
