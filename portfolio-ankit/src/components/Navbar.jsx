import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';
import resumePDF from '../assets/Ankit Kumar Singh_Resume.pdf';

const NavLink = ({ to, children, onClick }) => {
  const loc = useLocation();
  const active = loc.pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-3 py-2 relative transition-all duration-300 ${
        active
          ? 'text-cyan-400 font-semibold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400 after:rounded'
          : 'text-slate-200/80 hover:text-cyan-300 hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-cyan-400 hover:after:rounded'
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
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl shadow-black/20 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 py-4 md:px-6 md:py-5">
        <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/20">
            AK
          </div>
          <div>
            <div className="font-semibold text-white">Ankit Kumar Singh</div>
            <div className="text-xs text-slate-400">Frontend & Full-Stack</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-1">
          <div className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 bg-slate-900/70">
            Portfolio App
          </div>
          <nav className="flex items-center gap-2 ml-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/certifications">Certifications</NavLink>
            <NavLink to="/activities">Activities</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <a
            href={resumePDF}
            download="Ankit_Kumar_Singh_Resume.pdf"
            className="ml-4 rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
          >
            Resume
          </a>
        </div>

        <button
          aria-label="menu"
          className="md:hidden rounded-xl border border-slate-800 bg-slate-900/80 p-2 text-slate-200 shadow-sm shadow-black/20 transition hover:bg-slate-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-slate-900/95 border-t border-slate-800 shadow-xl animate-slide-down">
          <div className="flex flex-col gap-3 p-4">
            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/projects" onClick={() => setOpen(false)}>Projects</NavLink>
            <NavLink to="/certifications" onClick={() => setOpen(false)}>Certifications</NavLink>
            <NavLink to="/activities" onClick={() => setOpen(false)}>Activities</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
            <a
              href={resumePDF}
              download="Ankit_Kumar_Singh_Resume.pdf"
              className="mt-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
            >
              Download Resume
            </a>
          </div>
        </nav>
      )}

      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-12px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-down {
          animation: slideDown 0.28s ease forwards;
        }
      `}</style>
    </header>
  );
}
