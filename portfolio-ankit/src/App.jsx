import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Certifications from "./pages/Certifications";
import Activitys from "./pages/Activitys";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{ duration: 0.55 }}
    className="max-w-7xl mx-auto p-6 md:p-10 rounded-[32px] shadow-2xl border border-white/20 bg-white/80 backdrop-blur-xl"
  >
    {children}
  </motion.div>
);

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col relative bg-slate-950 text-slate-100 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.2),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.95),rgba(15,23,42,0.75))]" />

      <Navbar />
      <ScrollToTop />

      <main className="flex-1 relative z-10 px-4 py-6 md:px-8 md:py-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/certifications" element={<PageWrapper><Certifications /></PageWrapper>} />
            <Route path="/activities" element={<PageWrapper><Activitys /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
