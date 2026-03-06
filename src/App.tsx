import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDishes from './components/FeaturedDishes';
import Menu from './components/Menu';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ReservationForm from './components/ReservationForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black-pure selection:bg-gold selection:text-black-pure">
      <Navbar />
      <main>
        <Hero />
        <FeaturedDishes />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <ReservationForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
