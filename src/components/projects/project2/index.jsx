"use client"
import Image from "next/image";
import { useEffect } from "react"
import { useState } from "react";
export default function Project2(){
    const [index,setIndex]=useState(0)
    const images = [
    "/assets/photo/project2/login.png",
    "/assets/photo/project2/image1.png",
    "/assets/photo/project2/image2.png",
    "/assets/photo/project2/image3.png"
  ];
    useEffect(()=>{
        const timer=setInterval(()=>{
            setIndex((prev)=>(prev+1)% images.length);},4000);return ()=>clearInterval(timer);
     
    },[images.length])
    return(
        <div className="ml-10 flex     w-[1350px] h-[400px] rounded-xl hover:shadow-[0_0_25px_rgba(140,0,255,0.5)] border-2 border-violet-900  bg-linear-to-b from-[#0F0C29] via-[#302B63] to-[#24243E]">
            <div className="flex items-center   ml-2 w-[600px]   rounded-xl   ">
                <Image
          src={images[index]}
          alt={`Project screenshot ${index + 1}`}
          width={600}
          height={100}
          className="object-cover rounded-xl transition-all duration-700 ease-in-out"
        />
            </div>
            <div className="ml-10 mt-10 flex flex-col shadow-[0_0_40px_rgba(90,0,200,0.25)]">
  <p className="text-[50px] font-bold bg-linear-to-r from-[#6A00F4] to-[#00E0FF] text-transparent bg-clip-text">Class Management System
</p>

<p className="mt-4 text-[20px] font-semibold text-white">A Class Management System for handling student enrollment, attendance, and grades.
</p>
<p className=" text-[20px] font-semibold text-white">Implemented user authentication with role-based accessfor administrators, teachers, and students.
</p>
<p className=" text-[20px] font-semibold text-white">Designed a responsive interface using Next,Tailwind CSSand JavaScript.
</p>
<p className=" text-[20px] font-semibold text-white">Automated attendance tracking and grade managementto streamline administrative tasks.

applications.
</p>


</div>

        </div>
    )
}