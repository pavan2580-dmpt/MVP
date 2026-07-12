import { useState, useEffect } from 'react';
import { ArrowRight, Users, Target, Lightbulb, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import LightRays from '../components/LightRays';
import FloatingShapes from '../components/FloatingShapes';
import useInView from '../hooks/useInView';
import Footer from '../components/Footer';
import useSEO from '../hooks/useSEO';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '3+', label: 'Years Experience' },
  { value: '99%', label: 'Client Satisfaction' },
];

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We exist to help founders and businesses bring their most ambitious ideas to life through technology.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We stay at the forefront of emerging technologies, ensuring your product leverages the best tools available.',
  },
  {
    icon: Users,
    title: 'Collaborative Spirit',
    description: 'We work as an extension of your team — transparent, communicative, and fully aligned with your goals.',
  },
  {
    icon: Rocket,
    title: 'Ship Fast, Learn Faster',
    description: 'We believe in lean methodology — build, measure, learn, and iterate relentlessly until product-market fit.',
  },
];

export default function AboutPage() {
  useSEO({
    title: 'About MVP Innovations | Our Story, Mission & Team',
    description: 'Learn about MVP Innovations — a product studio with 3+ years of experience, 50+ projects delivered, and a mission to turn bold ideas into digital reality.',
    canonical: 'https://www.mvpinnovations.in/about',
  });

  const [show, setShow] = useState(false);
  const { ref: valuesRef, isInView: valuesVisible } = useInView();
  const { ref: teamCtaRef, isInView: teamCtaVisible } = useInView();
  const { ref: statsRef, isInView: statsVisible } = useInView();

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Hero section */}
      <section className="relative w-full min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0 bg-slate-950">
          <LightRays
            raysOrigin="top-left"
            raysColor="#8b5cf6"
            raysSpeed={0.5}
            lightSpread={1.6}
            rayLength={2.5}
            followMouse
            mouseInfluence={0.3}
            fadeDistance={1}
            saturation={1}
          />
        </div>
        <div className="absolute inset-0 z-[1]">
          <FloatingShapes color="#8b5cf6" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
          <div
            style={{
              opacity: show ? 1 : 0,
              transform: show ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <p className="text-violet-400 font-medium text-sm tracking-widest uppercase mb-4">About Us</p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 leading-tight">
              We Turn Bold Ideas Into{' '}
              <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                Digital Reality
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              MVP Innovations is a product studio that partners with startups and enterprises to build
              technology products from the ground up. We believe in shipping fast, learning from users,
              and iterating relentlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6" ref={statsRef}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative p-8 rounded-2xl border border-slate-800 bg-slate-900/50 text-center"
              style={{
                opacity: statsVisible ? 1 : 0,
                transform: statsVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms`,
              }}
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-violet-400 to-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-6" ref={valuesRef}>
        <div className="max-w-6xl mx-auto">
          <div
            className="text-center mb-16"
            style={{
              opacity: valuesVisible ? 1 : 0,
              transform: valuesVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <p className="text-violet-400 font-medium text-sm tracking-widest uppercase mb-4">Our Values</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
              What{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                Drives Us
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((item, i) => (
              <div
                key={item.title}
                className="group p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-violet-500/50 transition-all duration-500 hover:-translate-y-1"
                style={{
                  opacity: valuesVisible ? 1 : 0,
                  transform: valuesVisible ? 'translateY(0)' : 'translateY(25px)',
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${150 + i * 100}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-6 group-hover:bg-violet-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 px-6" ref={teamCtaRef}>
        <div
          className="max-w-4xl mx-auto relative p-16 rounded-3xl border border-slate-800 bg-slate-900/50 overflow-hidden text-center"
          style={{
            opacity: teamCtaVisible ? 1 : 0,
            transform: teamCtaVisible ? 'scale(1)' : 'scale(0.95)',
            transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-indigo-500/5" />
          <div className="relative z-10">
            <p className="text-violet-400 font-medium text-sm tracking-widest uppercase mb-4">The Team</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              Meet the{' '}
              <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                People
              </span>{' '}
              Behind It All
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
              Engineers, designers, and strategists united by a passion for building products that matter.
            </p>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-400 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
            >
              Meet Our Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
            Ready to build something amazing?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Let's turn your vision into a product users love.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-400 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
