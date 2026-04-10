import { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronDown, Cpu, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Scene from './Scene';
import Orb from './Orb';

export default function Hero() {
  const [show, setShow] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Animated webGL orb — behind everything */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Orb hoverIntensity={0.5} rotateOnHover={true} />
      </div>

      {/* Subtle dot grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* 3D Spline model */}
      <div
        className="absolute inset-0 z-10"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      >
        <Scene />
      </div>

      {/* Floating badges */}
      <div
        className="absolute z-20 top-[28%] left-[6%] hidden md:flex items-center gap-3 bg-slate-900/80 backdrop-blur-md px-4 py-3 rounded-full border border-slate-700/60 shadow-xl"
        style={{
          opacity: show ? 1 : 0,
          transform: show ? 'translateX(0)' : 'translateX(-20px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.4s',
        }}
      >
        <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
          <Cpu className="w-4 h-4 text-indigo-400" />
        </div>
        <div>
          <p className="text-slate-100 text-xs font-semibold leading-none mb-0.5">AI-Powered</p>
          <p className="text-slate-500 text-[10px]">Built with cutting-edge tech</p>
        </div>
      </div>

      <div
        className="absolute z-20 top-[28%] right-[6%] hidden md:flex items-center gap-3 bg-slate-900/80 backdrop-blur-md px-4 py-3 rounded-full border border-slate-700/60 shadow-xl"
        style={{
          opacity: show ? 1 : 0,
          transform: show ? 'translateX(0)' : 'translateX(20px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.6s',
        }}
      >
        <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
          <Users className="w-4 h-4 text-purple-400" />
        </div>
        <div>
          <p className="text-slate-100 text-xs font-semibold leading-none mb-0.5">30+ Clients</p>
          <p className="text-slate-500 text-[10px]">Worldwide & satisfied</p>
        </div>
      </div>

      <div
        className="absolute z-20 bottom-[28%] left-[8%] hidden md:flex items-center gap-3 bg-slate-900/80 backdrop-blur-md px-4 py-3 rounded-full border border-slate-700/60 shadow-xl"
        style={{
          opacity: show ? 1 : 0,
          transform: show ? 'translateX(0)' : 'translateX(-20px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.8s',
        }}
      >
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
          <Zap className="w-4 h-4 text-emerald-400" />
        </div>
        <div>
          <p className="text-slate-100 text-xs font-semibold leading-none mb-0.5">4-Week MVP</p>
          <p className="text-slate-500 text-[10px]">From idea to launch</p>
        </div>
      </div>

      {/* Hero text */}
      <div
        className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-28 px-6 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <div
          className="text-center max-w-3xl"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s',
          }}
        >
          <div
            className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-6 pointer-events-auto"
            style={{
              opacity: show ? 1 : 0,
              transition: 'opacity 0.8s ease 0.5s',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-indigo-400 text-xs font-medium tracking-widest uppercase">
              Available for new projects
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 leading-tight drop-shadow-lg">
            Innovate.{' '}
            <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Build.
            </span>{' '}
            Launch.
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-xl mx-auto drop-shadow-md">
            We transform your boldest ideas into market-ready MVPs with cutting-edge technology
            and lean methodology.
          </p>
          <div className="flex items-center justify-center gap-4 pointer-events-auto">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 pointer-events-auto"
          style={{
            opacity: show ? 1 : 0,
            transition: 'opacity 1s ease 2s',
          }}
        >
          <span className="flex flex-col items-center gap-2 text-slate-500">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </span>
        </div>
      </div>
    </section>
  );
}
