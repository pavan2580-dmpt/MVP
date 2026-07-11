import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';
import { projects } from '../data/projects';

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
            <Link
              key={project.title}
              to={`/projects/${project.slug}`}
              className={`group relative p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm ${project.border} transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer block`}
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
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-4 min-w-0">
                      <img
                        src={project.icon}
                        alt={`${project.title} logo`}
                        className="w-12 h-12 rounded-xl object-cover border border-slate-700/80 bg-slate-950/60 shrink-0"
                      />
                      <span className={`text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full ${project.accent}`}>
                        {project.category}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-slate-300 transition-colors mt-0.5 shrink-0" />
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
              </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
