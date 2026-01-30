import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, CheckCircle2, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BookingAvailabilityPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [eventType, setEventType] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [requestCallback, setRequestCallback] = useState(false);

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const eventTypes = ['Wedding', 'Anniversary', 'Birthday', 'Reunion', 'Baptism', 'Memorial', 'Custom'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const today = new Date().toISOString().split('T')[0];

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
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Check Availability</h1>
            <p className="text-seashell/80 text-lg max-w-2xl">
              Select your preferred date and time. We'll confirm your booking or suggest alternative options.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          {!showConfirmation ? (
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="bg-seashell border border-almond-silk/20 rounded-soft p-8 md:p-12 shadow-soft">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Event Type */}
                  <div>
                    <label className="block text-space-indigo font-bold uppercase text-sm mb-3">
                      Event Type
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-lilac-ash/20 border border-almond-silk/20 rounded-refined text-space-indigo focus:border-almond-silk focus:outline-none"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date Picker */}
                  <div>
                    <label className="block text-space-indigo font-bold uppercase text-sm mb-3">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-almond-silk" />
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={today}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-lilac-ash/20 border border-almond-silk/20 rounded-refined text-space-indigo focus:border-almond-silk focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Time Slot Selection */}
                {selectedDate && (
                  <div className="mb-8 animate-fade-in">
                    <label className="block text-space-indigo font-bold uppercase text-sm mb-4">
                      Available Time Slots
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`px-4 py-3 rounded-refined transition-all ${
                            selectedTime === time
                              ? 'bg-dusty-grape text-white shadow-soft'
                              : 'bg-lilac-ash/20 text-space-indigo hover:bg-almond-silk/20 border border-almond-silk/20'
                          }`}
                        >
                          <Clock className="w-4 h-4 inline mr-2" />
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Callback Request */}
                <div className="mb-8">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={requestCallback}
                      onChange={(e) => setRequestCallback(e.target.checked)}
                      className="w-5 h-5 accent-space-indigo"
                    />
                    <span className="text-space-indigo">
                      I'd prefer to receive a call to discuss availability
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!selectedDate || (!selectedTime && !requestCallback)}
                  className="w-full py-4 bg-almond-silk text-space-indigo font-bold uppercase rounded-refined hover:bg-seashell transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {requestCallback ? (
                    <>
                      <Phone className="w-5 h-5" />
                      Request Callback
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      Check Availability
                    </>
                  )}
                </button>
              </form>

              {/* Calendar Widget Preview */}
              <div className="mt-12 bg-seashell border border-almond-silk/20 rounded-soft p-8 shadow-soft">
                <h3 className="text-2xl font-serif text-space-indigo mb-6">Calendar View</h3>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-dusty-grape font-semibold text-sm">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 35 }, (_, i) => {
                    const date = new Date();
                    date.setDate(date.getDate() - date.getDay() + i);
                    const dateStr = date.toISOString().split('T')[0];
                    const isToday = dateStr === today;
                    const isSelected = dateStr === selectedDate;
                    const isPast = dateStr < today;
                    
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => !isPast && setSelectedDate(dateStr)}
                        disabled={isPast}
                        className={`aspect-square rounded-refined transition-all ${
                          isSelected
                            ? 'bg-dusty-grape text-white shadow-soft'
                            : isPast
                            ? 'bg-lilac-ash/10 text-lilac-ash cursor-not-allowed'
                            : isToday
                            ? 'bg-almond-silk/20 text-space-indigo border-2 border-almond-silk'
                            : 'bg-lilac-ash/20 text-space-indigo hover:bg-almond-silk/20'
                        }`}
                      >
                        {date.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto bg-seashell border border-almond-silk/20 rounded-soft p-12 shadow-soft-lg text-center animate-fade-in">
              <CheckCircle2 className="w-20 h-20 text-almond-silk mx-auto mb-6" />
              <h2 className="text-3xl font-serif text-space-indigo mb-4">Request Received</h2>
              <p className="text-dusty-grape text-lg mb-8">
                {requestCallback 
                  ? "We'll call you within 24 hours to discuss your event and check availability for your preferred date."
                  : `We've received your availability request for ${selectedDate} at ${selectedTime}. Our team will confirm within 24 hours.`
                }
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => {
                    setShowConfirmation(false);
                    setSelectedDate('');
                    setSelectedTime('');
                    setEventType('');
                    setRequestCallback(false);
                  }}
                  className="px-8 py-3 border-2 border-almond-silk text-space-indigo font-bold uppercase rounded-refined hover:bg-almond-silk transition-colors"
                >
                  Make Another Request
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="px-8 py-3 bg-almond-silk text-space-indigo font-bold uppercase rounded-refined hover:bg-seashell transition-colors"
                >
                  Return to Home
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookingAvailabilityPage;
