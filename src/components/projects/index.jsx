"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Project() {
 

  const [godIndex, setGodIndex] = useState(0);

  const godImages = [
    "/assets/project/login.png",
    "/assets/project/image1.png",
    "/assets/project/image2.png",
    "/assets/project/image3.png",
    "/assets/project/image4.png",
  ];
 

  const [inboxIndex, setInboxIndex] = useState(0);

  const inboxImages = [
    "/assets/project/inbox.png",
    "/assets/project/inbox2.png",
    "/assets/project/inbox3.png",
    "/assets/project/inbox4.png",
  ];

  useEffect(() => {
    const godTimer = setInterval(
      () => setGodIndex((p) => (p + 1) % godImages.length),
      3500
    );

    const inboxTimer = setInterval(
      () => setInboxIndex((p) => (p + 1) % inboxImages.length),
      3500
    );

    return () => {
      clearInterval(godTimer);
      clearInterval(inboxTimer);
    };
  }, []);
 

  const slideLeft = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 60, damping: 14 },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 60, damping: 14 },
    },
  };

  const imageAnimation = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="flex flex-col items-center gap-24">
 

      <motion.div
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="
        flex md:flex-row flex-col items-stretch
        max-w-[1350px] w-full
        rounded-2xl
        border border-cyan-600
        bg-gradient-to-br from-[#020024] via-[#090979] to-[#00d4ff]
        shadow-xl
        hover:shadow-[0_0_45px_rgba(0,224,255,0.6)]
        p-6
      "
      >
        {/* IMAGE */}
        <motion.div
          key={inboxIndex}
          {...imageAnimation}
          className="w-full md:w-1/2 flex items-center justify-center"
        >
          <Image
            src={inboxImages[inboxIndex]}
            width={800}
            height={500}
            alt="Inbox"
            className="rounded-xl object-cover"
          />
        </motion.div>

        {/* TEXT */}
        <div className="flex flex-col justify-center md:w-1/2 md:ml-10">
          <h1 className="text-[34px] md:text-[52px] font-bold bg-gradient-to-r from-cyan-300 to-purple-400 text-transparent bg-clip-text">
            Inbox — Cloud File Management System
          </h1>

          <ul className="mt-5 text-white font-medium list-disc space-y-2 ml-5">
            <li>Secure cloud-based file upload, preview, rename, download and delete system.</li>
            <li>JWT authentication with protected API endpoints.</li>
            <li>Cloudinary integrated scalable media storage.</li>
            <li>Lazy loading & optimized API queries for faster performance.</li>
            <li>React hooks managing API calls and UI updates.</li>
            <li>Brute-force attack prevention mechanisms.</li>
            <li>REST APIs using Node.js, Express & MongoDB aggregation.</li>
            <li>Indexed database queries improving backend performance.</li>
          </ul>
        </div>
      </motion.div>
 

      <motion.div
        variants={slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="
        flex md:flex-row-reverse flex-col items-stretch
        max-w-[1350px] w-full
        rounded-2xl
        border border-violet-800
        bg-gradient-to-br from-[#0F0C29] via-[#302B63] to-[#24243E]
        shadow-xl
        hover:shadow-[0_0_45px_rgba(140,0,255,0.6)]
        p-6
      "
      >
        <motion.div
          key={godIndex}
          {...imageAnimation}
          className="w-full md:w-1/2 flex items-center justify-center"
        >
          <Image
            src={godImages[godIndex]}
            width={800}
            height={500}
            alt="Godseye"
            className="rounded-xl object-cover"
          />
        </motion.div>

        <div className="flex flex-col justify-center md:w-1/2 md:mr-10">
          <h1 className="text-[34px] md:text-[52px] font-bold bg-gradient-to-r from-[#6A00F4] to-[#00E0FF] text-transparent bg-clip-text">
            Potential Threat Alert System (GODSEYE)
          </h1>

          <ul className="mt-5 text-white font-medium list-disc space-y-2 ml-5">
            <li>YOLOv8 real-time weapon detection system.</li>
            <li>Detects guns and knives with partial visibility.</li>
            <li>Automated alert calls & SMS using Twilio.</li>
            <li>Location-aware emergency voice alerts.</li>
            <li>Multi-admin secure monitoring dashboard.</li>
            <li>Real-time CCTV stream threat monitoring.</li>
            <li>High accuracy detection & rapid response system.</li>
          </ul>
        </div>
      </motion.div>
 

      <motion.div
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="
        flex md:flex-row flex-col items-stretch
        max-w-[1350px] w-full
        rounded-2xl
        border border-green-600
        bg-gradient-to-br from-black via-[#0f2027] to-[#203a43]
        shadow-xl
        hover:shadow-[0_0_45px_rgba(0,255,140,0.6)]
        p-6
      "
      >
        {/* TERMINAL */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="bg-black text-green-400 font-mono p-6 rounded-xl">
            <p>$ git-autotool init</p>
            <p>$ create-branch feature/login</p>
            <p>$ commit -m "update"</p>
            <p>$ push && create-pr</p>
            <p className="animate-pulse">✔ Merge Successful</p>
          </div>
        </div>

        <div className="flex flex-col justify-center md:w-1/2 md:ml-10">
          <h1 className="text-[34px] md:text-[52px] font-bold bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">
            Git Automation CLI Tool
          </h1>

         <ul className="mt-5 text-white font-medium list-disc space-y-2 ml-5">
  <li>
    Developed a Git automation CLI tool to streamline branch management, commits, pushes, PR workflows, and merges.
  </li>

  <li>
    Reduced repetitive command usage by automating common Git operations for faster developer productivity.
  </li>

  <li>
    Published the tool as an npm package (git-autotool).
  </li>

  <li>
    Implemented an interactive merge assistant with VS Code conflict resolution guidance.
  </li>

  <li>
    Integrated robust error handling, GitHub authentication checks, and remote synchronization logic.
  </li>

  <li>
    Tech Stack: Node.js, Inquirer, Chalk, Commander, Octokit, GitHub API.
  </li>

  <li>
    Deployment:
    <a
      href="https://www.npmjs.com/package/git-autotool"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-300 underline hover:text-green-200"
    >
      npmjs.com/package/git-autotool
    </a>
  </li>
</ul>
        </div>
      </motion.div>

    </div>
  );
}