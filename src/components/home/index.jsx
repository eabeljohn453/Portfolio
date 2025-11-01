"use client"
import Body from "../body";
import Footer from "../footer"; 
import dynamic from "next/dynamic";
import LogoMarquee from "../marquee";
import Header from "../header";
import ExperiencePage from "../experience";
import Align from "../projects/align";
import Project from "../projects";
import Project2 from "../projects/project2";
import ExperienceCard from "../Experiencecard";
export default function Home(){
    return(
       
        <div className="bg-black   " > <Header/>
         <div className="border-t border-gray-600 mt-2 mb-3"></div>
        <Body/>
        <div className="bg-black mt-28">
       <LogoMarquee
        link1="assets/photo/tech/css.svg"
        link2="assets/photo/tech/git.svg"
        link3="assets/photo/tech/gith.svg"
        link4="assets/photo/tech/html.svg"
        link5="assets/photo/tech/js.svg"
        link6="assets/photo/tech/next.svg"
        link7="assets/photo/tech/node.svg"
        link8="assets/photo/tech/python.svg"
        link9="assets/photo/tech/react.svg"
        link10="assets/photo/tech/tailwind.svg"
        link11="assets/photo/tech/ts.svg"


      /></div><div className="mt-4"><LogoMarquee
        link1="assets/photo/tech/css.svg"
        link2="assets/photo/tech/git.svg"
        link3="assets/photo/tech/gith.svg"
        link4="assets/photo/tech/html.svg"
        link5="assets/photo/tech/js.svg"
        link6="assets/photo/tech/next.svg"
        link7="assets/photo/tech/node.svg"
        link8="assets/photo/tech/python.svg"
        link9="assets/photo/tech/react.svg"
        link10="assets/photo/tech/tailwind.svg"
        link11="assets/photo/tech/ts.svg"


      /></div>
       <div className="flex flex-col items-center mt-24 gap-10 space-y-10 justify-center ">
        <h1 className="text-[50px] font-extrabold bg-linear-to-r from-[#00B4DB] to-[#0083B0] text-transparent bg-clip-text mb-12">
  Projects
</h1>

              <Project/>
              <Project2/>
              </div>
       <div className="flex flex-col items-center justify-center min-h-screen bg-black ">
            <h1 className="text-5xl font-extrabold bg-linear-to-r from-[#8E2DE2] to-[#4A00E0] text-transparent bg-clip-text mt-20  mb-12">
        Experience
      </h1>
            <ExperienceCard /></div>
      <div className="border-t border-gray-600 mt-14 mb-3"></div>
      <Footer/>
      </div> )
} 