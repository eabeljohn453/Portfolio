"use client"
import Body from "../body";
import Footer from "../footer";
import dynamic from "next/dynamic";
import LogoMarquee from "../marquee";
import Header from "../header";
import ExperiencePage from "../experience";
import Align from "../projects/align";
import Project from "../projects"; 
import ExperienceCard from "../Experiencecard";
import LogoMarquee2 from "../marquee2";

const techLogos = [
  "assets/photo/tech/css.svg",
  "assets/photo/tech/git.svg",
  "assets/photo/tech/gith.svg",
  "assets/photo/tech/html.svg",
  "assets/photo/tech/js.svg",
  "assets/photo/tech/next.svg",
  "assets/photo/tech/node.svg",
  "assets/photo/tech/python.svg",
  "assets/photo/tech/react.svg",
  "assets/photo/tech/tailwind.svg",
  "assets/photo/tech/ts.svg",
  "assets/photo/tech/html.svg",
  "assets/photo/tech/js.svg",
  "assets/photo/tech/next.svg",
  "assets/photo/tech/node.svg",
  "assets/photo/tech/python.svg",
  "assets/photo/tech/react.svg",
  "assets/photo/tech/tailwind.svg",
  "assets/photo/tech/ts.svg",
];
export default function Home() {
  return (

    <div className="bg-black    scrollbar-hide  " > <Header />
      <div className="border-t border-gray-600 mt-2 mb-3"></div>
      <Body />
      <div className="  w-full md:w-full md:mt-28 mt-20">
        <LogoMarquee links={techLogos} speed={4} /></div>
      <div className="mt-4"><LogoMarquee links={techLogos} speed={4} reverse /></div>
      <div className="flex flex-col items-center md:mt-24 mt-12 gap-10 space-y-10 justify-center px-2 ">
        <h1 className="text-[35px] md:text-[50px] font-extrabold bg-linear-to-r from-[#00B4DB] to-[#0083B0] text-transparent bg-clip-text mb-12">
          Projects
        </h1>

        <Project /> 
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black px-2">
        <h1 className="md:text-[50px] text-[35px] font-extrabold bg-linear-to-r from-[#8E2DE2] to-[#4A00E0] text-transparent bg-clip-text md:mt-20 mt-8 mb-8  md:mb-12">
          Experience
        </h1>
        <ExperienceCard /></div>
      <div className="border-t border-gray-600 mt-14 mb-3"></div>
      <Footer />
    </div>)
} 