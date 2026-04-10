import { Search, Palette, Code2, Rocket } from 'lucide-react';
import useInView from '../hooks/useInView';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description:
      'We dive deep into your business goals, user needs, and competitive landscape to define a sharp product vision.',
    color: 'from-blue-500/20 to-indigo-500/20',
    border: 'group-hover:border-blue-500/50',
    icon_bg: 'bg-blue-500/10 border-blue-500/20 group-hover:bg-blue-500/20',
    icon_color: 'text-blue-400',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Design',
    description:
      'We craft user experiences that are intuitive, beautiful, and purpose-built — validated before a single line of code.',
    color: 'from-purple-500/20 to-pink-500/20',
    border: 'group-hover:border-purple-500/50',
    icon_bg: 'bg-purple-500/10 border-purple-500/20 group-hover:bg-purple-500/20',
    icon_color: 'text-purple-400',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Build',
    description:
      'Rapid development sprints transform designs into production-grade code. Clean architecture, tested, and scalable.',
    color: 'from-indigo-500/20 to-violet-500/20',
    border: 'group-hover:border-indigo-500/50',
    icon_bg: 'bg-indigo-500/10 border-indigo-500/20 group-hover:bg-indigo-500/20',
    icon_color: 'text-indigo-400',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch',
    description:
      'We deploy with confidence, monitor with precision, and iterate relentlessly until your product reaches its full potential.',
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'group-hover:border-emerald-500/50',
    icon_bg: 'bg-emerald-500/10 border-emerald-500/20 group-hover:bg-emerald-500/20',
    icon_color: 'text-emerald-400',
  },
];

export default function Process() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative py-32 px-6" ref={ref}>
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
            How We Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            From Idea to{' '}
            <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Market
            </span>
            , in Weeks
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Our proven 4-step process keeps projects on track, on budget, and above expectations.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-[3.5rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-500/20 via-indigo-500/30 to-emerald-500/20"
            style={{
              opacity: isInView ? 1 : 0,
              transition: 'opacity 1s ease 0.8s',
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`group relative p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm ${step.border} transition-all duration-500 overflow-hidden`}
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 120}ms`,
                }}
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Number */}
                  <span className="text-5xl font-bold text-slate-800 select-none leading-none block mb-6">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl ${step.icon_bg} border flex items-center justify-center mb-5 transition-colors duration-300`}
                  >
                    <Icon className={`w-5 h-5 ${step.icon_color}`} />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-100 mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
