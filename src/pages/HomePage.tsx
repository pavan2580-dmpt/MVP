import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import Process from '../components/Process';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import useSEO from '../hooks/useSEO';

export default function HomePage() {
  useSEO({
    title: 'MVP Innovations | Build Your MVP in 4 Weeks',
    description: 'MVP Innovations is a product studio that transforms bold ideas into market-ready MVPs using AI, web, and mobile technologies. 30+ clients, 50+ projects shipped.',
    canonical: 'https://www.mvpinnovations.in/',
  });

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
