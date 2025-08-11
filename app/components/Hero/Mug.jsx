import { motion } from "framer-motion";
import Image from "next/image";
import photo from "../../../public/images/trevorPhoto2.jpeg";

export default function Mug() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-center"
    >
      <Image
        className="p-2 border-2 border-blue-600 border-opacity-50 rounded-full shadow-lg bg-blue-50 sm:p-0 sm:rounded-3xl"
        src={photo}
        alt="Trevor Brown"
        priority={true}
      />
    </motion.div>
  );
}
