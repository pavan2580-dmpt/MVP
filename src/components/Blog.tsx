import { ArrowUpRight } from 'lucide-react';
import useInView from '../hooks/useInView';

const posts = [
  {
    title: 'Why Your Startup Needs an MVP Before a Full Product',
    excerpt: 'Building a minimum viable product first saves time, money, and lets you validate your idea with real users before going all-in.',
    date: 'Mar 10, 2026',
    readTime: '5 min read',
    category: 'Strategy',
  },
  {
    title: 'The Rise of AI-First Development',
    excerpt: 'How integrating AI from day one is changing the way we architect modern applications and deliver value to users.',
    date: 'Feb 28, 2026',
    readTime: '7 min read',
    category: 'Technology',
  },
  {
    title: 'From Prototype to Production in 30 Days',
    excerpt: 'A behind-the-scenes look at our rapid development process and how we ship production-ready MVPs at record speed.',
    date: 'Feb 15, 2026',
    readTime: '4 min read',
    category: 'Case Study',
  },
];

export default function Blog() {
  const { ref, isInView } = useInView();

  return (
    <section id="blog" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-20 transition-all duration-700"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(40px)',
          }}
        >
          <p className="text-indigo-400 font-medium text-sm tracking-widest uppercase mb-4">
            Blog
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Insights &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Thoughts
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Our latest thinking on technology, startups, and building products that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={post.title}
              className="group relative p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-1 cursor-pointer flex flex-col"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${i * 120}ms`,
                transitionDuration: '600ms',
                transitionProperty: 'all',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-slate-500">{post.date}</span>
              </div>

              <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-indigo-300 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6 flex-1">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">{post.readTime}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
