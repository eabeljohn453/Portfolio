"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Project() {

  /* ================= GODSEYE SLIDER ================= */

  const [godIndex, setGodIndex] = useState(0);

  const godImages = [
    "/assets/project/login.png",
    "/assets/project/image1.png",
    "/assets/project/image2.png",
    "/assets/project/image3.png",
    "/assets/project/image4.png",
  ];

  /* ================= INBOX SLIDER ================= */

  const [inboxIndex, setInboxIndex] = useState(0);

  const inboxImages = [
    "/assets/project/inbox.png",
    "/assets/project/inbox2.png",
    "/assets/project/inbox3.png",
    "/assets/project/inbox4.png",
  ];
 

  useEffect(() => {
    const godTimer = setInterval(() => {
      setGodIndex((p) => (p + 1) % godImages.length);
    }, 3500);

    const inboxTimer = setInterval(() => {
      setInboxIndex((p) => (p + 1) % inboxImages.length);
    }, 3500);

    return () => {
      clearInterval(godTimer);
      clearInterval(inboxTimer);
    };
  }, []);
 

  const slideLeft = {
    hidden: { opacity: 0, x: -180, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 55,
        damping: 14,
      },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 180, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 55,
        damping: 14,
      },
    },
  };

  const imageAnimation = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.7 },
  };

  return (
    <div className="flex flex-col items-center gap-24">
 

      <motion.div
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ y: -8 }}
        className="
        flex md:flex-row flex-col
        max-w-[1350px] w-full
        rounded-2xl
        border border-cyan-600
        bg-gradient-to-br from-[#020024] via-[#090979] to-[#00d4ff]
        shadow-xl
        hover:shadow-[0_0_45px_rgba(0,224,255,0.6)]
        transition-all duration-500
        p-6
      "
      >
        {/* IMAGE */}
        <motion.div
          key={inboxIndex}
          {...imageAnimation}
          className="w-full md:w-[800px]"
        >
          <Image
            src={inboxImages[inboxIndex]}
            width={800}
            height={400}
            alt="Inbox"
            className="rounded-xl"
          />
        </motion.div>

        {/* TEXT */}
        <div className="flex flex-col md:ml-10">
          <h1 className="
            text-[34px] md:text-[52px] font-bold
            bg-gradient-to-r from-cyan-300 to-purple-400
            text-transparent bg-clip-text">

            Inbox — Cloud File Management System
          </h1>

          <p className="mt-5 text-white font-medium">
            Secure cloud platform enabling upload,
            preview, rename and download files.
          </p>

          <p className="text-white font-medium">
            JWT authentication with protected APIs.
          </p>

          <p className="text-white font-medium">
            Cloudinary powered scalable storage.
          </p>

          <p className="text-white font-medium">
            Lazy loading & optimized database queries.
          </p>

          <p className="text-white font-medium">
            REST APIs using Node.js, Express & MongoDB.
          </p>
        </div>
      </motion.div> 

      <motion.div
        variants={slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ y: -8 }}
        className="
        flex md:flex-row-reverse flex-col
        max-w-[1350px]
        w-full
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
          className="w-full md:w-[800px]"
        >
          <Image
            src={godImages[godIndex]}
            width={800}
            height={400}
            alt="Godseye"
            className="rounded-xl"
          />
        </motion.div>

        <div className="flex flex-col md:mr-10">
          <h1 className="
            text-[34px] md:text-[52px] font-bold
            bg-gradient-to-r from-[#6A00F4] to-[#00E0FF]
            text-transparent bg-clip-text">

            Potential Threat Alert System
          </h1>

          <p className="mt-5 text-white font-medium">
            YOLOv8 powered real-time weapon detection system.
          </p>

          <p className="text-white font-medium">
            Automated alert calls & SMS using Twilio.
          </p>

          <p className="text-white font-medium">
            Multi-admin secure monitoring dashboard.
          </p>

          <p className="text-white font-medium">
            High accuracy threat detection & response.
          </p>
        </div>
      </motion.div>

      {/* ================================================= */}
      {/* ================= GIT TOOL ====================== */}
      {/* ================================================= */}

      <motion.div
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="
        flex md:flex-row flex-col
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
        <div className="w-full md:w-[800px] flex justify-center">
          <div className="bg-black text-green-400 font-mono p-6 rounded-xl">
            <p>$ git-autotool init</p>
            <p>$ create-branch feature/login</p>
            <p>$ commit -m "update"</p>
            <p>$ push && create-pr</p>
            <p className="animate-pulse">✔ Merge Successful</p>
          </div>
        </div>

        <div className="md:ml-10">
          <h1 className="
            text-[34px] md:text-[52px] font-bold
            bg-gradient-to-r from-green-400 to-cyan-400
            text-transparent bg-clip-text">

            Git Automation CLI Tool
          </h1>

          <p className="mt-5 text-white">
            Automated Git workflow & PR management CLI.
          </p>

          <p className="text-white">
            Published npm package: git-autotool.
          </p>

          <p className="text-white">
            Interactive merge conflict assistant.
          </p>

          <p className="text-white">
            GitHub API integration with smart validation.
          </p>
        </div>
      </motion.div>

    </div>
  );
}