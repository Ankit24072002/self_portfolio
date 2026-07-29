import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaArrowRight, FaLaptopCode, FaDatabase, FaStar } from "react-icons/fa";

const projects = [
  {
    title: "JobPilot.AI",
    desc: "A career intelligence platform that matches jobs, optimizes resumes, and delivers AI-powered career insights.",
    features: ["Smart job matching", "Resume optimization", "Document parsing + analytics"],
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "Multer"],
    live: "https://jobpilot-livid-omega.vercel.app/",
    code: "https://github.com/JOB-PILOT-AI/JobPilot-AI",
    tag: "AI | Career Platform"
  },
  {
    title: "Mutual Fund Tracker",
    desc: "A GIS-focused platform for visualizing oceanic hazards with live data, mapping, and deployment-ready monitoring.",
    features: ["Interactive Leaflet map", "Hazard tracking", "Docker deployment"],
    tech: ["React", "Postgres", "Leaflet.js", "Docker"],
    live: "https://ocean-hazard-monitor.onrender.com",
    code: "https://github.com/Ankit24072002/ocean-hazard-platform.git",
    tag: "Environment | GIS"
  },
  {
    title: "Apna Video Call",
    desc: "A real-time video conferencing app with chat, screen sharing, and multi-user sessions built for reliability.",
    features: ["WebRTC video calls", "Live chat", "Responsive meeting UI"],
    tech: ["React", "WebRTC", "Socket.io", "Node.js"],
    live: "https://vdo-calling-5frontend.onrender.com/",
    code: "https://github.com/Ankit24072002/vdo_calling.git",
    tag: "Communication | WebRTC"
  },
  {
    title: "Apna GPT",
    desc: "A conversational AI app built on MERN with OpenAI integration for smart responses and intelligent workflows.",
    features: ["AI-assisted chat", "Context-aware replies", "Secure user sessions"],
    tech: ["MERN", "OpenAI", "JWT"],
    live: "https://apna-gpt-1.onrender.com/",
    code: "https://github.com/Ankit24072002/apna_Gpt.git",
    tag: "AI | Chatbot"
  },
  {
    title: "Event Management System",
    desc: "A complete event platform for organizers to manage attendees, schedules, and interactive dashboards.",
    features: ["Event scheduling", "Attendee management", "Realtime updates"],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind", "Socket.io"],
    live: "https://event-managementdashboard-2.onrender.com",
    code: "https://github.com/Ankit24072002/Event_managementDashboard.git",
    tag: "Event | MERN"
  },
  {
    title: "Stock Market Dashboard",
    desc: "A full-stack market analytics dashboard for tracking stock performance and portfolio insights in real time.",
    features: ["Portfolio tracking", "Market analytics", "Live updates"],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind", "Socket.io"],
    live: "https://stock-portfolio-1-ravm.onrender.com",
    code: "https://github.com/Ankit24072002/stock_portfolio.git",
    tag: "Finance | MERN"
  },
  {
    title: "self Portfolio",
    desc: "A personal portfolio website that showcases my projects, skills, and professional web design approach.",
    features: ["Modern design", "Smooth navigation", "Responsive layout"],
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "https://self-portfolio-if15.onrender.com/projects",
    code: "https://github.com/Ankit24072002/self_portfolio.git",
    tag: "Personal | Portfolio"
  }
];

const categories = ["All", "MERN", "AI", "Finance", "Environment", "Communication", "Personal"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.tag.includes(activeCategory));

  const overview = [
    { label: "Projects", value: projects.length, icon: FaLaptopCode, detail: "Polished apps" },
    { label: "Live Apps", value: 8, icon: FaStar, detail: "Deployment ready" },
    { label: "Tech Stack", value: 20, icon: FaDatabase, detail: "Modern tools" }
  ];

  return (
    <section className="relative section overflow-hidden bg-slate-950/90 py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),transparent_25%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),transparent_25%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 rounded-[36px] border border-white/10 bg-slate-900/85 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.1),transparent_22%)] pointer-events-none" />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] items-center">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-300">
                Projects showcase
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Professional web products with polished UX and modern architecture.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Explore a curated selection of production-ready applications built with performance, clarity, and real user value in mind.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100">MERN</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100">Tailwind</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100">Realtime</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100">AI</span>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {overview.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-[28px] border border-white/10 bg-slate-950/90 p-5 shadow-xl shadow-black/20">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                    <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Featured work</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Selected apps with refined UI and production-ready UX.</h2>
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

        <div className="grid gap-8 lg:grid-cols-3">
          {filteredProjects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="project-card group overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500" />
              <div className="p-7 pt-10">
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-300">
                  {p.tag}
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">{p.title}</h3>
                <p className="mt-4 text-slate-300 leading-7 line-clamp-4">{p.desc}</p>
                <ul className="mt-5 space-y-3">
                  {p.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 bg-slate-950/95 p-6">
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
