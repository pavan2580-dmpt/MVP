import type { ReactNode } from 'react';

interface FloatingBadgeProps {
  icon: ReactNode;
  text: string;
  className?: string;
  delay?: number;
}

export default function FloatingBadge({ icon, text, className = '', delay = 0 }: FloatingBadgeProps) {
  return (
    <div 
      className={`absolute flex items-center gap-3 bg-gray-900/80 backdrop-blur-md px-5 py-3 rounded-full shadow-lg border border-gray-700 cursor-pointer hover:scale-105 transition-transform duration-300 ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full shadow-inner bg-gray-800 border border-gray-700">
        {icon}
      </div>
      <span className="font-medium text-sm text-gray-100 tracking-wide">{text}</span>
    </div>
  );
}
