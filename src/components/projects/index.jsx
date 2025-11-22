"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Project() {
  const [index, setIndex] = useState(0);

  const images = [
    "/assets/project/login.png",
    "/assets/project/image1.png",
    "/assets/project/image2.png",
    "/assets/project/image3.png",
    "/assets/project/image4.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div
      className="
      flex md:flex-row flex-col 
      max-w-[1350px] w-full  
      md:h-[400px] h-auto 
      rounded-xl 
      hover:shadow-[0_0_25px_rgba(140,0,255,0.5)] 
      border-2 border-violet-900  
      bg-linear-to-b from-[#0F0C29] via-[#302B63] to-[#24243E]
      p-4
      m-4
    "
    >
      {/* Image Section */}
      <div className="flex justify-center items-center w-full md:w-[800px] mb-6 md:mb-0">
        <Image
          src={images[index]}
          alt={`Project screenshot ${index + 1}`}
          width={800}
          height={300}
          className="rounded-xl object-cover transition-all duration-700 w-full h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col md:ml-10 shadow-[0_0_40px_rgba(90,0,200,0.25)] p-4 md:p-0">
        <p className="
          font-bold 
          bg-linear-to-r from-[#6A00F4] to-[#00E0FF] 
          text-transparent bg-clip-text
          md:text-[50px] text-[32px]
        ">
          Potential Threat Alert System
        </p>

        <p className="mt-4 text-white font-semibold md:text-[20px] text-[15px]">
          A surveillance system using YOLOv8 for real-time weapon detection.
        </p>

        <p className="text-white font-semibold md:text-[20px] text-[15px]">
          Integrated Twilio for automated alert calls and messages.
        </p>

        <p className="text-white font-semibold md:text-[20px] text-[15px]">
          Built multi-admin role-based access system for secure operations.
        </p>

        <p className="text-white font-semibold md:text-[20px] text-[15px]">
          Focused on improving weapon detection accuracy and alert response.
        </p>
      </div>
    </div>
  );
}
