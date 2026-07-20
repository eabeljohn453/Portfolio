"use client";

import Image from "next/image";
import { X } from "lucide-react";

export default function CertificateModal({
  certificate,
  onClose,
}) {
  if (!certificate) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-50 p-5"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative"
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-red-400 transition"
        >
          <X size={36} />
        </button>

        <Image
          src={certificate.image}
          alt={certificate.title}
          width={1600}
          height={1100}
          className="max-h-[90vh] w-auto rounded-xl shadow-2xl object-contain"
        />
      </div>
    </div>
  );
}