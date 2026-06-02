import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-slate-200 mt-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">Ankit Kumar Singh</h2>
          <p className="text-sm mt-1 text-slate-400">Full-Stack MERN Developer</p>
        </div>

        <div className="flex justify-center flex-wrap gap-4">
          <Link to="/" className="hover:text-cyan-300 transition font-medium">Home</Link>
          <Link to="/projects" className="hover:text-cyan-300 transition font-medium">Projects</Link>
          <Link to="/certifications" className="hover:text-cyan-300 transition font-medium">Certifications</Link>
          <Link to="/activities" className="hover:text-cyan-300 transition font-medium">Activities</Link>
          <Link to="/contact" className="hover:text-cyan-300 transition font-medium">Contact</Link>
        </div>

        <div className="flex justify-center md:justify-end gap-4 text-xl">
          <a href="https://www.linkedin.com/in/ankit-kumar-singh-905109319" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition transform hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Ankit24072002" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition transform hover:scale-110">
            <FaGithub />
          </a>
          <a href="mailto:kumaranikant24@gmail.com" className="hover:text-cyan-300 transition transform hover:scale-110">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="text-center py-4 text-sm text-slate-500 bg-slate-900/80">
        © {currentYear} Ankit Kumar Singh — Built with React & Tailwind
      </div>

      <button
        onClick={() => scroll.scrollToTop({ duration: 500 })}
        className="fixed bottom-6 right-6 bg-cyan-500 text-slate-950 p-3 rounded-full shadow-2xl shadow-cyan-500/30 hover:scale-110 transition transform z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
