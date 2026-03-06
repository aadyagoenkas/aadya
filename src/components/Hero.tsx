import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source 
            src="https://cdn.pixabay.com/video/2021/08/13/84954-587661002_large.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black-pure/80 via-black-pure/40 to-black-pure" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-gold text-xs font-bold uppercase tracking-[0.3em] mb-6">
            EST. 2024 • TEXAS PRIDE
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tighter">
            Authentic American Flavors <br />
            <span className="text-gold-gradient italic font-serif">in the Heart of Texas</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Experience the smoky heritage of Texas BBQ and premium hand-cut steaks, 
            crafted with passion and served with southern hospitality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#reservation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 gold-gradient text-black-pure font-bold rounded-full uppercase tracking-widest shadow-2xl shadow-gold/30 flex items-center gap-2"
            >
              Reserve a Table <ChevronRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 glass text-white font-bold rounded-full uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              View Menu
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-gold">Scroll</span>
      </motion.div>
    </section>
  );
}
