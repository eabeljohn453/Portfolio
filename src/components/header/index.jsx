"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-black px-10 py-6">

      {/* 🔹 Mobile Hamburger */}
      <div className="md:hidden flex justify-between items-center">
        <h1 className="bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent  text-[22px] font-bold">#developer</h1>

       <button
  onClick={() => setOpen(!open)}
  className="bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-[28px] font-bold"
>

          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* 🔹 Mobile Dropdown */}
      {open && (
        <div className="flex flex-col gap-6 mt-4 md:hidden text-white font-semibold">
          <Link href="/" className="bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent ">Home</Link>
          <Link href="/project " className="bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent ">Projects</Link>
          <Link href="/experience" className="bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent ">Experience</Link>
          <Link href="/contact" className="bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent ">Contact</Link>

          <div className="flex gap-4 items-center">
            <Link href="https://github.com/eabeljohn453">
              <Image src="/assets/git.svg" width={30} height={30} alt="github" />
            </Link>

            <Link href="https://in.linkedin.com/in/eabel-john-656997270">
              <Image src="/assets/linkedin.svg" width={30} height={30} alt="linkedin" />
            </Link>
          </div>
        </div>
      )}

      {/* 🔹 Desktop Layout */}
      <div className="hidden md:flex justify-between items-center mt-6">

        {/* Left: Navigation Links */}
        <div className="flex justify-center gap-20 items-center">
          <Link href="/">
            <h1 className="relative h-14 flex justify-center items-center text-[20px] font-bold cursor-pointer transition-all duration-300 text-center rounded-xl z-10
              after:content-[''] after:absolute after:bottom-2 after:left-0 after:h-[3px] after:w-0 after:bg-linear-to-r after:from-[#8010B7] after:to-[#AC21B1]
              after:transition-all after:duration-500 hover:after:w-full text-white">
              Home
            </h1>
          </Link>

          <Link href="/project">
            <h1 className="relative h-14 flex justify-center items-center text-[20px] font-bold cursor-pointer transition-all duration-300 text-center rounded-xl z-10
              after:content-[''] after:absolute after:bottom-2 after:left-0 after:h-[3px] after:w-0 after:bg-linear-to-r after:from-[#8010B7] after:to-[#AC21B1]
              after:transition-all after:duration-500 hover:after:w-full text-white">
              Projects
            </h1>
          </Link>

          <Link href="/experience">
            <h1 className="relative h-14 flex justify-center items-center text-[20px] font-bold cursor-pointer transition-all duration-300 text-center rounded-xl z-10
              after:content-[''] after:absolute after:bottom-2 after:left-0 after:h-[3px] after:w-0 after:bg-linear-to-r after:from-[#8010B7] after:to-[#AC21B1]
              after:transition-all after:duration-500 hover:after:w-full text-white">
              Experience
            </h1>
          </Link>

          <Link href="/contact">
            <h1 className="relative h-14 flex justify-center items-center text-[20px] font-bold cursor-pointer transition-all duration-300 text-center rounded-xl z-10
              after:content-[''] after:absolute after:bottom-2 after:left-0 after:h-[3px] after:w-0 after:bg-linear-to-r after:from-[#8010B7] after:to-[#AC21B1]
              after:transition-all after:duration-500 hover:after:w-full text-white">
              Contact
            </h1>
          </Link>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 items-center">
          <Link href="https://github.com/eabeljohn453">
            <Image src="/assets/git.svg" width={30} height={30} alt="github" />
          </Link>

          <Link href="https://in.linkedin.com/in/eabel-john-656997270">
            <Image src="/assets/linkedin.svg" width={30} height={30} alt="linkedin" />
          </Link>
        </div>
      </div>
    </div>
  );
}
