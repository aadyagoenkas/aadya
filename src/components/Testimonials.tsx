import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'James Wilson',
    role: 'Food Critic',
    content: 'The brisket here is life-changing. Smoky, tender, and perfectly seasoned. A true Texas gem.',
    avatar: 'https://i.pravatar.cc/150?u=james'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Local Resident',
    content: 'Best steakhouse in town! The atmosphere is incredible and the service is top-notch.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Michael Chen',
    role: 'BBQ Enthusiast',
    content: 'I have traveled all over Texas for BBQ, and Texas Taste holds its own against the legends.',
    avatar: 'https://i.pravatar.cc/150?u=michael'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Guest Reviews</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">What They <span className="text-gold">Say</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 text-gold/20 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-current" />
                ))}
              </div>
              <p className="text-white/70 mb-8 italic leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-gold" />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
