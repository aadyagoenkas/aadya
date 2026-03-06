import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const categories = ['All', 'Starters', 'Mains', 'BBQ', 'Steaks', 'Desserts'];

const menuItems = [
  { name: 'Smoked Brisket Nachos', price: '$16', category: 'Starters', desc: 'House chips, queso, jalapeños, BBQ drizzle' },
  { name: 'Texas Red Chili', price: '$12', category: 'Starters', desc: 'No beans, slow-cooked beef, cheddar, onions' },
  { name: 'Crispy Pork Belly', price: '$15', category: 'Starters', desc: 'Honey bourbon glaze, pickled radish' },
  { name: 'The Pitmaster Platter', price: '$45', category: 'BBQ', desc: 'Brisket, ribs, sausage, pulled pork, two sides' },
  { name: 'Half Rack Baby Backs', price: '$22', category: 'BBQ', desc: 'Hickory smoked, sweet & spicy glaze' },
  { name: 'Jalapeño Cheddar Sausage', price: '$18', category: 'BBQ', desc: 'House-made, snap casing, mustard sauce' },
  { name: 'Cowboy Ribeye', price: '$58', category: 'Steaks', desc: '22oz bone-in, dry-aged 35 days' },
  { name: 'Filet Mignon', price: '$48', category: 'Steaks', desc: '8oz center-cut, red wine reduction' },
  { name: 'T-Bone Steak', price: '$52', category: 'Steaks', desc: '20oz classic cut, herb butter' },
  { name: 'Nashville Hot Chicken', price: '$24', category: 'Mains', desc: 'Spicy oil, pickles, white bread, fries' },
  { name: 'Shrimp & Grits', price: '$26', category: 'Mains', desc: 'Cajun spice, andouille sausage, creamy grits' },
  { name: 'Bourbon Pecan Pie', price: '$10', category: 'Desserts', desc: 'Warm, vanilla bean ice cream' },
  { name: 'Texas Sheet Cake', price: '$9', category: 'Desserts', desc: 'Rich chocolate, pecans, fudge frosting' }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-black-pure">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Exquisite Selection</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">The Full <span className="text-gold">Menu</span></h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all",
                  activeCategory === cat 
                    ? "gold-gradient text-black-pure shadow-lg shadow-gold/20" 
                    : "glass text-white/60 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-bold group-hover:text-gold transition-colors">{item.name}</h3>
                  <div className="flex-grow border-b border-white/10 mx-4 border-dotted" />
                  <span className="text-gold font-display font-bold">{item.price}</span>
                </div>
                <p className="text-white/40 text-sm italic">{item.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-20 text-center">
          <button className="px-10 py-4 glass text-white font-bold rounded-full uppercase tracking-widest hover:bg-white/10 transition-colors">
            Download PDF Menu
          </button>
        </div>
      </div>
    </section>
  );
}
