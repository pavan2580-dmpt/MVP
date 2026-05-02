import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/MVP letter head logo.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/projects', label: 'Our Projects' },
  { to: '/team', label: 'Our Team' },
];

export default function Header() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50">
      <div className="bg-slate-900/70 backdrop-blur-md shadow-sm border border-slate-700/40 rounded-full px-5 xl:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MVP Innovations" className="h-8" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-slate-400">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`whitespace-nowrap transition-colors ${
                pathname === link.to ? 'text-slate-100' : 'hover:text-slate-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/discuss"
          className="hidden lg:flex items-center gap-1.5 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-4 xl:px-6 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-transform hover:shadow-lg hover:shadow-indigo-500/25 whitespace-nowrap"
        >
          Discuss a Project
          <ArrowUpRight className="w-4 h-4" />
        </Link>

        {/* Mobile/tablet menu button */}
        <button
          className="lg:hidden text-slate-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden mt-3 bg-slate-900/95 backdrop-blur-md border border-slate-700/40 rounded-2xl px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-medium transition-colors ${
                pathname === link.to ? 'text-slate-100' : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/discuss"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-6 py-3 rounded-full text-sm font-medium mt-2"
          >
            Discuss a Project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
