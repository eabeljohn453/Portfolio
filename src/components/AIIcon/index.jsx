"use client";

import { useRouter } from "next/navigation";

export default function AIIcon() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/ai")}
      className="relative w-[42px] h-[42px] cursor-pointer group"
    >
      {/* 🔥 Outer Glow Pulse */}
      <div className="absolute inset-0 rounded-full bg-purple-500 opacity-30 blur-xl animate-ping"></div>

      {/* 🔥 Gradient Moving Ring */}
      <div className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,#a855f7,#3b82f6,#ec4899,#a855f7)] bg-[length:300%_100%] animate-[glowMove_4s_linear_infinite]"></div>

      {/* 🔥 Glass Effect */}
      <div className="absolute inset-[2px] rounded-full bg-black/80 backdrop-blur-md"></div>

      {/* 🤖 Center Icon */}
      <div className="relative w-full h-full flex items-center justify-center text-white text-[18px] group-hover:scale-110 transition">
        🤖
      </div>
    </div>
  );
}