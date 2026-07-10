export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  icon: string;
  url?: string;
  gradient: string;
  border: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: 'Kuppam Organics',
    category: 'E-Commerce',
    description:
      'A full e-commerce application with an admin panel, order management, live order printing, and thermal printer integration that buzzes and auto-prints when a new order is placed.',
    tags: ['E-Commerce', 'Admin Panel', 'Order Management', 'Thermal Printing'],
    icon: '/projects/kuppam-organics.png',
    url: 'https://www.kuppamorganics.com',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    border: 'hover:border-blue-500/50',
    accent: 'text-blue-400 bg-blue-500/10',
  },
  {
    title: 'Recharz',
    category: 'EV Charging',
    description:
      'A customer website, dashboard, and mobile app for electric car charging with location-based station discovery, payments, charging indicators, and live percentage updates.',
    tags: ['Website', 'Dashboard', 'Mobile App', 'Payments'],
    icon: '/projects/recharz-logo.png',
    url: 'https://recharz.in',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    border: 'hover:border-emerald-500/50',
    accent: 'text-emerald-400 bg-emerald-500/10',
  },
  {
    title: 'ZOOOP',
    category: 'Dating Platform',
    description:
      'A dating website and mobile app built around user profiles, match discovery, and a smooth digital experience for people to connect.',
    tags: ['Dating Website', 'Mobile App', 'Profiles', 'Matching'],
    icon: '/projects/zooop.png',
    url: 'https://zooopapp.com',
    gradient: 'from-purple-500/20 to-pink-500/20',
    border: 'hover:border-purple-500/50',
    accent: 'text-purple-400 bg-purple-500/10',
  },
  {
    title: 'Sampradaya Kitchen',
    category: 'Food & Kitchen',
    description:
      'A kitchen-focused digital product for presenting food offerings, handling customer orders, and supporting smoother restaurant operations.',
    tags: ['Food Ordering', 'Kitchen Operations', 'Customer Orders', 'Web App'],
    icon: '/projects/sampradaya-kitchen.svg',
    gradient: 'from-orange-500/20 to-amber-500/20',
    border: 'hover:border-orange-500/50',
    accent: 'text-orange-400 bg-orange-500/10',
  },
];
