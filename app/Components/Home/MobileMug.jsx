import { motion } from "framer-motion";
import Image from "next/image";
import photo from "../../../public/images/Trevor1crop.JPG";

export default function MobileMug() {
  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center p-2 border-2 border-blue-800 border-dashed rounded-full border-opacity-70 sm:hidden"
      >
        <Image
          className="flex w-1/2 p-2 border-2 border-blue-800 border-opacity-50 border-dashed rounded-full "
          src={photo}
          alt="Trevor Brown"
        />
      </motion.div>
    </>
  );
}
