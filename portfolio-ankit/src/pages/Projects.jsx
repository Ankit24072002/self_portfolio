import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from "react-icons/fa";

const projects = [
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
    live: "https://ocean-hazard-platform.vercel.app/",
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
  }
];

export default function Projects() {
  return (
    <section className="section bg-gradient-to-br from-slate-50 to-cyan-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-slate-800 mb-3">🚀 Projects</h2>
        <p className="text-slate-600 mb-10 text-lg">
          A collection of my most impactful works — blending innovation, performance, and clean design.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition transform"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-600 via-cyan-500/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6 text-white">
                <div className="font-bold text-xl">{p.title}</div>
                <p className="text-sm mt-2">{p.desc}</p>
                <div className="flex gap-3 mt-4">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-cyan-600 rounded-md text-sm font-semibold flex items-center gap-2 hover:bg-cyan-100 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-900 text-white rounded-md text-sm font-semibold flex items-center gap-2 hover:bg-slate-700 transition"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <div className="text-xs uppercase font-bold text-cyan-600 tracking-wide mb-2">{p.tag}</div>
                <h3 className="text-xl font-semibold text-slate-800">{p.title}</h3>
                <p className="text-slate-600 mt-2 line-clamp-3">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center text-cyan-600 text-sm font-semibold group-hover:text-cyan-700 transition">
                  View Details <FaArrowRight className="ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
