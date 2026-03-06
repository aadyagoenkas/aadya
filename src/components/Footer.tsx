import { UtensilsCrossed } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black-pure pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 gold-gradient rounded flex items-center justify-center">
                <UtensilsCrossed className="text-black-pure w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold tracking-tighter text-white">
                TEXAS<span className="text-gold">TASTE</span>
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Bringing the authentic flavors of the Lone Star State to your table. 
              Quality meats, traditional smoking, and modern culinary excellence.
            </p>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-gold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-white/50 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-white/50 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#menu" className="text-white/50 hover:text-white transition-colors text-sm">Our Menu</a></li>
              <li><a href="#reservation" className="text-white/50 hover:text-white transition-colors text-sm">Reservations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-gold mb-6">Opening Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between text-sm">
                <span className="text-white/50">Mon - Thu</span>
                <span className="text-white">5:00 PM - 10:00 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-white/50">Fri - Sat</span>
                <span className="text-white">4:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-white/50">Sunday</span>
                <span className="text-white">12:00 PM - 9:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-gold mb-6">Newsletter</h4>
            <p className="text-white/40 text-sm mb-4">Subscribe for special offers and events.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-gold w-full"
              />
              <button className="px-4 py-2 gold-gradient text-black-pure font-bold rounded-lg text-xs uppercase tracking-widest">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-[10px] uppercase tracking-widest">
            © 2024 Texas Taste Restaurant. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/20 hover:text-white transition-colors text-[10px] uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-white/20 hover:text-white transition-colors text-[10px] uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
