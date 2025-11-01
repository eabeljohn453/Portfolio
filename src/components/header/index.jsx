import Link from "next/link";

export default function Footer(){
    return(
        <div className="flex justify-center gap-20  items-center w-full h-20 bg-black">
            <Link href="/">
           <h1 className="relative h-14 flex justify-center items-center text-[20px] font-bold  cursor-pointer transition-all duration-300 w-26 text-center rounded-xl z-10
    after:content-[''] after:absolute after:bottom-2 after:left-0 after:h-[3px] after:w-0 after:bg-linear-to-r after:from-[#8010B7] after:to-[#AC21B1] after:transition-all after:duration-500 hover:after:w-full text-white">
       Home</h1></Link>
          <Link href="/project">
  <h1 className="relative h-14 flex justify-center items-center text-[20px] font-bold  cursor-pointer transition-all duration-300 w-26 text-center rounded-xl z-10
    after:content-[''] after:absolute after:bottom-2 after:left-0 after:h-[3px] after:w-0 after:bg-linear-to-r after:from-[#8010B7] after:to-[#AC21B1] after:transition-all after:duration-500 hover:after:w-full text-white">
    Projects
  </h1>
</Link> <Link href="/experience">   <h1 className="relative h-14 flex justify-center items-center text-[20px] font-bold  cursor-pointer transition-all duration-300 w-26 text-center rounded-xl z-10
    after:content-[''] after:absolute after:bottom-2 after:left-0 after:h-[3px] after:w-0 after:bg-linear-to-r after:from-[#8010B7] after:to-[#AC21B1] after:transition-all after:duration-500 hover:after:w-full text-white">
    Experience</h1></Link>
            <Link href="/contact"> <h1 className="relative h-14 flex justify-center items-center text-[20px] font-bold  cursor-pointer transition-all duration-300 w-26 text-center rounded-xl z-10
    after:content-[''] after:absolute after:bottom-2 after:left-0 after:h-[3px] after:w-0 after:bg-linear-to-r after:from-[#8010B7] after:to-[#AC21B1] after:transition-all after:duration-500 hover:after:w-full text-white">
    Contact</h1>
        </Link></div>
    )
}