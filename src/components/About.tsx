import { motion } from 'motion/react';
import { Award, Users, Clock, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=80"
                alt="Our Kitchen"
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 gold-gradient rounded-3xl -z-0 opacity-20 blur-3xl" />
            
            <div className="absolute -bottom-6 -right-6 glass p-8 rounded-2xl z-20 hidden md:block">
              <div className="text-4xl font-display font-bold text-gold mb-1">15+</div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/60">Years of Pitmaster <br />Experience</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">A Legacy of <span className="text-gold">Smoke & Fire</span></h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Founded in the heart of Texas, Texas Taste began as a small family pit-stop with a single 
              offset smoker and a dream to serve the most authentic BBQ in the state. 
              Today, we continue that tradition using heritage-breed meats and locally sourced post oak.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0">
                  <Award className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Award Winning</h4>
                  <p className="text-sm text-white/40">Voted Best Texas BBQ 2023 by Southern Living.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0">
                  <Users className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Family Owned</h4>
                  <p className="text-sm text-white/40">Three generations of culinary heritage.</p>
                </div>
              </div>
            </div>

            <button className="px-10 py-4 gold-gradient text-black-pure font-bold rounded-full uppercase tracking-widest hover:scale-105 transition-transform">
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
