import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';
import resumePDF from '../assets/resume.pdf'; // ✅ Import resume from src/assets

const NavLink = ({ to, children, onClick }) => {
  const loc = useLocation();
  const active = loc.pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-3 py-2 relative transition-all duration-300 ${
        active
          ? 'text-teal-600 font-semibold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-teal-500 after:rounded'
          : 'text-slate-700 hover:text-teal-500 hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-teal-400 hover:after:rounded'
      }`}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 600, smooth: true });
  };

  return (
    <header className="shadow-md bg-white sticky top-0 z-30">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-violet-600 flex items-center justify-center text-white font-bold shadow-lg">
            AK
          </div>
          <div>
            <div className="font-semibold">Ankit Kumar Singh</div>
            <div className="text-xs text-slate-500">Frontend & Full-Stack</div>
          </div>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/certifications">Certifications</NavLink>
          <NavLink to="/activities">Activities</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <a
            href={resumePDF} // ✅ From src/assets
            download="Ankit_Kumar_Singh_Resume.pdf"
            className="px-5 py-2 rounded-md bg-cyan-500 text-white font-semibold"
          >
            Download Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            aria-label="menu"
            className="p-2 rounded-md hover:bg-slate-100 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-white shadow-lg border-t animate-slide-down">
          <div className="flex flex-col p-4 gap-2">
            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/projects" onClick={() => setOpen(false)}>Projects</NavLink>
            <NavLink to="/certifications" onClick={() => setOpen(false)}>Certifications</NavLink>
            <NavLink to="/activities" onClick={() => setOpen(false)}>Activities</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
            <a
              href={resumePDF} // ✅ From src/assets
              download="Ankit_Kumar_Singh_Resume.pdf"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-teal-400 to-violet-600 text-white text-center shadow hover:scale-105 hover:shadow-xl transition transform"
            >
              Resume
            </a>
          </div>
        </nav>
      )}

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition transform z-50"
        title="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* Animations */}
      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease forwards;
        }
      `}</style>
    </header>
  );
}
