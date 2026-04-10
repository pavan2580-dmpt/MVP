import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import Process from '../components/Process';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
