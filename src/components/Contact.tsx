import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Visit <span className="text-gold">Texas Taste</span></h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center shrink-0">
                  <MapPin className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-white/50">123 Lone Star Avenue, <br />Austin, TX 78701, USA</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center shrink-0">
                  <Phone className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                  <p className="text-white/50">+1 (512) 555-0123</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center shrink-0">
                  <Mail className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Address</h4>
                  <p className="text-white/50">hello@texastaste.com</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-black-pure transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-black-pure transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-black-pure transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden min-h-[400px] border border-white/10">
            {/* Placeholder for Google Map */}
            <div className="absolute inset-0 bg-black-pure flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gold mx-auto mb-4 opacity-50" />
                <p className="text-white/30 uppercase tracking-widest text-xs">Interactive Map Loading...</p>
              </div>
              <iframe
                title="Texas Taste Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.74637223441!2d-97.8317828551469!3d30.31111413676373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1709700000000!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full grayscale invert opacity-50"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
