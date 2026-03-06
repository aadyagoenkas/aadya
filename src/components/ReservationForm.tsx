import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Clock, Phone, User, CheckCircle2 } from 'lucide-react';

export default function ReservationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="reservation" className="py-24 bg-black-pure relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 gold-gradient opacity-5 blur-[100px]" />
          
          <div className="text-center mb-12">
            <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Table Booking</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Secure Your <span className="text-gold">Experience</span></h2>
            <p className="text-white/40">Join us for an unforgettable culinary journey. Reservations recommended.</p>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-black-pure w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Reservation Received!</h3>
              <p className="text-white/60">We'll confirm your table via SMS shortly. See you soon!</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/60 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-4 h-4" />
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold transition-colors text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/60 ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-4 h-4" />
                  <input
                    required
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold transition-colors text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/60 ml-1">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-4 h-4" />
                  <input
                    required
                    type="date"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold transition-colors text-white [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/60 ml-1">Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-4 h-4" />
                  <select
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold transition-colors text-white appearance-none"
                  >
                    <option value="">Select Time</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/60 ml-1">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-4 h-4" />
                  <select
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold transition-colors text-white appearance-none"
                  >
                    <option value="">Select Guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5+">5+ Guests</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="md:col-span-2 mt-4 py-5 gold-gradient text-black-pure font-bold rounded-xl uppercase tracking-[0.2em] hover:scale-[1.02] transition-transform shadow-2xl shadow-gold/20"
              >
                Confirm Reservation
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
