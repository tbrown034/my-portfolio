import { motion } from "framer-motion";

export default function HelloWorld() {
  return (
    <section>
      <motion.h1
        className="text-6xl font-bold text-blue-900 font-montserrat xl:text-8xl dark:text-blue-100"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hello, I'm Trevor.
      </motion.h1>
    </section>
  );
}
