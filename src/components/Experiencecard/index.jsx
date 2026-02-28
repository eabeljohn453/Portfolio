"use client";

import { motion } from "framer-motion";

export default function ExperienceCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}   // ✅ replays on view
      viewport={{ once: false, amount: 0.3 }} // ✅ EVERY time
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        w-full 
        max-w-[1390px] 
        mx-auto 
        mt-20 
        bg-linear-to-r from-[#1E0A78] to-[#6A00F4] 
        rounded-2xl 
        hover:shadow-[0_0_25px_rgba(140,0,255,0.5)]
        p-6 md:p-8 
        text-white
      "
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-3 md:gap-4 mb-4"
      >
        <div className="text-3xl md:text-4xl">💼</div>
        <h2 className="text-2xl md:text-3xl font-bold">
          FutureIK Technologies
        </h2>
      </motion.div>

      {/* ROLE */}
      <motion.p
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.3 }}
        className="text-[15px] md:text-lg text-violet-200 mb-1 font-semibold"
      >
        Software Development Engineer
      </motion.p>

      {/* LOCATION */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.4 }}
        className="text-[13px] md:text-sm text-gray-300 mb-4"
      >
        Kochi, Kerala, India • Apr 2025 – Present
      </motion.p>

      {/* BULLETS */}
      <motion.ul
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.5 }}
        className="list-disc ml-5 space-y-2 md:text-[17px] text-[14px] leading-relaxed text-gray-100"
      >
        <li>
          Developed and maintained responsive web applications using Next.js,
          React, TailwindCSS, JavaScript, Node.js, and MongoDB.
        </li>
        <li>
          Implemented socket authentication and real-time device communication.
        </li>
        <li>
          Integrated internationalization (i18n) across the application.
        </li>
        <li>
          Refactored code to improve performance and scalability.
        </li>
        <li>
          Used Postman and GitHub for testing, version control, and reviews.
        </li>
      </motion.ul>
    </motion.div>
  );
}
