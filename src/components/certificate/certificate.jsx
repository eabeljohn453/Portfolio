"use client";

import { useState } from "react";
import Image from "next/image";
import CertificateModal from "./CertificateModal";
import Header from "../footer";
import Body from "../body";
import Footer from "../header";

const certificates = [
  {
    title: "Namaste JavaScript",
    issuer: "NamasteDev",
    image: "/assets/certificates/javascript certificate.webp",
  },
  {
    title: "Namaste React",
    issuer: "NamasteDev",
    image: "/assets/certificates/reactcerticate.webp",
  },
  {
    title: "Namaste Node.js",
    issuer: "NamasteDev",
    image: "/assets/certificates/certificatenode.webp",
  },
  {
    title: "LLD Masterclass",
    issuer: "Udemy",
    // Convert your PDF into an image
    image: "/assets/certificates/lld-certificate.png",
  },
];

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <> 
      <section className="bg-black py-20 px-5">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-center text-[35px] md:text-[50px] font-extrabold bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent">
            Certifications
          </h1>

          <p className="text-center text-gray-400 mt-4 mb-14">
            Click any certificate to view it in full size.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {certificates.map((certificate, index) => (
              <div
                key={index}
                onClick={() => setSelected(certificate)}
                className="cursor-pointer rounded-2xl overflow-hidden bg-[#111111] border border-purple-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,.45)] group"
              >
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  width={500}
                  height={350}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="p-4">

                  <h2 className="text-white text-lg font-bold">
                    {certificate.title}
                  </h2>

                  <p className="text-purple-300 text-sm mt-1">
                    {certificate.issuer}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      <CertificateModal
        certificate={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}