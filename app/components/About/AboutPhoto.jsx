"use client";
import Image from "next/image";
import photo2 from "../../../public/images/IndyAndMe.jpg";

export default function AboutPhoto() {
  return (
    <div className="flex items-center justify-center animate-fadeInUp">
      <Image
        className="flex w-4/5 border-2 border-gray-300 shadow-lg sm:w-2/3 rounded-3xl"
        src={photo2}
        alt="Trevor Brown"
        priority={true}
      />
    </div>
  );
}