"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import photo from "../../../public/images/Trevor1crop.JPG";
import { useState } from "react";

export default function MobileMug() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0.3, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        rotate: isClicked ? 360 : 0,
        rotateY: isClicked ? 180 : 0,
      }}
      transition={{ duration: 1 }}
      onClick={() => setIsClicked(!isClicked)}
      className="flex justify-center p-2 border-2 border-blue-800 border-dashed rounded-full border-opacity-70"
    >
      <Image
        className="flex w-1/2 p-2 border-2 border-blue-800 border-opacity-50 border-dashed rounded-full"
        src={photo}
        alt="Trevor Brown"
        priority={true}
      />
    </motion.div>
  );
}
