import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaArrowRight } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),transparent_24%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">Let’s Connect</div>
          <h2 className="mt-4 text-4xl font-bold text-white">Open for freelance work, collaborations, and exciting opportunities.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">I’m always happy to talk about product ideas, career growth, and ambitious frontend or full-stack projects.</p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-8">
            <div className="space-y-4">
              <div className="rounded-[20px] border border-white/10 bg-slate-900/70 p-4">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Email</p>
                <a href="mailto:kumaranikant24@gmail.com" className="mt-2 block text-lg font-semibold text-white hover:text-cyan-300">kumaranikant24@gmail.com</a>
              </div>
              <div className="rounded-[20px] border border-white/10 bg-slate-900/70 p-4">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Location</p>
                <p className="mt-2 text-lg font-semibold text-white">Rishra, West Bengal, India</p>
              </div>
              <div className="rounded-[20px] border border-white/10 bg-slate-900/70 p-4">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Availability</p>
                <p className="mt-2 text-lg font-semibold text-white">Available for freelance and full-time roles</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-slate-200">
              <a href="mailto:kumaranikant24@gmail.com" className="rounded-full border border-white/10 bg-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-300"><FaEnvelope size={18} /></a>
              <a href="https://www.linkedin.com/in/ankit-kumar-singh-905109319" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-300"><FaLinkedin size={18} /></a>
              <a href="https://github.com/Ankit24072002" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-300"><FaGithub size={18} /></a>
              <a href="tel:+917439907360" className="rounded-full border border-white/10 bg-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-300"><FaPhone size={18} /></a>
            </div>
          </motion.div>

          <motion.form onSubmit={onSubmit} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-[28px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
            <div className="relative mb-5">
              <input name="name" value={form.name} onChange={onChange} required className="peer w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20" placeholder=" " />
              <label className="pointer-events-none absolute left-4 top-3 text-sm text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-cyan-400 bg-slate-900/80 px-1">Your Name</label>
            </div>

            <div className="relative mb-5">
              <input type="email" name="email" value={form.email} onChange={onChange} required className="peer w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20" placeholder=" " />
              <label className="pointer-events-none absolute left-4 top-3 text-sm text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-cyan-400 bg-slate-900/80 px-1">Email Address</label>
            </div>

            <div className="relative mb-5">
              <textarea name="message" value={form.message} onChange={onChange} required rows="5" className="peer w-full resize-none rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20" placeholder=" " />
              <label className="pointer-events-none absolute left-4 top-3 text-sm text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-cyan-400 bg-slate-900/80 px-1">Your Message</label>
            </div>

            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
              {submitted ? "Message Sent!" : "Send Message"} <FaArrowRight />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
