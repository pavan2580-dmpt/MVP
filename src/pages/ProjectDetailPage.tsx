import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Footer from '../components/Footer';
import { getProjectBySlug } from '../data/projects';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <>
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 pt-24 px-6">
          <p className="text-slate-400 text-lg">Project not found.</p>
          <Link to="/projects" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 text-sm mb-10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>

          <div className={`relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 md:p-12 mb-12`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
              <img
                src={project.icon}
                alt={`${project.title} logo`}
                className="w-24 h-24 rounded-2xl object-cover border border-slate-700/80 bg-slate-950/60 shrink-0"
              />
              <div>
                <span className={`inline-flex text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full mb-4 ${project.accent}`}>
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">{project.title}</h1>
                <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">{project.description}</p>
              </div>
            </div>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-100 mb-4">Project Overview</h2>
            <p className="text-slate-400 text-lg leading-relaxed">{project.overview}</p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-100 mb-6">Key Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
                >
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <p className="text-slate-300 leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-100 mb-4">Technologies & Focus Areas</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-medium text-slate-300 bg-slate-800/80 px-4 py-2 rounded-full border border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <div className={`rounded-2xl bg-gradient-to-br ${project.gradient} border border-slate-700/60 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6`}>
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Interested in something similar?</h3>
              <p className="text-slate-300 max-w-xl">
                Tell us about your product idea and we can help you plan, design, and build it.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-slate-950/70 hover:bg-slate-950 text-white px-6 py-3.5 rounded-full font-medium transition-colors border border-slate-700"
                >
                  Visit Website
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              <Link
                to="/discuss"
                className="inline-flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3.5 rounded-full font-medium transition-colors"
              >
                Discuss a Project
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
