import { Cpu, Globe, Smartphone, Zap, Shield, BarChart3 } from 'lucide-react';
import { useRef } from 'react';
import useInView from '../hooks/useInView';

const services = [
  {
    icon: Cpu,
    number: '01',
    title: 'AI & Machine Learning',
    description:
      'Custom AI solutions that automate workflows, predict outcomes, and unlock insights from your data.',
  },
  {
    icon: Globe,
    number: '02',
    title: 'Web Applications',
    description:
      'Scalable, performant web apps built with modern frameworks that deliver exceptional user experiences.',
  },
  {
    icon: Smartphone,
    number: '03',
    title: 'Mobile Development',
    description:
      'Native and cross-platform mobile apps designed for engagement, speed, and reliability.',
  },
  {
    icon: Zap,
    number: '04',
    title: 'Rapid Prototyping',
    description:
      'Go from idea to interactive prototype in days, not months. Validate fast, iterate faster.',
  },
  {
    icon: Shield,
    number: '05',
    title: 'Cloud & Security',
    description:
      'Secure cloud infrastructure and DevOps pipelines that scale with your business needs.',
  },
  {
    icon: BarChart3,
    number: '06',
    title: 'Data Analytics',
    description:
      'Transform raw data into actionable dashboards and real-time reporting systems.',
  },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -7;
    const rotY = ((x - cx) / cx) * 7;
    card.style.transition = 'transform 0.1s ease';
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(10px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-indigo-500/50 overflow-hidden cursor-default"
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  );
}

export default function Services() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-20"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <p className="text-indigo-400 font-medium text-sm tracking-widest uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Building the Future,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              One MVP at a Time
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We combine cutting-edge technology with lean methodology to turn your vision into
            market-ready products.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            /* Reveal wrapper — handles entrance animation */
            <div
              key={service.title}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.6s ease ${i * 90}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 90}ms`,
              }}
            >
              <TiltCard>
                {/* Glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/5 transition-all duration-500 rounded-2xl" />

                {/* Number watermark */}
                <span className="absolute top-4 right-6 text-5xl font-bold text-slate-800 select-none leading-none">
                  {service.number}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-3">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{service.description}</p>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
