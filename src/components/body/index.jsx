import Image from "next/image";
import Link from "next/link";

export default function Body() {
    return (
        <div className=" flex flex-col  items-center    w-full h-[800px] bg-black">
            <div className="flex ">
                <Image src="/assets/photo/arrows.svg" alt="Body Image"  width={100} height={100} className=" bg-black ml-120 mt-14 " />
                <h1 className="ml-5 mt-10 text-[24px] font-bold ">Hello! I Am  <span className="text-[30px] bg-linear-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
                    Eabel John
                </span></h1></div>
            <div className="relative w-[220px] h-[220px] rounded-full p-1 bg-linear-to-tr from-[#ff00cc] via-[#a100ff] to-[#00d4ff]">
                <div className="w-full h-full rounded-full bg-[#0D0D0D] p-1">
                    <Image
                        src="/assets/photo/logo.jpeg"
                        alt="Profile"
                        width={300}
                        height={200}
                        className="rounded-full object-cover  "
                    />
                </div>
            </div>
            <h1 className="text-[50px] font-bold leading-tight mt-10 text-center">
                I do <span className="bg-linear-to-r from-[#FF8C42] via-[#FF4FC7] to-[#A44CFF] bg-clip-text text-transparent font-extrabold">
                    CODE
                </span> and <br />
                turn <span className="bg-linear-to-r from-[#FF8C42] via-[#FF4FC7] to-[#A44CFF] bg-clip-text text-transparent font-extrabold">
                    Thoughts
                </span> into {" "}
                <span className="bg-linear-to-r from-[#FF8C42] via-[#FF4FC7] to-[#A44CFF] bg-clip-text text-transparent font-extrabold">
                    Things!
                </span>
            </h1>
            <p className="mt-8 text-[18px] leading-relaxed text-gray-200">
                I’m a passionate full-stack developer who loves building sleek, scalable, and
                user-focused digital experiences.
            </p>
            <p className="text-[18px] leading-relaxed text-gray-200">
                I specialize in bringing ideas to life — from crafting pixel-perfect frontends to
                designing powerful backend systems.
            </p>
            <p className="text-[18px] leading-relaxed text-gray-200">
                My focus is on creating clean, efficient, and high-performing solutions that make a real impact.
            </p>
            <div className="flex gap-x-20 mt-12">

                <Link href="/contact" className="border border-white px-5 py-3 rounded-3xl font-semibold 
  text-white transition-all duration-300 
  hover:bg-linear-to-r hover:from-purple-800 
    hover:border-black  ">
                    Get In Touch
                </Link>
                <Link href="/assets/Eabel cv.pdf" className="border border-white px-5 py-3 rounded-3xl font-semibold 
  text-white transition-all duration-300 
  hover:bg-linear-to-r hover:from-purple-800 
    hover:border-black  ">
                    Download CV
                </Link>

            </div>
            <h1 className="mt-20 font-semibold text-4xl 
  bg-linear-to-r from-purple-600 to-blue-500 
  bg-clip-text text-transparent">
                My Tech Stack
            </h1>
            <p className="mt-4 text-[18px] leading-relaxed text-gray-200">Tools and Technologies I Use</p>

        </div>
    )
}