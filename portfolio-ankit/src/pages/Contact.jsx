import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
// import emailjs from "@emailjs/browser"; // optional if you want real sending

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
    <section className="relative section py-20 bg-gradient-to-br from-cyan-50 via-white to-slate-100 overflow-hidden">

      <div className="absolute -top-40 -left-20 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-cyan-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-3">Let’s Connect 🤝</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            I’m open to freelance work, collaborations, and exciting opportunities. Drop me a message below!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-8 text-slate-700"
        >
          <a href="mailto:kumaranikant24@gmail.com" className="hover:text-cyan-500 transition">
            <FaEnvelope size={26} />
          </a>
          <a href="https://www.linkedin.com/in/ankit-kumar-singh-905109319" target="_blank" className="hover:text-cyan-500 transition">
            <FaLinkedin size={26} />
          </a>
          <a href="https://github.com/Ankit24072002" target="_blank" className="hover:text-cyan-500 transition">
            <FaGithub size={26} />
          </a>
          <a href="tel:+1234567890" className="hover:text-cyan-500 transition">
            <FaPhone size={26} />
          </a>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 bg-white/90 backdrop-blur-xl border border-cyan-100 shadow-lg p-8 md:p-10 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-transform"
        >
          <div className="relative mb-5">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              required
              className="peer p-4 w-full rounded-md border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-transparent"
              placeholder=" "
            />
            <label className="absolute left-4 top-3 text-slate-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-cyan-500 bg-white/80 px-1">
              Your Name
            </label>
          </div>

          <div className="relative mb-5">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              className="peer p-4 w-full rounded-md border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-transparent"
              placeholder=" "
            />
            <label className="absolute left-4 top-3 text-slate-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-cyan-500 bg-white/80 px-1">
              Email Address
            </label>
          </div>

          <div className="relative mb-5">
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows="5"
              className="peer p-4 w-full rounded-md border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none bg-transparent resize-none"
              placeholder=" "
            />
            <label className="absolute left-4 top-3 text-slate-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-cyan-500 bg-white/80 px-1">
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md font-semibold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 shadow-md hover:shadow-lg transition"
          >
            {submitted ? "✅ Sent Successfully!" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
