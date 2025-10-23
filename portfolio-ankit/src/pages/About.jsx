import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiDocker,
  SiLinux,
  SiGit,
  SiGithub,
  SiBootstrap,
  SiAngular,
  SiVuedotjs,
} from "react-icons/si";

export default function About() {
  const skills = [
    {
      title: "Programming",
      items: ["C", "Java", "Python"],
      level: 85,
      icon: <FaLaptopCode className="text-orange-500 w-6 h-6" />,
    },
    {
      title: "Web Technologies",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
      ],
      level: 90,
      icon: <FaReact className="text-cyan-500 w-6 h-6" />,
    },
    {
      title: "Database",
      items: ["MySQL", "MongoDB"],
      level: 80,
      icon: <FaDatabase className="text-green-600 w-6 h-6" />,
    },
    {
      title: "Frameworks & Libraries",
      items: ["Bootstrap", "Angular", "Vue.js", "Tailwind CSS"],
      level: 85,
      icon: <SiTailwindcss className="text-sky-500 w-6 h-6" />,
    },
    {
      title: "Operating System",
      items: ["Linux"],
      level: 70,
      icon: <SiLinux className="text-gray-700 w-6 h-6" />,
    },
    {
      title: "Tech Tools",
      items: ["Git", "GitHub", "Docker", "WebRTC"],
      level: 80,
      icon: <SiGit className="text-red-600 w-6 h-6" />,
    },
  ];

  const counters = [
    { label: "Projects", value: 6 },
    { label: "Experience (Months)", value: 13 },
    { label: "Completed Tasks", value: 50 },
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* 🌈 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 via-blue-100 to-violet-200 animate-gradient opacity-70"></div>
      {/* Geometric texture overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      {/* Main content */}
      <div className="relative max-w-5xl mx-auto px-6">
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-cyan-500"
        >
          <h2 className="text-3xl font-bold text-slate-800">About Me</h2>
          <p className="mt-4 text-slate-700 text-lg leading-relaxed">
            I am a dedicated and results-driven software developer with
            experience in designing and implementing scalable, user-centric web
            applications. My expertise spans frontend and backend development,
            database management, and integrating modern APIs to deliver seamless
            digital experiences.
            <br />
            <br />
            I am committed to producing high-quality code, solving complex
            problems efficiently, and continuously learning emerging
            technologies to enhance my skill set.
          </p>
          <a
            href="/CV_Ankit.pdf"
            className="mt-6 inline-block px-6 py-2 bg-cyan-500 text-white font-semibold rounded shadow hover:bg-cyan-600 transition"
          >
            Download CV
          </a>
        </motion.div>

        {/* Counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {counters.map((counter, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 p-8 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-white"
              >
                {counter.value}
              </motion.div>
              <div className="mt-2 text-white font-semibold text-lg">
                {counter.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Skills */}
        <h3 className="mt-12 text-2xl font-semibold text-slate-800">
          Technical Skills
        </h3>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-xl shadow hover:scale-105 transition transform"
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">{skill.icon}</div>
                <div>
                  <div className="font-semibold text-slate-800">
                    {skill.title}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    • {skill.items.join(", ")}
                  </div>
                </div>
              </div>
              <div className="mt-3 bg-slate-200 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2 }}
                  className="h-2 bg-cyan-500"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <h3 className="mt-12 text-2xl font-semibold text-slate-800">
          Education
        </h3>
        <div className="mt-4 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-4 bg-white shadow-lg rounded-xl border-l-4 border-blue-500"
          >
            <h4 className="font-semibold text-slate-800">
              B.Tech in Computer Science & Engineering
            </h4>
            <p className="text-slate-600">MAKAUT (2026) — CGPA 7.2</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-4 bg-white shadow-lg rounded-xl border-l-4 border-cyan-500"
          >
            <h4 className="font-semibold text-slate-800">Higher Secondary</h4>
            <p className="text-slate-600">
              Rishra Vidyapith High School (2022) — 83.4%
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-4 bg-white shadow-lg rounded-xl border-l-4 border-violet-500"
          >
            <h4 className="font-semibold text-slate-800">Secondary</h4>
            <p className="text-slate-600">
              Rishra St. Thomas Academy (2020) — 73%
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
