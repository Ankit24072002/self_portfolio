import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Activitys() {
  const [modal, setModal] = useState({ open: false, activity: {} });

  const activities = [
    { icon: "👨‍💻", name: "Coding Club Member", details: "Active member contributing to coding sessions and hackathons." },
    { icon: "⚙️", name: "TechFest 2025 Organizer", details: "Managed and organized tech fest events, workshops, and competitions." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="section max-w-6xl mx-auto px-6 relative">
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-10 text-center bg-gradient-to-r from-teal-400 via-cyan-500 to-violet-600 bg-clip-text text-transparent animate-text">
        Extracurriculars
      </h2>

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {activities.map((act, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition text-center text-lg"
            onClick={() => setModal({ open: true, activity: act })}
          >
            <div className="text-5xl mb-3">{act.icon}</div>
            <div className="font-semibold text-slate-800 text-xl">{act.name}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {modal.open && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setModal({ open: false, activity: {} })}
        >
          <div
            className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-6xl mb-4 text-center">{modal.activity.icon}</div>
            <h3 className="text-2xl font-bold text-center mb-2">{modal.activity.name}</h3>
            <p className="text-slate-700 text-center">{modal.activity.details}</p>
            <button
              onClick={() => setModal({ open: false, activity: {} })}
              className="absolute top-3 right-3 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <style>{`
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
