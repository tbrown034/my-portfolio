import { motion } from "framer-motion";

export default function HelloWorld() {
  return (
    <section className="mb-4 sm:mb-8">
      <motion.h1
        className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold font-montserrat bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent leading-tight tracking-tight"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Hello, I'm Trevor.
      </motion.h1>
    </section>
  );
}
