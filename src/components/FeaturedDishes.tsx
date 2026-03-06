import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const dishes = [
  {
    id: 1,
    name: 'Signature BBQ Ribs',
    price: '$28',
    description: 'Slow-smoked for 12 hours with our secret Texas dry rub and house-made glaze.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Lone Star Ribeye',
    price: '$42',
    description: '16oz hand-cut premium Angus beef, flame-grilled to perfection with garlic butter.',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
    tag: 'Premium'
  },
  {
    id: 3,
    name: 'The Texan Burger',
    price: '$19',
    description: 'Double wagyu patty, smoked brisket, cheddar, crispy onions, and chipotle aioli.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    tag: 'Chef Choice'
  },
  {
    id: 4,
    name: 'Southern Fried Chicken',
    price: '$24',
    description: 'Buttermilk brined, double-dredged, served with honey-hot sauce and slaw.',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80',
    tag: 'Classic'
  }
];

export default function FeaturedDishes() {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Specialties</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold">Featured <span className="text-gold">Dishes</span></h2>
          </div>
          <p className="text-white/50 max-w-md">
            Hand-picked by our executive chef, these dishes represent the soul of Texas Taste. 
            Quality ingredients, bold flavors, and traditional techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-pure via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full glass text-[10px] font-bold uppercase tracking-wider text-gold">
                    {dish.tag}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold group-hover:text-gold transition-colors">{dish.name}</h3>
                <span className="text-gold font-display font-bold">{dish.price}</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-4">
                {dish.description}
              </p>
              <div className="flex items-center gap-1 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
                <span className="text-[10px] text-white/30 ml-2 uppercase tracking-widest">5.0 Rating</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
