export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  highlights: string[];
  tags: string[];
  icon: string;
  url?: string;
  gradient: string;
  border: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: 'kuppam-organics',
    title: 'Kuppam Organics',
    category: 'E-Commerce',
    description:
      'A full e-commerce application with an admin panel, order management, live order printing, and thermal printer integration that buzzes and auto-prints when a new order is placed.',
    overview:
      'Kuppam Organics needed a complete digital commerce platform to sell organic products online while keeping kitchen and fulfillment operations fast. We built a customer-facing storefront, a powerful admin dashboard, and real-time order workflows that connect directly to thermal printers on-site.',
    highlights: [
      'Full e-commerce storefront with product catalog and checkout',
      'Admin panel for inventory, orders, and daily operations',
      'Live order notifications with thermal printer auto-print',
      'Order management workflow built for fast kitchen fulfillment',
    ],
    tags: ['E-Commerce', 'Admin Panel', 'Order Management', 'Thermal Printing'],
    icon: '/projects/kuppam-organics.png',
    url: 'https://www.kuppamorganics.com',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    border: 'hover:border-blue-500/50',
    accent: 'text-blue-400 bg-blue-500/10',
  },
  {
    slug: 'recharz',
    title: 'Recharz',
    category: 'EV Charging',
    description:
      'A customer website, dashboard, and mobile app for electric car charging with location-based station discovery, payments, charging indicators, and live percentage updates.',
    overview:
      'Recharz is an EV charging platform that helps drivers find stations, start sessions, pay seamlessly, and track charging progress in real time. The product spans a marketing website, operator dashboard, and mobile app so both customers and business teams stay connected to every charging session.',
    highlights: [
      'Location-based EV station discovery for drivers',
      'Integrated payments and session management',
      'Live charging progress and percentage updates',
      'Unified experience across website, dashboard, and mobile app',
    ],
    tags: ['Website', 'Dashboard', 'Mobile App', 'Payments'],
    icon: '/projects/recharz-logo.png',
    url: 'https://recharz.in',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    border: 'hover:border-emerald-500/50',
    accent: 'text-emerald-400 bg-emerald-500/10',
  },
  {
    slug: 'zooop',
    title: 'ZOOOP',
    category: 'Social Platform',
    description:
      'A social friend app and website built around user profiles, friend discovery, and a smooth digital experience for people to connect and share.',
    overview:
      'ZOOOP is a modern social platform designed to help people discover friends, build communities, and stay connected through polished profiles, intuitive discovery flows, and a consistent experience across web and mobile. The product focuses on smooth onboarding, social engagement, and features that keep users active.',
    highlights: [
      'Profile creation and social discovery experience',
      'Friend and connection flows designed for mobile-first usage',
      'Cross-platform product spanning web and app',
      'Engagement-focused UX for community building and retention',
    ],
    tags: ['Social App', 'Mobile App', 'Profiles', 'Friend Discovery'],
    icon: '/projects/zooop.png',
    url: 'https://zooopapp.com',
    gradient: 'from-purple-500/20 to-pink-500/20',
    border: 'hover:border-purple-500/50',
    accent: 'text-purple-400 bg-purple-500/10',
  },
  {
    slug: 'sampradaya-kitchen',
    title: 'Sampradaya Kitchen',
    category: 'Food & Kitchen',
    description:
      'A kitchen-focused digital product for presenting food offerings, handling customer orders, and supporting smoother restaurant operations.',
    overview:
      'Sampradaya Kitchen is a food and kitchen operations product built to showcase menu offerings, streamline customer orders, and improve day-to-day restaurant workflows. The platform helps the team present their brand online while making order handling more organized and efficient.',
    highlights: [
      'Digital menu and food offering presentation',
      'Customer order capture and management',
      'Kitchen-focused workflow support',
      'Web experience tailored for restaurant operations',
    ],
    tags: ['Food Ordering', 'Kitchen Operations', 'Customer Orders', 'Web App'],
    icon: '/projects/sampradaya-kitchen.svg',
    gradient: 'from-orange-500/20 to-amber-500/20',
    border: 'hover:border-orange-500/50',
    accent: 'text-orange-400 bg-orange-500/10',
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
