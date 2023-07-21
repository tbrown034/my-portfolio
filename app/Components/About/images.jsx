import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import photo1 from "../../../public/images/trevorall.jpeg";
import photo2 from "../../../public/images/trevor10.jpeg";
import photo3 from "../../../public/images/trevor3.jpeg";
import photo4 from "../../../public/images/trevor4.jpeg";
import photo5 from "../../../public/images/trevor5.jpeg";
import photo6 from "../../../public/images/trevor6.jpeg";
import photo7 from "../../../public/images/trevor7.jpeg";
import photo8 from "../../../public/images/trevor8.jpeg";
import photo9 from "../../../public/images/trevor9.jpeg";
import photo10 from "../../../public/images/trevor10.jpeg";
import photo11 from "../../../public/images/trevor11.jpeg";
import photo12 from "../../../public/images/trevor12.jpeg";

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
];

export default function Photo() {
  const [photoIndex, setPhotoIndex] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPhotoIndex((prev) => {
        let next = [...prev];
        const changeIndex = Math.floor(Math.random() * 4);
        next[changeIndex] = (next[changeIndex] + 1) % photos.length;
        return next;
      });
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {photoIndex.map((index, i) => (
        <motion.div
          key={i}
          className="relative h-48 md:h-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={photos[index]}
            width={500} // replace with the actual width of your images
            height={500} // replace with the actual height of your images
            style={{ objectFit: "cover" }}
            className="rounded-lg"
            alt="Photo"
          />
        </motion.div>
      ))}
    </div>
  );
}
