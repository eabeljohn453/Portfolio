"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  GitBranch,
} from "lucide-react";

export default function Body() {
  return (
    <div className="flex flex-col items-center w-full md:h-[800px] bg-black text-white ">

      {/* ===== HELLO TEXT ===== */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex"
      >
        <Image
          src="/assets/photo/arrows.svg"
          alt="Arrow"
          width={100}
          height={100}
          className="hidden md:block bg-black ml-120 mt-14"
        />

        <h1 className="ml-5 mt-10 text-[24px] font-bold">
          Hello! I Am{" "}
          <span className="text-[30px] bg-linear-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
            Eabel John
          </span>
        </h1>
      </motion.div>

      {/* ===== PROFILE IMAGE ===== */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative w-[200px] mt-4 md:w-[220px] md:h-[220px] rounded-full p-1 bg-linear-to-tr from-[#ff00cc] via-[#a100ff] to-[#00d4ff]"
      >
        <div className="w-full h-full rounded-full bg-[#0D0D0D] p-1">
          <Image
            src="/assets/photo/logo.jpeg"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
      </motion.div>

      {/* ===== MAIN HEADING ===== */}
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="md:text-[50px] text-[35px] font-bold leading-tight mt-10 text-center"
      >
        I do{" "}
        <span className="bg-linear-to-r from-[#FF8C42] via-[#FF4FC7] to-[#A44CFF] bg-clip-text text-transparent font-extrabold">
          CODE
        </span>{" "}
        and <br />
        turn{" "}
        <span className="bg-linear-to-r from-[#FF8C42] via-[#FF4FC7] to-[#A44CFF] bg-clip-text text-transparent font-extrabold">
          Thoughts
        </span>{" "}
        into{" "}
        <span className="bg-linear-to-r from-[#FF8C42] via-[#FF4FC7] to-[#A44CFF] bg-clip-text text-transparent font-extrabold">
          Things!
        </span>
      </motion.h1>

      {/* ===== DESCRIPTION ===== */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 md:mt-8 md:text-[18px] text-[15px] leading-[1.8] text-gray-300 px-6 text-center"
      >
        I’m a passionate full-stack developer who loves building sleek, scalable,
        and user-focused digital experiences.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-1 md:text-[18px] text-[15px] leading-[1.8] text-gray-300 px-6 text-center"
      >
        I specialize in bringing ideas to life from crafting pixel-perfect
        frontends to designing powerful backend systems.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-1 md:text-[18px] text-[15px] leading-[1.8] text-gray-300 px-6 text-center"
      >
        My focus is on creating clean, efficient, and high-performing solutions
        that make a real impact.
      </motion.p>

      {/* ===== BUTTONS ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex md:gap-x-20 gap-x-2 mt-12"
      >
        <Link
          href="/contact"
          className="border border-white w-36 h-12 flex items-center justify-center rounded-3xl font-semibold transition-all duration-300 hover:bg-linear-to-r hover:from-purple-800 hover:border-black"
        >
          Get In Touch
        </Link>

        <Link
          href="/assets/Eabel cv.pdf"
          className="border border-white w-36 h-12 flex items-center justify-center rounded-3xl font-semibold transition-all duration-300 hover:bg-linear-to-r hover:from-purple-800 hover:border-black"
        >
          Download CV
        </Link>
      </motion.div>

      {/* ===== TECH STACK ===== */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="md:mt-20 mt-12 font-semibold text-4xl bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
      >
        My Tech Stack
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="mt-4 text-[18px] leading-relaxed text-gray-200"
      >
        Tools and Technologies I Use
      </motion.p>

      {/* ===== TECH ICONS ===== */}
      <div className="flex gap-8 mt-10 flex-wrap justify-center">
        {[Code2, Server, Database, Cloud, GitBranch].map((Icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80, scale: 0.6 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
          >
            <Icon size={50} className="text-purple-400 hover:scale-110 transition" />
          </motion.div>
        ))}
      </div>

    </div>
  );
}
