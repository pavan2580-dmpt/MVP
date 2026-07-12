import type { Project } from '../data/projects';

type ProjectLogoProps = {
  project: Project;
  size?: 'card' | 'detail';
};

export default function ProjectLogo({ project, size = 'card' }: ProjectLogoProps) {
  const className = project.iconWide
    ? size === 'detail'
      ? 'h-16 md:h-[4.5rem] w-auto max-w-[300px] rounded-2xl object-contain object-left border border-slate-700/80 bg-black shrink-0 px-3 py-1.5'
      : 'h-10 w-auto max-w-[140px] rounded-xl object-contain object-left border border-slate-700/80 bg-black shrink-0 px-2 py-1'
    : size === 'detail'
      ? 'w-24 h-24 rounded-2xl object-cover border border-slate-700/80 bg-slate-950/60 shrink-0'
      : 'w-12 h-12 rounded-xl object-cover border border-slate-700/80 bg-slate-950/60 shrink-0';

  return <img src={project.icon} alt={`${project.title} logo`} className={className} />;
}
