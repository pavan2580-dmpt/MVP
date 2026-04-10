import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import useInView from '../hooks/useInView';

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
];

function Counter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1600;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <p className="text-indigo-400 font-medium text-sm tracking-widest uppercase mb-4">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 leading-tight">
              We Turn Bold Ideas Into{' '}
              <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Digital Reality
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              MVP Innovations is a product studio that partners with startups and enterprises to
              build technology products from the ground up. We believe in shipping fast, learning
              from users, and iterating relentlessly.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Our team of engineers, designers, and strategists work as an extension of your team
              to transform your vision into scalable, market-ready products.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors group"
            >
              Work with us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="relative p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm text-center group hover:border-indigo-500/30 transition-colors duration-300"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'scale(1)' : 'scale(0.88)',
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${300 + i * 100}ms`,
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500" />
                <div className="relative text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 to-purple-400 mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} active={isInView} />
                </div>
                <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
