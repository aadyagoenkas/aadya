import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-black-pure/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center shadow-lg shadow-gold/20 group-hover:scale-110 transition-transform">
            <UtensilsCrossed className="text-black-pure w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter text-white">
            TEXAS<span className="text-gold">TASTE</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-gold transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <a
              href="#menu"
              className="px-6 py-2.5 glass text-white font-bold rounded-full text-sm uppercase tracking-wider hover:bg-white/10 transition-all border border-white/10"
            >
              Order Online
            </a>
            <a
              href="#reservation"
              className="px-6 py-2.5 gold-gradient text-black-pure font-bold rounded-full text-sm uppercase tracking-wider hover:scale-105 transition-transform shadow-lg shadow-gold/20"
            >
              Reserve
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black-pure border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-white/70 hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <a
                  href="#menu"
                  className="w-full py-3 glass text-white font-bold rounded-xl text-center uppercase tracking-wider"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Order Online
                </a>
                <a
                  href="#reservation"
                  className="w-full py-3 gold-gradient text-black-pure font-bold rounded-xl text-center uppercase tracking-wider"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Reserve a Table
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
