"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import photo from "../../../public/images/trevorall.jpeg";
import { useState } from "react";

export default function Mug() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
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
        className="flex border-2 border-gray-300 shadow-lg rounded-3xl"
        src={photo}
        alt="Trevor Brown"
        priority={true}
      />
    </motion.div>
  );
}
