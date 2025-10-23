import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

export default function Certifications() {
  const certificates = [
    {
      name: "Google GEN AI Bootcamp",
      link: "https://certificate.hack2skill.com/user/genaivolunteers1/2025H2S05GENAIB-V100011",
      type: "Bootcamp",
    },
    {
      name: "Case-o-mania (Unstop)",
      link: "https://unstop.com/certificate-preview/922b5441-47dc-46f8-8635-abd0b256cc62?utm_campaign=site-emails",
      type: "Competition",
    },
    {
      name: "Naukri Campus – Young Turks",
      link: "https://www.naukri.com/campus/certificates/young_turks25_round_1_achievement/v0/68d9c3d3abe8a1724df7965e",
      type: "Merit",
    },
  ];

  return (
    <section className="section max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-10 text-center">
        Certifications & Achievements
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 120 }}
            className="relative p-6 bg-gradient-to-br from-cyan-50 to-violet-50 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition transform"
          >
            <div className="absolute top-3 right-3 bg-cyan-500 text-white text-xs px-2 py-1 rounded-md shadow-md">
              {cert.type}
            </div>

            <div className="flex justify-center mb-4 text-cyan-500">
              <FaCertificate size={36} />
            </div>

            <div className="font-semibold text-center text-slate-800 mb-4">{cert.name}</div>

            <div className="flex justify-center">
              <a
                href={cert.link}
                target="_blank"
                className="px-4 py-2 bg-cyan-500 text-white rounded-md font-medium shadow hover:bg-cyan-600 transition transform hover:scale-105"
              >
                View Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
