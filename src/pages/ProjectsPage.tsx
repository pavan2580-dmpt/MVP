import { useState, useEffect } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LightRays from '../components/LightRays';
import FloatingShapes from '../components/FloatingShapes';
import useInView from '../hooks/useInView';
import Footer from '../components/Footer';
import { projects } from '../data/projects';

const shapesConfig = [
  { position: [-4, 2, -5] as [number, number, number], rotation: [0.2, 0.7, 0] as [number, number, number], scale: 1.1, speed: 0.45, type: 'dodecahedron' as const },
  { position: [5, -1, -4] as [number, number, number], rotation: [0.5, 0.3, 0.2] as [number, number, number], scale: 0.9, speed: 0.65, type: 'torusKnot' as const },
  { position: [-3, -3, -6] as [number, number, number], rotation: [0.1, 0.4, 0.6] as [number, number, number], scale: 0.7, speed: 0.5, type: 'octahedron' as const },
  { position: [3, 3, -5] as [number, number, number], rotation: [0.6, 0.1, 0.3] as [number, number, number], scale: 1.3, speed: 0.35, type: 'icosahedron' as const },
];

export default function ProjectsPage() {
  const [show, setShow] = useState(false);
  const { ref: gridRef, isInView: gridVisible } = useInView();

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative w-full min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0 bg-slate-950">
          <LightRays
            raysOrigin="bottom-center"
            raysColor="#f97316"
            raysSpeed={0.5}
            lightSpread={1.3}
            rayLength={2}
            followMouse
            mouseInfluence={0.2}
            fadeDistance={1}
            saturation={0.9}
          />
        </div>
        <div className="absolute inset-0 z-[1]">
          <FloatingShapes color="#f97316" shapes={shapesConfig} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
          <div
            style={{
              opacity: show ? 1 : 0,
              transform: show ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <p className="text-orange-400 font-medium text-sm tracking-widest uppercase mb-4">Our Projects</p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 leading-tight">
              Products That{' '}
              <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Make an Impact
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              From concept to launch, here are some of the products we've brought to life for startups and enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-6" ref={gridRef}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => {
            const CardWrapper = project.url ? 'a' : 'div';
            const cardProps = project.url
              ? {
                  href: project.url,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }
              : {};

            return (
              <CardWrapper
                key={project.title}
                {...cardProps}
                className={`group relative p-8 rounded-2xl border border-slate-800 bg-slate-900/50 ${project.border} transition-all duration-500 hover:-translate-y-1 overflow-hidden cursor-pointer block`}
                style={{
                  opacity: gridVisible ? 1 : 0,
                  transform: gridVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms`,
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

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
                    <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-slate-300 transition-colors shrink-0" />
                  </div>

                  <h3 className="text-2xl font-semibold text-slate-100 mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-slate-300 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
            Want your project on this list?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Let's build something remarkable together.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
