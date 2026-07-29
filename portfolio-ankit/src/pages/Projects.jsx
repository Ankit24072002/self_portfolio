import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaArrowRight, FaRocket, FaBrain, FaChartLine, FaCheckCircle } from "react-icons/fa";

const projects = [
  {
    title: "JobPilot.AI",
    desc: "A full-stack career intelligence platform that helps users discover jobs, optimize resumes, and receive AI-guided career insights using Gemini-powered recommendations.",
    tech: ["React 19", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "Gemini API", "Multer", "PDF/DOCX"],
    live: "https://jobpilot-livid-omega.vercel.app/",
    code: "https://github.com/JOB-PILOT-AI/JobPilot-AI",
    tag: "AI | Career Platform"
  },
  {
    title: "Mutual Fund Tracker",
    desc: "A full-stack platform to search, compare, and save mutual funds with real-time data from mfapi.in.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind"],
    live: "https://mutual-fund-tracker-2-iqzm.onrender.com/",
    code: "https://github.com/Ankit24072002/mutual-fund-tracker.git",
    tag: "Finance | MERN"
  },
  {
    title: "Ocean Hazard Platform",
    desc: "A GIS-based system for tracking oceanic hazards using PostgreSQL, Leaflet.js, and Docker.",
    tech: ["React", "Postgres", "Leaflet.js", "Docker"],
    live: "https://ocean-hazard-monitor.onrender.com",
    code: "https://github.com/Ankit24072002/ocean-hazard-platform.git",
    tag: "Environment | GIS"
  },
  {
    title: "Apna Video Call",
    desc: "Real-time video conferencing platform with chat, screen sharing, and multiple user support.",
    tech: ["React", "WebRTC", "Socket.io", "Node.js"],
    live: "https://vdo-calling-5frontend.onrender.com/",
    code: "https://github.com/Ankit24072002/vdo_calling.git",
    tag: "Communication | WebRTC"
  },
  {
    title: "Apna GPT",
    desc: "A ChatGPT-like MERN app integrated with OpenAI API for smart, context-aware conversations.",
    tech: ["MERN", "OpenAI", "JWT"],
    live: "https://apna-gpt-1.onrender.com/",
    code: "https://github.com/Ankit24072002/apna_Gpt.git",
    tag: "AI | Chatbot"
  },
  {
    title: "Event Management System",
    desc: "A full-stack platform for managing and organizing events with real-time updates and user engagement.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind", "Socket.io"],
    live: "https://event-managementdashboard-2.onrender.com",
    code: "https://github.com/Ankit24072002/Event_managementDashboard.git",
    tag: "Event | MERN"
  },
  {
    title: "Stock Market Dashboard",
    desc: "A full-stack platform for tracking and analyzing stock market data with real-time updates.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind", "Socket.io"],
    live: "https://stock-portfolio-1-ravm.onrender.com",
    code: "https://github.com/Ankit24072002/stock_portfolio.git",
    tag: "Finance | MERN"
  },
  {
    title: "self Portfolio",
    desc: "A personal portfolio website showcasing my skills, projects, and experience.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "https://self-portfolio-if15.onrender.com/projects",
    code: "https://github.com/Ankit24072002/self_portfolio.git",
    tag: "Personal | Portfolio"
  }
];

const categories = ["All", "MERN", "AI", "Finance", "Environment", "Communication", "Personal", "Career"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.tag.includes(activeCategory));

  const overview = [
    { label: "Projects", value: projects.length },
    { label: "Live Apps", value: 8 },
    { label: "Tech Stack", value: 20 },
  ];

  return (
    <section className="section bg-slate-950/80 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-4xl font-extrabold text-white">🚀 Projects</h2>
            <p className="mt-3 max-w-2xl text-slate-300 text-lg">
              A collection of my most impactful builds — combining real-world problem solving, modern UI, and scalable full-stack engineering.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeCategory === category
                    ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                    : "bg-white/10 text-slate-300 hover:bg-white/15"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 via-slate-900 to-violet-500/10 p-8 shadow-2xl shadow-cyan-500/10 md:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                <FaRocket /> Featured Final-Year Project
              </div>
              <h3 className="mt-5 text-3xl font-semibold text-white">JobPilot.AI</h3>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                A comprehensive MERN full-stack career intelligence platform for intelligent job matching, resume optimization, and career guidance, powered by Google Gemini.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://jobpilot-livid-omega.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href="https://github.com/JOB-PILOT-AI/JobPilot-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-white/15"
                >
                  <FaGithub /> GitHub Repo
                </a>
              </div>
            </div>

            <div className="w-full rounded-[24px] border border-white/10 bg-slate-950/70 p-6 lg:max-w-sm">
              <div className="flex items-center gap-2 text-cyan-300">
                <FaBrain /> <span className="text-sm font-semibold uppercase tracking-[0.24em]">What it delivers</span>
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-cyan-400" />
                  <span>AI-assisted job matching with intelligent recommendations.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-cyan-400" />
                  <span>Resume and document optimization with parsing support.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-cyan-400" />
                  <span>Career dashboard experience built for real-world product feel.</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3 mb-10">
          {overview.map((item) => (
            <div key={item.label} className="hero-card border-white/10">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{item.label}</p>
              <p className="mt-3 text-3xl font-bold text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {filteredProjects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="project-card group"
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition" />
                <div className="p-6">
                  <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-300">
                    {p.tag}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-4 text-slate-300 leading-7 line-clamp-3">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 bg-slate-950/90 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-700"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
                <div className="mt-4 flex items-center gap-2 text-cyan-300 text-sm font-semibold">
                  View Details <FaArrowRight />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
