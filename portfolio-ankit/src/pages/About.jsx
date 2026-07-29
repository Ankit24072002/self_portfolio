import React from "react";
import { motion } from "framer-motion";
import resumePDF from "../assets/Ankit Kumar Singh_Resume.pdf";
import { FaReact, FaDatabase, FaLaptopCode, FaArrowRight } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript, SiDocker, SiLinux, SiGit, SiBootstrap, SiAngular, SiVuedotjs } from "react-icons/si";

export default function About() {
  const skills = [
    {
      title: "Programming",
      items: ["C", "Java", "Python"],
      level: 85,
      icon: <FaLaptopCode className="text-orange-400 w-6 h-6" />,
    },
    {
      title: "Web Technologies",
      items: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js"],
      level: 90,
      icon: <FaReact className="text-cyan-400 w-6 h-6" />,
    },
    {
      title: "Database",
      items: ["MySQL", "MongoDB"],
      level: 80,
      icon: <FaDatabase className="text-emerald-400 w-6 h-6" />,
    },
    {
      title: "Frameworks & Libraries",
      items: ["Bootstrap", "Angular", "Vue.js", "Tailwind CSS"],
      level: 85,
      icon: <SiTailwindcss className="text-sky-400 w-6 h-6" />,
    },
    {
      title: "Operating System",
      items: ["Linux"],
      level: 70,
      icon: <SiLinux className="text-slate-300 w-6 h-6" />,
    },
    {
      title: "Tech Tools",
      items: ["Git", "GitHub", "Docker", "WebRTC"],
      level: 80,
      icon: <SiGit className="text-rose-400 w-6 h-6" />,
    },
  ];

  const counters = [
    { label: "Projects", value: 8 },
    { label: "Experience (Months)", value: 13 },
    { label: "Completed Tasks", value: 50 },
  ];

  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),transparent_24%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden p-8 md:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                About Me
              </div>
              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">Crafting thoughtful digital experiences with modern full-stack engineering.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                I am a dedicated software developer with experience building scalable, user-centric web applications that feel polished, fast, and intuitive. My work spans frontend, backend, database design, and API integration, with a strong focus on delivering products that look great and perform even better.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={resumePDF} download="Ankit_Kumar_Singh_Resume.pdf" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                  Download CV <FaArrowRight />
                </a>
                <a href="https://github.com/Ankit24072002" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-white/15">
                  Explore GitHub
                </a>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-slate-950/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">What I bring</p>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">• Product-minded development with a sharp eye for UI details.</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">• Clean architecture, strong state flow, and smooth user interactions.</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">• Fast learner who enjoys turning ideas into real-world web experiences.</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 grid gap-4 md:grid-cols-3">
          {counters.map((counter, i) => (
            <div key={i} className="hero-card border-white/10">
              <div className="text-4xl font-bold text-white">{counter.value}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.24em] text-cyan-300">{counter.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white">Technical Skills</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[24px] border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/20">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-white/10 p-3">{skill.icon}</div>
                  <div>
                    <div className="font-semibold text-white">{skill.title}</div>
                    <div className="mt-1 text-sm text-slate-400">• {skill.items.join(", ")}</div>
                  </div>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 1.2 }} className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white">Education</h3>
          <div className="mt-6 space-y-4">
            {[
              { title: "B.Tech in Computer Science & Engineering", detail: "MAKAUT (2026) — CGPA 7.2", accent: "border-cyan-400" },
              { title: "Higher Secondary", detail: "Rishra Vidyapith High School (2022) — 83.4%", accent: "border-violet-400" },
              { title: "Secondary", detail: "Rishra St. Thomas Academy (2020) — 73%", accent: "border-emerald-400" },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className={`rounded-[24px] border ${item.accent} bg-slate-900/70 p-5 shadow-lg shadow-black/20`}>
                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="mt-1 text-slate-400">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
