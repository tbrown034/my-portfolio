"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import photo2 from "../../../public/images/IndyAndMe.jpg";
import { useState } from "react";

export default function AboutPhoto() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ x: -100, opacity: 0, scale: 0.3 }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
        rotate: isClicked ? 360 : 0,
        rotateY: isClicked ? 180 : 0,
      }}
      transition={{ duration: 1 }}
      onClick={() => setIsClicked(!isClicked)}
    >
      <Image
        className="flex w-4/5 border-2 border-gray-300 shadow-lg sm:w-2/3 rounded-3xl"
        src={photo2}
        alt="Trevor Brown"
        priority={true}
      />
    </motion.div>
  );
}
