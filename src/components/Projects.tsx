import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';

const projects = [
  {
    title: 'HealthPulse AI',
    category: 'Healthcare',
    description:
      'An AI-powered patient monitoring platform that predicts health risks in real-time using wearable data streams.',
    tags: ['React', 'Python', 'TensorFlow', 'AWS'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    border: 'hover:border-blue-500/50',
    accent: 'text-blue-400 bg-blue-500/10',
  },
  {
    title: 'FinTrack Pro',
    category: 'Fintech',
    description:
      'A personal finance dashboard with intelligent budgeting, investment tracking, and predictive spending analysis.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    border: 'hover:border-emerald-500/50',
    accent: 'text-emerald-400 bg-emerald-500/10',
  },
  {
    title: 'EduVerse',
    category: 'EdTech',
    description:
      'An immersive learning platform with 3D classrooms, real-time collaboration, and AI-driven personalized curricula.',
    tags: ['Three.js', 'WebRTC', 'GPT-4', 'MongoDB'],
    gradient: 'from-purple-500/20 to-pink-500/20',
    border: 'hover:border-purple-500/50',
    accent: 'text-purple-400 bg-purple-500/10',
  },
  {
    title: 'LogiFlow',
    category: 'Logistics',
    description:
      'Route optimization and fleet management system that reduced delivery times by 35% for enterprise clients.',
    tags: ['React Native', 'Go', 'Redis', 'GCP'],
    gradient: 'from-orange-500/20 to-amber-500/20',
    border: 'hover:border-orange-500/50',
    accent: 'text-orange-400 bg-orange-500/10',
  },
];

export default function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div>
            <p className="text-indigo-400 font-medium text-sm tracking-widest uppercase mb-4">
              Our Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
              Projects That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Make an Impact
              </span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors group flex-shrink-0"
          >
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm ${project.border} transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer`}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView
                  ? 'translateY(0)'
                  : i % 2 === 0
                  ? 'translateY(40px)'
                  : 'translateY(60px)',
                transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * 120}ms`,
              }}
            >
              {/* Gradient reveal on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <span className={`text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full ${project.accent}`}>
                    {project.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-slate-300 transition-colors mt-0.5" />
                </div>

                <h3 className="text-2xl font-semibold text-slate-100 mb-3">{project.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-slate-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700 group-hover:border-slate-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
