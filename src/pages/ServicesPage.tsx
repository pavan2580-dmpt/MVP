import { Cpu, Globe, Smartphone, Zap, Shield, BarChart3, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';
import Footer from '../components/Footer';
import { GlobeDemo } from '../components/GlobeDemo';

const services = [
  {
    icon: Cpu,
    slug: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    description: 'Custom AI solutions that automate workflows, predict outcomes, and unlock insights from your data.',
    features: ['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Chatbots & Agents'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: Globe,
    slug: 'web-applications',
    title: 'Web Applications',
    description: 'Scalable, performant web apps built with modern frameworks that deliver exceptional user experiences.',
    features: ['React / Next.js', 'Full-Stack Development', 'API Design & Integration', 'Real-Time Features'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: Smartphone,
    slug: 'mobile-development',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps designed for engagement, speed, and reliability.',
    features: ['React Native / Flutter', 'iOS & Android', 'Offline-First Design', 'Push Notifications'],
    gradient: 'from-orange-500/20 to-amber-500/20',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10 border-orange-500/20',
  },
  {
    icon: Zap,
    slug: 'rapid-prototyping',
    title: 'Rapid Prototyping',
    description: 'Go from idea to interactive prototype in days, not months. Validate fast, iterate faster.',
    features: ['Design Sprints', 'Interactive Prototypes', 'User Testing', 'Market Validation'],
    gradient: 'from-yellow-500/20 to-orange-500/20',
    iconColor: 'text-yellow-400',
    iconBg: 'bg-yellow-500/10 border-yellow-500/20',
  },
  {
    icon: Shield,
    slug: 'cloud-security',
    title: 'Cloud & Security',
    description: 'Secure cloud infrastructure and DevOps pipelines that scale with your business needs.',
    features: ['AWS / GCP / Azure', 'CI/CD Pipelines', 'Security Audits', 'Auto-Scaling Infrastructure'],
    gradient: 'from-indigo-500/20 to-violet-500/20',
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10 border-indigo-500/20',
  },
  {
    icon: BarChart3,
    slug: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable dashboards and real-time reporting systems.',
    features: ['Custom Dashboards', 'ETL Pipelines', 'Business Intelligence', 'Real-Time Monitoring'],
    gradient: 'from-pink-500/20 to-rose-500/20',
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-500/10 border-pink-500/20',
  },
];

const process = [
  { step: '01', title: 'Discovery', description: 'We dive deep into your vision, market, and users to define the right product strategy.' },
  { step: '02', title: 'Design', description: 'Wireframes, prototypes, and UI design that balances beauty with usability.' },
  { step: '03', title: 'Develop', description: 'Agile sprints with regular demos, keeping you in the loop at every stage.' },
  { step: '04', title: 'Deploy & Scale', description: 'Launch with confidence and scale as your user base grows.' },
];

export default function ServicesPage() {
  const { ref: gridRef, isInView: gridVisible } = useInView();
  const { ref: processRef, isInView: processVisible } = useInView();

  return (
    <>
      {/* Hero */}
      <GlobeDemo />

      {/* Services Grid */}
      <section className="py-24 px-6" ref={gridRef}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Link
              key={service.title}
              to={`/services/${service.slug}`}
              className="group relative p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-slate-600 transition-all duration-500 hover:-translate-y-1 overflow-hidden block"
              style={{
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 80}ms`,
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl ${service.iconBg} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2 mb-5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                      <Check className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1 text-indigo-400 text-sm font-medium group-hover:gap-2 transition-all duration-200">
                  Learn more <span className="text-xs">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6" ref={processRef}>
        <div className="max-w-6xl mx-auto">
          <div
            className="text-center mb-16"
            style={{
              opacity: processVisible ? 1 : 0,
              transform: processVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <p className="text-cyan-400 font-medium text-sm tracking-widest uppercase mb-4">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
              How We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Work
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <div
                key={item.step}
                className="relative p-8 rounded-2xl border border-slate-800 bg-slate-900/50"
                style={{
                  opacity: processVisible ? 1 : 0,
                  transform: processVisible ? 'translateY(0)' : 'translateY(25px)',
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${200 + i * 120}ms`,
                }}
              >
                <div className="text-5xl font-bold text-slate-800 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-slate-100 mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-slate-700" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
            Need a custom solution?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Tell us about your project and we'll craft the perfect tech stack.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Discuss a Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
