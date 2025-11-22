"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Project2() {
  const [index, setIndex] = useState(0);

  const images = [
    "/assets/photo/project2/login.png",
    "/assets/photo/project2/image1.png",
    "/assets/photo/project2/image2.png",
    "/assets/photo/project2/image3.png"
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
        w-full 
        max-w-[1350px] 
        mx-auto 
        mt-10
        flex flex-col lg:flex-row 
        rounded-xl 
        border-2 border-violet-900  
        bg-linear-to-b from-[#0F0C29] via-[#302B63] to-[#24243E]
        hover:shadow-[0_0_25px_rgba(140,0,255,0.5)]
      "
    >

      {/* LEFT IMAGE SIDE */}
      <div className="flex justify-center items-center w-full lg:w-[50%] p-4">
        <Image
          src={images[index]}
          alt={`Project screenshot ${index + 1}`}
          width={600}
          height={350}
          className="object-cover rounded-xl transition-all duration-700 ease-in-out w-full h-auto"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full lg:w-[50%] px-6 py-6 flex flex-col">

        <p className="
          text-[32px] md:text-[40px] lg:text-[50px] 
          font-bold 
          bg-linear-to-r from-[#6A00F4] to-[#00E0FF] 
          text-transparent bg-clip-text
        ">
          Class Management System
        </p>

        <p className="mt-4 text-[14px] md:text-[18px] text-white font-medium">
          A Class Management System for handling student enrollment, attendance, and grades.
        </p>

        <p className="text-[14px] md:text-[18px] text-white font-medium mt-2">
          Implemented user authentication with role-based access for administrators, teachers, and students.
        </p>

        <p className="text-[14px] md:text-[18px] text-white font-medium mt-2">
          Designed a responsive interface using Next.js, Tailwind CSS and JavaScript.
        </p>

        <p className="text-[14px] md:text-[18px] text-white font-medium mt-2">
          Automated attendance tracking and grade management to streamline administrative tasks.
        </p>

      </div>
    </div>
  );
}
