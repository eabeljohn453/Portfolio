"use client";
import Image from "next/image";

export default function LogoMarquee({ link1, link2, link3,link4,link5,link6,link7,link8,link9,link10,link11, speed = 10 }) {
  // Collect all links (ignore empty)
  const logos = [link1, link2, link3,link4,link5,link6,link7,link8,link9,link10,link11].filter(Boolean);

  return (
    <div className="relative overflow-hidden bg-black py-6  ">
      <div className="flex animate-marquee">
        {/* Original + duplicate for seamless scroll */}
        {[...logos, ...logos].map((src, i) => (
          <div key={i} className=" shrink-0 md:mx-8 mx-2">
            <Image
              src={`/${src}`}
              alt={`Logo ${i}`}
              width={80}
              height={55}
              className="inline-block hover:scale-110 transition-transform duration-300 md:w-20 md:h-[55px] w-10 h-10"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee ${speed}s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
