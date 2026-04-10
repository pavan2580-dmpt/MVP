import { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import LightRays from '../components/LightRays';
import FloatingShapes from '../components/FloatingShapes';
import Footer from '../components/Footer';

export default function DiscussProjectPage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center pt-32 pb-20 justify-center">
        <div className="absolute inset-0 z-0 bg-slate-950">
          <LightRays
            raysOrigin="top-center"
            raysColor="#4c00ff"
            raysSpeed={0.5}
            lightSpread={1.6}
            rayLength={2.5}
            followMouse
            mouseInfluence={0.3}
            fadeDistance={1}
            saturation={1}
          />
        </div>
        <div className="absolute inset-0 z-[1]">
          <FloatingShapes color="#4c00ff" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full flex-grow flex flex-col justify-center">
          <div
            className="text-center mb-16"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <p className="text-indigo-400 font-medium text-sm tracking-widest uppercase mb-4">Start a Project</p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 leading-tight">
              Let's Build Something{' '}
              <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Incredible
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Tell us about your project, goals, and timeline. We'll get back to you within 24 hours to schedule a discovery call.
            </p>
          </div>

          <div
            className="relative p-8 md:p-12 rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-md overflow-hidden"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 200ms',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5" />
            
            <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-slate-300">Company (Optional)</label>
                <input 
                  type="text" 
                  placeholder="Acme Inc." 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-slate-300">Project Details</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project, timeline, and budget range..." 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                ></textarea>
              </div>

              <div className="md:col-span-2 mt-4">
                <button 
                  type="button"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/25"
                  onClick={() => alert("Ready for backend integration!")}
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
