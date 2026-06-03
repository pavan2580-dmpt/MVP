import { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowRight, Linkedin, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import type { Application } from '@splinetool/runtime';
import useInView from '../hooks/useInView';
import Footer from '../components/Footer';

const team = [
  {
    name: 'Geddam Mukesh',
    role: 'Client Relationship Manager',
    initial: 'GM',
    bio: 'Builds lasting client partnerships and ensures every project aligns with business goals and expectations.',
    color: 'from-indigo-500/20 to-violet-500/20',
    border: 'hover:border-indigo-500/50',
  },
  {
    name: 'Pavan Ganesh Krishna',
    role: 'Tech Lead',
    initial: 'PG',
    bio: 'Drives technical strategy and architecture, guiding the team to build scalable, reliable solutions.',
    color: 'from-cyan-500/20 to-blue-500/20',
    border: 'hover:border-cyan-500/50',
  },
  {
    name: 'Venkat Sai',
    role: 'Design Lead',
    initial: 'VS',
    bio: 'Crafts intuitive, polished interfaces and design systems that bring products to life for users.',
    color: 'from-orange-500/20 to-amber-500/20',
    border: 'hover:border-orange-500/50',
  },
  {
    name: 'Yaswanth Sai',
    role: 'DevOps Engineer',
    initial: 'YS',
    bio: 'Keeps infrastructure running smoothly with CI/CD pipelines, cloud deployments, and reliable monitoring.',
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'hover:border-emerald-500/50',
  },
  {
    name: 'Sheshadri Chamarty',
    role: 'Backend AI Engineer',
    initial: 'SC',
    bio: 'Builds intelligent backend systems and AI-powered features that power smart, data-driven products.',
    color: 'from-purple-500/20 to-pink-500/20',
    border: 'hover:border-purple-500/50',
  },
  {
    name: 'Vijay Pramod',
    role: 'Frontend & Backend Engineer',
    initial: 'VP',
    bio: 'Full-stack developer who bridges frontend polish with solid backend logic to deliver end-to-end features.',
    color: 'from-rose-500/20 to-red-500/20',
    border: 'hover:border-rose-500/50',
  },
];

const culture = [
  { title: 'Remote-First', description: 'Work from anywhere. Our distributed team spans timezones, united by shared purpose.' },
  { title: 'Continuous Learning', description: 'Weekly tech talks, conference budgets, and time dedicated to exploring new technologies.' },
  { title: 'Ownership Culture', description: 'Every team member owns their domain end-to-end — from ideation to deployment.' },
  { title: 'Work-Life Balance', description: 'Flexible hours, unlimited PTO, and a genuine respect for life outside of work.' },
];

export default function TeamPage() {
  const [show, setShow] = useState(false);
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const splineRef = useRef<Application | null>(null);
  const clampRef = useRef<number | null>(null);
  const splineContainerRef = useRef<HTMLDivElement>(null);
  const { ref: teamRef, isInView: teamVisible } = useInView();
  const { ref: cultureRef, isInView: cultureVisible } = useInView();

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  const onSplineLoad = useCallback((app: Application) => {
    splineRef.current = app;
    requestAnimationFrame(() => setSceneLoaded(true));

    // Find the camera and store its initial position for clamping
    const cam = app.findObjectByName('Camera') ?? app.findObjectByName('camera');
    if (!cam) return;

    const originX = cam.position.x;
    const originY = cam.position.y;
    const originZ = cam.position.z;
    const originRX = cam.rotation.x;
    const originRY = cam.rotation.y;
    const originRZ = cam.rotation.z;

    // Clamp limits
    const posRange = 150;   // max position drift from origin
    const rotRange = 0.25;  // max rotation drift in radians (~14 degrees)

    const clamp = (val: number, center: number, range: number) =>
      Math.max(center - range, Math.min(center + range, val));

    // Continuously clamp camera every frame
    const loop = () => {
      if (!cam) return;
      cam.position.x = clamp(cam.position.x, originX, posRange);
      cam.position.y = clamp(cam.position.y, originY, posRange);
      cam.position.z = originZ; // lock zoom
      cam.rotation.x = clamp(cam.rotation.x, originRX, rotRange);
      cam.rotation.y = clamp(cam.rotation.y, originRY, rotRange);
      cam.rotation.z = clamp(cam.rotation.z, originRZ, rotRange * 0.5);
      clampRef.current = requestAnimationFrame(loop);
    };
    clampRef.current = requestAnimationFrame(loop);
  }, []);

  // Block wheel/pinch events on the Spline canvas so zoom is disabled and page scroll works
  useEffect(() => {
    const container = splineContainerRef.current;
    if (!container) return;

    const blockWheel = (e: WheelEvent) => {
      e.stopPropagation();
      e.preventDefault();
    };

    // Also block two-finger touchmove (pinch zoom) on the canvas
    const blockTouchMove = (e: TouchEvent) => {
      if (e.touches.length >= 2) {
        e.stopPropagation();
        e.preventDefault();
      }
    };

    container.addEventListener('wheel', blockWheel, { passive: false, capture: true });
    container.addEventListener('touchmove', blockTouchMove, { passive: false, capture: true });

    return () => {
      container.removeEventListener('wheel', blockWheel, true);
      container.removeEventListener('touchmove', blockTouchMove, true);
      if (clampRef.current) cancelAnimationFrame(clampRef.current);
    };
  }, []);

  return (
    <>
      {/* Hero with Spline 3D */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* 3D Spline - all interactions blocked */}
        <div
          ref={splineContainerRef}
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            opacity: sceneLoaded ? 1 : 0,
            transition: 'opacity 1s ease-out',
          }}
        >
          <Spline
            scene="https://prod.spline.design/X4OHsJ2bu9g7C9yI/scene.splinecode"
            onLoad={onSplineLoad}
          />
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

        {/* Hero text */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-24 px-6 pointer-events-none">
          <div
            className="text-center max-w-3xl"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
            }}
          >
            <p className="text-indigo-400 font-medium text-sm tracking-widest uppercase mb-4">Our Team</p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 leading-tight drop-shadow-lg">
              The People Behind{' '}
              <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                the Innovation
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto drop-shadow-md">
              A team of engineers, designers, and strategists united by a passion for building products that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6" ref={teamRef}>
        <div className="max-w-6xl mx-auto">
          <div
            className="text-center mb-16"
            style={{
              opacity: teamVisible ? 1 : 0,
              transform: teamVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <p className="text-indigo-400 font-medium text-sm tracking-widest uppercase mb-4">Meet Everyone</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
              Talent That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Delivers
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`group relative p-8 rounded-2xl border border-slate-800 bg-slate-900/50 ${member.border} transition-all duration-500 hover:-translate-y-1 overflow-hidden`}
                style={{
                  opacity: teamVisible ? 1 : 0,
                  transform: teamVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 80}ms`,
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="w-16 h-16 mb-5 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl font-bold text-slate-300">{member.initial}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-1">{member.name}</h3>
                  <p className="text-indigo-400 text-sm font-medium mb-4">{member.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{member.bio}</p>

                  <div className="flex items-center gap-3">
                    <a href="#" className="text-slate-600 hover:text-slate-300 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="text-slate-600 hover:text-slate-300 transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="text-slate-600 hover:text-slate-300 transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 px-6" ref={cultureRef}>
        <div className="max-w-6xl mx-auto">
          <div
            className="text-center mb-16"
            style={{
              opacity: cultureVisible ? 1 : 0,
              transform: cultureVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <p className="text-indigo-400 font-medium text-sm tracking-widest uppercase mb-4">Our Culture</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
              How We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Work Together
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {culture.map((item, i) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-indigo-500/30 transition-all duration-500"
                style={{
                  opacity: cultureVisible ? 1 : 0,
                  transform: cultureVisible ? 'translateY(0)' : 'translateY(25px)',
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${150 + i * 100}ms`,
                }}
              >
                <h3 className="text-xl font-semibold text-slate-100 mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
            Want to join the team?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            We're always looking for talented people who share our passion for building great products.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
