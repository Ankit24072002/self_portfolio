import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 items-center">
        {/* Logo / Name */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">Ankit Kumar Singh</h2>
          <p className="text-sm mt-1">Frontend & Full-Stack Developer</p>
        </div>

        {/* Quick Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="/"
            className="hover:text-yellow-300 transition-colors font-medium"
          >
            Home
          </a>
          <a
            href="/projects"
            className="hover:text-yellow-300 transition-colors font-medium"
          >
            Projects
          </a>
          <a
            href="/certifications"
            className="hover:text-yellow-300 transition-colors font-medium"
          >
            Certifications
          </a>
          <a
            href="/activities"
            className="hover:text-yellow-300 transition-colors font-medium"
          >
            Activities
          </a>
          <a
            href="/contact"
            className="hover:text-yellow-300 transition-colors font-medium"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-4 text-xl">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ankit-kumar-singh-905109319"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Ankit24072002"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>

          {/* Email */}
          <a
            href="mailto:kumaranikant24@gmail.com"
            className="hover:text-yellow-300 transition transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center py-4 text-sm bg-black/10 backdrop-blur-md">
        © {currentYear} Ankit Kumar Singh — Built with React & Tailwind
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => scroll.scrollToTop({ duration: 500 })}
        className="fixed bottom-6 right-6 bg-white text-blue-600 p-3 rounded-full shadow-lg hover:scale-110 transition transform z-50"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
