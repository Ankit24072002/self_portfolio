import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ankitImg from "../assets/ankit.jpg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const skills = ["React", "Node.js", "Tailwind CSS", "JavaScript", "Express", "MongoDB"];

  return (
    <section className="relative section overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-violet-50">
      {/* Animated background blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-cyan-300/40 to-violet-300/40 rounded-full blur-3xl animate-blob animation-delay-0"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-pink-300/40 to-blue-300/40 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
          className="flex flex-col justify-center space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-violet-600 bg-clip-text text-transparent animate-text">
              Ankit Kumar Singh
            </span>
            <br />
            <span className="text-slate-700 font-semibold animate-pulse">
            Full-Stack MERN Developer
            </span>
          </h1>

          <p className="text-slate-700 text-lg">
            Passionate about building responsive, user-friendly web applications using modern technologies. Focused on clean design, performance, and smooth UX.
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-3 mt-2">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-violet-100 text-cyan-800 font-medium rounded-full text-sm shadow-sm hover:shadow-lg transition"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-4">
            <Link
              className="px-5 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition transform"
              to="/contact"
            >
              Hire Me
            </Link>
            <a
               href="/ankit cv 1.pdf"
              download="Ankit_Kumar_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-md border border-cyan-500 text-cyan-500 font-semibold hover:bg-cyan-500 hover:text-white transition transform"
>
              Download Resume
            </a>

            <Link
              className="px-5 py-2 rounded-md border border-slate-400 text-slate-700 font-semibold hover:bg-slate-100 transition transform"
              to="/projects"
            >
              See Projects
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-slate-700">
            {/* LinkedIn */}
            <motion.a
              whileHover={{ scale: 1.3, color: "#0A66C2" }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://www.linkedin.com/in/ankit-kumar-singh-905109319"
              target="_blank"
              rel="noopener noreferrer"
              className="transition"
              title="LinkedIn"
            >
              <FaLinkedin size={26} />
            </motion.a>

            {/* GitHub */}
            <motion.a
              whileHover={{ scale: 1.3, color: "#171515" }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://github.com/Ankit24072002"
              target="_blank"
              rel="noopener noreferrer"
              className="transition"
              title="GitHub"
            >
              <FaGithub size={26} />
            </motion.a>

            {/* Email */}
            <motion.a
              whileHover={{ scale: 1.3, color: "#EA4335" }}
              transition={{ type: "spring", stiffness: 300 }}
              href="mailto:kumaranikant24@gmail.com"
              className="transition"
              title="Email"
            >
              <FaEnvelope size={26} />
            </motion.a>
          </div>

          {/* Info Cards */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <motion.div className="p-4 bg-white/60 backdrop-blur-md shadow-lg rounded-xl hover:scale-105 transition transform hover:shadow-2xl">
              <div className="text-xs text-slate-500">Education</div>
              <div className="font-semibold">B.Tech — MAKAUT</div>
              <div className="text-sm text-slate-500">CGPA 7.2 (2026)</div>
            </motion.div>
            <motion.div className="p-4 bg-white/60 backdrop-blur-md shadow-lg rounded-xl hover:scale-105 transition transform hover:shadow-2xl">
              <div className="text-xs text-slate-500">Location</div>
              <div className="font-semibold">Rishra, India</div>
            </motion.div>
            <motion.div className="p-4 bg-white/60 backdrop-blur-md shadow-lg rounded-xl hover:scale-105 transition transform hover:shadow-2xl">
              <div className="text-xs text-slate-500">Contact</div>
              <div className="font-semibold">+91-7439907360</div>
              <div className="text-sm text-slate-500">kumaranikant24@gmail.com</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column (Image) */}
        <motion.img
          src={ankitImg}
          alt="Ankit Kumar Singh"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="w-full h-[36rem] md:h-[40rem] object-cover object-top rounded-xl shadow-2xl ring-4 ring-white ring-offset-4 ring-offset-slate-50"
        />
      </div>

      {/* Scroll Down Arrow */}
      <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-700 animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>

      {/* Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 8s infinite; }
        .animation-delay-0 { animation-delay: 0s; }
        .animation-delay-2000 { animation-delay: 2s; }
        @keyframes text-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text { background-size: 200% 200%; animation: text-gradient 5s ease infinite; }
      `}</style>
    </section>
  );
}
