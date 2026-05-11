"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass px-8 py-4 rounded-2xl shadow-2xl">
        <div className="flex gap-8 items-center">
          <a
            href="#about"
            className="text-slate-300 hover:text-white transition font-medium"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-slate-300 hover:text-white transition font-medium"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="text-slate-300 hover:text-white transition font-medium"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="text-slate-300 hover:text-white transition font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}