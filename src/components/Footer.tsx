import { Link } from 'react-router-dom';
import logo from '../assets/MVP letter head logo.png';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
         
            <p className="text-slate-500 text-sm leading-relaxed">
              Building the future, one MVP at a time. We turn bold ideas into market-ready digital products.
            </p>
          </div>

          <div>
            <h4 className="text-slate-200 font-medium mb-4 text-sm">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/projects" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">Our Projects</Link></li>
              <li><Link to="/services" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">Services</Link></li>
              <li><Link to="/team" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">Our Team</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-200 font-medium mb-4 text-sm">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">AI & ML</Link></li>
              <li><Link to="/services" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">Web Apps</Link></li>
              <li><Link to="/services" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">Mobile Dev</Link></li>
              <li><Link to="/services" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">Cloud & DevOps</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-200 font-medium mb-4 text-sm">Connect</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">LinkedIn</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">Instagram</a></li>
              <li><a href="mailto:hello@mvpinnovations.in" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">hello@mvpinnovations.in</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            &copy; 2026 MVP Innovations. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-600 hover:text-slate-400 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 transition-colors text-sm">Terms of Service</a>
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <Link to="/">
            <img
              src={logo}
              alt="MVP Innovations"
              className="w-[90%] h-auto object-contain"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
