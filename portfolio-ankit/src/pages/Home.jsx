import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ankitImg from "../assets/ankit.jpg";
import resumePDF from "../assets/Ankit Kumar Singh_Resume.pdf";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const skills = ["React", "Node.js", "Tailwind CSS", "JavaScript", "Express", "MongoDB"];
  const stats = [
    { label: "Live Projects", value: 7 },
    { label: "Experience", value: "13+ months" },
    { label: "Technologies", value: "18+" },
  ];

  return (
    <section className="relative section overflow-hidden bg-slate-950/80">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.2),transparent_30%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.18),transparent_22%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-96 bg-[radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(125,211,252,0.14),transparent_22%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 shadow-sm shadow-cyan-500/10">
              Portfolio App • Modern UI • Interview-ready
            </div>

            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                I build polished web applications that feel like real products.
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-slate-300 sm:text-xl">
                I’m Ankit, a Full-Stack MERN developer creating thoughtful user experiences with production-ready interfaces, clean architecture, and smooth interactions.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="hero-card border-white/10">
                  <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">{item.label}</div>
                  <div className="mt-3 text-3xl font-bold text-white">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Hire Me
              </Link>
              <a
                href={resumePDF}
                download="Ankit_Kumar_Singh_Resume.pdf"
                className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/20"
              >
                Download Resume
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {skills.map((skill) => (
                <div key={skill} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-slate-100 shadow-sm shadow-black/10">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative rounded-[34px] bg-slate-900/80 border border-white/10 p-4 shadow-2xl shadow-black/30"
          >
            <div className="absolute inset-0 rounded-[34px] bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.2),transparent_25%)] pointer-events-none" />
            <img
              src={ankitImg}
              alt="Ankit Kumar Singh"
              className="relative h-[28rem] w-full rounded-[28px] object-cover object-top"
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-950/90 p-4 text-center">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Location</p>
                <p className="mt-3 text-lg font-semibold text-white">Rishra, India</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-4 text-center">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Role</p>
                <p className="mt-3 text-lg font-semibold text-white">Full-Stack Developer</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-4 text-center">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Contact</p>
                <p className="mt-3 text-lg font-semibold text-white">+91 74399 07360</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >
          <a
            href="https://www.linkedin.com/in/ankit-kumar-singh-905109319"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-card border-white/10 flex items-center justify-center gap-3 text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition"
          >
            <FaLinkedin size={20} />
            LinkedIn Profile
          </a>
          <a
            href="https://github.com/Ankit24072002"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-card border-white/10 flex items-center justify-center gap-3 text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition"
          >
            <FaGithub size={20} />
            Code Portfolio
          </a>
          <a
            href="mailto:kumaranikant24@gmail.com"
            className="hero-card border-white/10 flex items-center justify-center gap-3 text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition"
          >
            <FaEnvelope size={20} />
            Email Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
