// components/LogoMarquee.jsx
"use client";

import Image from "next/image";

export default function LogoMarquee({
  links = [],
  speed = 10,
  reverse = false,
  pauseOnHover = true,
}) {
  if (!links || links.length === 0) return null;

  const logoItems = [...links, ...links];

  return (
    <div className="relative overflow-hidden bg-black py-6 md:py-8">

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10" />

      <div
        className={`flex ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {logoItems.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-4 md:mx-12 flex items-center justify-center"
          >
            <Image
              src={`/${src}`}
              alt="tech logo"
              width={140}
              height={70}
              className="
                h-8 w-auto md:h-12 md:w-auto object-contain
                transition-all duration-300 ease-out
                hover:scale-110 hover:-translate-y-1
                drop-shadow-md hover:drop-shadow-2xl
                saturate-90 hover:saturate-150
                brightness-90 hover:brightness-110
              "
              unoptimized
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

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse linear infinite;
        }

        ${pauseOnHover
          ? `
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `
          : ""}
      `}</style>
    </div>
  );
}
