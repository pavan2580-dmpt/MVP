const items = [
  'AI Development',
  'Web Applications',
  'Mobile Apps',
  'MVP Sprints',
  'Cloud Architecture',
  'Data Analytics',
  'Design Systems',
  'API Integrations',
  'React & Next.js',
  'Product Strategy',
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-6 border-y border-slate-800/60 bg-slate-950/40 backdrop-blur-sm">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-slate-950 to-transparent" />

      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'var(--animate-marquee)' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 mx-8 text-sm font-medium text-slate-400 tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
