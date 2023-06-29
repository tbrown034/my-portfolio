import { motion } from "framer-motion";
import Image from "next/image";
import photo from "../../../public/images/Trevor1crop.JPG";

export default function WideMug() {
  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          className="hidden border-2 border-gray-300 shadow-lg rounded-3xl sm:flex "
          src={photo}
          alt="Trevor Brown"
          priority={true}
        />
      </motion.div>
    </>
  );
}
