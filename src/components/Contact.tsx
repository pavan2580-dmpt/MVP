import { ArrowUpRight } from 'lucide-react';
import useInView from '../hooks/useInView';

export default function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="relative p-16 rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm overflow-hidden"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'scale(1)' : 'scale(0.95)',
            transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Background gradient accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5" />

          <div className="relative z-10">
            <p className="text-indigo-400 font-medium text-sm tracking-widest uppercase mb-4">
              Contact Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 leading-tight">
              Have an Idea?{' '}
              <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Let's Build It.
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-4">
              Leave a message at{' '}
              <a
                href="mailto:hello@mvpinnovations.in"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                hello@mvpinnovations.in
              </a>{' '}
              and we'll get back to you within 24 hours with a roadmap and estimate.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <a
                href="mailto:hello@mvpinnovations.in"
                className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Send a Message
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@mvpinnovations.in"
                className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                hello@mvpinnovations.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
